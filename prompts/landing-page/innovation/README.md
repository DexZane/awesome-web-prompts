# Innovation Landing Page

> 五段式暗黑极简企业落地页，配备极致 Liquid Glass 材质和纯原生 JS 控制的无缝视频淡入淡出效果。

## 效果预览

<!-- 请添加效果截图 -->
_待添加预览截图_

## 简介

专为创意机构或科技企业设计的长滚动落地页。整个页面采用暗黑极简风格，文字排版大量使用了 Instrument Serif 衬线斜体，配合精密的 Liquid Glass（液态玻璃）UI 质感。其中 Hero 部分的背景视频循环播放没有使用简单的 CSS 动画，而是采用原生 JavaScript 和 `requestAnimationFrame` 实现了极致丝滑的交叉淡入淡出（Crossfade to black）。

### 亮点特性

- **极致 Liquid Glass（液态玻璃）材质**：可复用的 `.liquid-glass` 样式，利用 `luminosity` 混合模式、双层 mask 裁切配合多段渐变边框，实现了晶莹剔透的玻璃质感
- **原生 JS 驱动的高阶视频淡入淡出**：Hero 区背景视频的无缝循环逻辑通过监听 `canplay`、`timeupdate` 和 `ended` 事件，利用 `requestAnimationFrame` 纯原生控制 opacity 渐变，达到 100% 丝滑的黑场过渡效果
- **精密的排版与动效映射**：大面积使用衬线斜体（Instrument Serif）与无衬线体的混排，各 Section 基于 Framer Motion 的 `useInView` 实现优雅的滚动视差及错落进场动画
- **五段式完整结构**：包含 Hero 主视觉、About 纯文本引言、Featured Video 特性卡片、Philosophy 双列图文网格以及 Services 错落式视频卡片

### 技术栈

- React 18 + TypeScript + Vite
- Tailwind CSS 3
- framer-motion (滚动触发进场动效)
- lucide-react (图标)
- 高阶原生 CSS (混合模式、双重遮罩 `mask-composite`)
- 原生 JS `requestAnimationFrame` (视频过渡)

## 使用说明

- **推荐 AI 工具**：Cursor / Claude / ChatGPT
- **使用方式**：复制 [prompt.md](prompt.md) 中的提示词，在 AI 工具中生成完整项目代码
- **注意事项**：
  - 依赖多个 Figma CDN 托管的高清视频和图片，需确保网络可访问
  - 由于包含多个 Section 的重度组件化逻辑，推荐让 AI 分别创建并提取各个子组件（如 `AboutSection.tsx`、`ServicesSection.tsx`）以保持代码结构清晰

## 来源

- 来源：互联网收集
