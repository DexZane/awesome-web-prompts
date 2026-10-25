---
id: reelmark
name: Reelmark
level: pages
category: creator-platform
type: Prompt
tech_stack:
  - "HTML5"
  - "CSS3"
  - "Vanilla JS"
  - "Web Animations API"
  - "SVG Path Clipping"
  - "Single Video Atlas Grid"
  - "Physics Momentum Carousel"
tags:
  - "Creator Platform"
  - "Hero"
  - "Cylinder Curved Carousel"
  - "Momentum Drag"
  - "Video Atlas"
  - "Hand-drawn Doodles"
  - "Soft Mint Studio"
recommended_ai:
  - "Claude Fable 5.1"
  - "GPT-6 Astra"
  - "Gemini 3.8 Flash"
  - "Claude Code"
  - "Cursor"
description:
  zh: "Reelmark 短视频创作者交易市场全视口落地页——1440×1080 绝对度量、内圆柱三维曲面微积分卡片轮播、单视频 5×2 图集切片复用与惯性拖拽流体动效"
  en: "Reelmark short-form video creator marketplace full-viewport hero featuring 1440x1080 unit metrics, internal cylinder curved carousel, single-video 5x2 sprite atlas, and momentum fling physics"
preview: ""
author: Community
source_url: ""
---

# Reelmark — Captivate Crowds with Snackable Reels

> 专为短视频创作者与品牌交易市场设计的单文件全视口无滚动 Hero 落地页。温暖薄荷工作坊视觉调性（#F5F8EF 米白画幅、#08482D 浓郁森林绿、#DAE7C7 浅薄荷绿徽章），1440×1080 纯度量系统，7 屏/10 卡片内圆柱形三维曲面排列、单视频 5×2 动态切片拼接渲染技术，以及带有手绘墨水笔迹与物理动量抛掷（Momentum Fling）的无缝循环卡片轮播。

## [简介]

Reelmark 是一款专注于短平快带货视频与创作者商业变现的交易平台 Landing Hero。整屏摒弃了传统臃肿的栅格与外置轮播库，通过极致纯粹的几何数学公式与原生的 Web Animations API，构建了一个仿佛置身于透明圆柱体内壁视角的弧形动态展示廊。

中心卡片保持端正的 170×280 竖向矩形，随着卡片滑向两侧边缘，卡片中心被非线性外推，宽度动态扩张至 218u，外侧垂直边高度拉伸至 372u，形成强烈的近大远小与弧形环抱深度感。四周点缀着带有动态描边入场的手绘涂鸦连击线（"//"）、"Be seen with clips" 飞流弧线箭头与 "Zero cost" 胶囊指引，充满艺术工作室的精致手作温度。

## [核心设计与特性]

- **1440×1080 单标度 Contain 设计度量系统 (--u Unit Scaling)**：
  - 全局建立 `--u = min(100vw / 1440, 100vh / 1080)` 核心尺度基准；
  - 顶栏、字号、间距、按钮、徽章及卡片微积分形变全面采用 `calc(N * var(--u))` 绝对锚定，在宽屏、带鱼屏或视窗缩放时保持一比一锁轴构图，边缘绝无横向纵向滚动条。
- **圆柱内壁透视几何与逐帧圆角四边形算法 (Cylindrical Quad Calculation)**：
  - 基于卡片中心相对屏幕中轴（720u）的归一化距离 $d = |x - 720| / 706$；
  - 卡片宽度动态增长：$W = 170 + 48 \cdot d^2$；卡片间距通过二次幂外推修正公式 $x = 720 + t \cdot (1 + 0.083 \cdot (t / 706)^2)$ 实现边缘均匀透视间距；
  - 卡片两侧边缘高度各自按照自身距离计算 $H = 280 + 92 \cdot q^{2.6}$，使外边缘永远高过内边缘；
  - 采用逐帧计算的 `clip-path: path(...)` 算法，在不规则梯形四边上生成精确平滑的 15u 圆角。
- **单视频 5×2 图集矩阵渲染架构 (Single Video 10-Tile Sprite Atlas)**：
  - 10 张卡片完全共用同一个 1280×720 (16:9) 循环视频源与高清 WebP 海报，网络请求仅发起一次，显存占用降低 90%；
  - 通过 CSS 与数学矩阵计算每个 Tile（384×540，0.7111 宽高比）在卡片内的居中 Cover 视口裁切，并在每一帧实现绝对时间戳对齐与平滑首帧淡入。
- **物理惯性拖拽与 Web Animations 长时钟 (Momentum Physics & WAAPI Clock)**：
  - 恒定 50u/s 自主右向左平滑漫游，支持指针与触控 1:1 抓取拖拽（`grab` / `grabbing`）；
  - 松手后触发 95%/s 指数级速度衰减动量滑行，阻尼自然归零后平稳恢复匀速巡航；
  - 采用持续时长 $10^9$ 毫秒的 Web Animations 真实时钟驱动，彻底规避前后台标签页休眠带来的瞬时位置跳跃。
- **手绘涂鸦笔刷渐显与多阶渐进响应式体系 (Hand-drawn Doodles & Mobile Adaptation)**：
  - 标语注释搭配 Caveat 手写字体与 SVG 矢量箭头，入场时利用 `stroke-dasharray` 动态勾勒描边路径；
  - 手机端（≤820px）自动无缝切换为 640 基准窄屏模式，顶栏自动精简，卡片轮播在 250px 高度安全带内保持完全相同的曲面滚动与拖拽交互。
