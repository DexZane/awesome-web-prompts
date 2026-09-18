import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');
const promptsDir = path.join(rootDir, 'prompts');

let errors = [];
let warnings = [];

// Minimal YAML frontmatter parser (handles the subset we write)
function parseFrontmatter(content) {
  if (!content.startsWith('---\n')) return null;
  const end = content.indexOf('\n---\n', 4);
  if (end === -1) return null;
  const raw = content.slice(4, end);
  return parseYamlSubset(raw);
}

function parseYamlSubset(raw) {
  const obj = {};
  const lines = raw.split('\n');
  let i = 0;
  while (i < lines.length) {
    const line = lines[i];
    // Skip empty lines
    if (!line.trim()) { i++; continue; }
    // Top-level key
    const keyMatch = line.match(/^(\w[\w_-]*):\s*(.*)/);
    if (!keyMatch) { i++; continue; }
    const key = keyMatch[1];
    const rest = keyMatch[2].trim();
    if (rest === '' || rest === null) {
      // Could be a block scalar or mapping
      const children = [];
      i++;
      while (i < lines.length && (lines[i].startsWith('  ') || lines[i].trim() === '')) {
        const child = lines[i];
        const listItem = child.match(/^\s+-\s+(.*)/);
        const mapItem = child.match(/^\s+(\w[\w_-]*):\s*(.*)/);
        if (listItem) {
          children.push(unquote(listItem[1]));
        } else if (mapItem) {
          if (!obj[key] || Array.isArray(obj[key])) obj[key] = {};
          obj[key][mapItem[1]] = unquote(mapItem[2]);
          i++;
          continue;
        }
        i++;
      }
      if (children.length > 0) obj[key] = children;
      else if (typeof obj[key] !== 'object') obj[key] = null;
      continue;
    }
    obj[key] = unquote(rest);
    i++;
  }
  return obj;
}

function unquote(s) {
  s = s.trim();
  if ((s.startsWith('"') && s.endsWith('"')) || (s.startsWith("'") && s.endsWith("'"))) {
    return s.slice(1, -1);
  }
  return s;
}

function checkPromptItem(itemDir) {
  const relPath = path.relative(rootDir, itemDir).replace(/\\/g, '/');

  // Required files: README.md and prompt.md
  for (const req of ['README.md', 'prompt.md']) {
    if (!fs.existsSync(path.join(itemDir, req))) {
      errors.push(`[Missing File] ${relPath}/${req}`);
    }
  }

  // Validate frontmatter in README.md
  const readmePath = path.join(itemDir, 'README.md');
  if (!fs.existsSync(readmePath)) return;

  const content = fs.readFileSync(readmePath, 'utf8');
  const meta = parseFrontmatter(content);

  if (!meta) {
    errors.push(`[Missing Frontmatter] ${relPath}/README.md has no valid YAML frontmatter`);
    return;
  }

  if (!meta.id)   errors.push(`[Invalid Frontmatter] ${relPath}/README.md missing 'id'`);
  if (!meta.name) errors.push(`[Invalid Frontmatter] ${relPath}/README.md missing 'name'`);
  if (!meta.description?.zh) errors.push(`[Invalid Frontmatter] ${relPath}/README.md missing 'description.zh'`);

  // Warn if preview image declared but missing
  if (meta.preview) {
    const previewPath = path.join(itemDir, meta.preview);
    if (!fs.existsSync(previewPath)) {
      warnings.push(`[Missing Preview] ${relPath}/${meta.preview}`);
    }
  }
}

function traversePrompts(dir) {
  for (const item of fs.readdirSync(dir, { withFileTypes: true })) {
    if (item.name === '_template') continue;
    const fullPath = path.join(dir, item.name);
    if (!item.isDirectory()) continue;
    if (fs.existsSync(path.join(fullPath, 'prompt.md'))) {
      checkPromptItem(fullPath);
    } else {
      traversePrompts(fullPath);
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
