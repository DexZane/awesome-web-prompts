---
id: logistics-freight
name: Logistics Freight
level: pages
category: supply
type: Prompt
tech_stack:
  - "HTML5"
  - "CSS3"
  - "Vanilla CSS"
  - "Video Background"
  - "SVG Icons"
  - "Font Metrics Override"
tags:
  - "Supply Chain"
  - "Logistics"
  - "Freight"
  - "Hero"
  - "Video Background"
  - "Mirrored Layout"
  - "Font Metrics Override"
  - "Responsive"
recommended_ai:
  - "Claude Fable 5.1"
  - "GPT-6 Astra"
  - "Gemini 3.8 Flash"
  - "Claude Code"
  - "Cursor"
description:
  zh: "Logistics Freight 现代货运物流全视口英雄落地页——鸟瞰货运列车全屏视频背景、@font-face 紧凑无衬线字体度量修正、沿列车中轴对称镜像排版与 1.8 秒无回环平滑入场动效"
  en: "Logistics Freight modern supply chain full-viewport hero landing page featuring aerial freight train video background, @font-face font-metric overrides, train-axis mirrored dual feature layout, and 1.8s single entrance animation"
preview: ""
author: Community
source_url: ""
---

# Logistics Freight — Modern Supply Chain Hero Landing Page

> 现代货运物流与供应链管理全视口零滚动 Hero 落地页。纯原生单文件自包含架构，鸟瞰重载集装箱货运列车穿越黑色煤炭原野的 4K 循环视频，沿列车纵向轨道中轴对称镜像分布双侧特性板块，配合精密 `@font-face` 字体度量覆盖与 1.8s 纯净单次入场动效。

## [简介]

Logistics Freight 是一款聚焦现代重工业多式联运与端到端供应链可见性的全视口无滚动落地页。核心视觉以鸟瞰货运列车沿画面中央笔直穿行的超高清视频为底，顶部配置高对比度渐变遮罩层（Tint Overlay），确保中央文本与双侧特性卡片在明暗交替的复杂地形视频背景上清晰易读。

页面采用 1280×800 基准刚性缩放舞台（`--s` 与 `--cover`），严格按照列车垂直中轴线（x = 640px）向左右两侧镜像排布：左侧对齐展示「单一对接窗口（One point of contact）」及经纬网地球矢量图标，右侧对齐展示「全链条可见性（Full supply chain visibility）」及堆叠集装箱矢量图标，完美诠释现代物流的秩序感与工业美学。

## [核心设计与特性]

- **中轴对称镜像布局 (Train-Axis Mirrored Dual Feature)**：
  - 核心排版严格围绕画面中央货运列车行驶轨道中轴线展开；
  - 左侧特性区块（`.f-left`）文字右对齐、图标靠内侧；右侧特性区块（`.f-right`）文字左对齐、图标靠内侧；
  - 即使在平板垂直排版与移动端单列重构下，依然保持独特的镜像不对称秩序，坚决避免粗暴居中。
- **字体度量覆盖体系 (Font-Metrics Override)**：
  - 通过 `@font-face` 为 Display 与 UI 字体注入 `ascent-override: 99.9% / 95%`、`descent-override: 20.1% / 22.5%` 与 `line-gap-override: 0%`；
  - 彻底规避不同系统字体基线漂移与行高溢出问题，保证在各平台渲染像素级完全一致。
- **工业级矢量图腾与印章 (Custom Industrial SVG Assets)**：
  - 中央底部橙色指引徽标（`.mark`）：带虚线圆环与定位路径的点缀印章；
  - 左侧经纬网地球图标（Globe Icon）：带虚线外环与经纬网切片遮罩的极简工业矢量图；
  - 右侧集装箱货柜图标（Stacked-Containers Icon）：三层交错堆叠集装箱与门锁格点精确定位。
- **1.8秒单次入场动效 (One-Time Choreographed Entrance)**：
  - 在 `@media (prefers-reduced-motion: no-preference)` 下执行阶梯入场：眉标升起（`riseIn`）、四行大标题逐行切片展开（`lineIn`，0.28s ~ 0.55s 延迟）、中央印章缩放就位（`markIn`）、双侧卡片向内滑入（`blockInL` / `blockInR`）；
  - 入场结束后全场元素静止，除底层列车背景视频外无任何死循环动效与多余视觉干扰。
- **三端多式响应系统 (Tri-Mode Responsive Reflow)**：
  - 桌面宽屏（>610px 且横屏）：基于 1280×800 绝对坐标舞台执行等比缩放（`--s`），保持画幅黄金比例；
  - 平板竖屏（≥610px 且宽高比 ≤1:1）：Stage 切换为三列 Grid 布局（`1fr var(--rail) 1fr`），中间预留列车铁路通道，双侧特性卡片跨列镜像排布；
  - 手机窄屏（≤609px）：Stage 切换为单列六行 Grid，特性卡片解除水平排布但依然保持左右各自对齐与内侧图标视觉锚点，适配 100dvh 与动态安全区。

## [使用说明]

- **[推荐]AI工具**：Claude Fable 5.1 / GPT-6 Astra / Cursor / Claude Code
- **使用方式**：直接复制 [prompt.md](prompt.md) 中的完整提示词粘贴至 AI 编程助手即可生成完整单文件落地页。
