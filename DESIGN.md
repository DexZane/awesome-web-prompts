---
name: "Awesome Web Prompts - Design System"
description: "Core design principles and constraints for generating high-end web landing pages and components."
version: "1.0.0"
---

# 🎨 Awesome Web Prompts - DESIGN.md

本文件是本项目（Awesome Web Prompts）所推崇的“顶级网页设计”的机器可读规范（Machine-readable Source of Truth）。
当 AI 编程助手（如 Cursor, Copilot, Cline 等）读取本文件时，应当遵循以下核心设计美学与技术约束，从而避免生成千篇一律的“模板化”或“廉价感”网页。

## 1. 核心设计原则 (Design Principles)

- **Cinematic & Premium (电影级质感与高级感)**：拒绝平庸。使用全屏视频背景、大面积留白或极暗模式（Dark Mode）、玻璃拟物化（Glassmorphism）和精密的排版。
- **Dynamic & Alive (动态与生命力)**：页面不应是静态的。所有关键元素进场需带有微动效（Staggered Fade-in, Y轴位移）；长页面需具备滚动视差（Scroll Parallax）或滚动绑定动画（Scroll-driven Animations）。
- **Typographic Excellence (字体排印卓越)**：文字不仅是信息的载体，更是视觉图形。善用不同字重、负字间距（Negative Letter-spacing）和混排字体（如无衬线与衬线体混排）。

## 2. 色彩规范 (Color Constraints)

- **[DON'T]** 绝对禁止使用原生的纯正色（如纯红 `#FF0000`，纯蓝 `#0000FF`），以及 Tailwind 默认且未加修饰的标准色板（如未经调和的 `bg-blue-500`）。
- **[DO]** 使用基于 HSL 或精心调配的色板（如深紫灰 `#0c0a16`，纯黑背景搭配 `#F6FCFF` 高亮文字）。
- **[DO]** 大量使用透明度（Opacity）建立视觉层级，如使用 `text-white/70` 或 `text-black/60` 作为副标题颜色。

## 3. 字体排版 (Typography)

- **优先选用的字体**：
  - 无衬线主体字体（Sans-serif）：Inter, Quicksand, Readex Pro, PP Neue Montreal, TT Norms Pro。
  - 衬线展示字体（Serif Display）：Instrument Serif, PP Mondwest, Georgia (用于强调和反差)。
  - 极客/等宽字体（Monospace）：Courier New, 或其他特殊风格字体（如 Qanelas-Heavy）。
- **排版技巧**：
  - **巨大且紧凑的标题**：Hero 区域标题字号应当非常大（如 `text-5xl` 到 `text-8xl`），行高需极小（`leading-none` 或 `leading-[0.95]`），并配合负字间距（`tracking-tight` 或 `letter-spacing: -0.04em`）。
  - **全小写或全大写**：为营造特定设计感，常强制使用全小写（lowercase）或带有更宽字间距的全大写（uppercase tracking-widest）。

## 4. 阴影与材质 (Shadows & Textures)

- **[DON'T]** 避免使用简单的单一阴影（如 `box-shadow: 0 4px 6px rgba(0,0,0,0.1)`）。
- **[DO]** 使用多层精密叠加阴影（Multi-layered Box Shadow）来塑造物理实体感。例如：
  `box-shadow: 0 1px 2px 0 rgba(5,26,36,0.1), 0 4px 4px 0 rgba(5,26,36,0.09), 0 9px 6px 0 rgba(5,26,36,0.05), inset 0 2px 8px 0 rgba(255,255,255,0.5)`
- **[DO]** 毛玻璃质感（Backdrop Blur）：使用 `backdrop-filter: blur(18px)` 搭配极低透明度的背景（如 `bg-white/10` 或 `bg-black/40`）悬浮于视频或复杂背景之上。
- **[DO]** SVG 噪点（Noise）叠加：在暗黑模式下叠加一层微弱的噪点材质，增加电影胶片质感。

## 5. 背景与媒体 (Backgrounds & Media)

- **全屏视频（Fullscreen Video Background）**：
  - 必须包含属性：`autoPlay loop muted playsInline`，配合 `object-cover` 覆盖全屏。
  - **遮罩（Masking）**：相比于直接在视频上铺一层黑色的渐变遮罩，更推荐使用 CSS `mask-image: linear-gradient(...)` 配合 `backdrop-blur`，实现只在底部局部模糊而不压暗原始视频色彩的高级过渡。

## 6. 核心交互模式 (Component Patterns)

- **无限走马灯（Infinite Marquee）**：双倍渲染列表，利用 CSS `@keyframes` 实现 `translateX(0)` 到 `translateX(-50%)` 的无缝线性滚动。对于合作品牌，每个品牌使用不同的字体（Arial, Times, Impact 等）以模拟真实 Logo 质感。
- **鼠标跟随特效（Mouse Trails）**：监听 `mousemove` 事件，利用 `requestAnimationFrame` 在光标位置生成会缩放消散的粒子或图片彩蛋。
- **进度/入场装载（Loading/Entrance）**：不要直接展示页面。利用 GSAP 或 Framer Motion，页面加载时文本逐词（Word by word）从下方遮罩中浮出（Y轴 + 裁剪），同时配合进度百分比滚动。
- **磁性吸附（Magnetic Hover）**：光标靠近按钮时，按钮和内部文本产生跟随偏移。

## 7. 技术栈约束 (Tech Stack Constraints)

- **框架**：React 18+ (或 Next.js), TypeScript, Vite.
- **样式**：Tailwind CSS v3+。优先使用原子类，但遇到复杂阴影、遮罩、自定义字体时，必须在 `index.css` 中手写原生 CSS。
- **动画引擎**：Framer Motion (用于组件级交互与进场) / GSAP + ScrollTrigger (用于复杂的滚动劫持、深度视差和时间轴动画)。
- **图标**：统一使用 `lucide-react`，并精确控制其尺寸（如 `w-5 h-5`）、描边宽度（`stroke-width 1.5`）与透明度。
