---
id: true-earth
name: TrueEarth
level: pages
category: environmental
type: Prompt
tech_stack:
  - "HTML5"
  - "CSS3"
  - "JavaScript"
  - "Google Fonts"
tags:
  - "Environmental"
  - "Nonprofit"
  - "Ocean Conservation"
  - "Video Background"
  - "Slide-in Nav Sheet"
  - "Keyframes Animation"
recommended_ai:
  - "Claude Fable 5.1"
  - "GPT-6 Astra"
  - "Gemini 3.8 Flash"
  - "Claude Code"
  - "Cursor"
description:
  zh: 单文件无依赖海洋保护非营利组织全视口页面，珊瑚礁航拍视频卡片、图文镂空高亮与滑入式毛玻璃抽屉导航
  en: "Single-file zero-dependency ocean conservation nonprofit hero, aerial reef video card, image-filled headline highlight, and frosted glass nav sheet"
preview: ""
author: Community
source_url: ""
---

# TrueEarth

> 单文件无依赖海洋保护非营利组织全视口页面，珊瑚礁航拍视频卡片、图文镂空高亮与滑入式毛玻璃抽屉导航。

## [效果预览]

<!-- 将效果截图放在本目录下，推荐命名为 preview.png -->
![效果预览](preview.png)

## [简介]

TrueEarth是一款为OceanPulse海洋生态保护与海岸线守护公益项目打造的单文件自包含（Single-file self-contained `index.html`）全视口页面。纯原生架构，零构建步骤、零前端框架、零外部第三方JavaScript/CSS库，仅引入Google Fonts的Plus Jakarta Sans英文字体。桌面端采用高辨识度的非对称网格划分：左侧布局纯文本字标、主导航、带有珊瑚礁海洋背景镂空裁切的大标题、排版叙事正文以及悬浮微交互CTA；右侧内嵌带独立圆角（26px）的1080p珊瑚礁航拍微动视频卡片，辅以精准导引线标定点与斜角切削的社交媒体药丸浮岛。配备兼具实时色彩感知能力的汉堡转叉号变形控件与全高度毛玻璃抽屉导航，兼顾高维视觉张力与无障碍交互规范。

## [核心设计与特性]

- **临界DOM绘制顺序与层叠上下文突破 (Critical DOM Order Architecture)**：
  - DOM结构刻意将`.hero__media`置于`.hero__left`之前，再通过CSS Flex/Grid的`order: 1`与`order: 2`恢复视觉呈现顺序；
  - 左栏完全不声明`z-index`，防止其形成独立的局部层叠上下文（Stacking Context），确保位于左栏顶部的汉堡按钮（`z-index: 70`）能够无缝越级悬浮于全屏抽屉面板（`z-index: 60`）之上。
- **珊瑚礁航拍视频卡片与双标定点 (Video Media Card with Callout Markers)**：
  - 右侧主视界承载10秒1080p循环珊瑚礁航拍微动视频，顶部覆盖微弱阴影渐变（linear-gradient(180deg,rgba(0,0,0,.12),rgba(0,0,0,0) 38%)）；
  - 动态集成“Pure Waters”（left: 56% top: 26%）与“Coral Bed”（left: 59% top: 59%）两处地理标定点，利用`clip-path: inset(0 0 0 var(--dot-r))`使引线精准从外圈边缘向外伸展，并在末端吸附高对比度白色圆角胶囊标签；
  - 卡片右下角切削出反向圆角白色社交媒体药丸（Social Pill），内联Facebook、X与LinkedIn矢量图标。
- **海洋意象文字镂空高亮 (Image-Filled Headline Highlight via `--nature-img`)**：
  - 主标题第一行关键词“Oceans,”采用行内块（`.hl`）装饰，通过CSS变量引入1920宽高清海景原图；
  - 精准锚定`background-position: 56% 14%`坐标，严格截取湛蓝洋流海面避开褐色陆地，辅以`box-decoration-break: clone`实现多行自适应无缝衔接。
- **非对称缓动滑入式毛玻璃抽屉导航 (Asymmetric Slide-In Frosted Nav Sheet)**：
  - 抽屉面板位于`<body>`直接子级，采用深邃海蓝毛玻璃磨砂材质（`rgba(6,22,31,.9)`，`blur(26px)`与`saturate(150%)`）；
  - 展开与收起采用非对称贝塞尔缓动：进场采用680ms指数减速（`--ease-out`），退场采用440ms高速加速（`--ease-in`），拒绝单调反向回放；
  - 菜单项配置阶梯式递增延迟展开（`calc(.16s + var(--i) * .062s)`），关闭时快速归零淡出；点击遮罩蒙版、链接或按Esc键均可平滑关闭并同步解除页面滚动锁定。
- **实时对比度感知汉堡按钮 (Real-Time Contrast-Aware Burger Morph)**：
  - 汉堡三道杠采用纯CSS三维变换过渡为等边旋转交叉（X）；
  - 原生JS运行时通过`getBoundingClientRect()`实时计算460px抽屉面板左边界与按钮右边界的重叠状态，智能切换`.burger--on-panel`类名，解决超宽屏下深色面板未覆盖按钮导致的白色图标隐形问题。
- **全视口自适应与短屏防溢出编排 (Strict Responsive & Short-Screen Safety)**：
  - 桌面宽屏（>1024px）：双栏网格展示完整导航项；
  - 平板竖屏（≤1024px / ≤900px）：隐藏横向导航收拢至汉堡按钮，微调两栏占比与标定点位置；
  - 手机端（≤768px）：两栏解构成单层全景，视频自动升维铺满整个视口充当通栏背景，叠加暗色渐变蒙层强化白字对比，标定点优雅隐藏，社交图标回落至主内容下方；
  - 极限横屏与短视口（高度≤620px / ≤540px）：强制解除`min-height: 600px`，标题与字号切换为vh动态流式缩放，杜绝在740×360等设备上出现滚动条。
- **错峰进场律动动效 (Staggered Entrance Animation)**：
  - 采用`fade-up`、`media-in`、`video-in`、`pop-in`与`draw-line`复合CSS关键帧序列；
  - 基于`--stagger: 72ms`与`--d: N`对右侧媒体、视频缩放、品牌字标、导航项、大标题、正文、CTA与标定点进行毫秒级梯次显现；开启`prefers-reduced-motion`时立即归零无障碍降级。

## [技术栈]

- 原生HTML5（语义化nav、section、video标签，完全满足无障碍标准及inert状态隔离）
- 原生CSS3（CSS变量、clamp流式计算、CSS Grid/Flex混合布局、非对称贝塞尔曲线、backdrop-filter毛玻璃）
- 原生JavaScript（单IIFE自闭包无全局污染、实时边界碰撞检测、无障碍焦点管理）
- Google Fonts（Plus Jakarta Sans）

## [使用说明]

- **[推荐]AI工具**：Claude 3.5 Sonnet / Cursor / v0
- **使用方式**：直接复制[prompt.md](prompt.md)中的完整提示词粘贴至AI编程助手中即可生成完整单文件代码。
