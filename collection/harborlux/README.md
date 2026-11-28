---
id: harborlux
name: Harborlux
scope: page
category: brand-lifestyle
format: prompt
tech_stack:
  - HTML5
  - Vanilla CSS
  - Vanilla JavaScript
  - Web Animations API
  - Responsive Design
tags:
  - Hero Section
  - Real Estate
  - Penthouse
  - Cinematic Intro
  - Video Crossfade
  - Parallax Depth
  - Seamless Rain Loop
recommended_ai:
  - Claude 3.5 Sonnet
  - GPT-4o
description:
  zh: "HARBORLUX 奢华顶层豪宅 7.4 秒电影级转场 Hero 落地页——黑漆双门中心开启、俯瞰泳池航拍运镜回拉、多层纵深视差错落沉浮、无缝循环阴雨粒子与逐字浮现巨幕标题"
  en: "HARBORLUX luxury penthouse 7.4-second cinematic intro hero — black lacquer doors opening, aerial-to-skyline tilt video transition, multi-layer parallax depth, seamless rain loop crossfading, and letter-by-letter rising headline."
preview: ""
author: Community
source_url: ""
---

# Harborlux — "Claim Your Summit" Rainy-Harbour Penthouse Hero

虚构顶级奢华地产开发品牌 **HARBORLUX** 的全屏旗舰电影级 Hero 落地页。页面加载后自动触发一条基于毫秒级主时钟（Master Clock）驱动的 7.4 秒影视转场动画，在运镜回拉、双门向两侧滑开、航拍泳池无缝衔接至全景霓虹港湾夜景后，平滑过渡至四层纵深物理视差层，并常驻无缝淡入淡出的雨幕天空粒子循环。

---

## 核心特性

- **7.4s 电影级转场时间轴（Web Animations API + rAF 速率补偿）**：
  - **0.02s - 1.24s**：高光黑漆中缝双门向左右两侧非对称滑开，露出泳池夜景。
  - **1.19s - 1.47s**：俯瞰航拍静帧平滑交叉淡入至航拍回拉抬升视频。
  - **1.25s - 2.85s**：5.04s 运镜视频被高倍速同步至 1.6s 播放窗口内，并通过动态采样率算法无抖动精准停驻于终帧。
  - **2.45s - 2.95s**：视频无缝淡出至由远景暴风雨天空、中景霓虹城市天际线、前景露台栏杆与风衣人物组成的四层物理视差堆叠。
  - **2.45s - 3.15s**：导航栏自顶部浮现，次标语 "Claim Your" 与主标题 "Summit" 六个字母按 54ms 间隔从左至右逐字破土升起。
  - **2.90s - 7.30s**：中景城市天际线下沉又归位，前景背影人物从视口下方升起并经过 2.5% 柔和超调（Overshoot）后优雅定格在玻璃栏杆前，头部精准遮挡标题字母 "mm" 的底缘。
- **A/B 双视频无缝雨幕交叉淡化循环（Seamless Rain Loop）**：
  - 针对背景雨水视频在播放后期偏色的情况，采用 A/B 两个 `<video>` 实例在 3.6s 内互斥循环播放，并在 2.85s 提前 0.75s 启动下一轨并执行 0.7s 线性交叉淡入淡出，消除跳帧与黑帧。
- **动态视口与排版自适应（Dynamic Stage & Responsive Typography）**：
  - 基于 16:9 比例的 Stage 绝对居中溢出裁切技术，无论在 21:9 超宽屏、16:9 桌面还是 9:16 移动端竖屏，人物与视差焦点始终居中。
  - 动态计算主标题字号与基线，竖屏设备自动下调基线，确保人物头部与文字的遮挡关系在全尺寸下完全符合艺术指导。
- **减弱动态模式（Prefers-reduced-motion）**：
  - 遵循无障碍设计规范，在系统开启减弱动态效果时，自动跳过 7.4s 动画序列，直接呈现最终静止优雅排版与静态背景。
