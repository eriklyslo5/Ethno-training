const http = require('http');
const https = require('https');
const fs = require('fs');
const path = require('path');

const PORT = process.env.PORT || 3000;
const ROOT = __dirname;
const IMG_CACHE = path.join(ROOT, 'images');

// Ensure images directory exists
if (!fs.existsSync(IMG_CACHE)) fs.mkdirSync(IMG_CACHE);

const MIME = {
  '.html': 'text/html',
  '.js':   'application/javascript',
  '.css':  'text/css',
  '.json': 'application/json',
  '.jpg':  'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.png':  'image/png',
  '.gif':  'image/gif',
  '.ico':  'image/x-icon',
};

function fetchRemoteImage(filename, res) {
  const cachePath = path.join(IMG_CACHE, filename);

  // Check disk cache first
  if (fs.existsSync(cachePath)) {
    const data = fs.readFileSync(cachePath);
    // Verify it's a real JPEG (starts with ff d8)
    if (data.length > 100 && data[0] === 0xFF && data[1] === 0xD8) {
      res.writeHead(200, {
        'Content-Type': 'image/jpeg',
        'Cache-Control': 'public, max-age=86400',
        'Access-Control-Allow-Origin': '*'
      });
      res.end(data);
      return;
    }
  }

  // Fetch from humanphenotypes.net (no Cloudflare, plain HTTP)
  const url = `http://humanphenotypes.net/${filename}`;
  const options = {
    headers: {
      'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
    }
  };

  http.get(url, options, (imgRes) => {
    if (imgRes.statusCode !== 200) {
      res.writeHead(404);
      res.end('Image not found');
      return;
    }

    const chunks = [];
    imgRes.on('data', chunk => chunks.push(chunk));
    imgRes.on('end', () => {
      const data = Buffer.concat(chunks);
      // Verify it's actually a JPEG
      if (data.length > 100 && data[0] === 0xFF && data[1] === 0xD8) {
        // Cache to disk
        fs.writeFileSync(cachePath, data);
        res.writeHead(200, {
          'Content-Type': 'image/jpeg',
          'Cache-Control': 'public, max-age=86400',
          'Access-Control-Allow-Origin': '*'
        });
        res.end(data);
      } else {
        res.writeHead(502);
        res.end('Invalid image data received');
      }
    });
  }).on('error', () => {
    res.writeHead(502);
    res.end('Failed to fetch image');
  });
}

const server = http.createServer((req, res) => {
  const urlPath = decodeURIComponent(req.url.split('?')[0]);

  // Image proxy: /images/xxxm.jpg or /images/xxxf.jpg
  if (urlPath.startsWith('/images/') && urlPath.endsWith('.jpg')) {
    const filename = path.basename(urlPath);
    fetchRemoteImage(filename, res);
    return;
  }

  // Static file serving
  let filePath = urlPath === '/' ? '/index.html' : urlPath;
  filePath = path.join(ROOT, filePath);

  // Security: prevent directory traversal
  if (!filePath.startsWith(ROOT)) {
    res.writeHead(403);
    res.end('Forbidden');
    return;
  }

  if (!fs.existsSync(filePath) || fs.statSync(filePath).isDirectory()) {
    res.writeHead(404);
    res.end('Not found');
    return;
  }

  const ext = path.extname(filePath).toLowerCase();
  const mime = MIME[ext] || 'application/octet-stream';
  const data = fs.readFileSync(filePath);

  res.writeHead(200, { 'Content-Type': mime });
  res.end(data);
});

server.listen(PORT, () => {
  console.log(`EthnoGuessr server running at http://localhost:${PORT}`);
});
