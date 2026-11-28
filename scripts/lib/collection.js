import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { parseFrontmatter } from './frontmatter.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const ROOT_DIR = path.resolve(__dirname, '../..');
export const COLLECTION_DIR = path.join(ROOT_DIR, 'collection');
export const CATALOG_DIR = path.join(ROOT_DIR, 'catalog');
export const CONFIG_PATH = path.join(ROOT_DIR, 'config', 'taxonomy.json');
export const TEMPLATES_DIR = path.join(ROOT_DIR, 'templates', 'entry');

export function loadTaxonomy() {
  const raw = fs.readFileSync(CONFIG_PATH, 'utf8');
  const taxonomy = JSON.parse(raw);

  const scopeById = new Map(taxonomy.scopes.map(s => [s.id, s]));
  const categoryById = new Map(taxonomy.categories.map(c => [c.id, c]));
  const formatById = new Map(taxonomy.formats.map(f => [f.id, f]));

  return {
    ...taxonomy,
    scopeById,
    categoryById,
    formatById
  };
}

export function loadCollection() {
  if (!fs.existsSync(COLLECTION_DIR)) {
    return [];
  }

  const dirs = fs
    .readdirSync(COLLECTION_DIR, { withFileTypes: true })
    .filter(d => d.isDirectory() && d.name !== '.DS_Store')
    .map(d => d.name)
    .sort((a, b) => a.localeCompare(b));

  const entries = [];

  for (const dirName of dirs) {
    const entryDir = path.join(COLLECTION_DIR, dirName);
    const relPath = `collection/${dirName}`;
    const readmePath = path.join(entryDir, 'README.md');
    const promptPath = path.join(entryDir, 'prompt.md');
    const hasReadme = fs.existsSync(readmePath);
    const hasPrompt = fs.existsSync(promptPath);
    const hasDemo = fs.existsSync(path.join(entryDir, 'index.html'));
    const demoPath = hasDemo ? `${relPath}/index.html` : null;

    let parsed = null;
    if (hasReadme) {
      const content = fs.readFileSync(readmePath, 'utf8');
      parsed = parseFrontmatter(content);
    }

    const meta = parsed ? parsed.data : null;
    const body = parsed ? parsed.body : '';
    const previewFile = meta && typeof meta.preview === 'string' ? meta.preview.trim() : '';
    const hasPreview = Boolean(previewFile && fs.existsSync(path.join(entryDir, previewFile)));
    const previewPath = hasPreview ? `${relPath}/${previewFile}` : null;

    entries.push({
      dirName,
      entryDir,
      relPath,
      hasReadme,
      hasPrompt,
      meta,
      body,
      hasDemo,
      demoPath,
      hasPreview,
      previewPath
    });
  }

  return entries;
}
