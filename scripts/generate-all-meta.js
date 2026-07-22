import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');
const promptsDir = path.join(rootDir, 'prompts');

// Predefined metadata mapping for known items
const metaDatabase = {
  // Hero Section
  'interactive-discovery': {
    name: 'Interactive Discovery',
    type: 'Prompt',
    tech_stack: ['HTML5', 'CSS3', 'JavaScript'],
    tags: ['Hero', 'Spotlight', 'Dual Image', 'Dark Mode'],
    description: {
      zh: '光标跟随聚光灯揭示双层图片，地质品牌全屏暗色 Hero',
      en: 'Cursor-following spotlight reveals a second image; dark geology brand hero'
    },
    preview: 'image.png'
  },
  'bold-studio': {
    name: 'Bold Studio',
    type: 'Prompt',
    tech_stack: ['React', 'Tailwind CSS'],
    tags: ['Hero', 'Video Background', 'Impact Headline', 'Agency'],
    description: {
      zh: '全屏视频背景 + 冲击性三行标题 + 统计数字，创意机构品牌落地页',
      en: 'Full-screen video bg + three-line impact headline + stat counters; creative agency landing'
    },
    preview: 'image.png'
  },
  'techforward': {
    name: 'TechForward',
    type: 'Prompt',
    tech_stack: ['React', 'Framer Motion', 'Tailwind CSS'],
    tags: ['Hero', 'Video Background', 'Framer Motion', 'Neuro-tech'],
    description: {
      zh: '极简黑白全屏视频 + Framer Motion 动画 + 纯 CSS，神经科技品牌风格',
      en: 'Minimal black-and-white video hero + Framer Motion animations + plain CSS; neuro-tech brand'
    },
    preview: 'image.png'
  },
  'stillmind': {
    name: 'Stillmind',
    type: 'Prompt',
    tech_stack: ['React', 'Tailwind CSS'],
    tags: ['Hero', 'Liquid Glass', 'Video Switcher', 'Mindfulness'],
    description: {
      zh: '4 视频切换 + Liquid Glass UI + 漂浮 PNG 叠层，正念 App 全屏 Hero',
      en: '4-video switcher + Liquid Glass UI + floating PNG overlay; mindfulness app fullscreen hero'
    },
    preview: 'image.png'
  },
  'vision-reveal': {
    name: 'Vision Reveal',
    type: 'Source Code',
    tech_stack: ['HTML5', 'CSS3', 'JavaScript'],
    tags: ['Hero', 'Tile Split', 'Spotlight Reveal', 'Creative Studio'],
    description: {
      zh: '瓦片阵列入场 + 光标聚光灯揭示双层图片，纯 HTML/CSS/JS 个人创意工作室展示页',
      en: 'Tile split entrance + cursor spotlight reveal; pure HTML/CSS/JS creative studio hero'
    },
    preview: 'image.png'
  },
  'luxury-hero': {
    name: 'Luxury Hero',
    type: 'Prompt',
    tech_stack: ['React', 'GSAP', 'Tailwind CSS'],
    tags: ['Hero', 'Scroll-scrubbed', 'GSAP Parallax', 'Luxury'],
    description: {
      zh: '纯滚动驱动视频播放（Scroll-scrubbed）+ GSAP 视差毛玻璃面板，奢华体验展示页',
      en: 'Scroll-scrubbed background video + GSAP parallax glass panel; luxury experience hero'
    },
    preview: 'image.png'
  },
  'bio-age-dashboard': {
    name: 'Bio-Age Dashboard',
    type: 'Prompt',
    tech_stack: ['React', 'Tailwind CSS'],
    tags: ['Hero', 'Rotating Aura', 'Ticker Ruler', 'Dashboard', 'Health'],
    description: {
      zh: '慢旋转光效背景 + 无限滚动刻度尺动效 + 悬浮展开卡片，健康数据 Dashboard 首屏',
      en: 'Slow rotating aura + infinite ticker ruler + expandable hover cards; health data dashboard hero'
    },
    preview: 'image.png'
  },
  'creative-portfolio': {
    name: 'Creative Portfolio',
    type: 'Prompt',
    tech_stack: ['React', 'Tailwind CSS'],
    tags: ['Hero', 'Crossfade Video', 'Responsive', 'Portfolio'],
    description: {
      zh: '三视频无缝淡入淡出切换 + 极致多端自适应排版，个人创意主页首屏',
      en: '3-video crossfade switcher + precise responsive typography; personal creative hero'
    },
    preview: 'image.png'
  },
  'organic-odyssey': {
    name: 'Organic Odyssey',
    type: 'Prompt',
    tech_stack: ['React', 'Tailwind CSS'],
    tags: ['Hero', 'Microscopic Background', 'Liquid Glass', 'Nature'],
    description: {
      zh: '电影感微观生态背景 + 极致 Liquid Glass 液态玻璃按钮，自然美学展示页',
      en: 'Cinematic microscopic background + precise liquid glass button; nature aesthetic hero'
    },
    preview: 'image.png'
  },
  'vex-venture': {
    name: 'VEX Venture',
    type: 'Prompt',
    tech_stack: ['React', 'Tailwind CSS'],
    tags: ['Hero', 'Minimalist', 'Staggered Animations', 'Venture Capital'],
    description: {
      zh: '极简创投全屏展示页，无滤镜原生视频背景 + 纯原生精细错落排版动效',
      en: 'Minimalist venture hero page; raw video background + precise native staggered animations'
    },
    preview: ''
  },
  'retro-futurist': {
    name: 'Retro-Futurist',
    type: 'Prompt',
    tech_stack: ['React', 'Tailwind CSS'],
    tags: ['Hero', 'Mouse Scrub', 'Typewriter', 'Retro-Futurist'],
    description: {
      zh: '鼠标横向滑动控制视频交互 + 纯手写打字机特效，极客风复古科幻展示页',
      en: 'Mouse-scrub interactive video background + custom typewriter effect; retro-futurist agency hero'
    },
    preview: ''
  },
  'securify-data-security': {
    name: 'Securify Data Security',
    type: 'Prompt',
    tech_stack: ['React', 'Tailwind CSS'],
    tags: ['Hero', 'Typography', 'SaaS', 'Security'],
    description: {
      zh: '巨大错落排版 + 数据统计悬浮块 + 背景视频环绕，数据安全 SaaS 首屏',
      en: 'Giant staggered typography + floating stats + background video; data security SaaS hero'
    },
    preview: ''
  },
  'contact-cybernetic': {
    name: 'Contact Cybernetic',
    type: 'Prompt',
    tech_stack: ['React', 'Tailwind CSS'],
    tags: ['Hero', 'Mouse Scrub', 'Pill Multi-select', 'Cybernetic'],
    description: {
      zh: '鼠标 Scrub 视频交互 + 动态弹簧多选服务项标签，极客感联系页首屏',
      en: 'Mouse-scrub video interaction + spring-animated multi-select pills; cybernetic contact hero'
    },
    preview: ''
  },
  'portal': {
    name: 'Portal',
    type: 'Prompt',
    tech_stack: ['React', 'Tailwind CSS'],
    tags: ['Hero', 'CSS Mask', 'Liquid Glass', 'Cinematic'],
    description: {
      zh: 'CSS Mask 底部模糊渐隐 + Liquid Glass + 10 级错落入场动效，影视平台全屏首屏',
      en: 'CSS Mask bottom blur fade + Liquid Glass + 10-level staggered entrance, cinematic full-screen hero'
    },
    preview: ''
  },
  'intelligent-x': {
    name: 'IntelligentX',
    type: 'Prompt',
    tech_stack: ['React', 'Tailwind CSS'],
    tags: ['Hero', 'Glassmorphism', 'Medical', 'Masked Video'],
    description: {
      zh: '巨型标题与异形视觉符号混排 + 深层渐变遮罩视频，极简毛玻璃医疗首屏',
      en: 'Giant typography mixed with inline pill visual elements + deep masked video, minimalist glassmorphic medical hero'
    },
    preview: ''
  },
  'wellness-devicex': {
    name: 'Wellness Devicex',
    type: 'Prompt',
    tech_stack: ['React', 'Tailwind CSS', 'Canvas'],
    tags: ['Hero', 'Spotlight Canvas', 'Z-Index Architecture', 'Wearables'],
    description: {
      zh: '5层 Z-index 视觉架构 + Canvas 动态聚光灯遮罩透视视频，影视级暗黑系智能穿戴首屏',
      en: '5-layer Z-index architecture + Canvas dynamic spotlight video mask, cinematic dark mode wearable hero'
    },
    preview: ''
  },
  'wellness-balance': {
    name: 'Wellness Balance',
    type: 'Prompt',
    tech_stack: ['React', 'Tailwind CSS'],
    tags: ['Hero', 'Word Reveal', 'Asymmetric Grid', 'Wellness'],
    description: {
      zh: '逐词揭示排版动效 + 非对称网格底栏与自动轮播卡片，极简自然风健康补充剂首屏',
      en: 'Word-by-word reveal typography + asymmetric grid footer with auto-carousel, minimalist wellness supplement hero'
    },
    preview: ''
  },
  'cozy-paws': {
    name: 'CozyPaws',
    type: 'Prompt',
    tech_stack: ['React', 'Tailwind CSS'],
    tags: ['Hero', 'Bouncy Animation', 'Parallax', 'Pet Store'],
    description: {
      zh: '弹性过冲单词弹出特效 + 响应式三拼底图视差，温馨宠物商店全屏首屏',
      en: 'Bouncy overshoot word pop animation + responsive 3-panel footer image parallax, cozy pet store hero'
    },
    preview: ''
  },
  'immersive-ocean': {
    name: 'Immersive Ocean',
    type: 'Prompt',
    tech_stack: ['React', 'Tailwind CSS'],
    tags: ['Hero', 'Ocean Video', 'Collapsible Nav', 'Stagger Fade-up'],
    description: {
      zh: '电影级深海视频背景 + 响应式折叠导航 + 缓动上滑交错文字动效，Foldcraft 创意工作室首屏',
      en: 'Cinematic deep ocean video background + responsive collapsible nav + staggered fade-up text animations; Foldcraft studio hero'
    },
    preview: 'image.png'
  },
  'wellbeing-os': {
    name: 'Wellbeing OS',
    type: 'Prompt',
    tech_stack: ['React', 'Tailwind CSS'],
    tags: ['Hero', 'Liquid Glass', 'Dropdown Hover', 'SaaS'],
    description: {
      zh: '奢华质感液体玻璃描边 + 悬浮级 Hover 下拉菜单 + 动态滑出移动端导航，flowpath 健康 SaaS 平台首屏',
      en: 'High-end Liquid Glass borders + responsive hover-triggered dropdown menu + smooth sliding mobile drawer, flowpath wellness SaaS hero'
    },
    preview: ''
  },

  // Landing Page
  '3d-story': {
    name: '3D Story',
    type: 'Source Code',
    tech_stack: ['React', 'Three.js', 'Tailwind CSS'],
    tags: ['Landing Page', '3D', 'Particle System', 'Scroll Video Scrubbing'],
    description: {
      zh: '滚动驱动视频帧逐帧播放 + 粒子系统 + 卡片渐进揭示，沉浸式 3D 框架营销页',
      en: 'Scroll-driven video frame scrubbing + particle system + card reveal; immersive 3D framework marketing page'
    },
    preview: 'image.png'
  },
  'prisma-creative-studio': {
    name: 'Prisma Creative Studio',
    type: 'Prompt',
    tech_stack: ['React', 'Tailwind CSS'],
    tags: ['Landing Page', 'Cinematic Dark', 'SVG Noise', 'Studio'],
    description: {
      zh: '电影质感暗黑调色 + SVG 噪点背景 + 文字逐词上浮进场，三段式创意工作室落地页',
      en: 'Cinematic dark mode + SVG noise background + words pull-up animation; 3-section creative studio landing page'
    },
    preview: 'image.png'
  },
  'health-portal': {
    name: 'Health Portal',
    type: 'Prompt',
    tech_stack: ['React', 'Tailwind CSS'],
    tags: ['Landing Page', 'Masked Cards', 'Scroll Parallax', 'Medical'],
    description: {
      zh: '极致大图遮罩拼接（Masked Cards）与滚动视差，单页牙科医疗落地页',
      en: 'Masked cards mosaic effect + staggered reveals; single-page dental medical landing page'
    },
    preview: 'image.png'
  },
  'innovation': {
    name: 'Innovation',
    type: 'Prompt',
    tech_stack: ['React', 'Tailwind CSS', 'Vanilla JS'],
    tags: ['Landing Page', 'Liquid Glass', 'Video Fade', 'Enterprise'],
    description: {
      zh: '高阶 Liquid Glass 材质 + 原生 JS 控制的视频无缝黑场过渡，五段式创新企业落地页',
      en: 'Advanced liquid glass + vanilla JS seamless video crossfade to black; 5-section enterprise landing page'
    },
    preview: ''
  },
  'skyelite-private-jets': {
    name: 'SkyElite Private Jets',
    type: 'Prompt',
    tech_stack: ['React', 'Tailwind CSS'],
    tags: ['Landing Page', 'Minimalist', 'Video Background', 'Aviation'],
    description: {
      zh: '极简高冷灰调，重叠排版与全屏视频交织的高端服务落地页',
      en: 'Premium private jet landing page with video background and overlapping typography'
    },
    preview: ''
  },
  'ai-designer-portfolio': {
    name: 'AI Designer Portfolio',
    type: 'Prompt',
    tech_stack: ['React', 'Tailwind CSS'],
    tags: ['Landing Page', 'GIF Particles', 'Testimonial Carousel', 'Portfolio'],
    description: {
      zh: '鼠标跟随 GIF 粒子特效 + 视差图片 + 自动滚动推荐轮播，独立设计师作品集落地页',
      en: 'Mouse-trail GIF particles + parallax image + auto-scrolling testimonial carousel; designer portfolio landing'
    },
    preview: ''
  },
  'usd-halo': {
    name: 'USD Halo',
    type: 'Prompt',
    tech_stack: ['React', 'Tailwind CSS'],
    tags: ['Landing Page', 'Fintech', 'Stablecoin', 'Marquee'],
    description: {
      zh: '稳定币产品金融科技落地页，圆角内嵌视频 Hero + 品牌字体差异化走马灯',
      en: 'Fintech stablecoin landing page, rounded video Hero + brand font marquee'
    },
    preview: ''
  },
  'orbis-nft': {
    name: 'Orbis NFT',
    type: 'Prompt',
    tech_stack: ['React', 'Tailwind CSS'],
    tags: ['Landing Page', 'Liquid Glass', 'NFT', 'Dark Mode'],
    description: {
      zh: '顶级 Liquid Glass 特效 + 全局噪点层 + 深空多视频拼接，暗黑系 NFT 落地页',
      en: 'Advanced liquid glass effect + global texture overlay + deep space video grid, dark mode NFT landing page'
    },
    preview: ''
  },

  // Auth & Onboarding
  'aurora-onboard': {
    name: 'Aurora Onboard',
    type: 'Prompt',
    tech_stack: ['React', 'Tailwind CSS'],
    tags: ['Auth', 'Onboarding', 'Split Screen', 'B&W'],
    description: {
      zh: '双栏布局 + 纯净全屏视频区无遮罩 + 错落进场动效，极简黑白注册页',
      en: 'Split-screen layout + unmasked pure video hero + staggered entrance animations, minimalist B&W sign up'
    },
    preview: ''
  },

  // 404 Pages
  'nexto-404': {
    name: 'Nexto 404',
    type: 'Prompt',
    tech_stack: ['React', 'Tailwind CSS'],
    tags: ['404', '100vh Viewport', 'Sci-fi', 'Floating Animation'],
    description: {
      zh: '100vh 强制视口 + 飞船背景叠加 + 漂浮动画，俏皮感科幻错误引导页',
      en: 'Locked 100vh viewport + layered spaceship background + slow float animation, sci-fi error page'
    },
    preview: ''
  },
  'fun-404-page': {
    name: 'Fun 404 Page',
    type: 'Prompt',
    tech_stack: ['React', 'Tailwind CSS'],
    tags: ['404', 'Staggered Drawer', 'Kids Brand', 'Playful'],
    description: {
      zh: '动态拉伸背景巨型文字 + 全手工错落缓动侧滑菜单，母婴儿童品牌明快 404',
      en: 'Dynamically scaled giant background text + handcrafted staggered drawer menu, bright children\'s brand 404'
    },
    preview: ''
  },
  '404-planet': {
    name: '404 Planet',
    type: 'Prompt',
    tech_stack: ['React', 'Tailwind CSS', 'Lucide Icons'],
    tags: ['404', 'Space Video', 'Liquid Glass', 'Glowing Text'],
    description: {
      zh: '云托管公司 NEXOVA 全屏 404，太空视频背景 + 液态玻璃按钮 + 发光 404 大字',
      en: 'Locked 100vh cloud hosting error page with looping video background, liquid glass button, and glowing 404 text'
    },
    preview: 'preview.png'
  },

  // Portfolio
  '3d-portfolio': {
    name: '3D Portfolio',
    type: 'Prompt',
    tech_stack: ['React', 'Three.js', 'Tailwind CSS'],
    tags: ['Portfolio', '3D', 'Magnetic Hover', 'Sticky Stack'],
    description: {
      zh: '3D 创作者作品集，包含磁性悬停、无限走马灯与粘性卡片堆叠等多种高阶交互',
      en: '3D creator portfolio with magnetic hover, infinite marquee, and sticky stacking cards'
    },
    preview: 'image.png'
  },
  'portfolio-cosmic': {
    name: 'Portfolio Cosmic',
    type: 'Prompt',
    tech_stack: ['React', 'GSAP', 'Tailwind CSS'],
    tags: ['Portfolio', 'HLS Video Stream', 'GSAP Scroll Parallax', 'Dark Mode'],
    description: {
      zh: '高阶暗黑个人作品集，内置 HLS 视频流背景与 GSAP 深度视差滚动探索区',
      en: 'Premium dark portfolio with HLS background and complex GSAP scroll parallax'
    },
    preview: ''
  },

  // Fintech
  'remit-race': {
    name: 'Remit Race',
    type: 'Prompt',
    tech_stack: ['React', 'Tailwind CSS'],
    tags: ['Fintech', 'Mobile Mockup', '3D Globe Video', 'Countdown Bar'],
    description: {
      zh: '深色竞赛风移动端 Mockup，3D 地球视频 + 分层叠加倒计时条',
      en: 'Dark competition-style mobile mockup with 3D globe video + layered countdown bar'
    },
    preview: ''
  },

  // Footer Section
  'tenlas-footer': {
    name: 'Tenlas Footer',
    type: 'Prompt',
    tech_stack: ['HTML5', 'Tailwind CSS', 'Vanilla JS'],
    tags: ['Footer', 'CTA', 'Fade-up Animation', 'SVG Vector Text'],
    description: {
      zh: '暗黑风 CTA + 极具设计感页脚，带平滑滚动 Fade-up 动效与 SVG 对齐超大文本',
      en: 'Dark mode CTA + premium footer with staggered fade-up animations and responsive flush SVG brand text'
    },
    preview: 'preview.png'
  },

  // Contact Pages
  'build-with-us': {
    name: 'Build With Us',
    type: 'Prompt',
    tech_stack: ['React', 'Tailwind CSS'],
    tags: ['Contact', 'Form', 'Multi-select Tags', 'Physical Cards'],
    description: {
      zh: '全屏视频背景 + 物理材质表单卡片 + 服务选项标签多选 + 提交成功状态切换',
      en: 'Full-screen video background + physical card layout + service tags multi-select + submit success state transition'
    },
    preview: ''
  },

  // Components
  'animated-cards': {
    name: 'Animated Cards',
    type: 'Prompt',
    tech_stack: ['React 18', 'Tailwind CSS v4', 'TypeScript'],
    tags: ['Component', '3D Carousel', 'Parallax Tilt', 'Volumetric Thickness', 'Dual Face'],
    description: {
      zh: '3D 悬浮银行卡片圆柱轮播，支持鼠标视差倾斜、实体厚度切片与双面翻转卡面',
      en: '3D horizontal cylinder card carousel with mouse parallax tilt, volumetric thickness layers, and dual-face flip'
    },
    preview: 'preview.png'
  }
};

