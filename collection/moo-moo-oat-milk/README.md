---
id: moo-moo-oat-milk
name: Moo-Moo Oat Milk
scope: page
category: brand-lifestyle
format: prompt
tech_stack:
  - HTML5
  - CSS3
  - Vanilla JS
  - Three.js (WebGL)
  - GSAP 3 + ScrollTrigger
  - Lenis Smooth Scroll
  - Google Fonts
tags:
  - Food & Drink
  - Oat Milk
  - Three.js
  - WebGL
  - 3D Carton
  - GSAP
  - ScrollTrigger
  - Lenis
  - Flavour Carousel
  - Pinned Scroll Story
recommended_ai:
  - Claude Fable 5.1
  - GPT-6 Astra
  - Gemini 3.8 Flash
  - Claude Code
  - Cursor
description:
  zh: "MOO-MOO 燕麦奶双段式品牌落地页——彩虹逐字开场、Three.js 实时 3D 屋顶牛奶盒、隐形巨轮四风味插画切换，以及奶油穹顶固定滚动叙事与吸管气泡弹出动效"
  en: "MOO-MOO oat milk 2-section brand landing page featuring a rainbow typed intro, real-time Three.js 3D gable-top carton, giant invisible-wheel flavour carousel, and a pinned cream-dome scroll ring with cap pop, rising straw, and bubbles"
preview: ""
author: Community
source_url: ""
---

# MOO-MOO — Oat Milk 3D Carton & Pinned Ring Story

> MOO-MOO 是一个虚构燕麦奶品牌。本页面为单文件、零构建依赖的完整品牌落地页：开场由彩虹逐字闪现与 11 枚流体圆斑擦除转场引入；Hero 区域展示程序化构建的 Three.js 实时 3D 屋顶纸盒，并借助 640vw 隐形巨轮完成四风味插画切换；第二段则在拱顶奶油面板上通过 GSAP ScrollTrigger 固定滚动旋转环依次扫过标题、4 张核心卖点卡片与彩虹结束语，同时纸盒翻滚旋转、拧开瓶盖并弹起条纹吸管与气泡。

## 效果预览

<!-- 将效果截图放在本目录下，推荐命名为 preview.png，并在 frontmatter 中更新 preview 字段 -->

## 简介

- **开场彩虹打字与流体圆斑擦除（Load Intro & Flood Wipe）**：等待 `Inter Tight` 与 `Baloo 2` 字体就绪后触发 18 字母逐字弹性弹出（每个字母按 70ms 间隔依次闪过 6 种彩虹色后落回墨色），配合 `OAT / MILK` 标牌、12 颗星芒气泡以及 11 枚视口扩散圆斑无缝切入首屏。
- **程序化 Three.js 3D 屋顶牛奶盒**：无外部模型文件，纯代码构建盒身、`BufferGeometry` 屋顶斜坡、顶部封边、旋转瓶盖与条纹吸管；结合 `RoomEnvironment` 环境光反射、4 组 UV 精准裁切的 16:9 包装贴图与 Canvas 侧边条纹贴图，并支持非触控鼠标跟随视差。
- **640vw 隐形巨轮四风味轮播（Oat Original / Vanilla / Chocolate / Barista）**：每款风味的透明插画通过左右半幅 CSS 背景裁剪贴合在 `45°` 等分巨轮上，支持右侧圆角箭头切换与 3.6s 自动轮播，联动背景色渐变、胶囊按钮宽度与背景色变形、纸盒自转与过冲回弹。
- **双段式 ScrollTrigger 滚动叙事与吸管气泡**：桌面端第一段 300vh 滚动令纸盒翻滚落入视口底部、插画双翼飞离，奶油穹顶弧线展开；第二段以 `1.8×W` 距离固定滚动旋转环（`-130°`），依次扫过标题、4 张带循环微动效 SVG 的卖点卡片（Whole oats / No added sugar / Plant powered / Foams like a dream）及 `"OAT SO GOOD."` 彩虹收尾，同时瓶盖旋飞消隐、吸管弹起并从瓶口坐标投影喷出 9 个上升气泡。
- **自适应与减弱动态支持**：集成 Lenis 平滑滚动（桌面非触控端由 `gsap.ticker` 驱动）、600px 以下移动端静态首屏与垂直卡片堆叠模式，以及 `prefers-reduced-motion: reduce` 无障碍降级方案。

## 使用说明

- **推荐 AI 工具**：Claude / GPT / Gemini / Cursor
- **使用方式**：
  - 复制 [prompt.md](prompt.md) 中的完整提示词，粘贴至 AI 编程助手即可生成完整单文件代码。
  - 或直接在浏览器打开本目录下的 [index.html](index.html) 预览现成可运行版本。

## 来源

- 来源：社区收录
- 作者：Community
