---
id: consentinel
name: ConSentinel
level: pages
category: motion
type: Prompt
tech_stack:
  - "HTML5"
  - "CSS3"
  - "JavaScript"
  - "Web Animations API"
  - "Google Fonts"
tags:
  - "Motion"
  - "Security"
  - "Design-Unit System"
  - "Single-File"
  - "WAAPI"
  - "Responsive Geometry"
recommended_ai:
  - "Claude Fable 5.1"
  - "GPT-6 Astra"
  - "Gemini 3.8 Flash"
  - "Claude Code"
  - "Cursor"
description:
  zh: 单文件无依赖数字安全全视口页面，--u基准设计度量、WAAPI编排入场与视口宽高比三级响应式几何
  en: "Single-file zero-dependency digital security hero featuring --u reference unit scaling, WAAPI entrance choreography, and aspect-ratio driven responsive geometry"
preview: ""
author: Community
source_url: ""
---

# ConSentinel

> 单文件无依赖数字安全全视口页面，--u基准设计度量、WAAPI编排入场与视口宽高比三级响应式几何。

## [效果预览]

<!-- 将效果截图放在本目录下，推荐命名为 preview.png -->
![效果预览](preview.png)

## [简介]

ConSentinel是一款面向现代数字基础设施与云安全平台的高精度全视口Hero落地页。采用单文件原生架构（单个index.html，内联style与script），全站无外部框架与构建步骤。页面构建于1280×960基准设计稿之上，核心采用设计度量系统（Design-Unit System），所有尺寸、边距与排印均以绝对基准变量`--u`严格计算；底层铺设4.7MB高保真水晶玻璃球体与微光焦散背景视频（Video Plate），结合极具空间纵深感的毛玻璃卡片（Glassmorphism）、微调非整数Inter字重（360/425/470/520/570）、WAAPI原生入场动画编排与视口几何宽高比驱动的三级自适应响应式体系。

## [核心设计与特性]

- **1280×960基准设计度量体系 (Strict Design-Unit System & CSS Variables)**：
  - 定义全局核心变量`--u: min(100vw / 1280, 100vh / 960)`（优先通过`@supports (height:100dvh)`适配动态视口高度）；
  - 全站所有元素尺寸与位移一律采用`calc(N * var(--u))`计算，杜绝常规px/rem混用导致的版面跑偏与破损；
  - 辅以`--sx`光学宽度修正（Optical Tracking），对特定文字标签注入独立水平缩放，完美还原设计稿级紧凑字怀与字偶间距。
- **绝对定位辅助排版架构 (Absolute-Position Helper Engine)**：
  - 桌面端外层包装容器通过`display: contents`扁平化解构，子节点直接相对主画板定位；
  - 提供`.t`（顶锚定）、`.c`（垂直居中锚定）、`.b`（底锚定）、`.r`（右边缘翻转）坐标类，直接解析行内`--x`与`--y`设计坐标。
- **高净度水晶焦散背景视盘 (High-Fidelity Crystal Caustics Video Plate)**：
  - 全视口无黑边填充（object-fit: cover），利用2px外扩与`scale(1.002)`彻底消除视口边缘亚像素接缝；
  - 叠加5%极微暖光色调层（.tint），实现纯白至淡蓝的高端工业科技质感。
- **WAAPI原生入场动效编排 (WAAPI Master Entrance Choreography)**：
  - 首屏渲染前注入`html.pre`预备状态，4000ms超时自动熔断保证内容永不丢失；
  - 严格划分为四重动效语言：标题与数字的“基线掩码擦除上升 (Masked Rise)”、副标题与标签的“柔和上浮 (Quiet Lift)”、毛玻璃面板与胶囊按钮的“空间回弹落位 (Glass Settle)”以及仪表进度条与盾牌图标的“矢量展开 (Accent Draw)”；
  - 动画全部完成后自动清理`.pre`并销毁WAAPI句柄，使最终停留帧完全等同于纯粹 authored CSS。
- **宽高比拓扑三级响应式重构 (Aspect-Ratio Keyed Responsive Tiers)**：
  - **Tier 1 桌面宽屏（宽高比 ≥ 87:80）**：严格基准度量与绝对坐标定位；
  - **Tier 2 紧凑视口（max-aspect-ratio: 87/80、窄屏或低矮视口）**：容器由contents解构为Flex/Grid弹性网格，横屏下保持文案与防护面板左右并列；
  - **Tier 3 手机视口（≤640px）**：引入`--u`（驱动外框骨架）与`--t`（驱动阅读字号与触控热区）双尺度缩放，保底标签可读性；汉堡菜单依据宽高比（≤1:1）独立折叠与浮层展示。

## [技术栈]

- 单文件原生HTML5 / CSS3 / JavaScript（零依赖、无构建工具）
- Web Animations API（WAAPI 原生动效编排与状态清理）
- 原生CSS3变量度量（`--u`、`--t`、`--sx`、`100dvh`）
- CSS3多重毛玻璃与饱和度增强滤镜（`-webkit-backdrop-filter: blur() saturate()`）
- Google Fonts（Inter Variable 100–900区间多字重）

## [使用说明]

- **[推荐]AI工具**：Claude 3.5 Sonnet / Cursor
- **使用方式**：直接复制[prompt.md](prompt.md)中的完整提示词粘贴至AI编程助手中即可生成完整的单文件生产就绪代码。
