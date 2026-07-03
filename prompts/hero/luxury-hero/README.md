# Luxury Hero

> 极致奢华体验的滚动驱动 Hero 页，背景视频随滚动播放（Scroll-scrubbed），搭载 GSAP 视差动画与毛玻璃质感面板。

## 效果预览

![](image.png)

## 简介

专为高端品牌与奢华体验打造的全屏 Hero 落地页。核心黑科技是**纯滚动驱动的背景视频（Scroll-scrubbed Video）**，视频时间轴与页面滚动深度绑定，随用户的向下滚动如同翻阅画册般逐步播放。整体动效由前端动画天花板 GSAP 驱动，结合 Tailwind CSS v4 的新特性与毛玻璃（Glassmorphism）面板，打造极具呼吸感的沉浸式数字体验。

### 亮点特性

- **纯滚动驱动视频（Scroll-scrubbing）**：突破传统的自动播放背景，通过 `requestAnimationFrame` 实时监听滚动进度，平滑插值控制视频 `currentTime`，将视频变为随手势展开的空间画布
- **GSAP ScrollTrigger 全面加持**：
  - 巨型漂浮文字 "Unleash The Full Power" 随滚动逐字消散（缩放 + 透明度渐变）
  - 3D 视差毛玻璃面板（Glass Panel）随页面深层滚动从底部平滑升起
- **定制化药丸导航（Pill Navigation）**：
  - 动画磁吸 Logo（悬停 360° 旋转）
  - 黑底白字至反相的极致丝滑 Hover 动画（内嵌遮罩层放大 + 文字双轨上下平移）
  - 内置基于 GSAP ScrollToPlugin 的锚点平滑滚动
- **三维视差跟随（3D Mouse Parallax）**：视频容器与毛玻璃面板均绑定鼠标移动事件，根据归一化坐标产生 `x, y, rotationX, rotationY` 的多维偏移，增强空间景深感
- **极致字体搭配**：融合定制衬线体（Dirtyline）、经典斜体（Instrument Serif）与现代无衬线（Manrope），排版极具张力

### 技术栈

- React 19 + TypeScript + Vite
- Tailwind CSS v4（最新 `@theme` 变量定义）
- GSAP v3.12+ (ScrollTrigger, ScrollToPlugin)
- HLS.js（M3U8 视频流解析）
- lucide-react

## 使用说明

- **推荐 AI 工具**：Cursor / Claude / ChatGPT
- **使用方式**：复制 [prompt.md](prompt.md) 中的提示词，在 AI 工具中生成完整项目代码
- **注意事项**：
  - 此提示词指定使用最新的 Tailwind CSS v4 和 React 19，生成环境配置需注意兼容性
  - 依赖自定义字体（Dirtyline-36daysoftype-2022.woff2），需要自行下载并放置在 `public/` 目录下，否则降级为普通字体
  - 背景视频流需网络访问加载

## 来源

- 来源：互联网收集