function processDirectory(level, categoryDir) {
  const levelPath = path.join(promptsDir, level, categoryDir);
  if (!fs.existsSync(levelPath)) return;

  const items = fs.readdirSync(levelPath, { withFileTypes: true });
  for (const item of items) {
    if (item.isDirectory()) {
      const itemPath = path.join(levelPath, item.name);
      const metaPath = path.join(itemPath, 'meta.json');
      
      const dbEntry = metaDatabase[item.name] || {};
      const meta = {
        id: item.name,
        name: dbEntry.name || item.name,
        level: level,
        category: categoryDir,
        type: dbEntry.type || 'Prompt',
        tech_stack: dbEntry.tech_stack || ['HTML5', 'CSS3', 'JavaScript'],
        tags: dbEntry.tags || [categoryDir],
        recommended_ai: dbEntry.recommended_ai || ['Claude 3.5 Sonnet', 'Cursor'],
        description: dbEntry.description || {
          zh: '说明待补充',
          en: 'Description to be added'
        },
        preview: dbEntry.preview || (fs.existsSync(path.join(itemPath, 'preview.png')) ? 'preview.png' : (fs.existsSync(path.join(itemPath, 'image.png')) ? 'image.png' : '')),
        author: 'Community',
        source_url: ''
      };

      fs.writeFileSync(metaPath, JSON.stringify(meta, null, 2) + '\n', 'utf8');
      console.log(`Generated meta.json for: ${level}/${categoryDir}/${item.name}`);
    }
  }
}

