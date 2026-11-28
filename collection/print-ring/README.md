---
id: print-ring
name: Print Ring (OMBRY)
scope: page
category: portfolio-studio
format: prompt
tech_stack:
  - HTML5
  - CSS3
  - Vanilla JS
  - WebGL2
  - Procedural Spring Physics
  - Custom GLSL Shaders
  - Google Fonts
tags:
  - Photography
  - Portfolio
  - Print Ring
  - WebGL2
  - GLSL
  - 3D Carousel
  - Cloth Physics
  - Ink Soak Transition
  - Liquid Theme Wipe
recommended_ai:
  - Claude Fable 5.1
  - GPT-6 Astra
  - Gemini 3.8 Flash
  - Claude Code
  - Cursor
description:
  zh: "OMBRY 夜间人像摄影 3D 挂画圆环作品集——纯原生 WebGL2 零依赖实现，14 幅垂悬照片随转速摇曳外飘、垂直拖拽俯瞰成环、点击拉直轨道并卷起邻作、墨水渗透切图与液滴式明暗主题扩散"
  en: "OMBRY night-portrait photography portfolio on a zero-dependency WebGL2 3D print ring — 14 cloth-physics prints swaying and flaring with speed, pitch-to-overhead drag, rail-straightening project view, ink-soak photo transition, and liquid-drop theme wipe"
preview: ""
author: Community
source_url: ""
---

# OMBRY — 3D Print Ring Night-Portrait Portfolio

> OMBRY 是一位虚构夜间雨景人像摄影师的作品集单页网站。14 幅尺寸各异的摄影挂画从点状圆形轨道顶缘垂悬而下，近乎水平视角呈现，正面展示约 6 幅，其余隐约透出间隙；完全基于纯原生 JavaScript 与 WebGL2 打造，零第三方库、无构建步骤，静止加载且全部动效仅响应用户输入。

## 效果预览

<!-- 将效果截图放在本目录下，推荐命名为 preview.png，并在 frontmatter 中更新 preview 字段 -->

## 简介

- **无限旋转的 3D 挂画圆环与布料物理（Cloth Physics）**：支持滚轮、拖拽、左右方向键驱动环形轨道无限旋转；纸面分为 `12×14` 网格，根据轨道加速度与角速度产生临界阻尼摇摆（Sway）、离心外飘（Flare）与底边上扬（Hem Lift），十边形导轨圆点亦带延迟波动倾斜。
- **垂直俯仰与前视归位（Pitch & Front View）**：垂直拖拽或上下方向键可抬升俯仰角至 `-78°..84°`，从高空俯瞰完整圆环；点击 `FRONT VIEW` 平滑回正。
- **单轨道变身为项目详情页（Rail Straightening & Project Roll-up）**：点击任意正面朝向的挂画（或按 `Enter` / `Space`），圆形轨道在 2.4s 内展平为直线，其余 13 幅挂画按距离顺序向上卷起收纳进轨道，选定作品移至左侧放大展示，右侧逐行浮现作品编号、系列、情绪、年份与三行诗意注记。
- **墨水渗透切图特效（Ink-Soak Photo Change）**：详情页底部联动当前及后续 3 张缩略图；悬停或点击缩略图时，GLSL 片段着色器从缩略图中心向外发起 2 秒径向液体渗透与螺旋梯度模糊溶解，旧照融化而新照在波前之后干爽显现。
- **液滴式明暗主题扩散（Liquid Drop Theme Wipe）**：点击 `DARK` / `LIGHT` 按钮时，以按钮中心为圆心沿三叶正弦波动前沿扩散 1.9 秒，Shader 与 DOM 文字 `background-clip: text` 径向渐变在 2px 抗锯齿边界处精准同步反色。
- **本地照片直装（Load Photos）**：点击 `LOAD PHOTOS` 或拖入最多 24 张本地图片即可离线降采样重塑整座 3D 挂画圆环，不上传任何数据。

## 使用说明

- **推荐 AI 工具**：Claude / GPT / Gemini / Cursor
- **使用方式**：
  - 复制 [prompt.md](prompt.md) 中的完整规格提示词粘贴至 AI 编程助手，即可生成零依赖单文件实现。
  - 或直接在现代浏览器中打开本目录下的 [index.html](index.html) 体验完整 WebGL2 效果。

## 来源

- 来源：社区收录
- 作者：Community
