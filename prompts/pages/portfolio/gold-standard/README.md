---
id: gold-standard
name: Gold Standard
level: pages
category: portfolio
type: Prompt
tech_stack:
  - "HTML5"
  - "CSS3"
  - "Vanilla JS"
  - "Web Animations API"
  - "Video Background"
  - "Variable Fonts"
tags:
  - "Portfolio"
  - "Hero"
  - "Knockout Text"
  - "Focal Point Cover"
  - "Web Animations API"
  - "Video Mask"
  - "Trustpilot"
  - "Responsive"
recommended_ai:
  - "Claude Fable 5.1"
  - "GPT-6 Astra"
  - "Gemini 3.8 Flash"
  - "Claude Code"
  - "Cursor"
description:
  zh: "SOSCALE 黄金标准全视口英雄落地页——SVG 文字遮罩镂空视频背景、1280 刚性 --u 度量系统、JS 焦点锚定封面自适应算法、Web Animations API 阶梯起落入场动效"
  en: "SOSCALE gold standard full-viewport hero landing page featuring SVG evenodd text cutout video mask, rigid 1280 --u scaling system, focal-point video positioning algorithm, and Web Animations API choreographed entrance"
preview: ""
author: Community
source_url: ""
---

# Gold Standard — SOSCALE Hero Landing Page

> 顶级广告营销工作室 SOSCALE 全视口零滚动 Hero 落地页。纯原生单文件自包含架构，SVG 字母镂空透显高清循环视频、1280 基准设计单位系统 (`--u`)、戒指焦点（Focal-Point）数学拟合自适应算法与 Web Animations API 阶梯入场编排。

## [简介]

SOSCALE（Gold Standard）是一款兼具高奢时尚格调与前沿工程精度的全视口无滚动落地页。核心视觉以温润质感的女主角特写视频为底，顶部黑色色带中通过 `fill-rule="evenodd"` 的超大几何无衬线 SVG 字标镂空，让背景视频直接透过 "SOSCALE" 字母流动显示。

页面采用精密的微单位设计系统（基于 1280 宽画布，以 `--u` 统一控制位置与字距），配合底部的精准 Trustpilot 评级与自研焦点遮罩算法，在保持刚性美感的同时完美适配超宽屏、平板与折叠手机。

## [核心设计与特性]

- **SVG Evenodd 视频反向镂空 (Knockout Text Mask)**：
  - 黑色矩形中镂空开出 `S O S C A L E` 七个几何粗体字母，底层 1080p 视频在字形内部流动显示；
  - 覆盖 `.lift` 混合模式图层（`mix-blend-mode: screen`），提升字母内视频局部高光亮度。
- **动态戒指焦点封面算法 (Focal-Point Cover Algorithm)**：
  - 手指戒指簇（坐标 1041, 545）通过纯数学矩阵精确锁定在画布 x = 700u、色带下方 37.5% 视口高度处；
  - 在平板与手机端动态锁定手镯不遮挡下方文案（Bangles clamp），杜绝视频人物关键部位被裁切。
- **Web Animations API 阶梯入场 (Choreographed Entrance)**：
  - 7 个字母遮罩盖板（`.lid`）通过 `QUART` 贝塞尔曲线自底向上缩回（`scaleY: 1 → 0`），使视频由下而上、从左至右逐字注满；
  - 导航列、标语、双行遮罩文字（`clip-path: inset`）、淡紫 CTA 按钮（横向擦除）与 Trustpilot 星级徽标在 2.1 秒内依次优雅就位。
- **三段式响应式状态机**：
  - 桌面端（>1075px）：三列导航横向矩阵、单行排版、淡紫胶囊按钮；
  - 平板端（≤1075px 或矮屏 ≤538px）：双线汉堡菜单（展开平滑旋转为 X），导航向下拉出全黑延展层；
  - 手机端（≤560px）：标语独立居中，标题采用 `text-wrap: balance` 双行优雅折行，全流程 0 滚动条溢出。

## [使用说明]

- **[推荐]AI工具**：Claude Fable 5.1 / GPT-6 Astra / Cursor / Claude Code
- **使用方式**：直接复制 [prompt.md](prompt.md) 中的完整提示词粘贴至 AI 编程助手即可生成完整单文件落地页。
