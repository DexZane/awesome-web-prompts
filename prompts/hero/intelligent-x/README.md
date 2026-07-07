# IntelligentX / Mentality Hero Section

> 极简玻璃拟物化风格医疗/心理健康落地页首屏，融合行内异形视觉元素与居中视频遮罩。

## 效果预览

<!-- 请添加效果截图 -->
_待添加预览截图_

## 简介

这是一款专为医疗、心理健康或高端咨询服务设计的现代化 Hero Section。整体背景采用极为克制的高级灰（`#EDEEF5`），配合精致的毛玻璃导航栏（Glassmorphic Navbar）和精心排布的无衬线与展示类字体混排，营造出安静、专业且极具现代感的视觉体验。

最核心的视觉亮点在于其**混合行内排版（Inline Typographic Elements）**：在巨大的标题文字之间，嵌入了一个带有动态微交互的药丸状/眼睛状视觉符号，打破了纯文本的单调。同时，大尺寸的背景视频从半屏处淡入（通过渐变遮罩自然过渡），保证了页面既有影视级别的动态生命力，又保留了充足的留白供核心文案与搜索框呼吸。

## 核心设计模式

*   **玻璃拟物导航 (Glassmorphic Navbar)**：极简的半透明导航配合 `backdrop-blur-[2px]`，在保持内容可读性的同时透出页面背景的细微色彩变化。
*   **行内异形视觉符号 (Inline Visual Element)**：在排版紧凑的巨型文字中插入可自适应尺寸的胶囊状 `div`，内部包含点状装饰，形成强烈的“大字号 x 小图形”对比。
*   **深层遮罩视频 (Deep Masked Video)**：通过相对定位与高度计算，将自动循环的视频沉入底层（`z-index: 0`），并使用纯 CSS 的渐变层将其顶部柔和地融于纯色背景中，消除生硬的边缘。
*   **精确的排版断点 (Typographic Breakpoints)**：对不同颜色片段（如 `#1a1a1a` 与 `#8e8e8e`）的文本进行混合排版，形成阅读层次。
*   **延迟进场动效 (Delayed Entrance)**：搜索/提问输入框在标题加载完毕后带有 `0.15s` 延迟的平滑上浮，吸引视觉焦点。

## 技术栈要求

*   React 18+
*   Vite
*   Tailwind CSS
*   Framer Motion (`motion/react`)
*   Lucide React (或其他 SVG 图标集)

## 文件结构提示

*   `src/index.css`：定义全局字体变量和统一的 `#EDEEF5` 背景。
*   `src/components/Navbar.tsx`：实现桌面端 12 列栅格布局及移动端的下拉抽屉。
*   `src/components/Hero.tsx`：处理巨型标题、行内视觉元素、渐变遮罩视频以及绝对定位的边角提示文字。
