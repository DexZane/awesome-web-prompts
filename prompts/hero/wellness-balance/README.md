# Wellness Balance (TerraElix) Hero Section

> 极简自然风的健康营养品品牌首屏，拥有细腻的逐词揭示动画、自动轮播的特性卡片以及复杂的响应式图文混排布局。

## 效果预览

<!-- 请添加效果截图 -->
_待添加预览截图_

## 简介

TerraElix (Wellness Balance) 是一款面向自然健康、补充剂或轻奢生活方式品牌的 100vh 单视口（部分内容可能超出但在结构上为紧凑的单屏展示）Hero Section。

它的视觉重心在于超大号的排版与富有节奏感的文字入场动画。通过纯粹的 CSS `@keyframes` 实现了平滑的 `wordReveal`（从下至上并伴随模糊消退）逐词进场效果。同时，底部采用三列不对称网格面板（3-Panel Grid Footer），其中中间面板巧妙地内置了一个无需额外第三方轮播库的自动循环卡片系统。

## 核心设计模式

*   **逐词揭示排版 (Word-by-Word Reveal)**：主标题被精确拆分为单独的单词，利用 `overflow: hidden` 截断容器，配合内联 `span` 的错落 `translateY` 延迟，打造流畅的影视级排版入场。
*   **非对称网格底栏 (Asymmetric 3-Panel Footer)**：
    *   面板 1 (浅灰)：品牌 Slogan 与行动号召（带有 mix-blend 模式的装饰背景图）。
    *   面板 2 (暖白)：纯 CSS/React 状态驱动的自动循环卡片组件（Auto-rotating card carousel）。
    *   面板 3 (纯黑)：深色对比块，展示社交认证（Social Proof）数据与产品缩略图。
*   **断点专属图文混排 (Breakpoint-Specific Product Image)**：在移动端，巨大的产品图在底部溢出（oversized bleeding）；在桌面端（lg+），则利用绝对定位悬浮在右下角，填补视觉空白。

## 技术栈要求

*   React 18+
*   Vite
*   Tailwind CSS (充分利用自定义 `@keyframes` 与工具类)
*   Lucide React
*   Google Fonts (DM Sans, Inter)

## 文件结构提示

整个页面由 `App.tsx` 和少量的定制化 `index.css` 组成。
*   `src/index.css`：引入 DM Sans 和 Inter，并声明多达 6 种进场动画（fadeUp, slideInLeft, wordReveal 等）及其对应的 utility classes。
*   `src/App.tsx`：实现了主导航栏、逐词拆分的标题行、轮播面板逻辑（依赖 `useState` 与 `useEffect` 计时器）以及全响应式的断点适配布局。
