# Digital Director (Adam Roberts)

> 顶级创意总监与数字工程师 Adam Roberts 全屏作品集落地页，包含全屏背景视频、basis33 像素位图字体混排、四列信息网格及获奖徽章。

## 效果预览

<!-- 将效果截图放在本目录下，推荐命名为 preview.png -->
![效果预览](preview.png)

## 简介

Digital Director 是一款锁定单视口（`h-screen overflow-hidden`）的高奢创意作品集。整体基调为纯黑暗黑系，底层采用全屏高清动态视频背景（大屏缩放 120% 产生微视角微距效果）。页面巧妙混合使用了现代无衬线字体 `Inter` 与极客像素位图字体 `basis33`，构筑出强烈的视觉反差。

## 核心设计模式

* **像素位图与现代无衬线混排 (Bitmap & Sans Typography)**：在标题 `UNEXPECTED`、`EXPERIENCES` 及品牌标签中引入 `basis33` 8-bit 位图字体，提升极客艺术质感。
* **四列元数据网格 (Four-Column Meta Grid)**：包含了自创品牌 "Grilled Pixels" 介绍、设计与工程定位、"What I Do" 及详细的 "Services" 列表。
* **荣誉徽章与视频播报 (Awards Chips & Showreel)**：底部右侧展示黑底高对比度的 FWA、Awwwards (W.)、CSSDesignAwards 获批图标芯片。
* **移动端交错抽屉菜单 (Staggered Mobile Menu)**：全屏黑透抽屉菜单，导航链接带有 `cubic-bezier(0.16,1,0.3,1)` 自适应阶梯渐显进场。

## 技术栈要求

* React + TypeScript (Vite)
* Tailwind CSS
* Lucide React (`Play`, `Menu`, `X`)
* Google Fonts (Inter) & OnlineWebFonts (basis33)

## 使用说明

- **推荐 AI 工具**：Claude 3.5 Sonnet / Cursor / v0
- **使用方式**：复制 [prompt.md](prompt.md) 中的完整提示词粘贴至 AI 工具中生成代码。

## 来源

- 来源链接：用户提供
- 作者：未知
