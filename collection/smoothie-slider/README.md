---
id: smoothie-slider
name: Smoothie Slider
scope: page
category: brand-lifestyle
format: prompt
tech_stack:
  - HTML5
  - CSS3
  - Vanilla JS
  - CSS Background Sprite Crop
  - Custom Parallax Slider
  - Google Fonts
tags:
  - Food & Drink
  - Smoothie Slider
  - Product Hero
  - CSS Sprite Crop
  - Parallax Animation
  - Measured Panel Wipe
  - Full Viewport
recommended_ai:
  - Claude Fable 5.1
  - GPT-6 Astra
  - Gemini 3.8 Flash
  - Claude Code
  - Cursor
description:
  zh: "Blendy 纯天然果汁奶昔四风味全屏轮播 Hero 落地页——马卡龙平铺色块、雪碧图精准无缝切片、实测面板遮罩擦除与层级视差进场"
  en: "Blendy real fruit smoothie 4-flavour full-viewport hero slider featuring pastel backdrops, CSS sprite background crops, measured panel wipe transitions, and parallax layers"
preview: ""
author: Community
source_url: ""
---

# Blendy — Smoothie Flavour Slider Hero

> Blendy 是一个虚构的纯天然鲜果奶昔品牌。本页面为其打造的单屏全视口（Full-viewport）产品轮播落地页：四款招牌风味（Berry 浆果、Kiwi 猕猴桃、Banana 香蕉、Strawberry 草莓）各自以纯正马卡龙冰淇淋纯色铺满屏幕，巨幅白色风味英文字体悬浮于中央奶昔瓶后方，真实切块水果悬浮在瓶体四周不同深度，四个角落点缀大尺寸景深模糊水果。

## [效果预览]

<!-- 将效果截图放在本目录下，推荐命名为 preview.png -->
![效果预览](preview.png)

## [简介]

页面基于纯前端技术栈（单文件纯 HTML/CSS/JS，无第三方框架及构建依赖）高保真复刻：
- **马卡龙四风味纯色画卷**：每种风味占据全屏纯色底色（Berry #C2B0DC 丁香紫、Kiwi #B4D58A 薄荷绿、Banana #F3DA8A 奶油黄、Strawberry #F2AFC0 蜜桃粉）；
- **2048×2048 雪碧图纯 CSS 坐标裁剪**：无需切割单张图片，所有奶昔瓶身与 7 个悬浮水果零件均通过高精度 `background-size` 与 `background-position` 从 4 张透明 PNG 原画中动态缩放采样；
- **测量级遮罩擦除与多层视差进场 (Measured Panel Wipe & Parallax)**：基于 16 组精准测量的非线性关键时间点（慢启、中速疾驰、柔和停泊）计算 `clip-path: inset()` 遮罩；前一页向左平移漂移收拢，新一页的文字 (0.40)、阴影 (0.30)、瓶身 (0.15)、水果 (0.55) 与景深角标 (0.75) 携带递进视差从右侧滑入归位；
- **流体双度量缩放系统 (--u / --n)**：舞台画框基于 1440×900 基准通过 `--u` 自适应居中视口；固定的导航条、底部 CTA "SHOP NOW" 与角落方向键通过 `--n` 弹性自适应边距与字号；
- **无缝触控交互与智能轮播引擎**：支持滚轮滑动、左右手势拖拽、键盘方向键与年代感指示线滑行联动，具备 2.6 秒自动循环轮播及用户操作后 6 秒防打扰暂停机制。

## [核心设计与特性]

- **自适应风味大字字号与基线定位**：
  - 采用 Poppins 700 巨幅字体，根据字宽（如 Strawberry、Banana）动态收缩字间距与字号，确保视觉一致且永不溢出画框；
  - 无论字体缩放至多少，严格将字形大写字高（Cap Height）几何中心锚定于 $y = 403.5$ 基准线。
- **高阶水果怠速漂浮动效 (Idle Bobbing Motion)**：
  - 各切块水果挂载独立周期的交替无限正弦波缓动，沿垂直方向在 $\pm 7u$ 之间浮动，并叠加微小角度旋转，呈现如同悬浮在果汁气泡中的生动质感。
- **移动端与竖屏断点深度适配**：
  - 视口宽度 $\le 820$ 或竖屏比例时自动切换移动端紧凑模式，画框放大聚焦瓶身与核心水果，导航分为双行排布，确保在任何移动设备上均免除横向滚动。
