# Nexto 404 Page

> 全屏单页 404 错误页，搭配漂浮动画与飞船背景图，融合 Google Material Icons 呈现独特的俏皮科幻感。

## 效果预览

<!-- 请添加效果截图 -->
_待添加预览截图_

## 简介

Nexto 404 是一款充满细节交互的 `100vh` 全屏错误引导页。页面去除了原生的滚动条，将用户的视觉完全聚焦于中心的漂浮元素与导航卡片上。

整体风格为明亮的浅灰调（Light Space Theme），通过固定定位的外星飞船插画与线性渐变背景叠加，营造出迷失在太空的幽默感。标题两侧的 Emoji 式云朵与爱心图标自带缓动漂浮动画，化解了传统 404 页面的焦虑感。

## 核心设计模式

*   **全屏受限视口 (Locked 100vh Viewport)**：通过对 `html`, `body`, `#root` 强制使用 `overflow: hidden` 和 `height: 100vh`，将页面打造成一个纯粹的应用程序（App-like）体验。
*   **多图层混合背景 (Layered Background)**：在 `body` 上同时挂载了固定居中的飞船 PNG 图片（`background-size: contain`）与全屏左上至右下的浅灰渐变，二者配合构成空间纵深感。
*   **缓动漂浮动画 (Slow Float Animation)**：通过纯 CSS `@keyframes floatSlow`（位移加微小旋转），让装饰图标在页面上产生无重力漂浮的视觉错觉。
*   **操作卡片 (Navigation Cards)**：底部提供了两个具有明确导向的返回卡片（Home & Showcase），结合 Hover 时的 `translateY` 和加深阴影反馈，有效挽留迷失用户。
*   **破折线导航栏边框 (Dashed Nav Border)**：通过 `linear-gradient` 生成的 2px 破折线构成了顶部导航栏的下边框，细节非常精致。

## 技术栈要求

*   React 18+
*   Vite
*   Tailwind CSS (需自定义部分 CSS custom properties)
*   Google Fonts (DM Sans)
*   Google Material Symbols Rounded

## 文件结构提示

*   `src/index.css`：定义颜色变量、背景图叠加、破折线下边框以及 `@keyframes floatSlow`。
*   `src/App.tsx`：整体页面容器、Navbar 组件、中心丢失文本区以及底部的导航卡片组。
