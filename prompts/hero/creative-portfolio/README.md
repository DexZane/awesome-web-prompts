# Creative Portfolio Hero

> 三视频无缝淡入淡出切换，带响应式动效与极致排版的创意个人主页首屏。

## 效果预览

![alt text](image.png)
## 简介

专为自由设计师或创意机构打造的全屏 Hero 区域，采用暗黑极简风格（黑底白字加高饱和度点缀）。支持三支高清背景视频无缝淡入淡出切换，配备定制的响应式全屏汉堡菜单。整体排版非常讲究，采用了多端精确到像素的自适应策略。

### 亮点特性

- **三视频无缝切换（Video Crossfade Switcher）**：在 DOM 中同时挂载三段全屏视频并预加载，通过控制 `opacity` 实现极致丝滑的 1.2s 交叉淡入淡出（Crossfade），并伴随有主题点缀色（呼吸灯、标点符号）的联动变化
- **纯 CSS 入场动效**：基于自定义 `@keyframes` 和 `IntersectionObserver` 实现了轻量级弹簧阻尼（Spring ease）的文字和按钮入场动效（`revealUp` / `revealRight`）
- **高阶悬停交互（Hover Effects）**：
  - 导航链接：拥有定制的从右侧滑入的下划线展开动效（基于 `scaleX` 与 `transform-origin` 控制）
  - CTA 按钮：伪元素背景从 101% Y轴滑入，文本及边框颜色同步反转
- **精细的响应式断点**：没有使用 Tailwind 默认的 `sm/md/lg` 断点体系，而是自定义了精确的基于最大宽度的断点（`mobile: max 809.98px`，`md-tablet: 810px-1199px`），为移动端和手写板端做出了像素级的排版适配
- **无障碍支持（Accessibility）**：内置 `prefers-reduced-motion` 媒体查询应对动画敏感人群，并配置了完善的 Semantic 标签及 ARIA 属性

### 技术栈

- React 18 + TypeScript + Vite
- Tailwind CSS 3（含自定义断点与动画配置）
- 原生 CSS Animation + Intersection Observer（无外部动画库）
- Google Fonts（Figtree）
- Intl.DateTimeFormat（本地化实时时钟）

## 使用说明

- **推荐 AI 工具**：Cursor / Claude / ChatGPT
- **使用方式**：复制 [prompt.md](prompt.md) 中的提示词，在 AI 工具中生成完整项目代码
- **注意事项**：
  - 提示词要求视频 Blob 预加载机制，首次打开时可能会有瞬间白屏或加载态，建议确保网络能顺畅访问 AWS CDN
  - 包含复杂的响应式网格与 Flex 布局联动，修改布局时请保持整体结构层级稳定

## 来源

- 来源：互联网收集
