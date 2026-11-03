---
id: runway-lookbook
name: Runway Lookbook
level: pages
category: interactive
type: Prompt
tech_stack:
  - "HTML5"
  - "CSS3"
  - "Vanilla JS"
  - "SVG Sprite Sheet Cropping"
  - "Pseudo-3D Depth Interpolation"
  - "Physics Drag & Snap"
  - "Google Fonts"
tags:
  - "Interactive"
  - "Fashion"
  - "Runway"
  - "Lookbook"
  - "Depth Table"
  - "Sprite Sheet"
  - "Infinite Loop"
  - "Full Viewport"
recommended_ai:
  - "Claude Fable 5.1"
  - "GPT-6 Astra"
  - "Gemini 3.8 Flash"
  - "Claude Code"
  - "Cursor"
description:
  zh: "Maison Vell 时尚秀场画册全视口页面——单状态变量 p 驱动、7 阶非线性空间深度插值表、双 SVG 精准切片雪碧图与流体拖拽吸附联动"
  en: "Maison Vell fashion runway lookbook full-viewport page featuring single-variable p driving, 7-stop depth table interpolation, dual SVG sprite sheet cropping, and fluid drag-snap synchronization"
preview: ""
author: Community
source_url: ""
---

# Maison Vell — Runway Depth Lookbook

> 先锋时尚高级时装屋 "Maison Vell" 沉浸式 Runway 纵深交互画册全视口落地页。纯原生单文件自包含架构，零第三方库依赖。六位超模沿屏幕右前方向左侧远方景深处纵向列队排布；通过鼠标拖拽、滚轮滚动或键盘方向键操作，模特队列整齐向前步进漫游，最前方的模特放大滑出右侧导购栏，后方模特逐级补位并从雾气中踏步显现，右侧单品货架与左下角 Look 编号无缝循环翻滚。

## [效果预览]

<!-- 将效果截图放在本目录下，推荐命名为 preview.png -->
![效果预览](preview.png)

## [简介]

Maison Vell 是专为顶级时装屋、奢侈品秀场发布与先锋数字时装周设计的沉浸式深度 Lookbook。整页基于 1600×900 响应式设计基准度量构建（`--u: min(100vw/1600, 100vh/900)`），采用白底高雅极简配色，结合 Michroma 宽字距大写字体与 Inter 衬托排版，营造出浓郁的高级定制与现代美术馆氛围。

交互的核心是“单数值驱动一切”（One number drives everything）：全局唯一浮点状态 `p` 控制当前 Look 的连续位置，各模特的深度状态由数学环绕函数 `d = wrap(i - p, 6)` 计算并映射至 `[-1, 5]` 区间。模特尺寸、屏幕中心坐标、足底水平线、景深虚化与透明度完全由 7 阶非线性空间插值表精确控制。

## [核心设计与特性]

- **单变量连续流驱动一切 (Single-Variable Continuous Pipeline)**：
  - 核心状态变量 `p` 表达当前画面的全局游标进度；
  - 模特队列、右侧 12 件单品循环货架、左下角滚动编号（15–20）全由 `p` 的单向数学映射求值，杜绝多重状态机脱节与异步撕裂。
- **7 阶非线性深度查值表 (7-Stop Depth Table Interpolation)**：
  - 放弃生硬的 3D 透视公式，采用 7 个深度控制点（$d \in [-1, 5]$）对应设计稿预调的极佳视觉参数：
    - `KX`: 中心 X 坐标 $[1.2, 0.744, 0.496, 0.346, 0.235, 0.15, 0.085]$；
    - `KF`: 足底 Y 坐标 $[1.14, 0.89, 0.777, 0.704, 0.651, 0.616, 0.59]$；
    - `KH`: 模特视觉高度 $[1.18, 0.832, 0.574, 0.436, 0.334, 0.258, 0.19]$；
    - `KB`: 模糊滤镜半宽 $[0, 0, 1.5, 4, 8, 12, 17]\text{px}$；
    - `KO`: 透明度渐变 $[1, 1, 1, 1, 0.86, 0.5, 0]$。
  - 线性插值（Linear Interpolation）结合 `z-index = 100 - round(d * 10)`，使模特出场、逼近与退场层次分明、过渡丝滑。
- **纯 SVG ViewBox 零溢出双雪碧图切片 (Dual Sprite Sheets with SVG Nested Cropping)**：
  - 模特图集（3840×2160）与 12 样商品图集（2400 宽）仅通过 2 次 HTTP 请求即可完全加载，显存开销极低；
  - 利用内联双层 `<svg viewBox>` 绝对裁切各模特与单品包围盒，杜绝 CSS `background-position` 在亚像素缩放下的边缘像素溢出与抖动问题；
  - 图片在初始化时基于 1.2 倍舞台高度单次排布，运行时仅改变 GPU `transform: translate3d(...) scale(...)`，保持渲染极度锐利。
- **物理惯性拖拽、滚轮吸附与键盘支持 (Physics Drag, Wheel & Snapping)**：
  - 拖拽过程灵敏跟手，指针松开后自动四舍五入吸附至最近的整数 Look；
  - 滚轮滚动阻尼递增，停止滚动 150ms 后触发就近吸附；支持键盘 $\leftarrow, \rightarrow, \uparrow, \downarrow$ 快捷切片；
  - 采用指数衰减平滑插值 `p += (target - p) * (1 - Math.exp(-dt * 0.0072))`，在 `prefers-reduced-motion` 模式下直接跳至目标位置。
- **自定义柔性磁吸光标环 (Custom Elastic Ring Cursor)**：
  - 46u 细黑线圆环跟随鼠标指针浮动；拖拽时以平滑贝塞尔形变为 84u×34u 扁平胶囊药丸，提供直观的物理抓取反馈。
- **多端响应式架构 (Mobile & Tablet Adaptation)**：
  - 在移动端（≤820px）自动将 `--u` 锁定为 `1px`，右侧导购栏重构为底部 190px 高度的水平滑动托盘；
  - 隐藏次级菜单，自适应精简字号与边距，杜绝横向滚动。

