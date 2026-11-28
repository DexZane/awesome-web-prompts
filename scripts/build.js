import fs from 'fs';
import path from 'path';
import {
  ROOT_DIR,
  CATALOG_DIR,
  loadTaxonomy,
  loadCollection
} from './lib/collection.js';

const checkOnly = process.argv.includes('--check');

const taxonomy = loadTaxonomy();
const entries = loadCollection();

function escapeCell(text) {
  return String(text ?? '')
    .replace(/\|/g, '\\|')
    .replace(/\r?\n/g, ' ')
    .trim();
}

function buildStats() {
  const byScope = Object.fromEntries(taxonomy.scopes.map(s => [s.id, 0]));
  const byCategory = Object.fromEntries(taxonomy.categories.map(c => [c.id, 0]));
  const byFormat = Object.fromEntries(taxonomy.formats.map(f => [f.id, 0]));
  let withDemo = 0;
  let withPreview = 0;

  for (const e of entries) {
    const m = e.meta || {};
    if (byScope[m.scope] !== undefined) byScope[m.scope]++;
    if (byCategory[m.category] !== undefined) byCategory[m.category]++;
    if (byFormat[m.format] !== undefined) byFormat[m.format]++;
    if (e.hasDemo) withDemo++;
    if (e.hasPreview) withPreview++;
  }

  return {
    total: entries.length,
    with_demo: withDemo,
    with_preview: withPreview,
    by_scope: byScope,
    by_category: byCategory,
    by_format: byFormat
  };
}

function generateCatalogJson(stats) {
  const payload = {
    schema_version: 2,
    stats,
    taxonomy: {
      scopes: taxonomy.scopes,
      formats: taxonomy.formats,
      categories: taxonomy.categories
    },
    entries: entries.map(e => {
      const m = e.meta || {};
      return {
        id: m.id,
        name: m.name,
        scope: m.scope,
        category: m.category,
        format: m.format,
        tech_stack: m.tech_stack || [],
        tags: m.tags || [],
        recommended_ai: m.recommended_ai || [],
        description: m.description || { zh: '', en: '' },
        author: m.author || 'Community',
        source_url: m.source_url || '',
        path: e.relPath,
        has_prompt: e.hasPrompt,
        prompt_path: e.hasPrompt ? `${e.relPath}/prompt.md` : null,
        has_demo: e.hasDemo,
        demo_path: e.demoPath,
        has_preview: e.hasPreview,
        preview_path: e.previewPath
      };
    })
  };
  return JSON.stringify(payload, null, 2) + '\n';
}

function generateDemosMarkdown() {
  const demoEntries = entries.filter(e => e.hasDemo);
  const lines = [
    '# Runnable HTML Demos',
    '',
    `> 共收录 **${demoEntries.length}** 个包含独立可运行 \`index.html\` 的网页演示。`,
    '',
    '[返回中文主页](../README.md) | [English Index](../README_EN.md) | [JSON Registry](index.json)',
    '',
    '| Name | Scope | Category | Tech Stack | Demo | Summary |',
    '|------|-------|----------|------------|------|---------|'
  ];

  for (const e of demoEntries) {
    const m = e.meta;
    const scopeTitle = taxonomy.scopeById.get(m.scope)?.title?.en || m.scope;
    const catTitle = taxonomy.categoryById.get(m.category)?.title?.en || m.category;
    const stack = (m.tech_stack || []).slice(0, 3).map(escapeCell).join(', ');
    const summary = escapeCell(m.description?.zh || m.description?.en || '');
    lines.push(
      `| [${escapeCell(m.name)}](../${e.relPath}/) | ${escapeCell(scopeTitle)} | ${escapeCell(catTitle)} | ${stack} | [index.html](../${e.demoPath}) | ${summary} |`
    );
  }

  lines.push('');
  return lines.join('\n');
}

function buildCategoryTable(items, lang) {
  const isZh = lang === 'zh';
  const headers = isZh
    ? '| 名称 | 类型 | 演示 | 说明 | 预览 |'
    : '| Name | Format | Demo | Description | Preview |';
  const lines = [headers, '|------|------|------|-------------|---------|'];

  for (const e of items) {
    const m = e.meta;
    const formatLabel = taxonomy.formatById.get(m.format)?.label?.[lang] || m.format;
    const demoCell = e.hasDemo ? `[HTML](${e.demoPath})` : '-';
    const desc = escapeCell(m.description?.[lang] || m.description?.zh || '');
    const previewCell = e.hasPreview ? `![](${e.previewPath})` : '-';
    lines.push(
      `| [${escapeCell(m.name)}](${e.relPath}/) | ${escapeCell(formatLabel)} | ${demoCell} | ${desc} | ${previewCell} |`
    );
  }

  return lines.join('\n');
}

