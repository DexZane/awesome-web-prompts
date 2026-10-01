---
id: wayfinder
name: Wayfinder
level: sections
category: footer
type: Prompt
tech_stack:
  - "HTML5"
  - "CSS3"
  - "Vanilla JS"
  - "Video Background"
  - "Google Fonts"
tags:
  - "Footer"
  - "Engraved Illustration"
  - "Video Background"
  - "Mix Blend Mode"
  - "Multiply Blending"
  - "Compass Logo"
  - "Responsive"
  - "No Scroll"
recommended_ai:
  - "Claude Fable 5.1"
  - "GPT-6 Astra"
  - "Gemini 3.8 Flash"
  - "Claude Code"
  - "Cursor"
description:
  zh: "Meridian 单屏复古版画全视口页脚——石拱高架桥与马车绿墨手绘视频背景、mix-blend-mode: multiply 无缝融合、Fraunces 衬线字标、罗盘矢量 Logo 与响应式导航网格"
  en: "Meridian single-screen vintage engraved illustration full-viewport footer featuring dark green viaduct & stagecoach looping video, multiply blend mode paper integration, Fraunces serif wordmark, compass SVG mark, and responsive nav grid"
preview: ""
author: Community
source_url: ""
---

# Wayfinder — Meridian Engraved Illustration Footer

> 沉浸式复古绿墨铜版画风格全视口页脚，单文件无依赖，无任何纵向与横向滚动条。顶层居中排布双圈罗盘 Logo、Fraunces 衬线字标与点线分隔导航，底层无缝融入石拱桥与三马驰骋马车循环手绘蚀刻视频。

## [简介]

Wayfinder（Meridian）是一款高度自包含的单文件全视口页脚组件（零构建工具、无外部前端框架、单内联 `<style>` 与内联 `<script>`），仅引入 Google Fonts（Fraunces 与 Inter）。

核心视觉机制是将白底暗绿墨水手绘视频（石拱高架桥与疾驰马车）通过 `mix-blend-mode: multiply` 压印于淡青灰鼠尾草纸张背景（`#ebeee7`）之上，去除任何光栅化锯齿与视频矩形边界，使视频与页面背景浑然一体，宛若活过来的古典铜版插画。

## [核心设计与特性]

- **正片叠底版画纸张融墨 (Multiply Blend Mode Integration)**：
  - 视频白底与 `--paper: #ebeee7` 通过 `mix-blend-mode: multiply` 融合，纯白自动隐形，墨线深沉锐利；
  - 负边距设计（`margin-top: -12vh; margin-top: -12svh;`）将视频空白天空部分向上叠衬在文字下方，马车行径线路严密受控在版权行之下。
- **DOM 语义与视觉次序解耦**：
  - DOM 树中 `<video>` 置于最前优先流式加载，内容容器 `div.footer__content` 置于后；
  - CSS Flexbox 通过 `order: 1`（文本）与 `order: 2`（视频）实现完美的视觉倒置与无障碍阅读顺序。
- **高精矢量八向罗盘徽标**：
  - 内联 64×64 SVG 双圆环 8 向罗盘，对角 4 支针 85% 不透明度纯色填充，正向 4 支针半实半虚阴影分割雕刻感，中心微型纸色避位点。
- **左向划线平滑微动效 (ScaleX Draw-in)**：
  - 导航链接下划线采用伪元素 `::after` 配合 `transform: scaleX(0)` 与 `transform-origin: left`，hover 与 focus 时从左至右自然延展绘制。
- **响应式断点与无滚动几何保真**：
  - 桌面端：行内 flex 布局结合圆点实体分隔符；
  - 平板端（≤900px）：自动隐藏小圆点，切换为紧凑优雅的 4×2 网格，扩大触控热区；
  - 手机端（≤600px）：无缝重构为 2×4 网格，视频通过 `flex: 1` 与 `object-fit: cover` 自适应拉满下方空间；
  - 在各种视口（1280×720、1920×1080、768×1024、390×844 等）下均保证 `scrollHeight === clientHeight`，零滚动溢出。
- **性能与减弱动画策略**：
  - 包含 `IntersectionObserver` 视口可见性控制（移出暂停、进入播放），并在检测到 `prefers-reduced-motion` 时自动注销 autoplay 与过渡。

## [使用说明]

- **[推荐]AI工具**：Claude Fable 5.1 / GPT-6 Astra / Cursor / Claude Code
- **使用方式**：直接复制 [prompt.md](prompt.md) 中的完整提示词粘贴至 AI 编程助手即可生成完整单文件落地页。