// Process all groups
const groups = {
  pages: ['404', 'auth', 'landing-page', 'portfolio', 'fintech'],
  sections: ['hero', 'footer', 'contact'],
  components: ['animated-cards']
};

// Also handle components directory level directly
for (const [level, categories] of Object.entries(groups)) {
  for (const cat of categories) {
    const p = path.join(promptsDir, level, cat);
    if (fs.existsSync(p) && fs.statSync(p).isDirectory()) {
      // Check if p contains prompt.md directly (e.g. components/animated-cards)
      if (fs.existsSync(path.join(p, 'prompt.md'))) {
        const itemPath = p;
        const metaPath = path.join(itemPath, 'meta.json');
        const dbEntry = metaDatabase[cat] || {};
        const meta = {
          id: cat,
          name: dbEntry.name || cat,
          level: level,
          category: cat,
          type: dbEntry.type || 'Prompt',
          tech_stack: dbEntry.tech_stack || ['React', 'Tailwind CSS'],
          tags: dbEntry.tags || [cat],
          recommended_ai: dbEntry.recommended_ai || ['Claude 3.5 Sonnet', 'Cursor'],
          description: dbEntry.description || {
            zh: '说明待补充',
            en: 'Description to be added'
          },
          preview: dbEntry.preview || (fs.existsSync(path.join(itemPath, 'preview.png')) ? 'preview.png' : ''),
          author: 'Community',
          source_url: ''
        };
        fs.writeFileSync(metaPath, JSON.stringify(meta, null, 2) + '\n', 'utf8');
        console.log(`Generated meta.json for direct item: ${level}/${cat}`);
      } else {
        processDirectory(level, cat);
      }
    }
  }
}

console.log('All meta.json files generated successfully!');
