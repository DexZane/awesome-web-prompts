# Cyber Ronin

> 单文件自包含赛博朋克风格全视口Hero落地页，双层画面鼠标聚光灯探照揭示、逐词上浮动画与6级响应式断点体系。

## [效果预览]

<!-- 将效果截图放在本目录下，推荐命名为 preview.png -->
![效果预览](preview.png)

## [简介]

Cyber Ronin是一款赛博朋克美学风格的全视口单屏Hero落地页。采用单文件HTML/CSS/JS自包含无依赖架构，融合双层画面鼠标聚光灯交互探照揭示（Cursor Spotlight Mask Reveal）、Orbitron与Inter排版体系、毛玻璃商品卡片、Operative Specs参数矩阵与逐词拉升（Words Pull-Up）进场动效。

## [核心设计与特性]

- **双层画面聚光灯探照揭示 (Spotlight Reveal)**：
  - 底层为常规Base场景，上层为Alternate揭示场景；
  - 监听mousemove与touchmove事件，实时计算光标在画布中的坐标与响应式半径R（移动端120px、平板160px、桌面端260px）；
  - 利用radial-gradient动态遮罩（mask-image）实现高精度柔和羽化光圈边缘。
- **逐词拉升与渐显进场编排 (Words Pull-Up & Fade Up)**：
  - 采用纯原生JavaScript对.words-pull-up文本执行逐词分词（.pull-word），基于索引注入递增延迟（index*0.1s）；
  - 针对多行H1标头保留.pull-line分行并维持跨行全局连续字词索引；
  - 配合双IntersectionObserver实现视口进入触发，无依赖优雅降级。
- **毛玻璃商品悬浮卡片与微交互**：
  - 搭载backdrop-filter模糊滤镜、极细描边与多轴阴影；
  - 包含自定义内联SVG图标组（核心/视野/能量）与预订胶囊按钮微交互。
- **6级渐进式自适应断点体系**：
  - 覆盖桌面宽屏（>1024px）、中屏（900px-1024px）、平板栅格（768px-900px）、移动端垂直流（≤720px）、紧凑屏幕（≤480px）与超窄机型（≤360px）；
  - 全面适配iOS安全区域环境变量（env(safe-area-inset-*)）。

## [技术栈]

- 原生HTML5
- 原生CSS3（CSS变量、radial-gradient动态遮罩、毛玻璃滤镜、Keyframes动画、安全区域）
- 原生JavaScript（IIFE闭包、原生DOM分词、IntersectionObserver）

## [使用说明]

- **[推荐]AI工具**：Claude 3.5 Sonnet / Cursor / v0
- **使用方式**：直接复制[prompt.md](prompt.md)中的完整提示词粘贴至AI编程助手中即可生成完整单文件代码。
