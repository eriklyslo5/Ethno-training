#!/bin/bash
# Download phenotype images from humanphenotypes.net (no Cloudflare protection)

IMG_DIR="/c/Users/erikl/Ethno-training/images"
BASE_URL="http://humanphenotypes.net"
PHENO_JS="/c/Users/erikl/Ethno-training/phenotypes.js"
mkdir -p "$IMG_DIR"

# Extract phenotype IDs
IDS=$(node -e "
const data = require('fs').readFileSync('C:/Users/erikl/Ethno-training/phenotypes.js','utf8');
const json = data.replace('const PHENOTYPES = ','').replace(/;\s*$/,'');
JSON.parse(json).forEach(p => console.log(p.id));
")

TOTAL=$(echo "$IDS" | wc -l | tr -d ' ')
TOTAL_IMAGES=$((TOTAL * 2))
echo "=== Downloading $TOTAL_IMAGES images for $TOTAL phenotypes ==="
echo "    Source: $BASE_URL"
echo ""

downloaded=0
skipped=0
failed=0
failed_list=""
count=0

is_valid_jpeg() {
  local f="$1"
  [ -f "$f" ] && [ -s "$f" ] && {
    local magic
    magic=$(xxd -l 2 -p "$f" 2>/dev/null)
    [ "$magic" = "ffd8" ]
  }
}

for id in $IDS; do
  lid=$(echo "$id" | tr '[:upper:]' '[:lower:]')

  for suffix in "m" "f"; do
    filename="${lid}${suffix}.jpg"
    dest="$IMG_DIR/$filename"
    count=$((count + 1))

    if is_valid_jpeg "$dest"; then
      skipped=$((skipped + 1))
      continue
    fi

    curl -s -f "$BASE_URL/$filename" \
      -H "User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36" \
      -o "$dest" 2>/dev/null

    if is_valid_jpeg "$dest"; then
      downloaded=$((downloaded + 1))
      echo "[$count/$TOTAL_IMAGES] OK: $filename"
      # Polite delay
      if [ $((downloaded % 30)) -eq 0 ]; then
        echo "    --- pause (8s) ---"
        sleep 8
      else
        sleep 1
      fi
    else
      rm -f "$dest"
      failed=$((failed + 1))
      failed_list="$failed_list $filename"
      echo "[$count/$TOTAL_IMAGES] FAIL: $filename"
    fi
  done
done

echo ""
echo "================================================"
echo "  Downloaded: $downloaded"
echo "  Cached: $skipped"
echo "  Failed: $failed"
echo "  Total: $((downloaded + skipped))/$TOTAL_IMAGES"

if [ $failed -gt 0 ]; then
  echo ""
  echo "Failed: $failed_list"
fi
