---
id: nature-portfolio
name: Nature Portfolio
level: pages
category: photography
type: Prompt
tech_stack:
  - "HTML5"
  - "CSS3"
  - "Vanilla JS"
  - "Web Animations"
  - "Canvas API"
tags:
  - "Photography"
  - "Portfolio"
  - "3D Sphere"
  - "Fibonacci"
  - "FLIP Animation"
  - "Lightbox"
  - "Video Intro"
  - "Drag to Rotate"
recommended_ai:
  - "Claude Fable 5.1"
  - "GPT-6 Astra"
  - "Gemini 3.8 Flash"
  - "Claude Code"
  - "Cursor"
description:
  zh: 野生动物摄影档案馆，Fibonacci 球体排布21张照片、16vh 滚动推进镜头、FLIP 灯箱、全屏菜单与自定义光标
  en: "Wildlife photography archive with Fibonacci photo sphere, 16vh scroll dolly, FLIP lightbox, flat grid, fullscreen menu, and custom cursor"
preview: ""
author: Community
source_url: ""
---

# Nature Portfolio

> 野生动物摄影档案馆，Fibonacci 球体排布 21 张照片、16vh 滚动推进镜头、FLIP 灯箱、全屏菜单与自定义光标。

## [效果预览]

<!-- 将效果截图放在本目录下，推荐命名为 preview.png -->
![效果预览](preview.png)

## [简介]

Nature Portfolio 是一款为野生动物摄影师 Ethan Vale 打造的高精度黑色档案馆落地页。采用单文件原生架构，零依赖、无构建工具。核心视觉是 **Fibonacci 球体**：21 张摄影作品以黄金角算法均匀分布在三维球面，标题"I See Through the Wild"通过 CSS `margin-left: calc(var(--hw) / -2)` 与 JS 逐帧反向旋转精确居中于球心。滚动驱动 camZ 推进（16vh 行程），拖拽赋予球体动量惯性。灯箱采用 FLIP 动画从卡片位置飞出/收回，缩略图经 Canvas 降采样后以 Blob URL 注入，全画幅 PNG 异步懒加载。视差感知（深度着色）由逐帧旋转单位向量 Z 分量驱动。

## [核心设计与特性]

- **Fibonacci 球体排布 (Fibonacci Sphere Distribution)**：
  - 21 张照片以黄金角 `GA = π*(3-√5)` 均匀分布，无极点簇聚；
  - 每张卡片以 `translate3d(x*R, -y*R, z*R) rotateY(lon) rotateX(lat)` 定位，父容器 `#world` 是 `top:50% left:50%` 的零尺寸锚点；
  - 球半径 R 依视口短轴动态计算，小于 20px 的 resize 抖动被忽略。

- **标题居中锁定 (Headline Center Lock)**：
  - `#headline` 是 `#orb` 的兄弟节点，同挂载于同一零尺寸锚点；
  - `margin-left: calc(var(--hw) / -2)` 取代 `margin-left:-50%`（父宽度为0时后者无效）；
  - `.inner` 的 `translateY(-50%)` 仅写于 CSS，JS 每帧仅向 `#headline` 写入 `rotateX(-sx) rotateY(-sy) translateZ(R*0.62)` 抵消世界旋转。

- **16vh 滚动推进 (Scroll Dolly)**：
  - 文档高度 `116vh`，可滚动距离恰好 16vh；
  - `camZ` 以 `0.075` 弹性系数趋近目标，最大 `min(64, R*0.12)`；
  - 滚动时标题渐隐（`opacity: 1 - p*0.55`），超出时 `scrollTo(0, max)` 钳制。

- **深度着色引擎 (Depth Shading)**：
  - 每帧将单位向量按世界旋转旋转，读取 Z 分量 zf；
  - `dim = shade * (1 - base)`，`base = 0.14 + 0.86*(zf+1/2)^0.85`；
  - 仅在值变化 > 0.004 时写入 CSS 变量 `--d`，避免无效 DOM 写入。

- **FLIP 灯箱 (FLIP Lightbox)**：
  - 点击卡片：读取 plate 和卡片 rect，注入反向 transform（从卡片位置），下一帧清除，CSS 动画归位；
  - 关闭：plate 飞回源卡片位置后，640ms 后以 `transition:none` 清理残留 transform；
  - 全画幅 `.png` 在 thumb 显示后异步加载，以 `openToken` 防止过期替换。

- **Canvas 缩略图降采样 (Canvas Decode)**：
  - `_min.webp`（~2528px）以 Canvas 降采样至设备档（420/520/640/760px），导出为 WebP Blob；
  - 同一 Blob URL 同时注入球体卡片与网格视图；
  - 头像降至 160px 宽。

## [技术栈]

- 单文件原生 HTML5 / CSS3 / JavaScript（零依赖、无构建）
- Canvas API（缩略图降采样 + WebP Blob URL）
- CSS 自定义属性驱动的深度着色与响应式排版
- Pointer Events API（含触控手势识别与 pointerCapture）
- requestAnimationFrame 相机循环 + 动量惯性系统

## [使用说明]

- **[推荐]AI工具**：Claude Fable 5.1 / Claude Code / Cursor
- **使用方式**：直接复制 [prompt.md](prompt.md) 中的完整提示词粘贴至 AI 编程助手中即可生成完整单文件生产就绪代码。