function generateReadme(lang, stats) {
  const isZh = lang === 'zh';
  const lines = [];

  if (isZh) {
    lines.push(
      '# Awesome Web Prompts',
      '',
      '> 收集互联网上优质的网页开发资源，包括 AI 提示词、现成源码与可运行 HTML 演示。',
      '',
      '[![Awesome](https://awesome.re/badge.svg)](https://awesome.re)',
      '',
      '[English](README_EN.md) | 中文 | [可运行演示列表](catalog/demos.md) | [JSON 元数据索引](catalog/index.json)',
      '',
      '## 简介',
      '',
      `当前共收录 **${stats.total}** 个条目（完整页面 **${stats.by_scope.page}** · 页面区块 **${stats.by_scope.section}** · UI 组件 **${stats.by_scope.component}**），其中包含 **${stats.with_demo}** 个可直接打开的 \`index.html\` 演示。`,
      '',
      '- **Prompt** — 面向 Claude、GPT、Gemini、Cursor 等 AI 编程工具的结构化提示词，复制即可生成完整网页',
      '- **Source Code** — 开箱即用的网页源代码，可直接运行或作为二次开发起点',
      '',
      '## 分类导航',
      ''
    );
  } else {
    lines.push(
      '# Awesome Web Prompts',
      '',
      '> A curated collection of web development resources — AI prompts, ready-to-use source code, and runnable HTML demos.',
      '',
      '[![Awesome](https://awesome.re/badge.svg)](https://awesome.re)',
      '',
      '[中文](README.md) | English | [Runnable Demos](catalog/demos.md) | [JSON Registry](catalog/index.json)',
      '',
      '## About',
      '',
      `Currently curating **${stats.total}** entries (**${stats.by_scope.page}** Full Pages · **${stats.by_scope.section}** Page Sections · **${stats.by_scope.component}** UI Components), including **${stats.with_demo}** runnable \`index.html\` demos.`,
      '',
      '- **Prompt** — Structured instructions for AI coding tools (Claude, GPT, Gemini, Cursor) to generate complete web UIs',
      '- **Source Code** — Ready-to-run web implementations you can preview directly or build upon',
      '',
      '## Categories',
      ''
    );
  }

  // Quick TOC grouped by scope
  for (const scope of taxonomy.scopes) {
    const scopeCats = taxonomy.categories.filter(c => c.scope === scope.id);
    const catLinks = scopeCats
      .map(c => {
        const count = stats.by_category[c.id] || 0;
        if (count === 0) return null;
        const anchor = c.title[lang].toLowerCase().replace(/[^a-z0-9\s-]/g, '').trim().replace(/\s+/g, '-');
        return `[${c.title[lang]}](#${anchor}) (${count})`;
      })
      .filter(Boolean)
      .join(' · ');

    if (catLinks) {
      lines.push(`- **${scope.title[lang]}**: ${catLinks}`);
    }
  }

  lines.push('', '## 目录', '');
  if (!isZh) {
    lines[lines.length - 2] = '## Index';
  }

  for (const scope of taxonomy.scopes) {
    const scopeCats = taxonomy.categories.filter(c => c.scope === scope.id);
    const scopeEntriesCount = stats.by_scope[scope.id] || 0;
    if (scopeEntriesCount === 0) continue;

    lines.push(`### ${scope.title[lang]}`, '', scope.desc[lang], '');

    for (const cat of scopeCats) {
      const matched = entries.filter(e => e.meta?.category === cat.id);
      if (matched.length === 0) continue;

      lines.push(`#### ${cat.title[lang]}`, '', cat.desc[lang], '', buildCategoryTable(matched, lang), '');
    }
  }

  if (isZh) {
    lines.push(
      '## 项目结构',
      '',
      '```text',
      'awesome-web-prompts/',
      '├── README.md                  # 中文主页（自动构建）',
      '├── README_EN.md               # 英文主页（自动构建）',
      '├── CONTRIBUTING.md            # 贡献指南',
      '├── package.json               # lint / build / check / new 脚本',
      '├── config/',
      '│   └── taxonomy.json          # 分类体系与双语文案单一数据源',
      '├── templates/',
      '│   └── entry/                 # 新条目脚手架模板',
      '├── catalog/                   # 自动生成的索引产物',
      '│   ├── index.json             # 机器可读条目注册表',
      '│   └── demos.md               # 可运行 HTML 演示清单',
      '├── scripts/                   # 校验、构建与脚手架工具链',
      '└── collection/                # 扁平化条目仓库（按 slug 存放）',
      '    └── <slug>/',
      '        ├── README.md          # YAML frontmatter 元数据 + 说明文档',
      '        ├── prompt.md          # 提示词正文或源码',
      '        ├── preview.png        # 效果预览图（可选）',
      '        └── index.html         # 独立可运行演示（可选）',
      '```',
      '',
      '## 如何使用',
      '',
      '**Prompt 条目：**',
      '1. 打开对应条目目录下的 `prompt.md` 复制提示词',
      '2. 粘贴到 Claude、ChatGPT、Gemini 或 Cursor 等 AI 工具中生成网页代码',
      '',
      '**Source Code / HTML Demo 条目：**',
      '1. 若条目包含 `index.html`，可直接在浏览器打开预览效果',
      '2. 或复制 `prompt.md` 中的源码作为项目起点进行二次开发',
      '',
      '## 贡献',
      '',
      '欢迎提交优质网页提示词与可运行演示！请查看 [CONTRIBUTING.md](CONTRIBUTING.md) 了解规范与脚手架用法。',
      '',
      '## Star History',
      '',
      '[![Star History Chart](https://api.star-history.com/svg?repos=DexZane/awesome-web-prompts&type=Date)](https://star-history.com/#DexZane/awesome-web-prompts&Date)',
      '',
      '## License',
      '',
      '[MIT](LICENSE)',
      ''
    );
  } else {
    lines.push(
      '## Structure',
      '',
      '```text',
      'awesome-web-prompts/',
      '├── README.md                  # Chinese index (auto-generated)',
      '├── README_EN.md               # English index (auto-generated)',
      '├── CONTRIBUTING.md            # Contribution guidelines',
      '├── package.json               # lint / build / check / new scripts',
      '├── config/',
      '│   └── taxonomy.json          # Single source of truth for taxonomy & i18n',
      '├── templates/',
      '│   └── entry/                 # Entry scaffolding template',
      '├── catalog/                   # Auto-generated derived indexes',
      '│   ├── index.json             # Machine-readable entry registry',
      '│   └── demos.md               # Runnable HTML demo index',
      '├── scripts/                   # Validation, build & scaffolding CLI',
      '└── collection/                # Flat slug-addressed entry store',
      '    └── <slug>/',
      '        ├── README.md          # YAML frontmatter metadata + documentation',
      '        ├── prompt.md          # Prompt text or source code',
      '        ├── preview.png        # Preview screenshot (optional)',
      '        └── index.html         # Standalone runnable demo (optional)',
      '```',
      '',
      '## How to Use',
      '',
      '**Prompt entries:**',
      '1. Open `prompt.md` inside an entry folder and copy the prompt text',
      '2. Paste it into Claude, ChatGPT, Gemini, or Cursor to generate the page',
      '',
      '**Source Code / HTML Demo entries:**',
      '1. When `index.html` is present, open it directly in a browser to preview',
      '2. Or copy the code from `prompt.md` as a starting point for your project',
      '',
      '## Contributing',
      '',
      'Contributions are welcome! See [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines and CLI scaffolding.',
      '',
      '## Star History',
      '',
      '[![Star History Chart](https://api.star-history.com/svg?repos=DexZane/awesome-web-prompts&type=Date)](https://star-history.com/#DexZane/awesome-web-prompts&Date)',
      '',
      '## License',
      '',
      '[MIT](LICENSE)',
      ''
    );
  }

  return lines.join('\n');
}

