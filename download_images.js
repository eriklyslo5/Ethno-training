#!/usr/bin/env node
// Smart batch downloader for phenotype images from humanphenotypes.org
// Uses random delays, retries, and resume support to avoid rate limiting

const https = require('https');
const fs = require('fs');
const path = require('path');

const IMG_DIR = path.join(__dirname, 'images');
const BASE_URL = 'https://humanphenotypes.org/images/';

// Config
const MIN_DELAY_MS = 1500;   // minimum delay between requests
const MAX_DELAY_MS = 4000;   // maximum delay between requests
const MAX_RETRIES = 3;       // retries per image
const RETRY_BACKOFF_MS = 10000; // wait 10s before retry
const BATCH_SIZE = 20;       // pause longer every N downloads
const BATCH_PAUSE_MS = 15000; // 15s pause between batches

// Load phenotype IDs
const data = fs.readFileSync(path.join(__dirname, 'phenotypes.js'), 'utf8');
const json = data.replace('const PHENOTYPES = ', '').replace(/;\s*$/, '');
const phenotypes = JSON.parse(json);

// Build download list: each phenotype has male (m) and female (f) images
const downloads = [];
for (const p of phenotypes) {
  const lid = p.id.toLowerCase();
  downloads.push({ id: p.id, filename: `${lid}m.jpg`, gender: 'male' });
  downloads.push({ id: p.id, filename: `${lid}f.jpg`, gender: 'female' });
}

if (!fs.existsSync(IMG_DIR)) fs.mkdirSync(IMG_DIR);

function isValidJpeg(filepath) {
  try {
    const buf = fs.readFileSync(filepath);
    return buf.length > 500 && buf[0] === 0xFF && buf[1] === 0xD8;
  } catch { return false; }
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function randomDelay() {
  return MIN_DELAY_MS + Math.random() * (MAX_DELAY_MS - MIN_DELAY_MS);
}

function fetchImage(filename) {
  return new Promise((resolve, reject) => {
    const url = BASE_URL + filename;
    const options = {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
        'Accept': 'image/avif,image/webp,image/apng,image/*,*/*;q=0.8',
        'Referer': 'https://humanphenotypes.org/',
        'Accept-Language': 'en-US,en;q=0.9',
      }
    };

    https.get(url, options, (res) => {
      if (res.statusCode === 429) {
        reject(new Error('RATE_LIMITED'));
        return;
      }
      if (res.statusCode !== 200) {
        // Consume response to free socket
        res.resume();
        reject(new Error(`HTTP ${res.statusCode}`));
        return;
      }

      const chunks = [];
      res.on('data', chunk => chunks.push(chunk));
      res.on('end', () => {
        const buf = Buffer.concat(chunks);
        if (buf.length > 500 && buf[0] === 0xFF && buf[1] === 0xD8) {
          resolve(buf);
        } else {
          reject(new Error(`Not a valid JPEG (${buf.length} bytes)`));
        }
      });
      res.on('error', reject);
    }).on('error', reject);
  });
}

async function downloadOne(item, attempt = 1) {
  const dest = path.join(IMG_DIR, item.filename);

  // Skip if already downloaded and valid
  if (isValidJpeg(dest)) {
    return 'cached';
  }

  try {
    const buf = await fetchImage(item.filename);
    fs.writeFileSync(dest, buf);
    return 'ok';
  } catch (err) {
    if (err.message === 'RATE_LIMITED' && attempt <= MAX_RETRIES) {
      const wait = RETRY_BACKOFF_MS * attempt;
      console.log(`  ⏳ Rate limited on ${item.filename}, waiting ${wait/1000}s (attempt ${attempt}/${MAX_RETRIES})`);
      await sleep(wait);
      return downloadOne(item, attempt + 1);
    }
    if (attempt <= MAX_RETRIES) {
      const wait = RETRY_BACKOFF_MS;
      console.log(`  ⚠ Error "${err.message}" on ${item.filename}, retrying in ${wait/1000}s (attempt ${attempt}/${MAX_RETRIES})`);
      await sleep(wait);
      return downloadOne(item, attempt + 1);
    }
    return `FAILED: ${err.message}`;
  }
}

async function main() {
  console.log(`\n📥 Downloading ${downloads.length} phenotype images`);
  console.log(`   Target: ${IMG_DIR}`);
  console.log(`   Delay: ${MIN_DELAY_MS}-${MAX_DELAY_MS}ms between requests`);
  console.log(`   Batch pause: ${BATCH_PAUSE_MS/1000}s every ${BATCH_SIZE} downloads\n`);

  // Check how many already cached
  const alreadyCached = downloads.filter(d => isValidJpeg(path.join(IMG_DIR, d.filename))).length;
  if (alreadyCached > 0) {
    console.log(`   ✅ ${alreadyCached}/${downloads.length} already cached, resuming...\n`);
  }

  const failed = [];
  let downloaded = 0;
  let skipped = 0;
  let batchCount = 0;

  for (let i = 0; i < downloads.length; i++) {
    const item = downloads[i];
    const progress = `[${i + 1}/${downloads.length}]`;

    const result = await downloadOne(item);

    if (result === 'cached') {
      skipped++;
      // Don't print every cached skip, just count them
    } else if (result === 'ok') {
      downloaded++;
      batchCount++;
      console.log(`${progress} ✅ ${item.filename} (${item.id} ${item.gender})`);

      // Batch pause to be extra safe
      if (batchCount >= BATCH_SIZE) {
        batchCount = 0;
        console.log(`\n   🔄 Batch pause (${BATCH_PAUSE_MS/1000}s)...\n`);
        await sleep(BATCH_PAUSE_MS);
      } else {
        // Random delay between individual downloads
        await sleep(randomDelay());
      }
    } else {
      failed.push({ ...item, error: result });
      console.log(`${progress} ❌ ${item.filename}: ${result}`);
    }
  }

  console.log(`\n${'═'.repeat(50)}`);
  console.log(`📊 Results:`);
  console.log(`   Downloaded: ${downloaded}`);
  console.log(`   Already cached: ${skipped}`);
  console.log(`   Failed: ${failed.length}`);
  console.log(`   Total images: ${downloaded + skipped}/${downloads.length}`);

  if (failed.length > 0) {
    console.log(`\n❌ Failed images:`);
    for (const f of failed) {
      console.log(`   - ${f.filename} (${f.id}): ${f.error}`);
    }
    // Save failed list for retry
    fs.writeFileSync(path.join(__dirname, 'failed_downloads.json'), JSON.stringify(failed, null, 2));
    console.log(`\n   Failed list saved to failed_downloads.json`);
  }

  console.log();
}

main().catch(console.error);
