---
id: space-voyage
name: Space Voyage
level: pages
category: creative
type: Prompt
tech_stack:
  - "HTML5"
  - "CSS3"
  - "Vanilla JS"
  - "Canvas 2D"
  - "Video API"
tags:
  - "Space"
  - "3D Portal"
  - "Canvas Mask"
  - "Video Preloader"
  - "State Machine"
  - "Cinematic"
  - "Fake Perspective"
  - "Custom Cursor"
recommended_ai:
  - "Claude Fable 5.1"
  - "GPT-6 Astra"
  - "Gemini 3.8 Flash"
  - "Claude Code"
  - "Cursor"
description:
  zh: 星球穿越门户体验——全屏视频预加载器、Canvas 假透视圆角矩形门户、指针驱动视角倾斜、帧冻结转场、Mars/Earth/Venus 状态机
  en: "Cinematic space portal experience with video preloader, canvas fake-perspective rounded-rect portal, pointer tilt, freeze-frame transition, and Mars/Earth/Venus state machine"
preview: ""
author: Community
source_url: ""
---

# Space Voyage

> 星球穿越门户体验——全屏视频预加载、Canvas 假透视圆角矩形门户、指针驱动视角倾斜、帧冻结转场、Mars/Earth/Venus 三星状态机。

## [简介]

Space Voyage 是一款完全自包含的沉浸式太空门户着陆页，零依赖、无构建工具。核心视觉机制是固定全屏 Canvas (`#portal-canvas`) 绘制的圆角矩形"窗口"：媒体以 cover 模式锁定在屏幕坐标系（媒体静止，窗口在上方移动），窗口通过44个顶点的假透视投影（焦距 850）跟随指针倾斜（最大 ±18.7°/±16.5°）。

**预加载序列**：TO_MARS 以 `Math.max(0.25, duration/3)` 倍速播放约 3 秒，0-100% 计数器每 rAF 更新一次；结束时计数器上浮模糊消失，logo 通过 CSS transition 2s 飞向 header 插槽。

**穿越转场**：点击门户 → 加载 TO_EARTH/TO_VENUS (`canplaythrough` + 1600ms 超时) → 以 1.3x 倍速播放 → `animateValue` 1100ms 将门户扩展至全屏 → 等待 `ended` → 冻结最后一帧到 `#scene-canvas` → 切换状态、渲染新数据 → 两帧后重置 expansion/maskScale → `revealMask` 1050ms 从 0 生长门户 → `revealPlanetContent` 错开触发内容动画 → 450ms 后清理 src。

## [核心技术]

- **Canvas 假透视门户**：圆角矩形4圆弧各11点采样，共44顶点；`proj(lx,ly)→(cx+lx·cos(ay)·p, cy+ly·cos(ax)·p)` where `p=850/(850+z)`
- **帧冻结缓冲**：`#scene-canvas`（display:none）存储转场末帧，门户生长期间渲染到 `#portal-canvas` 背景
- **DPR 缩放**：`dpr=Math.min(devicePixelRatio,2)`, canvas 物理尺寸×dpr, `setTransform(dpr,0,0,dpr,0,0)` 后以逻辑像素绘制
- **is-switching 重触发**：移除类 → `offsetWidth` → 重加类，保证每次行星切换都重播 `menu-row` 动画
- **class 驱动状态机**：`is-loading/is-transitioning/is-committing/mask-revealing/content-revealing/intro-ready/preload-complete`

## [使用说明]

- **[推荐]AI工具**：Claude Fable 5.1 / Claude Code / Cursor
- **使用方式**：直接复制 [prompt.md](prompt.md) 中的完整提示词粘贴至 AI 编程助手即可生成完整单文件。
