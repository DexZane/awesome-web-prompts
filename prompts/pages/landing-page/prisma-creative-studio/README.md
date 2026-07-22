# Prisma Creative Studio

> 电影质感暗黑系创意工作室落地页，Framer Motion 丝滑动画，SVG 噪点纹理，温暖奶油色调。

## 效果预览

![](image.png)

## 简介

为创意工作室 **Prisma** 设计的三段式落地页（Hero / About / Features）。整体呈现暗黑、情绪化且极具电影感的视觉风格，辅以温暖的奶油色（Warm Cream）作为主色调。广泛应用了 Framer Motion 提供的文字逐词上浮（WordsPullUp）、滚动文字显影（Scroll-linked Opacity）以及卡片交错入场动画，结合原生的 SVG 噪点背景，质感拉满。

### 亮点特性

- **电影质感暗黑调色**：全局黑底（#000），卡片分层渐变（#101010 / #212121），搭配定制奶油主色（#DEDBC8）
- **SVG 原生噪点纹理**：通过 `feTurbulence` 滤镜内联生成的噪点图案，作为 Hero 视频蒙版和 Features 整体背景
- **复杂文本动画组件**：
  - **WordsPullUp**：巨型 Hero 标题，包含上标星号，逐词交错上浮
  - **WordsPullUpMultiStyle**：支持在同一段动画文本中混合使用不同字体（如斜体衬线字体和常规无衬线字体）
  - **Scroll-linked Opacity**：About 区域的介绍段落随滚动条逐字点亮
- **悬挂式胶囊导航**：顶部中置半圆形导航栏，极简布局
- **响应式网格与流式排版**：Hero 标题使用 `vw` 单位无限缩放（最高达 26vw），Features 卡片从单列平滑过渡到四列
- **精细交互细节**：按钮 Hover 时箭头随圆形容器放大，间距拉开

### 技术栈

- React 18 + TypeScript + Vite
- Tailwind CSS 3
- framer-motion（文本上浮、滚动显影、卡片交错入场）
- lucide-react（ArrowRight、Check 图标）
- Google Fonts（Almarai + Instrument Serif）

## 使用说明

- **推荐 AI 工具**：Cursor / Claude / ChatGPT
- **使用方式**：复制 [prompt.md](prompt.md) 中的提示词，在 AI 工具中生成完整项目代码
- **注意事项**：
  - 包含多个在线视频和图片资源，需要网络访问
  - 需要先初始化 Vite + React + TypeScript 项目，并安装 Tailwind CSS、framer-motion、lucide-react

## 来源

- 来源：互联网收集
