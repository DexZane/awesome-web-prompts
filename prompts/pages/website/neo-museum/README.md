# Neo Museum (NHM)

> 自然历史博物馆 (NHM) 沉浸式前沿多章节落地页，SVG 多边形字形入场、SVG 滤镜沙化过渡动效与黑白无缝分段切换。

## 效果预览

<!-- 将效果截图放在本目录下，推荐命名为 preview.png -->
![效果预览](preview.png)

## 简介

Neo Museum 是一款专为自然历史博物馆（Natural History Museum, NHM）打造的现代感、学术感与沉浸感兼具的多章节官方落地页。采用 React 19 + Tailwind CSS 4 + Motion 构建，融合了首屏全宽多边形 SVG 几何字形入场动效、延时渐现的全景视频、第二章节跨层穿插的巨型翼龙化石，以及第三章节纯黑暗色模式下基于 SVG `feTurbulence` / `feDisplacementMap` 的沙化溶解（Sand Transition）图片转场系统。

## 核心设计与特性

- **首屏多边形 SVG 标志动效**：全宽 NHM 字母由十余个独立 polygon 拼合而成，依次 stagger 从底部升起并缩放归位。
- **2800ms 延时视频平滑唤醒**：在几何文字呈现后，背景全景视频以优雅的过渡揭示。
- **独创沙化溶解滤镜组件 (`SandTransitionImage`)**：利用 SVG `feTurbulence` 噪声与 `feDisplacementMap` 位移映射在 900ms 内实现颗粒沙化解构与重组。
- **跨区域重叠穿插美学**：巨型翼龙化石图片以负边距跨越白昼章节与暗黑地质章节，创造非凡的纵深感。
- **无缝黑白调性切换**：从 `#fcfcfc` 极简冷灰自然过渡至 `#0a0a0a` 深邃地质层暗黑视效。

## 技术栈

- React 19.0+
- Vite 6.2+
- Tailwind CSS v4.1+ (`@tailwindcss/vite`)
- Motion (Framer Motion 12+)
- Lucide React
- TypeScript 5.8+

## 使用说明

- **推荐 AI 工具**：Claude 3.5 Sonnet / Cursor / v0
- **使用方式**：直接复制 [prompt.md](prompt.md) 中的完整提示词粘贴至 AI 工具中即可生成完整代码。
