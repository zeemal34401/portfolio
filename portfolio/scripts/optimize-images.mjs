import { readdir, rename, stat, unlink } from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const ROOT = path.join(process.cwd(), "public", "work-assets");
const MAX_WIDTH = 1600;
const MIN_SAVINGS_BYTES = 8_192;

async function walk(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  const files = [];

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...(await walk(fullPath)));
    } else if (/\.(png|jpe?g)$/i.test(entry.name)) {
      files.push(fullPath);
    }
  }

  return files;
}

async function optimizeImage(filePath) {
  const original = await stat(filePath);
  const tempPath = `${filePath}.opt`;

  let pipeline = sharp(filePath, { failOn: "none" }).rotate();
  const metadata = await pipeline.metadata();

  if ((metadata.width ?? 0) > MAX_WIDTH) {
    pipeline = pipeline.resize({ width: MAX_WIDTH, withoutEnlargement: true });
  }

  if (/\.png$/i.test(filePath)) {
    await pipeline
      .png({ compressionLevel: 9, palette: true, quality: 80, effort: 10 })
      .toFile(tempPath);
  } else {
    await pipeline.jpeg({ quality: 82, mozjpeg: true }).toFile(tempPath);
  }

  const optimized = await stat(tempPath);
  if (optimized.size + MIN_SAVINGS_BYTES < original.size) {
    await unlink(filePath);
    await rename(tempPath, filePath);
    return original.size - optimized.size;
  }

  await unlink(tempPath);
  return 0;
}

const files = await walk(ROOT);
let saved = 0;
let optimizedCount = 0;

console.log(`Optimizing ${files.length} images in ${ROOT}...`);

for (const file of files) {
  try {
    const delta = await optimizeImage(file);
    if (delta > 0) {
      saved += delta;
      optimizedCount += 1;
      console.log(`  saved ${(delta / 1024).toFixed(1)} KB  ${path.relative(ROOT, file)}`);
    }
  } catch (error) {
    console.warn(`  skipped ${path.relative(ROOT, file)}: ${error.message}`);
  }
}

console.log(`Done. Optimized ${optimizedCount}/${files.length} files, saved ${(saved / 1024 / 1024).toFixed(2)} MB.`);
