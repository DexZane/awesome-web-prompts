import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');
const promptsDir = path.join(rootDir, 'prompts');

// Collect all metadata entries
function collectMetaFiles(dir) {
  let results = [];
  const list = fs.readdirSync(dir, { withFileTypes: true });

  for (const file of list) {
    if (file.name === '_template') continue;
    const fullPath = path.join(dir, file.name);

    if (file.isDirectory()) {
      const metaFile = path.join(fullPath, 'meta.json');
      if (fs.existsSync(metaFile)) {
        try {
          const meta = JSON.parse(fs.readFileSync(metaFile, 'utf8'));
          meta._relPath = path.relative(rootDir, fullPath).replace(/\\/g, '/');
          results.push(meta);
        } catch (e) {
          console.error(`Error parsing ${metaFile}:`, e);
        }
      } else {
        results = results.concat(collectMetaFiles(fullPath));
      }
    }
  }

  return results;
}

const allMetas = collectMetaFiles(promptsDir);

// Define category headings and descriptions for Chinese & English
const categoryConfigs = [
  {
    key: 'hero',
    title: { zh: 'Hero Section', en: 'Hero Section' },
    desc: {
      zh: '首屏主视觉区域，通常包含标题、副标题、CTA 按钮和背景视觉效果。',
      en: 'The first viewport-height section of a page, typically featuring a headline, subheadline, CTA buttons, and a strong visual background.'
    }
  },
  {
    key: 'landing-page',
    title: { zh: 'Landing Page', en: 'Landing Page' },
    desc: {
      zh: '完整的落地页，包含多个区块的整页设计。',
      en: 'Full multi-section pages covering hero, features, testimonials, pricing, and footer.'
    }
  },
  {
    key: 'auth',
    title: { zh: 'Auth & Onboarding', en: 'Auth & Onboarding' },
    desc: {
      zh: '身份验证、注册与新用户引导页面。',
      en: 'Authentication, sign-up, and user onboarding pages.'
    }
  },
  {
    key: '404',
    title: { zh: '404 Pages', en: '404 Pages' },
    desc: {
      zh: '定制化错误引导页与 404 未找到页面。',
      en: 'Custom error guidance and 404 not found pages.'
    }
  },
  {
    key: 'footer',
    title: { zh: 'Footer Section', en: 'Footer Section' },
    desc: {
      zh: '暗黑系与现代感页脚导航与行动号召（CTA）区域。',
      en: 'Modern footer navigation sections and Call-to-Action (CTA) components.'
    }
  },
  {
    key: 'animated-cards',
    title: { zh: 'UI Components', en: 'UI Components' },
    desc: {
      zh: '独立 UI 组件、3D 视觉交互与卡片轮播动效。',
      en: 'Standalone UI components, 3D interactive visuals, and card carousels.'
    }
  },
  {
    key: 'portfolio',
    title: { zh: 'Portfolio', en: 'Portfolio' },
    desc: {
      zh: '个人作品集页面，以案例展示和技能介绍为核心。',
      en: 'Personal portfolio pages focused on showcasing past work and skills.'
    }
  },
  {
    key: 'fintech',
    title: { zh: 'Fintech', en: 'Fintech' },
    desc: {
      zh: '金融科技类页面，包括移动端 App 界面模拟、支付流程展示和数字资产 product 页。',
      en: 'Financial technology pages, including mobile app mockups, payment flows, and digital asset product pages.'
    }
  },
  {
    key: 'contact',
    title: { zh: 'Contact Pages', en: 'Contact Pages' },
    desc: {
      zh: '联系我们与表单落地页，以表单交互、输入验证和信息提交为核心。',
      en: 'Contact forms and landing pages focused on input validation, custom tags, and interactive submit states.'
    }
  }
];

function buildMarkdownTable(items, lang) {
  let table = `| ${lang === 'zh' ? '名称' : 'Name'} | ${lang === 'zh' ? '类型' : 'Type'} | ${lang === 'zh' ? '说明' : 'Description'} | ${lang === 'zh' ? '预览' : 'Preview'} |\n`;
  table += `|------|------|-------------|---------|\n`;

  for (const item of items) {
    const desc = item.description[lang] || item.description.zh || '';
    const imgPath = item.preview ? `${item._relPath}/${item.preview}` : '';
    const previewCell = imgPath ? `![](${imgPath})` : '-';
    table += `| [${item.name}](${item._relPath}/) | ${item.type} | ${desc} | ${previewCell} |\n`;
  }

  return table;
}

