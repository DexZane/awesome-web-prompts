# Fun 404 Page (TinyTrails)

> 面向儿童/母婴品牌的趣味性全屏 404 错误页，内置了基于屏幕高度动态缩放的巨型背景文字特效与丝滑的全屏侧滑菜单。

## 效果预览

<!-- 请添加效果截图 -->
_待添加预览截图_

## 简介

TinyTrails Fun 404 是一款色彩明快的单视口（100vh 无滚动）错误引导页，使用了大面积的暖橘色渐变（`#FF8233` 到 `#FDAC55`）。

它最大的技术亮点在于 **响应式的巨型背景 404 文本效果**：不仅使用了 CSS Mask 实现底部透明渐隐，还在 React 组件挂载和窗口缩放时，通过测量元素的 `offsetHeight` 来动态计算 `transform: scale(X, Y)` 中的 `scaleY` 缩放因子。这使得背景的 "404" 永远能够以极其夸张的比例撑满屏幕的纵向空间，形成强烈的视觉冲击。

此外，该页面还包含了一个纯手工打造（不依赖 Headless UI）的精致移动端侧边抽屉菜单，菜单内的每一项链接都带有时序递增的延迟进入动画。

## 核心设计模式

*   **动态拉伸背景文字 (Dynamic Scaled Background Text)**：通过 React `useRef` 和 `useEffect` 测量 `offsetHeight` 并动态调整 `transform: scale(1.15, ${scaleY * 1.4})`，配合 `mask-image: linear-gradient(...)` 让超巨大的白色 "404" 融入背景。
*   **混合视频融合 (Mix-blend Video Layer)**：中央放置的动态内容视频（通过 `object-contain` 保证比例）使用了 `mix-blend-darken`，使其完美融合进暖橘色渐变背景，而不会出现突兀的视频黑边或白边。
*   **纯手工平滑抽屉 (Handcrafted Drawer Menu)**：带有 `backdrop-blur` 和渐变背景的右侧滑出菜单。使用了 `cubic-bezier` 的平滑缓动，且列表项根据索引 `i` 设置了 `150 + i * 60` 毫秒的错落动画延迟。

## 技术栈要求

*   React 18+
*   Vite
*   Tailwind CSS
*   Lucide React
*   原生 DOM 测量 (ResizeObserver 或 Window Listener)

## 文件结构提示

整个应用程序完全内聚于一个 `App.tsx` 文件中，强调零外部组件库依赖的快速复制可用性。
*   `src/index.css`：引入 Inter 字体与全局重置。
*   `src/App.tsx`：包含了 `MobileMenu` 覆盖层逻辑、动态高度缩放计算逻辑、主导航以及中央的混合模式视频层。
