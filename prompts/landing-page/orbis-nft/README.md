# Orbis NFT Landing Page

> 太空主题的暗黑系 NFT 落地页，融合全屏背景视频、顶级 Liquid Glass（液态毛玻璃）UI 特效与精细的版式排版。

## 效果预览

<!-- 请添加效果截图 -->
_待添加预览截图_

## 简介

这是一款拥有极致视觉体验的暗黑系/太空主题 NFT 落地页设计。整体色调以深邃的深蓝（`#010828`）为背景，配合荧光绿（Neon Green `#6FFF00`）的醒目点缀，加上特意设计的行内双拼字体（无衬线粗体 Anton 与手写花体 Condiment 的碰撞），将科幻与艺术感完美融合。

该设计中最核心的创新点是复杂的 **Liquid Glass（液态玻璃）特效**。通过多层 CSS 渐变、背景混合模式（`luminosity`）、遮罩（`mask-composite`）与模糊滤镜（`backdrop-filter`）的叠加计算，完美模拟了带有高光折射边缘的真实玻璃质感。此特效广泛应用于导航栏、社交图标、NFT 卡片容器以及悬浮蒙层。

## 核心设计模式

*   **液态玻璃质感 (Liquid Glass UI)**：通过 `background-blend-mode`、`backdrop-filter` 配合复杂的 `-webkit-mask` 渐变叠加边缘发光效果，呈现极为高级的流体半透明质感。
*   **全局噪点纹理材质 (Texture Overlay)**：在全站最高层（`z-50`）固定覆盖一层 `mix-blend-mode: lighten` 的噪点贴图，并禁用指针事件（`pointer-events-none`），使所有底层视频和纯色背景获得统一的胶片颗粒感。
*   **混合字体排版 (Mixed Typography)**：巨大的粗体无衬线全大写标题（Anton）配合与之形成反差的倾斜手写体（Condiment）装饰词，手写体使用 `mix-blend-exclusion` 以在视频或复杂背景上保持极高的辨识度与艺术感。
*   **纯 CSS 视频裁剪 (Video Cropping & Aspect Ratios)**：Hero Section 底部使用了极大的圆角（`rounded-b-[32px]`）裁剪视频，NFT 缩略图使用了 `pb-[100%]` 实现完美的正方形比例响应式视频画框。

## 技术栈要求

*   React 18+
*   Vite
*   Tailwind CSS
*   Lucide React (Icons)

## 文件结构提示

*   `src/index.html`：引入 Google Fonts (Anton & Condiment)。
*   `src/index.css`：注入关键的 `.liquid-glass` 核心样式逻辑以及全局背景定义。
*   `src/App.tsx` (或各区块拆分的组件)：按顺序组装 Hero（含导航与社交图标）、About / Intro 段落、NFT Collection Grid 阵列与带有自定义长宽比的最终 CTA 结尾段落。
