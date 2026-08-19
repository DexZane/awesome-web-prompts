# Agent Wave (Vesper.ai)

> 单文件无依赖极简纯黑单屏 AI 落地页，液态金属胶囊导航、Instrument Serif 混排标题与自适应统计底栏。

## 效果预览

<!-- 将效果截图放在本目录下，推荐命名为 preview.png -->
![效果预览](preview.png)

## 简介

Vesper.ai 是一款针对企业运营 AI 基础设施（Operational AI Infrastructure）的单屏无滚动落地页。采用纯黑 `#000000` 极客质感背景与视频背景，搭配液态金属质感胶囊导航（Liquid Metal Nav Pills）、Inter 与 Instrument Serif 衬线字体艺术混排标题，以及底部 3 组带有精密 SVG 图标的业务统计数据栏。

## 核心设计与特性

- **纯黑防闪烁架构**：首行 CSS 强制全局背景黑化，避免任何加载闪白。
- **液态金属交互胶囊 (Liquid Metal Pills)**：导航与按钮采用 105deg/135deg 高质感金属渐变与扫光（Shine）微交互。
- **排版艺术混排**：Inter 500 现代无衬线体与 Instrument Serif 斜体在标题中精准碰撞（`AI agents` 采用衬线灰调强调）。
- **三维全屏响应式断点**：覆盖从 560px 移动端到 2560px 超宽屏的自适应字阶与盒模型约束。
- **轻量原生进场编排**：原生 CSS `.appear` 错落延迟进场与 JS 兜底检测。

## 技术栈

- 原生 HTML5
- 原生 CSS3（CSS 变量、动画与液态金属材质渐变）
- 原生 Vanilla JS（菜单切换与动画状态机）

## 使用说明

- **推荐 AI 工具**：Claude 3.5 Sonnet / Cursor / v0
- **使用方式**：直接复制 [prompt.md](prompt.md) 中的完整提示词粘贴至 AI 工具中即可生成完整单文件代码。