function generateReadme(lang) {
  const isZh = lang === 'zh';
  let md = isZh ? `# Awesome Web Prompts\n\n> 收集互联网上优质的网页开发资源，包括 AI 提示词和现成可用的网页代码。\n\n[![Awesome](https://awesome.re/badge.svg)](https://awesome.re)\n\n[English](README_EN.md) | 中文\n\n## 简介\n\n这是一个精心整理的网页开发资源合集，收录两类内容：\n\n- **Prompt** — 用于 AI 工具（ChatGPT、Claude、Cursor 等）的提示词，粘贴即可生成完整网页代码\n- **Source Code** — 现成可运行的网页代码，直接使用或作为二次开发的起点\n\n每个条目都附有效果截图和使用说明。\n\n## 目录\n\n`
  : `# Awesome Web Prompts\n\n> A curated collection of web development resources — AI prompts and ready-to-use source code for building beautiful web pages.\n\n[![Awesome](https://awesome.re/badge.svg)](https://awesome.re)\n\n[中文](README.md) | English\n\n## About\n\nA carefully curated collection of web development resources in two formats:\n\n- **Prompt** — Instructions for AI tools (ChatGPT, Claude, Cursor, etc.) that generate complete web page code when pasted\n- **Source Code** — Ready-to-run web code you can use directly or as a starting point for further development\n\nEvery entry includes a preview screenshot and usage notes.\n\n## Index\n\n`;

  for (const config of categoryConfigs) {
    const matchedItems = allMetas.filter(m => m.category === config.key || m.id === config.key);
    if (matchedItems.length === 0) continue;

    md += `### ${config.title[lang]}\n\n${config.desc[lang]}\n\n`;
    md += buildMarkdownTable(matchedItems, lang);
    md += `\n`;
  }

  if (isZh) {
    md += `## 项目结构\n\n\`\`\`\nawesome-web-prompts/\n├── README.md                 # 中文主页（自动构建）\n├── README_EN.md              # English version (Auto-built)\n├── DESIGN.md                 # 机器可读设计美学规范\n├── CONTRIBUTING.md           # 贡献指南\n├── package.json              # 构建与校验脚本\n├── scripts/                  # 自动化工程脚本\n└── prompts/                  # 提示词库\n    ├── _template/            # 模板（含 meta.json）\n    ├── pages/                # 1. 完整页面 (Landing Page, 404, Auth, Portfolio, Fintech)\n    ├── sections/             # 2. 页面区块 (Hero, Footer, Contact)\n    └── components/           # 3. 独立 UI 组件与动效 (Animated Cards)\n\`\`\`\n\n## 如何使用\n\n**Prompt 类型：**\n1. 打开 \`prompt.md\` 复制提示词\n2. 粘贴到 ChatGPT、Claude、Cursor 等 AI 工具中生成代码\n\n**Source Code 类型：**\n1. 打开 \`prompt.md\` 复制完整代码\n2. 保存为对应文件格式，直接在浏览器运行，或作为二次开发的起点\n\n## 贡献\n\n欢迎提交你发现的优质资源！请查看 [贡献指南](CONTRIBUTING.md) 了解如何参与。\n\n## Star History\n\n[![Star History Chart](https://api.star-history.com/svg?repos=DexZane/awesome-web-prompts&type=Date)](https://star-history.com/#DexZane/awesome-web-prompts&Date)\n\n## License\n\n[MIT](LICENSE)\n`;
  } else {
    md += `## Structure\n\n\`\`\`\nawesome-web-prompts/\n├── README.md                 # 中文主页 (Auto-built)\n├── README_EN.md              # English version (Auto-built)\n├── DESIGN.md                 # Machine-readable Design System\n├── CONTRIBUTING.md           # Contribution Guidelines\n├── package.json              # Scripts & Tooling\n├── scripts/                  # Automation scripts\n└── prompts/                  # Prompt Repository\n    ├── _template/            # Template (with meta.json)\n    ├── pages/                # 1. Full Pages (Landing Page, 404, Auth, Portfolio, Fintech)\n    ├── sections/             # 2. Page Sections (Hero, Footer, Contact)\n    └── components/           # 3. UI Components & Visuals (Animated Cards)\n\`\`\`\n\n## How to Use\n\n**Prompt entries:**\n1. Open \`prompt.md\` and copy the prompt text\n2. Paste it into ChatGPT, Claude, Cursor, or any AI coding tool to generate the code\n\n**Source Code entries:**\n1. Open \`prompt.md\` and copy the complete code\n2. Save it in the appropriate file format and open it in a browser, or use it as a starting point for your own project\n\n## Contributing\n\nContributions are welcome! See [CONTRIBUTING.md](CONTRIBUTING.md) for details on how to add a new entry.\n\n## Star History\n\n[![Star History Chart](https://api.star-history.com/svg?repos=DexZane/awesome-web-prompts&type=Date)](https://star-history.com/#DexZane/awesome-web-prompts&Date)\n\n## License\n\n[MIT](LICENSE)\n`;
  }

  const targetFile = isZh ? path.join(rootDir, 'README.md') : path.join(rootDir, 'README_EN.md');
  fs.writeFileSync(targetFile, md, 'utf8');
  console.log(`Successfully generated: ${path.basename(targetFile)}`);
}

generateReadme('zh');
generateReadme('en');
