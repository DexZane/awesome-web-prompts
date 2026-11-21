---
id: protein-bars
name: Protein Bars
level: pages
category: food-drink
type: Prompt
tech_stack:
  - "HTML5"
  - "CSS3"
  - "Vanilla JS"
  - "Three.js (WebGL)"
  - "MeshPhysicalMaterial"
  - "GPGPU Particle Storm"
  - "CSS Sprite Crop"
  - "Scroll-Driven Animation"
  - "Fly-to-Cart"
tags:
  - "Food & Drink"
  - "Protein Bar"
  - "Three.js"
  - "WebGL"
  - "3D Bar"
  - "Hero Carousel"
  - "Scroll Traveller"
  - "Shop Grid"
  - "Builder"
  - "Ingredient Storm"
recommended_ai:
  - "Claude Fable 5.1"
  - "GPT-6 Astra"
  - "Gemini 3.8 Flash"
  - "Claude Code"
  - "Cursor"
description:
  zh: "Stride 植物蛋白棒品牌四节全屏落地页——WebGL 3D 包装纸弧形轮播、一根 3D 棒全程穿越翻转/配料飓风/精确落卡，以及三件套组合购物构建器"
  en: "Stride plant protein bar 4-section landing page with a real-time 3D bar wrapper carousel, one travelling bar that flips through the inside section, storms through its own ingredients, and lands exactly on its shop card, plus a 3-pack builder"
preview: ""
author: Community
source_url: ""
---

# Stride — Plant Protein Bar Site with One Travelling 3D Bar

> Stride 是一个五风味植物蛋白棒品牌。页面以一根真实 WebGL 3D 包装棒为叙事主角，从弧形英雄轮播出发，单根棒以滚动驱动无缝穿越全部四节：弹入「内部」区域逐步翻转 180°、旋转穿越自身配料飓风、精确落点对应口味商店卡，并最终进入三件套组合购物建造器完成购买闭环。

## [效果预览]

<!-- 将效果截图放在本目录下，推荐命名为 preview.png -->
![效果预览](preview.png)

## [简介]

本页面是一套单文件、零构建依赖的高保真品牌落地页：

- **§1 英雄弧形 3D 轮播**：7 根实时 Three.js 包装棒按透视弧形排布，支持拖拽（鼠标 / 触摸）与甩动惯性、点击变换、← → 键盘控制和 3.2s 自动播放；风味切换时新颜色从中心棒后方以圆圈羽化扩散，标题字母分别以单字母交错进出动画切换；
- **§2 "内部"粘性剖析节**：一根棒粘性停留并在每步翻转 180°，依次展示正面艺术图、背面营养成分表、正面再现，第四步显示当前口味名；随后 20 颗配料碎片在深色背景上向外喷射一次，棒体同步旋转；
- **§3 商店网格**：五风味卡（3D 透视倾斜、悬停 + 点击反馈），旅行棒精确落到激活口味卡，扁平精灵自动隐藏；"+"触发飞入购物车动画；
- **§4 三件套构建器**：深色背景中三个轨道槽位，缩略图点选填槽，满额激活「加入购物车」批量飞出动画，并完成数量徽章弹跳计数。

## [核心设计与特性]

- **共享几何体 + 每风味独立纹理 (Shared Geometry, Per-Flavour Texture)**：
  - 包装棒正面用 `PlaneGeometry(1, BH, 30, 64)` 逐顶点计算密封褶皱（Crimp Band）和枕形鼓胀（Pillow Puff），单一几何体适配全部五个风味；背面 UV 镜像、三角形缠绕方向翻转；
  - 背面纹理由 JS Canvas 程序化绘制：口味色块填充 → 光泽渐变叠加 → Archivo Black 品牌字 → DM Mono 营养成分面板 → 配料表 → 伪条形码。
- **「旅行棒」三锚点插值 (Traveller: A → B → C)**：
  - A：弧上对应槽位的完整 3D 状态（位置、高度、倾角、浮动）；
  - B：`#inBar` 占位矩形的屏幕中心与尺寸，附加翻转角度 + 浮动摆动；
  - C：当前口味商店卡 `.pk` 的屏幕中心，跟随卡片悬停倾斜。
  - 每帧按 `easeInOut(p1)` 和 `easeInOut(p3)` 双阶段线性插值所有字段。
- **配料飓风 (Ingredient Storm)**：
  - 20 颗配料碎片仅喷射一次，不循环；70% 取当前口味的配料位图，30% 随机；每颗以极坐标轨道（半径 $r = (0.06 + s^{1.5} \cdot 0.95) \cdot R$）向外扩散，`opacity = sin(\pi s)` 实现自然淡出。
- **WebGL 渲染架构**：一块固定 `<canvas id="gl">` 覆盖整个视口（z-index 2），所有页面棒和旅行棒均绘制于此；`#inFront` 通过 JS 逐帧手动复现 `sticky` 行为（`position: fixed`，z-index 3）以突破粘性堆叠上下文限制。
