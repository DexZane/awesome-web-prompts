import fs from 'fs';
import path from 'path';
import { COLLECTION_DIR, TEMPLATES_DIR, loadTaxonomy } from './lib/collection.js';
import { parseFrontmatter, stringifyFrontmatter } from './lib/frontmatter.js';

const SLUG_RE = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;

function printHelp() {
  console.log(`Usage:
  npm run new -- <slug> [--scope=<scope>] [--category=<category>] [--format=<format>]

Options:
  --scope      page | section | component (inferred from --category if omitted)
  --category   Category id from config/taxonomy.json (default: landing)
  --format     prompt | source-code (default: prompt)
  --help       Show this help message`);
}

function toTitleCase(slug) {
  return slug
    .split('-')
    .map(part => (part ? part[0].toUpperCase() + part.slice(1) : ''))
    .join(' ');
}

const args = process.argv.slice(2);
if (args.length === 0 || args.includes('--help') || args.includes('-h')) {
  printHelp();
  process.exit(0);
}

let slug = null;
const flags = {};

for (const arg of args) {
  if (arg.startsWith('--')) {
    const [k, v] = arg.slice(2).split('=');
    flags[k] = v ?? '';
  } else if (!slug) {
    slug = arg.trim();
  } else {
    console.error(`Unexpected argument: ${arg}`);
    process.exit(1);
  }
}

if (!slug || !SLUG_RE.test(slug)) {
  console.error(`Invalid slug "${slug || ''}". Must match lowercase kebab-case (e.g. cyber-hero).`);
  process.exit(1);
}

const taxonomy = loadTaxonomy();
const categoryId = flags.category || 'landing';
const categoryObj = taxonomy.categoryById.get(categoryId);
if (!categoryObj) {
  const valid = taxonomy.categories.map(c => c.id).join(', ');
  console.error(`Unknown category "${categoryId}". Valid categories: ${valid}`);
  process.exit(1);
}

const scopeId = flags.scope || categoryObj.scope;
if (!taxonomy.scopeById.has(scopeId)) {
  const valid = taxonomy.scopes.map(s => s.id).join(', ');
  console.error(`Unknown scope "${scopeId}". Valid scopes: ${valid}`);
  process.exit(1);
}
if (categoryObj.scope !== scopeId) {
  console.error(`Category "${categoryId}" belongs to scope "${categoryObj.scope}", not "${scopeId}".`);
  process.exit(1);
}

const formatId = flags.format || 'prompt';
if (!taxonomy.formatById.has(formatId)) {
  const valid = taxonomy.formats.map(f => f.id).join(', ');
  console.error(`Unknown format "${formatId}". Valid formats: ${valid}`);
  process.exit(1);
}

const targetDir = path.join(COLLECTION_DIR, slug);
if (fs.existsSync(targetDir)) {
  console.error(`Entry directory already exists: collection/${slug}`);
  process.exit(1);
}

const tplReadme = fs.readFileSync(path.join(TEMPLATES_DIR, 'README.md'), 'utf8');
const parsed = parseFrontmatter(tplReadme);
if (!parsed) {
  console.error('Failed to parse templates/entry/README.md frontmatter.');
  process.exit(1);
}

const titleName = toTitleCase(slug);
const nextMeta = {
  ...parsed.data,
  id: slug,
  name: titleName,
  scope: scopeId,
  category: categoryId,
  format: formatId
};

const body = parsed.body.replace('# Example Entry', `# ${titleName}`);
const renderedReadme = stringifyFrontmatter(nextMeta, body);

fs.mkdirSync(targetDir, { recursive: true });
fs.writeFileSync(path.join(targetDir, 'README.md'), renderedReadme, 'utf8');
fs.copyFileSync(path.join(TEMPLATES_DIR, 'prompt.md'), path.join(targetDir, 'prompt.md'));

console.log(`Created collection/${slug}/`);
console.log('Next steps:');
console.log(`  1. Edit collection/${slug}/README.md (fill tech_stack, tags, description)`);
console.log(`  2. Edit collection/${slug}/prompt.md (add prompt or source code)`);
console.log('  3. Run: npm run lint && npm run build');
