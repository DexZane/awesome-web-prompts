---
id: atrium-mtl
name: Atrium MTL
level: pages
category: art
type: Prompt
tech_stack:
  - "HTML5"
  - "CSS3"
  - "Vanilla JS"
  - "Web Animations API"
  - "CSS Keyframes"
  - "SVG"
tags:
  - "Art"
  - "Museum"
  - "Brutalism"
  - "Hero"
  - "Infinite Scroll"
  - "Mosaic Grid"
  - "Responsive Architecture"
  - "WAAPI"
recommended_ai:
  - "Claude Fable 5.1"
  - "GPT-6 Astra"
  - "Gemini 3.8 Flash"
  - "Claude Code"
  - "Cursor"
description:
  zh: "ATRIUM MTL 蒙特利尔野兽派建筑与艺术摄影档案馆——悬浮白卡导航栏、超大粗衬线文字遮罩揭示、六列错位无缝垂直滚动漫游马赛克与 WAAPI 精准入场交接系统"
  en: "ATRIUM MTL Montreal brutalist architecture and photography archive full-viewport hero featuring floating white header card, oversized typography text-mask reveal, 6-column staggered seamless infinite mosaic marquee, and choreographed WAAPI handoff"
preview: ""
author: Community
source_url: ""
---

# Atrium MTL — An Archive of Light Cast in Stone

> 蒙特利尔野兽派建筑摄影档案馆全视口零滚动 Hero 落地页。纯原生单文件自包含架构，悬浮白卡倒圆角顶部导航栏、超大号 Archivo 粗体四行大标题遮罩渐显、右侧三至六列错位无缝交替垂直循环滚动的马赛克图块矩阵，配合 Web Animations API（WAAPI）高阶物理缓动与精准动效交接。

## [简介]

ATRIUM MTL 是一款兼具画册质感与前沿工业美学的全视口无滚动艺术摄影档案落地页。整页基于 100svh 视口锁定排版，左侧排布极具视觉张力的四行超大 Archivo 粗体标题、精致正文叙事与药丸型 Tickets 购票行动号召；右侧则构建了交错纵向无限循环滚动的图块马赛克矩阵，交织呈现高清晰度摄影原片、色块图腾与微粒胶片噪点纹理。

页面创新地实现了「CSS @keyframes 循环漫游 + WAAPI 阶梯物理缓动交接」架构：在页面初次加载时，通过 EXPO / QUART / QUINT 曲线完成导航栏俯冲、标题逐行拔地而起与马赛克列入场缓动；在 2.1 秒精准交接点无缝启动 CSS 匀速垂直循环走马灯，全程零丢帧、零卡顿。

## [核心设计与特性]

- **交错无缝垂直走马灯矩阵 (Staggered Infinite Marquee Mosaic)**：
  - 由主列 `.c1`、`.c2`、`.c3` 以及超宽屏自适应拓展列 `.x1`、`.x2`、`.x3` 构成的六列图块阵列；
  - 奇偶列采用相反方向滚动（`colDown` 与 `colUp`，速度为精准测定的 0.342 个卡片高度/秒，14.6s 无缝回环）；
  - JS 自动对每列 5 个基础图块执行一次克隆复制，配合 `translate3d(0, -50%, 0)` 实现数学级精准的无缝衔接。
- **高阶摄影图块裁剪算法 (Numeric Photo Crops & Grain Textures)**：
  - 对核心高光摄影图块采用高精度负边距与缩放百分比裁剪（如 `.f-sculpt` 124.19% × 112.57%、`.f-sil` 139.29% × 126.37%），重现严苛的杂志封面级画框排版；
  - 纯色图块叠加透明度 0.13 的矢量胶片颗粒纹理（Grain SVG），暗色图块通过 `mix-blend-mode: screen` 注入胶片质感。
- **WAAPI 阶梯物理入场与动效交接 (Choreographed Entrance & Handoff)**：
  - 导航卡片自上而下俯冲就位（0.95s EXPO 缓动）；
  - 四行大标题 `.ln` 依托 `clip-path` 与 `overflow: hidden` 逐行拔地升起（stagger 85ms）；
  - 走马灯列在 2.10 秒内执行平滑入场，到达终点瞬间无缝解冻并移交控制权至 CSS 循环动画，杜绝突兀跳帧。
- **五段式自适应响应状态机 (Five-Tier Responsive Architecture)**：
  - 纯 CSS `--mode` 变量控制，JS 镜像注入 `desk`、`mob`、`mob-l`、`tab`、`tab-l`、`tab-p` 类名；
  - 桌面端（`desk`）：1280×800 基准画布等比铺满（`--s` 缩放，超宽屏动态补足 1~3 列图块）；
  - 平板端（`tab-l` / `tab-p`）：支持横屏左右分栏与竖屏三层网格排布，保留完整实用工具栏；
  - 移动端（`mob` / `mob-l`）：单列 Flex 垂直流式布局，抽屉式折叠导航面板，安全区动态适配。

## [使用说明]

- **[推荐]AI工具**：Claude Fable 5.1 / GPT-6 Astra / Cursor / Claude Code
- **使用方式**：直接复制 [prompt.md](prompt.md) 中的完整提示词粘贴至 AI 编程助手即可生成完整单文件落地页。
