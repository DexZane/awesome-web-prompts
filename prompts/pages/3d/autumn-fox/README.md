---
id: autumn-fox
name: Autumn Fox
level: pages
category: 3d
type: Prompt
tech_stack:
  - "HTML5"
  - "CSS3"
  - "JavaScript"
  - "Three.js"
  - "GLTFLoader"
  - "WebGL"
  - "Google Fonts"
tags:
  - "3D"
  - "Hero"
  - "Three.js"
  - "WebGL"
  - "GLTF"
  - "Interactive"
  - "Parallax"
  - "AI Automation"
  - "Full Viewport"
recommended_ai:
  - "Claude Fable 5.1"
  - "GPT-6 Astra"
  - "Gemini 3.8 Flash"
  - "Claude Code"
  - "Cursor"
description:
  zh: "FENNEC AI 自动化全屏 3D Hero 落地页——Three.js 交互式秋季红狐狸模型、悬浮缓动视差、暖色调视频背景与胶囊变形抽屉菜单"
  en: "FENNEC AI automation full-screen 3D hero landing page featuring interactive Three.js autumn fox model, floating bob parallax, warm video background, and morphing pill drawer menu"
preview: ""
author: Community
source_url: ""
---

# Fennec — Self-Driving Workflows (Autumn Fox 3D Hero)

> 虚构 AI 自动化品牌 "FENNEC" 的沉浸式全屏 3D Hero 落地页。纯原生单文件零构建架构，融合 Three.js r160 交互式 3D 红狐狸手捧波霸奶茶模型、光影环境着色（ACESFilmicToneMapping + RoomEnvironment）、鼠标指针注视缓动与悬浮浮动（Floating Bob）、全景秋意枫林微动循环视频背景，以及从右上角品牌胶囊无缝破茧生长的多阶抽屉导航面板。

## [简介]

FENNEC 是一款面向新一代“自动驾驶式工作流”（Self-Driving Workflows）的高端 AI 自动化品牌全视口 Landing 页面。整页以深秋暖金与焦糖橙褐色系（#b5571c / #e8742a）为主调，背景由 1080P 秋日落叶微动视频铺设底层，叠加双重多角度半透明遮罩与景深烘托。

画面的核心焦点是一个极富亲和力的 3D 红狐狸吉祥物，借助 Three.js WebGL 渲染管线实时渲染，具有灵动的浮动呼吸感（Sine-wave Bobbing）与鼠标视差实时追踪交互。左侧辅以极具节奏感的层叠下划线排版标题，右上角则设计了白底圆润的“FENNEC”品牌胶囊与悬浮汉堡按钮；点击汉堡按钮时，抽屉菜单通过精准计算的 `clip-path` 动画从胶囊物理边缘向四周破茧展开，带来丝滑而高级的交互质感。

## [核心设计与特性]

- **Three.js 实时 3D 角色渲染与物理光照 (Real-time 3D Fox Model & Lighting)**：
  - 基于 Three.js r160 原生 ESM 模块化加载，通过 `PMREMGenerator` 配合 `RoomEnvironment` 生成 0.04 粗糙度环境贴图；
  - 暖色光影系统：半球环境光（HemisphereLight 0xffe2c0 / 0x6b3a12）、主侧向暖光（DirectionalLight 0xffc98a，2.2 强度）与金橙色轮廓边缘光（Rim Light 0xffa24d，1.6 强度）；
  - 自动居中与等比归一化：通过 `Box3` 提取模型绝对尺寸与几何中心，以 `3.15 / max(x, y, z)` 归一化缩放并挂载至旋转中心 Pivot；所有 Mesh 材质开启各向异性过滤与环境贴图反射。
- **智能缓动注视视差与悬浮浮动 (Pointer Parallax & Floating Bob)**：
  - 监听全局指针移动，将归一化视口坐标以 `0.04` 缓动系数平滑插值注入到头部注视与旋转倾斜（Pitch / Yaw / Roll）；
  - 多频正弦悬浮律动：纵向位置、偏航角与横滚角叠加不同频率的正弦波，模拟角色凌空漂浮的萌感呼吸节奏；
  - 严格适配 `prefers-reduced-motion: reduce`，在减弱动效模式下剥离时间驱动动画，仅保留温和的指针视差。
- **胶囊破茧抽屉导航面板 (Morphing Pill Drawer Menu)**：
  - 右上角品牌胶囊包含纯手工绘制的 12 芒几何太阳矢量图标、等宽间距 "FENNEC" 字标与三线汉堡按钮；
  - 汉堡菜单按钮具有悬停收缩与变形为 "X" 的平滑贝塞尔过渡；
  - 展开菜单时，菜单面板基于 CSS 变量 `--pill-w` 动态获取品牌胶囊实时宽度，通过 `clip-path: inset(...)` 动画从胶囊轮廓直接形变为大圆角白底浮层面板；
  - 菜单内部链接采用遮罩溢出隐藏与阶梯式上升入场（staggered delays），配合悬停箭头滑入动效与品牌行动号召按钮（CTA）。
- **极简层次与无缝自适应 (Layer Stack & Mobile Responsiveness)**：
  - 7 层立体分层设计：底层视频、暗部渐变遮罩、3D Canvas 画布、标题字标、毛玻璃背景幕、展开面板与顶层悬浮导航；
  - 移动端（≤720px）断点自动将 3D 狐狸向上平移（`baseY = 0.45`），标题沉底吸附左下角，避免视觉冲突，并重构收起/展开的尺寸参数。
