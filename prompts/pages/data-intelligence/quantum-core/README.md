# Quantum Core (Apogee)

> 深空星云视频背景 + 毛玻璃营收增长图表卡片 + 纯 CSS 逐条生长柱状图，数据智能 Hero 落地页。

## 效果预览

<!-- 将效果截图放在本目录下，推荐命名为 preview.png -->
![效果预览](preview.png)

## 简介

Apogee 是一款专注于数据智能与预测模型的全屏 Hero 落地页。采用深蓝/红星云全景视频作为背景，搭配精细校准的毛玻璃导航药丸胶囊、左侧冲击力标题与右侧毛玻璃营收增长图表卡片（Revenue Growth Card）。内置 32 根柱状图的纯 CSS `@keyframes` 错落生长动效及完备的移动端响应式折叠菜单。

## 核心设计与特性

- **星云视频背景**：原生深蓝深红渐变星云 MP4 背景无缝循环播放。
- **Suisse Intl 字体排版**：全站精细使用 `font-[450]` 字重及像素级内边距与行高。
- **毛玻璃图表卡片 (Revenue Growth Card)**：
  - 玻璃拟态阴影与 `backdrop-blur-[20px]`。
  - 32 根柱状图从 1100ms 依次错落执行 `bar-grow` 600ms 动画。
  - 最后 4 根柱状图为半透明预测态（Projected）。
- **双模态移动端菜单**：可见性状态与 cross-fade 图标过渡，展开时锁止 body 滚动。
- **零外部动画依赖**：纯原生 CSS keyframes + animation-delay 编排。

## 技术栈

- React 18.3
- TypeScript 5.5
- Tailwind CSS 3.4
- Vite 5
- Lucide React (ChevronDown, Menu, X)

## 使用说明

- **推荐 AI 工具**：Claude 3.5 Sonnet / Cursor / v0
- **使用方式**：直接复制 [prompt.md](prompt.md) 中的完整提示词粘贴至 AI 工具中即可生成像素级代码。
