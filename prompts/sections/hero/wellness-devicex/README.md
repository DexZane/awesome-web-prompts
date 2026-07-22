# Wellness Devicex (Measured) Hero Section

> 极具影视质感的暗黑系可穿戴健康设备首屏，采用多图层遮罩叠加与基于 Canvas 绘制的光标动态跟随聚光灯特效。

## 效果预览

<!-- 请添加效果截图 -->
_待添加预览截图_

## 简介

Measured (Wellness Devicex) 是一款专为高端健康可穿戴设备设计的 100vh 纯首屏（Hero Section）组件。整体视觉呈现出强烈的“Dark/Moody”电影氛围。它摒弃了传统的白底滚动页面，将重点放在复杂的层次感（Z-index Layering）与创新的交互特效上。

该页面最独特的设计在于 **Layer 5 — Spotlight Reveal (光标聚光灯揭示)**，它并没有使用简单的 CSS 径向渐变背景，而是利用 `requestAnimationFrame` 和 `<canvas>` 动态生成带有羽化边缘的遮罩贴图（CSS Mask），并让这个遮罩跟随着光标平滑移动，仅在屏幕下半部分（Bottom 60%）透出底层的产品动态视频。这种“窥探式”的局部透视效果极大增强了产品的神秘感和科技感。

## 核心设计模式

*   **五级视觉图层排布 (5-Layer Z-index Arch)**：
    *   **Layer 1**: 随光标微小视差移动的网格 SVG 背景。
    *   **Layer 2**: 暗调的产品静态背景图。
    *   **Layer 3**: 极巨化（高达 16rem）的衬线字体 `Instrument Serif` 标题。
    *   **Layer 4**: 全屏覆盖的半透明 Overlay PNG 图片，增加烟雾/颗粒感与景深。
    *   **Layer 5**: 被裁剪（clip-path）且被动态 Mask 遮罩的产品展示视频层。
*   **液态玻璃导航 (Liquid Glass Navigation)**：复用高级的 `mask-composite: exclude` 边框渐变技术，打造极度轻薄透明的毛玻璃药丸按钮。
*   **Canvas 动态遮罩生成 (Canvas-based Masking)**：利用 React 结合 Canvas API，在内存中动态绘制径向羽化渐变并转化为 DataURL 作为 `-webkit-mask-image`，配合 Lerp 算法实现丝滑的聚光灯追随。

## 技术栈要求

*   React 18+
*   Vite
*   Tailwind CSS
*   TypeScript
*   Canvas API (用于生成遮罩)

## 文件结构提示

*   `src/index.css`：注入全局字体（Inter, Instrument Serif, Helvetica Neue）与 `.liquid-glass` 样式。
*   `src/App.tsx`：实现 100vh 的纯首屏结构，包含 5 层 Layer 的严格 z-index 控制。
*   利用 React `useEffect` 和 `requestAnimationFrame` 挂载光标位置监听与 Canvas 渲染逻辑。