const stats = buildStats();
const outputs = [
  { filePath: path.join(CATALOG_DIR, 'index.json'), content: generateCatalogJson(stats) },
  { filePath: path.join(CATALOG_DIR, 'demos.md'), content: generateDemosMarkdown() },
  { filePath: path.join(ROOT_DIR, 'README.md'), content: generateReadme('zh', stats) },
  { filePath: path.join(ROOT_DIR, 'README_EN.md'), content: generateReadme('en', stats) }
];

if (checkOnly) {
  const stale = [];
  for (const out of outputs) {
    const existing = fs.existsSync(out.filePath) ? fs.readFileSync(out.filePath, 'utf8') : null;
    if (existing !== out.content) {
      stale.push(path.relative(ROOT_DIR, out.filePath));
    }
  }
  if (stale.length > 0) {
    console.error('Stale generated files (run `npm run build`):');
    for (const s of stale) console.error(`  - ${s}`);
    process.exit(1);
  }
  console.log('All generated files are up to date.');
} else {
  fs.mkdirSync(CATALOG_DIR, { recursive: true });
  for (const out of outputs) {
    fs.writeFileSync(out.filePath, out.content, 'utf8');
    console.log(`Generated ${path.relative(ROOT_DIR, out.filePath)}`);
  }
}
