# AI Designer Portfolio

> 白底极简风独立设计师作品集落地页，带有鼠标跟随 GIF 粒子特效与自动滚动推荐轮播。

## 效果预览

<!-- 请添加效果截图 -->
_待添加预览截图_

## 简介

一款面向独立设计师、创意工作室或精品咨询机构的单页长滚动落地页。整个页面采用极致简约的纯白底设计，搭配独特的衬线/无衬线混排字体对（PP Mondwest + PP Neue Montreal），营造出一种兼具现代科技感和手工匠气的双重气质。组件结构完整，涵盖了从品牌引言、无限走马灯、推荐语、定价卡片到项目展示的全链路。

### 亮点特性

- **鼠标跟随 GIF 粒子特效（Mouse Trail）**：Partner 区域内，鼠标移动时会在光标位置动态生成随机旋转的 GIF 缩略图并自动淡出（`requestAnimationFrame` 节流 + 80ms 间隔），营造出极其有趣的交互彩蛋
- **视差滚动图片（Parallax Image）**：推荐语区域的人物图片利用 `IntersectionObserver` + `scroll` 事件监听的组合，实现最大 200px 偏移量的平滑视差移动
- **自动滚动推荐轮播（Auto-scrolling Carousel）**：每 3 秒自动切换的推荐语卡片，支持 hover 暂停、前后翻页，并将推荐数据三倍复制实现无限循环的视觉假象，过渡使用 `cubic-bezier(0.4, 0, 0.2, 1)` 0.8s 贝塞尔曲线
- **精密多层阴影系统（Multi-layered Box Shadow）**：主要 CTA 按钮使用了 5 层外阴影 + 1 层内高光的极致阴影堆叠，创造出几乎实体化的按钮质感
- **无限走马灯（Infinite Marquee）**：8 张 GIF 图双份复制后通过 CSS `translateX(-50%)` 实现无缝滚动，桌面端 30s / 移动端 10s 线性循环

### 技术栈

- React 18 + TypeScript + Vite
- Tailwind CSS 3
- Lucide React (图标)
- 原生 IntersectionObserver (滚动触发动画与视差)
- 原生 requestAnimationFrame (鼠标跟随粒子)

## 使用说明

- **推荐 AI 工具**：Cursor / Claude / ChatGPT
- **使用方式**：复制 [prompt.md](prompt.md) 中的提示词，在 AI 工具中生成完整项目代码
- **注意事项**：
  - 字体 PP Mondwest 使用本地加载（`/PPMondwest-Regular.woff2`），需要自行准备该字体文件放入 `public/` 目录；PP Neue Montreal 从 Webflow CDN 加载
  - 走马灯和推荐轮播区域使用了外部 GIF 和 Pexels 头像图片，请确保网络可访问
  - 由于组件量较大（10+ 个独立组件文件），建议分批生成或让 AI 工具按照提示词中指定的文件结构逐一创建

## 来源

- 来源：互联网收集
