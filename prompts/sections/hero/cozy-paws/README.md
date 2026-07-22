# CozyPaws Hero Section

> 宠物用品独立站全屏首屏，主打温馨的薄荷绿配色，拥有极具弹性的单词弹出动画与多端自适应的异形图片排版。

## 效果预览

<!-- 请添加效果截图 -->
_待添加预览截图_

## 简介

CozyPaws 是一款专为宠物商店或品牌独立站设计的单视口（`100vh` 强制无滚动）Hero Section。整个页面呈现出轻松、治愈且现代的品牌调性。

该页面通过纯 CSS `@keyframes` 实现了极其生动的动画编排。特别是主标题，利用了带过冲（Overshoot）效果的 `.animate-word-pop` 逐词弹出动画，配合背景图片的交错上升（Staggered reveal），瞬间抓住用户的眼球。

## 核心设计模式

*   **多图拼接视差底栏 (3-Panel Image Footer)**：页面底部并排无缝拼接了三张透明背景的宠物实拍图，且中央主图最高，营造出前中后景的空间层次感。所有图片在加载时带有交错的上升动效。
*   **悬浮内容卡片 (Floating Cards)**：在桌面端和屏幕两侧，绝对定位了带有商品价格与短视频播放提示的小型卡片，充分利用了全屏下的视觉留白。
*   **弹性过冲文字动效 (Overshoot Word Pop Animation)**：针对大标题的每一个单词，使用自定义的 `cubic-bezier(0.34, 1.56, 0.64, 1)` 缓动曲线，让文字在放大弹出的瞬间产生微小的回弹（Bounce），极具趣味性。
*   **流式排版计算 (Fluid Typography via Clamp)**：大量应用了 CSS `clamp()` 函数控制文字大小、绝对定位边距以及卡片宽度，确保在超大屏幕（Ultra-wide）和狭窄平板（Tablet）间均能完美过渡。

## 技术栈要求

*   React 18+
*   Vite
*   Tailwind CSS (充分自定义关键帧动画与扩展类)
*   Lucide React (Search, ShoppingCart, Star, ArrowUpRight 等图标)
*   Google Fonts (DM Serif Display, Inter)

## 文件结构提示

*   `src/index.css`：定义所有的 `@keyframes` 动画以及延迟控制类（`.delay-100` 等），同时全局挂载衬线与非衬线字体类。
*   `src/App.tsx`：在一个文件中内聚整个响应式布局。顶部导航栏、中间绝对定位文字与卡片、底部多图拼贴区域均通过清晰的 `z-index` 堆叠上下文隔离。
