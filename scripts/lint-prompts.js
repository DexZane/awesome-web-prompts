import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');
const promptsDir = path.join(rootDir, 'prompts');

let errors = [];
let warnings = [];

function checkPromptItem(itemDir) {
  const relPath = path.relative(rootDir, itemDir).replace(/\\/g, '/');

  // Check required files
  const requiredFiles = ['README.md', 'prompt.md', 'meta.json'];
  for (const req of requiredFiles) {
    const filePath = path.join(itemDir, req);
    if (!fs.existsSync(filePath)) {
      errors.push(`[Missing File] ${relPath}/${req}`);
    }
  }

  // Check meta.json validity
  const metaPath = path.join(itemDir, 'meta.json');
  if (fs.existsSync(metaPath)) {
    try {
      const meta = JSON.parse(fs.readFileSync(metaPath, 'utf8'));
      if (!meta.id) errors.push(`[Invalid Meta] ${relPath}/meta.json missing 'id'`);
      if (!meta.name) errors.push(`[Invalid Meta] ${relPath}/meta.json missing 'name'`);
      if (!meta.description?.zh) errors.push(`[Invalid Meta] ${relPath}/meta.json missing 'description.zh'`);
      
      // Check preview image if specified
      if (meta.preview) {
        const previewPath = path.join(itemDir, meta.preview);
        if (!fs.existsSync(previewPath)) {
          warnings.push(`[Missing Preview Image] ${relPath}/${meta.preview}`);
        }
      }
    } catch (e) {
      errors.push(`[JSON Parse Error] ${relPath}/meta.json: ${e.message}`);
    }
  }
}

function traversePrompts(dir) {
  const items = fs.readdirSync(dir, { withFileTypes: true });

  for (const item of items) {
    if (item.name === '_template') continue;
    const fullPath = path.join(dir, item.name);

    if (item.isDirectory()) {
      if (fs.existsSync(path.join(fullPath, 'prompt.md'))) {
        checkPromptItem(fullPath);
      } else {
        traversePrompts(fullPath);
      }
    }
  }
}

console.log('🔍 Linting prompt repository...');
traversePrompts(promptsDir);

if (warnings.length > 0) {
  console.warn('\n⚠️ Warnings:');
  warnings.forEach(w => console.warn(` - ${w}`));
}

if (errors.length > 0) {
  console.error('\n❌ Errors found:');
  errors.forEach(e => console.error(` - ${e}`));
  process.exit(1);
} else {
  console.log('\n✅ All prompt entries passed linting successfully!');
}
