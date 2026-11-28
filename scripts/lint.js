import fs from 'fs';
import path from 'path';
import {
  COLLECTION_DIR,
  CONFIG_PATH,
  TEMPLATES_DIR,
  loadTaxonomy,
  loadCollection
} from './lib/collection.js';
import { parseFrontmatter } from './lib/frontmatter.js';

const SLUG_RE = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;

const errors = [];
const warnings = [];

// 1. Validate config/taxonomy.json
let taxonomy;
try {
  taxonomy = loadTaxonomy();
  if (!Array.isArray(taxonomy.scopes) || taxonomy.scopes.length === 0) {
    errors.push('[Taxonomy] config/taxonomy.json must define a non-empty "scopes" array');
  }
  if (!Array.isArray(taxonomy.formats) || taxonomy.formats.length === 0) {
    errors.push('[Taxonomy] config/taxonomy.json must define a non-empty "formats" array');
  }
  if (!Array.isArray(taxonomy.categories) || taxonomy.categories.length === 0) {
    errors.push('[Taxonomy] config/taxonomy.json must define a non-empty "categories" array');
  } else {
    for (const cat of taxonomy.categories) {
      if (!taxonomy.scopeById.has(cat.scope)) {
        errors.push(`[Taxonomy] Category "${cat.id}" references unknown scope "${cat.scope}"`);
      }
    }
  }
} catch (err) {
  errors.push(`[Taxonomy] Failed to load ${path.basename(CONFIG_PATH)}: ${err.message}`);
}

// 2. Validate templates/entry/
const tplReadme = path.join(TEMPLATES_DIR, 'README.md');
const tplPrompt = path.join(TEMPLATES_DIR, 'prompt.md');
if (!fs.existsSync(tplReadme)) {
  errors.push('[Template] Missing templates/entry/README.md');
} else {
  const parsedTpl = parseFrontmatter(fs.readFileSync(tplReadme, 'utf8'));
  if (!parsedTpl || !parsedTpl.data?.id) {
    errors.push('[Template] templates/entry/README.md has invalid YAML frontmatter');
  }
}
if (!fs.existsSync(tplPrompt)) {
  errors.push('[Template] Missing templates/entry/prompt.md');
}

// 3. Validate collection/
if (!fs.existsSync(COLLECTION_DIR)) {
  errors.push('[Collection] Missing collection/ directory');
} else {
  for (const item of fs.readdirSync(COLLECTION_DIR, { withFileTypes: true })) {
    if (item.name === '.DS_Store') continue;
    if (!item.isDirectory()) {
      errors.push(`[Stray File] collection/${item.name} must be inside an entry directory`);
    }
  }
}

const entries = loadCollection();
const seenIds = new Set();

for (const entry of entries) {
  const { dirName, entryDir, relPath, hasReadme, hasPrompt, hasDemo, meta } = entry;

  if (!SLUG_RE.test(dirName)) {
    errors.push(`[Invalid Slug] ${relPath} directory name must be lowercase kebab-case`);
  }

  if (fs.existsSync(path.join(entryDir, 'meta.json'))) {
    errors.push(`[Deprecated File] ${relPath}/meta.json is no longer used; store metadata in README.md frontmatter`);
  }

  if (!hasReadme) {
    errors.push(`[Missing File] ${relPath}/README.md`);
    continue;
  }

  if (!hasPrompt && !hasDemo) {
    errors.push(`[Missing Content] ${relPath} must contain prompt.md or index.html`);
  } else if (!hasPrompt && hasDemo) {
    warnings.push(`[Missing Prompt] ${relPath}/prompt.md (only index.html present)`);
  }

  if (!meta) {
    errors.push(`[Invalid Frontmatter] ${relPath}/README.md has no valid YAML frontmatter`);
    continue;
  }

  if (!meta.id) {
    errors.push(`[Invalid Frontmatter] ${relPath}/README.md missing 'id'`);
  } else {
    if (meta.id !== dirName) {
      errors.push(`[Slug Mismatch] ${relPath}/README.md id "${meta.id}" does not match folder "${dirName}"`);
    }
    if (seenIds.has(meta.id)) {
      errors.push(`[Duplicate ID] "${meta.id}" appears multiple times`);
    }
    seenIds.add(meta.id);
  }

  if (!meta.name) {
    errors.push(`[Invalid Frontmatter] ${relPath}/README.md missing 'name'`);
  }

  if (taxonomy) {
    if (!taxonomy.scopeById.has(meta.scope)) {
      errors.push(`[Invalid Scope] ${relPath}/README.md scope "${meta.scope}" is not defined in config/taxonomy.json`);
    }
    const cat = taxonomy.categoryById.get(meta.category);
    if (!cat) {
      errors.push(`[Invalid Category] ${relPath}/README.md category "${meta.category}" is not defined in config/taxonomy.json`);
    } else if (cat.scope !== meta.scope) {
      errors.push(`[Scope Mismatch] ${relPath}/README.md category "${meta.category}" belongs to scope "${cat.scope}", got "${meta.scope}"`);
    }
    if (!taxonomy.formatById.has(meta.format)) {
      errors.push(`[Invalid Format] ${relPath}/README.md format "${meta.format}" is not defined in config/taxonomy.json`);
    }
  }

  if (!meta.description?.zh) {
    errors.push(`[Invalid Frontmatter] ${relPath}/README.md missing 'description.zh'`);
  }
  if (!meta.description?.en) {
    errors.push(`[Invalid Frontmatter] ${relPath}/README.md missing 'description.en'`);
  }

  if (!Array.isArray(meta.tech_stack) || meta.tech_stack.length === 0) {
    errors.push(`[Invalid Frontmatter] ${relPath}/README.md must provide a non-empty 'tech_stack' list`);
  }
  if (!Array.isArray(meta.tags) || meta.tags.length === 0) {
    errors.push(`[Invalid Frontmatter] ${relPath}/README.md must provide a non-empty 'tags' list`);
  }

  if (meta.preview && typeof meta.preview === 'string' && meta.preview.trim() !== '') {
    const previewFile = path.join(entryDir, meta.preview.trim());
    if (!fs.existsSync(previewFile)) {
      warnings.push(`[Missing Preview] ${relPath}/${meta.preview.trim()}`);
    }
  }
}

console.log(`Checked ${entries.length} entries in collection/`);
console.log(`Errors: ${errors.length}, Warnings: ${warnings.length}`);

if (warnings.length > 0) {
  console.warn('\nWarnings:');
  for (const w of warnings) console.warn(`  - ${w}`);
}

if (errors.length > 0) {
  console.error('\nErrors:');
  for (const e of errors) console.error(`  - ${e}`);
  process.exit(1);
}

console.log('\nAll lint checks passed.');
