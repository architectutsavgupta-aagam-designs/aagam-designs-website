const sharp   = require('sharp');
const fs      = require('fs');
const path    = require('path');

const ASSETS_DIR  = path.join(__dirname, 'src', 'assets');
const BACKUP_DIR  = path.join(ASSETS_DIR, 'originals');
const OUT_DIR     = path.join(ASSETS_DIR, 'optimized');

const PROFILES = {
  hero: {
    match:   /^hero\d+\.jpg$/i,
    widths:  [480, 768, 1280, 1920],
    quality: 82,
    effort:  6,
  },

  thumbnail: {
    match:   /^project\d+\.jpg$/i,
    widths:  [400, 800],
    quality: 75,
    effort:  6,
  },
  
  lightbox: {
    match:   /^project\d+[a-z]\d*\.jpg$/i,
    widths:  [800, 1400],
    quality: 80,
    effort:  6,
  },
};


function getProfile(filename) {
  for (const [, profile] of Object.entries(PROFILES)) {
    if (profile.match.test(filename)) return profile;
  }
  return PROFILES.lightbox; 
}

function formatBytes(bytes) {
  if (bytes < 1024)       return bytes + ' B';
  if (bytes < 1048576)    return (bytes / 1024).toFixed(1) + ' KB';
  return (bytes / 1048576).toFixed(2) + ' MB';
}


async function run() {

  [BACKUP_DIR, OUT_DIR].forEach(dir => {
    if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
  });

  const files = fs.readdirSync(ASSETS_DIR).filter(f => /\.jpg$/i.test(f));

  if (files.length === 0) {
    console.log('No JPG files found in', ASSETS_DIR);
    process.exit(0);
  }

  console.log(`\n🔧  Found ${files.length} JPG files. Starting compression...\n`);
  console.log('─'.repeat(72));

  let totalOriginal = 0;
  let totalOptimized = 0;
  const results = [];

  for (const file of files) {
    const inputPath  = path.join(ASSETS_DIR, file);
    const baseName   = path.basename(file, '.jpg');
    const profile    = getProfile(file);

    const originalSize = fs.statSync(inputPath).size;
    totalOriginal += originalSize;

    
    fs.copyFileSync(inputPath, path.join(BACKUP_DIR, file));

    
    let smallestWebpSize = Infinity;
    let primaryWebpPath  = null;

    for (const width of profile.widths) {
      const webpOut = path.join(OUT_DIR, `${baseName}-${width}w.webp`);

      await sharp(inputPath)
        .resize({ width, withoutEnlargement: true })
        .webp({ quality: profile.quality, effort: profile.effort, smartSubsample: true })
        .toFile(webpOut);

      const webpSize = fs.statSync(webpOut).size;
      if (webpSize < smallestWebpSize) {
        smallestWebpSize = webpSize;
        primaryWebpPath  = webpOut;
      }
    }

    
    const jpgOut = path.join(OUT_DIR, `${baseName}.jpg`);
    await sharp(inputPath)
      .resize({ width: profile.widths[profile.widths.length - 1], withoutEnlargement: true })
      .jpeg({ quality: profile.quality + 5, mozjpeg: true, progressive: true })
      .toFile(jpgOut);

    const jpgSize    = fs.statSync(jpgOut).size;
    totalOptimized  += jpgSize;

    const saving = Math.round((1 - jpgSize / originalSize) * 100);
    results.push({ file, originalSize, jpgSize, saving });

    console.log(
      `✅  ${file.padEnd(28)}  ` +
      `${formatBytes(originalSize).padStart(9)} → ` +
      `${formatBytes(jpgSize).padStart(9)}  ` +
      `(${saving}% smaller)`
    );
  }

  console.log('─'.repeat(72));
  const totalSaving = Math.round((1 - totalOptimized / totalOriginal) * 100);
  console.log(`\n📦  Total original : ${formatBytes(totalOriginal)}`);
  console.log(`📦  Total optimized: ${formatBytes(totalOptimized)}`);
  console.log(`🚀  Overall saving : ${totalSaving}% — ${formatBytes(totalOriginal - totalOptimized)} saved\n`);
  console.log(`📁  Optimized files → ${OUT_DIR}`);
  console.log(`📁  Originals backed up → ${BACKUP_DIR}`);
  console.log('\n✅  Done! See NEXT STEPS below.\n');

  printNextSteps();
}

function printNextSteps() {
  console.log('═'.repeat(72));
  console.log('  NEXT STEPS');
  console.log('═'.repeat(72));
  console.log(`
  1. Review the optimized files in:
       src/assets/optimized/

  2. If happy with quality, copy them back to src/assets/:
       Windows:  xcopy /Y src\\assets\\optimized\\*.jpg src\\assets\\
       Mac/Linux: cp src/assets/optimized/*.jpg src/assets/

  3. Your existing imports (project1.jpg, project1a.jpg etc.)
     will now automatically use the compressed versions —
     NO changes needed in Projects.jsx or Hero.jsx!

  4. For WebP (even faster) — update imports like this:

     BEFORE:
       import proj1T from "../assets/project1.jpg";

     AFTER (uses WebP with JPG fallback via vite-imagetools):
       import proj1T from "../assets/project1.jpg?w=400;800&format=webp&as=srcset";

     Then in the <img> tag:
       <img srcSet={proj1T} sizes="(max-width:600px) 400px, 800px" ... />

  5. To restore originals any time:
       cp src/assets/originals/*.jpg src/assets/

  TARGET FILE SIZES TO AIM FOR:
  ─────────────────────────────
  • Hero images         : under 400 KB each
  • Lightbox images     : under 250 KB each  
  • Thumbnail images    : under  80 KB each
`);
}

run().catch(err => {
  console.error('Error:', err.message);
  process.exit(1);
});
