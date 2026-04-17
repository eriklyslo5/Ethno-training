// Merge 207 individual polygon files from /tmp/polygons into a single polygons.js
const fs = require('fs');
const path = require('path');

const SRC_DIR = path.join(require('os').tmpdir(), 'polygons');
const IDS_FILE = path.join(__dirname, 'phenotype_ids.txt');
const OUT_FILE = path.join(__dirname, 'polygons.js');

const ids = fs.readFileSync(IDS_FILE, 'utf8').split(/\r?\n/).filter(Boolean);

const out = {};
let okCount = 0, missCount = 0;

for (const id of ids) {
  const lower = id.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
  const file = path.join(SRC_DIR, `${lower}_polygons.js`);
  if (!fs.existsSync(file)) { missCount++; continue; }
  let text = fs.readFileSync(file, 'utf8').trim();
  text = text.replace(/^window\.polygonData\s*=\s*/, '').replace(/;$/, '');
  try {
    out[lower] = JSON.parse(text);
    okCount++;
  } catch (e) {
    console.error(`Parse error for ${id}: ${e.message}`);
    missCount++;
  }
}

fs.writeFileSync(OUT_FILE, `// Generated ${new Date().toISOString()} — ${okCount} phenotypes\nconst POLYGONS = ${JSON.stringify(out)};\n`);
console.log(`Wrote ${OUT_FILE}: ${okCount} ok, ${missCount} missing. Size: ${(fs.statSync(OUT_FILE).size/1024).toFixed(1)} KB`);
