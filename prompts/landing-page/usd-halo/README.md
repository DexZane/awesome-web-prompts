# USD Halo Landing Page

> 金融科技风格稳定币产品落地页，紧凑字间距排版与多段走马灯塑造专业信任感。

## 效果预览

<!-- 请添加效果截图 -->
_待添加预览截图_

## 简介

一款面向加密货币/稳定币（Stablecoin）等 DeFi 金融科技产品的多区块落地页。整体色调采用了温和的浅灰底色（`#F5F5F5`），通过极致紧凑的负字间距排版（最高达 `-0.04em`）和精心定制的 TT Norms Pro 字体，呈现出与传统银行/投资机构同等的专业和高端质感。页面首屏为圆角裁切的全屏视频卡片内嵌式布局，后续区块则以信息密度极高的四列卡片网格、双段独立走马灯、以及右侧大视频叠加内容的用例展示区构成完整的叙事链路。

### 亮点特性

- **圆角裁切的内嵌式视频 Hero**：Hero 不是常规的全屏视频背景，而是将视频嵌入一个 `rounded-2xl` 的圆角卡片中，卡片高度精确到 `calc(100vh - 96px)`，营造出"卡片悬浮于页面"的高级感
- **品牌走马灯的字体差异化**：每个品牌名称使用独立的字体族（Georgia、Arial、Trebuchet MS、Courier New 等）和独立的 `letterSpacing` / `fontSize` 配置，模拟出各品牌 Logo 的原始字体风格，而非千篇一律的统一样式
- **自定义 SVG Logo 组件**：利用手绘的 SVG `path` 创建了一个精致的"两个交错圆角方块"的品牌标识，使用 `currentColor` 实现颜色继承
- **深色系信息卡片（`#2B2644`）**：信息区的部分卡片使用了深紫灰色底（`#2B2644`），在浅灰页面背景上形成了强烈的视觉焦点

### 技术栈

- React 18 + TypeScript + Vite
- Tailwind CSS 3
- Lucide React (图标)
- 原生 CSS (@font-face, @keyframes)

## 使用说明

- **推荐 AI 工具**：Cursor / Claude / ChatGPT
- **使用方式**：复制 [prompt.md](prompt.md) 中的提示词，在 AI 工具中生成完整项目代码
- **注意事项**：
  - 字体 TT Norms Pro 使用本地加载（`/fonts/tt-norms-pro-regular.woff2` 和 `/fonts/tt-norms-pro-semibold.woff2`），需自行准备字体文件放入 `public/fonts/` 目录
  - 描述文字中使用了 Inter 作为辅助字体（通过内联 `fontFamily` 指定），需确保该字体可从 Google Fonts 加载或已本地包含

## 来源

- 来源：互联网收集
