---
id: parallax
name: Parallax
level: pages
category: portfolio
type: Prompt
tech_stack:
  - "HTML5"
  - "CSS3"
  - "Vanilla JS"
  - "Web Animations API"
  - "SVG Arcs"
  - "Dual Scale Metric System"
tags:
  - "Portfolio"
  - "Hero"
  - "Parallax"
  - "Web Animations API"
  - "Dual Scale"
  - "SVG Rings"
  - "Full Viewport"
recommended_ai:
  - "Claude Fable 5.1"
  - "GPT-6 Astra"
  - "Gemini 3.8 Flash"
  - "Claude Code"
  - "Cursor"
description:
  zh: "PARALLAX 全视口作品集落地页——1280×800 双重缩放系统（--sc / --u）、12 条高精度圆弧环线 SVG 遮罩层、WAAPI 物理出场编排动效与响应式微交互"
  en: "PARALLAX full-viewport portfolio landing page featuring 1280x800 dual scale system (--sc / --u), 12 precision SVG arc ring lines, choreographed WAAPI entrance timeline, and responsive micro-interactions"
preview: ""
author: Community
source_url: ""
---

# PARALLAX — Every spark is a fresh impact

> 顶级创意艺术总监与设计机构全视口无滚动 Hero 落地页。纯原生单文件自包含架构，静止雕塑感人像底图、1280×800 双重比例度量系统（场景全景覆盖 `--sc` 与 UI 元素边界自适应 `--u`）、12 条精准数学曲率 SVG 开放圆弧光环、WAAPI 物理入场动效编排与纯粹微交互。

## [简介]

PARALLAX 是一款聚焦先锋视觉冲击与极致排版美学的单屏全视口落地页。核心视觉呈现身着雕塑感黑色立领的女性特写，在深灰蓝纯色墙壁前凝视上方，画面静谧且充满张力。12 条精密计算的半透明白色开环曲线环绕画面核心，与中央巨大的 "PARALLAX" 品牌大字及四周悬浮的极简单色排版区块构建出极具深度的视觉空间。

页面完全抛弃传统滚动条，采用自适应双刻度度量体系：底图、环线与居中品牌标题基于 `--sc`（等效 `object-fit: cover` 的缩放基准）锁定居中渲染；而顶部黑底悬浮导航栏、双色切换行动号召按钮（"See campaign" / "View campaigns"）与四周边缘标语则基于 `--u`（`contain` 缩放基准）稳固吸附于屏幕边角，兼顾大屏视觉震撼与移动端精准触控。

## [核心设计与特性]

- **双重比例度量系统 (Dual-Scale Metric System)**：
  - 场景层（Scene）：采用 `--sc = max(100vw / 1280, 100vh / 800)`，实现类似 `object-fit: cover` 的无缝等比铺满；
  - 交互界面层（UI Chrome）：采用 `--u = clamp(0.72px, min(100vw / 1280, 100vh / 800), 3px)`，确保导航、四角文字与按钮牢牢锚定在屏幕物理边距。
- **12 条精密数学曲率 SVG 环线 (12 Precision Mathematical Arcs)**：
  - 12 条完全独立的非闭合弧线路径（3 条左弧、3 条右弧、6 条中轴弧），严格以精确到小数点后两位的 Bezier 曲线定义；
  - 入场时通过 Web Animations API 动态计算每条路径的 `getTotalLength()`，从弧线中点向两侧以高阶贝塞尔（`cubic-bezier(.62,.04,.22,1)`）优雅绽开。
- **WAAPI 阶梯物理编排与彻底解绑 (Choreographed Entrance & Clean Teardown)**：
  - 标题字母错落上浮（stagger 38ms）、导航栏中央双向横推展开（800ms panel wipe）、四角文案分行遮罩拔地升起、按钮从左向右横向擦除揭示；
  - 字体加载与图片就绪（`document.fonts.ready` + `img.decode()`）触发硬起步；
  - 所有补间动效在同一帧彻底结算并清除 `.px-intro` 盖板，归还绝对干净的纯静态 CSS 渲染状态。
- **严格可访问性与极简交互 (Accessibility & Micro-Interactions)**：
  - "PARALLAX" 单词对屏幕阅读器输出平整语义，字间距微调（Optical Kern）通过隐藏字母的独立属性精准实现；
  - 按钮采用黑底白字反色渐变翻转；键盘导航具有纯白 2px 轮廓与 3px 偏移；
  - 完美支持 `prefers-reduced-motion` 瞬间直出静态视觉。

## [使用说明]

- **[推荐]AI工具**：Claude Fable 5.1 / GPT-6 Astra / Cursor / Claude Code
- **使用方式**：直接复制 [prompt.md](prompt.md) 中的完整提示词粘贴至 AI 编程助手即可生成完整单文件落地页。
