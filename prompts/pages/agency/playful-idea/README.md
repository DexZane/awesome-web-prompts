---
id: playful-idea
name: Playful Idea
level: pages
category: agency
type: Prompt
tech_stack:
  - "Next.js"
  - "React"
  - "TypeScript"
  - "CSS3"
  - "HTML5 Video"
tags:
  - "Agency"
  - "Studio Footer"
  - "Video Scrubbing"
  - "Gaze Tracking"
  - "Epilogue Black"
  - "DM Sans"
  - "Responsive"
recommended_ai:
  - "Claude Fable 5.1"
  - "GPT-6 Astra"
  - "Gemini 3.8 Flash"
  - "Claude Code"
  - "Cursor"
description:
  zh: 创意工作室单页页脚，薰衣草毛绒玩偶视频背景、指针凝视视线视频帧洗刷交互与三栏极简排版
  en: "Single-page creative studio footer with lavender character video background, pointer gaze scrubbing interaction, and 3-column minimalist layout"
preview: ""
author: Community
source_url: ""
---

# Playful Idea

> 创意工作室单页页脚，薰衣草毛绒玩偶视频背景、指针凝视视线视频帧洗刷交互与三栏极简排版。

## [效果预览]

<!-- 将效果截图放在本目录下，推荐命名为 preview.png -->
![效果预览](preview.png)

## [简介]

Playful Idea是一款专为创意工作室与设计机构打造的高精度单页页脚落地页。基于Next.js App Router与TypeScript构建，无需引入任何外部动画或UI组件库。页面以纯净极简主义为核心，完全不添加任何死板的色调遮罩、蒙版、模糊或叠加层；桌面端全屏铺展薰衣草紫色调毛绒卡通玩偶视频背景，中英排印采用特粗黑体Epilogue Black（weight: 900）搭配几何无衬线DM Sans（weight: 400）；集成高灵敏度的指针视线追踪（Gaze Tracking）洗刷交互，画面中角色的眼睛瞳孔将跟随访客鼠标光标的移动实时转动注视。移动端优雅转换为纵向堆叠流式排布，在保证大屏沉浸感的同时兼具移动端的自然浏览体验。

## [核心设计与特性]

- **非线性查表视频帧洗刷视线交互 (Pointer Gaze Video Scrubbing Engine)**：
  - 核心视频（1920×1080，24fps）内录制了玩偶眼球沿轨道环视的真实运动；通过ffmpeg转码为全关键帧格式（All-Intra，`-g 1`），确保极速随机寻道；
  - 内置精细标定的`gaze-frames.json`离散角度时间映射表，根据`object-fit: cover`比例实时反算视口内眼球中心屏幕物理坐标（948, 418）；
  - 动态计算指针相对眼球的`atan2(dy, dx)`夹角（规避中心8px不稳定死区），通过圆周差值最小化算法查表匹配最佳视频时间点，并注入1/240秒偏移确保精准落帧；
  - 采用`requestAnimationFrame`合并高频指针事件，严密监听`seeked`生命周期，杜绝全剪辑插值带来的非线性眼球位移误差，鼠标移出视口后保持当前朝向静止。
- **纯粹视口单位三栏极简排版 (Pure Viewport-Unit 3-Column Composition)**：
  - 拒绝通用的居中定宽容器，全站元素严格采用视口宽度（vw）参数化布局；
  - **左栏（margin-left: 8.65vw，width: 25vw）**：药丸胶囊微标“have a fresh idea?”、两行主标题“imagination meets craft”及垂直导航式文本列；
  - **中栏（left: 40.33vw，top: 7.7vw，width: 17vw）**：内联Outlined Script风格Logoipsum矢量SVG，色彩继承自全局文本色`#080909`；
  - **右栏（left: 74.3vw，top: 6.54vw）**：胶囊微标“say hey”、行动号召大标题“let’s team up! / bring us your idea*”、细注段落与3枚社交媒体图标组。
- **双端响应式视界拓扑解构 (Responsive Breakpoint Topology at 700px)**：
  - 桌面端（>700px）：视频全视口绝对定位（inset: 0，z-index: -1）置于文字底层，单屏视口锁定并完全依靠鼠标驱动寻道；
  - 移动端（≤700px）：通过`matchMedia`监听解构为纵向Flex弹性流（Logo -> 左栏 -> 右栏 -> 视频）；
  - 移动端视频切换为下方正常文档流自适应4:3画幅全通栏容器，停用鼠标寻道事件，自动切换为静音循环常规播放，配合底色`#f0eefa`实现浑然一体的无缝衔接。
- **双字体精微排印体系 (Dual Typography Standard)**：
  - 本地加载Epilogue Black（900字重）与DM Sans（400字重）WOFF2字体，声明`font-synthesis: none`杜绝浏览器伪粗体畸变；
  - 严格保留所有文案字符数、换行结构、弯引号（’）与星号注释，提供画册级的留白与呼吸感。
- **标准无障碍与无外部跳转保护 (Accessibility & Display Semantics)**：
  - 全站标签、联系文本与社交图标均为纯视觉展示元素（静态span而非超链接），杜绝虚构未经验证的外部链接；
  - 完整声明语义化`footer[aria-label="Footer"]`、`role="img"`与社交媒体ARIA标签；
  - 严格适配`prefers-reduced-motion: reduce`媒体查询，移动端自动暂停视频播放。

## [技术栈]

- Next.js（App Router架构，`app/page.tsx`、`app/layout.tsx`）
- React 19 / TypeScript（客户端组件`app/footer-background.tsx`）
- 原生CSS3（vw流式度量、媒体查询重构、@font-face本地加载）
- HTML5 Video API（`requestAnimationFrame`寻道节流、`loadeddata`与`seeked`事件监听）

## [使用说明]

- **[推荐]AI工具**：Claude 3.5 Sonnet / Cursor / v0
- **使用方式**：直接复制[prompt.md](prompt.md)中的完整提示词粘贴至AI编程助手中即可生成完整单页代码。
