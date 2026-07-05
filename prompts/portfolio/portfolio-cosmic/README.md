# Portfolio Cosmic

> 高端暗黑风个人作品集模板，集成了 HLS 视频流背景、GSAP 深度滚动视差与精密的 Loading 进场动画。

## 效果预览

<!-- 请添加效果截图 -->
_待添加预览截图_

## 简介

一款面向全栈开发者、数字创作者或独立设计师的高阶纯暗黑主题个人作品集落地页。整体布局分为七个核心区块（加载、首屏、作品集、日志、探索、数据统计、联系脚部）。最大特色在于通过 `hls.js` 流畅加载极具质感的动态视频背景，并在页面深处设计了由 GSAP ScrollTrigger 驱动的 Pin + Parallax（图层固定+滚动视差）的“探索画廊”。

### 亮点特性

- **影视级 0-100 Loading 动画**：开局全屏黑色遮罩叠加高频循环词库（Design/Create/Inspire），并带有数字 `padStart(3, "0")` 进度指示及动感渐变进度条，使用 `requestAnimationFrame` 驱动 2.7 秒精确计时
- **高性能 HLS 背景流视频**：采用 `hls.js` 接管原生 video，并在页脚复用且镜像反转（`scale-y-[-1]`）同一条视频流，实现上下背景的视觉呼应与性能优化
- **GSAP 高阶视差特效**：在 Explorations（探索区）利用 GSAP `ScrollTrigger` 实现高达 `300vh` 的长滚动视觉差——左侧中心内容被 Pin 住不动，右侧双列流式卡片随滚动差速上下浮动
- **Bento 网格与半调网发（Halftone）蒙版**：Selected Works 部分采用了参差不齐的 7/5/5/7 Bento 网格，且给卡片图片覆盖了一层基于 `radial-gradient` 的 CSS 乘法混合模式（`mix-blend-multiply`）半调网点特效
- **高阶 CSS 自定义属性控制**：严格抛弃硬编码颜色，全部采用 HSL CSS Variables 系统（`--bg`, `--surface`, `--accent`），并结合专属的 `linear-gradient` 极光渐变生成描边高亮（Hover Borders）

### 技术栈

- React 18 + TypeScript + Vite
- Tailwind CSS 3
- GSAP (包含 ScrollTrigger 高阶功能)
- Framer Motion (进场补间动画与 AnimatePresence)
- hls.js (视频流解码)

## 使用说明

- **推荐 AI 工具**：Cursor / Claude / ChatGPT
- **使用方式**：复制 [prompt.md](prompt.md) 中的提示词，在 AI 工具中生成完整项目代码
- **注意事项**：
  - 依赖多个 CDN 资源和视频流（`stream.mux.com`），请确保网络通畅
  - 由于依赖 GSAP 和 Framer Motion 两套动画引擎，生成后需留意其分别在视差和常规 UI 转场中的分工
  - HLS 在 Safari 中的处理（原生支持）与 Chrome/Edge（需 hls.js 实例）略有不同，代码要求中已标明此 Fallback 逻辑，AI 生成时请留意是否包含该兼容实现

## 来源

- 来源：互联网收集
