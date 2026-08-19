# Cyber Layer

> 单文件无依赖网络安全暗黑单屏落地页，双层调色 LUT 滤镜视频背景、Space Grotesk 字体排版与 WAAPI 逐帧进场动效。

## 效果预览

<!-- 将效果截图放在本目录下，推荐命名为 preview.png -->
![效果预览](preview.png)

## 简介

Cyber Layer 是一个专注于网络安全与系统层韧性的单文件自包含（Single self-contained `index.html`）全屏暗黑落地页。无依赖、无框架、无滚动。结合了右侧全景视频氛围渲染与 SVG ComponentTransfer 矩阵调色滤镜、左侧极简硬朗排版、直角红色行动号召按钮（Sharp Red CTAs）以及全套精确到毫秒的 Web Animations API (WAAPI) 进场编排。

## 核心设计与特性

- **单文件无框架架构**：纯 HTML/CSS/JS 交付，无滚动条单视口强制锁定。
- **三层画布自适应缩放系统 (`--s`)**：采用参数化画布缩放（Desktop 1505×700 / Tablet 900×1200 / Phone 430×620）。
- **SVG 矩阵色彩映射滤镜 (`#grade` / `#grade2`)**：通过 `feComponentTransfer` 对背景视频进行电影级 LUT 调色。
- **硬核无圆角直角美学**：红色直角矩形按钮、十字准星 SVG Logo、极窄分割线。
- **毫秒级 WAAPI 进场排期**：页面加载时通过 `Element.animate` 执行逐元素错落显现，完成时自动释放。

## 技术栈

- 原生 HTML5
- 原生 CSS3（CSS 变量、计算缩放系统与 SVG Filter 混合）
- 原生 JavaScript（WAAPI 动画排期与视频同步控制）

## 使用说明

- **推荐 AI 工具**：Claude 3.5 Sonnet / Cursor / v0
- **使用方式**：直接复制 [prompt.md](prompt.md) 中的完整提示词粘贴至 AI 工具中生成纯净单文件代码。
