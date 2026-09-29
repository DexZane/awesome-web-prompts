---
id: nebula-hero
name: Nebula Hero
level: pages
category: space
type: Prompt
tech_stack:
  - "HTML5"
  - "CSS3"
  - "Vanilla JS"
  - "Variable Fonts"
  - "Video Background"
tags:
  - "Space"
  - "Hero"
  - "Design Unit System"
  - "Mask Reveal"
  - "Keyframes Timeline"
  - "Responsive"
  - "Glassmorphism"
recommended_ai:
  - "Claude Fable 5.1"
  - "GPT-6 Astra"
  - "Gemini 3.8 Flash"
  - "Claude Code"
  - "Cursor"
description:
  zh: "Orbit 太空探索全屏英雄落地页——1563×1006 刚性 --u 度量系统、环行星 SVG 矢量图形、9s 循环星空视频、双行文本遮罩揭示与 1.7s 入场动画"
  en: "Orbit space product full-viewport hero landing page featuring a rigid 1563×1006 --u scaling system, ringed planet vector SVG, 9s looping nebula video, dual-line text mask reveal, and a 1.7s choreographed entrance timeline"
preview: ""
author: Community
source_url: ""
---

# Nebula Hero — Orbit Space Landing Page

> 虚构太空产品 "Orbit" 沉浸式全屏非滚动 Hero 落地页，基于 1563×1006 严格参考测量的 `--u` 刚性缩放系统、纯黑天空渐变、行星星云视频背景与两行文字遮罩入场动画。

## [简介]

Nebula Hero 是一个完全自包含的单文件网页（零构建工具、无外部前端框架、单内联 `<style>` 与内联 `<script>`），专为空间探索与宇宙科技产品 "Orbit" 定制。

视觉主体由上半部分的纯黑夜空与下半部暗色陨石环状行星、薄荷绿火焰状星云、穿梭卫星与微光群星构成。页面元素基于基准参考像素（1563×1006）通过单一 CSS 变量 `--u` 统一缩放，保证在任意视口与超宽屏幕比例下保持刚性比例与视觉构图。

## [核心技术]

- **刚性设计单位系统 (`--u`)**：
  ```css
  --u: max( min(calc(100vw / 1563), calc(100vh / 460)), 0.80px );
  ```
  所有字号、间距、圆角、位移和边框均通过 `calc(N * var(--u))` 计算，视口缩放如同矢量画板。
- **分层视觉架构**：
  `div.frame` (isolate) 包含底层 9 秒循环超清星空视频与静止海报兜底图、轻度半透明遮罩层 (`.veil`)、顶层导航栏 (`header.bar` z:3) 以及中央英雄容器 (`div.screen` z:2)。
- **精准矢量行星徽标**：
  通过 5 步 SVG 矢量图元叠加（后环弧、黑色缝隙遮蔽圆、行星实体球、黑色前环切割弧、白色高光前环弧），零光栅化失真呈现立体环状星球。
- **10 阶段入场编排动画 (1.69s Timeline)**：
  页面在 `document.fonts.ready` 触发后，通过两级 `requestAnimationFrame` 激活动画。从品牌 Logo、导航项错落淡入、药丸标签缩放飞入、双行文字垂直掩膜滑动揭示到 CTA 按钮最终就位，全程耗时约 1.7 秒。
- **自适应移动端菜单与视频容错唤醒**：
  移动端自动折叠为汉堡菜单与模糊毛玻璃面板；视频播放脚本支持 `canplay`、`visibilitychange` 以及首次手势事件多重兜底唤醒。

## [使用说明]

- **[推荐]AI工具**：Claude Fable 5.1 / GPT-6 Astra / Cursor / Claude Code
- **使用方式**：直接复制 [prompt.md](prompt.md) 中的完整提示词粘贴至 AI 编程助手即可生成完整单文件落地页。
