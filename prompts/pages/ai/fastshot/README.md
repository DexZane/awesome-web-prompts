# Fastshot

> 单文件无依赖极简高质感 AI 应用生成平台 Fastshot 落地页，全屏晨曦视频背景、像素级精准 Composer 提示词卡片与三端自适应架构。

## 效果预览

<!-- 将效果截图放在本目录下，推荐命名为 preview.png -->
![效果预览](preview.png)

## 简介

Fastshot 是一款自然语言构建应用的 AI 平台单屏全视口落地页（Single full-viewport hero）。采用单文件 HTML/CSS/JS 自包含交付，融合了晨曦山峦湖泊全景视频背景、高精密毛玻璃 Composer 输入卡片（右侧控件组采用严格像素测量坐标）、Inter 可变字体字重与层级排版，以及纯 CSS 汉堡包过渡与一次性流畅进场动画。

## 核心设计与特性

- **单文件无依赖架构**：零构建步骤，纯 HTML + 内联 CSS/JS，杜绝加载抖动。
- **高精密 Composer 输入卡片**：
  - 桌面端工具栏严格按照 1560×1008 画布坐标布局；
  - 区分 30u 胶囊行高与 35u 独立高度橙色发送按钮（下垂 7u 视觉锚点）；
  - 模型标签 “Sonnet 4.5”、回形针附件与发送按钮各自独立定位，杜绝通用 flex-center 导致的对齐失真。
- **三端自适应系统架构**：
  - **Desktop (≥1181px)**：基于 `--u` 参数化单位统一等比缩放；
  - **Tablet (600–1180px)**：Fluid 桌面流式布局，单行工具栏；
  - **Phone (≤599px)**：两行换行与纯 CSS 汉堡包抽屉菜单。
- **逐帧错落进场动画 (Entrance Timeline)**：利用 `cubic-bezier(.16,1,.3,1)` 与 `cubic-bezier(.22,1,.36,1)` 精密编排标题模糊聚焦、卡片浮现与底部背书厂商 Logo 升起。

## 技术栈

- 原生 HTML5
- 原生 CSS3（CSS 变量、计算缩放系统、毛玻璃滤镜与 Keyframes 动效）
- 原生 Vanilla JS（进场动画完成状态机）

## 使用说明

- **推荐 AI 工具**：Claude 3.5 Sonnet / Cursor / v0
- **使用方式**：直接复制 [prompt.md](prompt.md) 中的完整提示词粘贴至 AI 工具中即可生成完整代码。
