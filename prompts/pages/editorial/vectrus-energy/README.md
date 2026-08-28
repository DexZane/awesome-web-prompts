# Vectrus Energy

> 电影级滚动驱动视频单页网站，基于 WebCodecs + MP4Box 离线解码平滑帧缓冲（Scrubbing），搭配 Helvetica Neue ME 极简排版与 500vh 叙事长卷。

## 效果预览

<!-- 将效果截图放在本目录下，推荐命名为 preview.png -->
![效果预览](preview.png)

## 简介

Vectrus Energy 是一款电影级长卷滚动叙事网站。页面固定在全屏视口，通过 500vh 的滚动距离驱动背景航拍云雾与山峦视频的每一帧画面。突破传统 `video.currentTime` 的卡顿瓶颈，采用 WebCodecs `VideoDecoder` 与 `mp4box.js` 预解码关键帧构建 WebP 内存帧缓存（Frame Bank），结合 Canvas 与指数平滑插值（LERP），实现丝滑如德芙的滚动逐帧播放体验。

## 核心设计与特性

- **WebCodecs + Canvas 平滑逐帧洗刷 (Scrubbing)**：
  - 使用 `MP4Box.createFile()` 提取视频流，通过硬件/软件 `VideoDecoder` 异步解码为帧序列；
  - 维护 LRU 缓存池与二分查找时间戳，在 `<canvas>` 上无缝绘制最近邻高保真画面；
  - 提供 `video.currentTime` 优雅降级与 60s Watchdog 超时熔断机制。
- **500vh 三段式顺序淡入淡出叙事**：
  - Section 1 (0%–28%)：左对齐大标题与深蓝调性（`#1D3045`）；
  - Section 2 (32%–63%)：居中极简留白与跨边境合作宣言；
  - Section 3 (67%–100%)：右对齐纯白字体，伴随视频航拍进入深暗山脊。
- **视口自适应色相翻转 (Color Flip)**：导航栏在滚动进度 $p > 0.55$ 时从海蓝墨色（DARK）自然过渡至纯白。
- **极简瑞士风格排版**：全面加载 `Helvetica Neue ME`，严谨控制大字号字间距与大写标头。

## 技术栈

- React 18+
- TypeScript
- Tailwind CSS v3
- WebCodecs API (`VideoDecoder` / `ImageBitmap`)
- mp4box.js (^0.5.2)
- Lucide React

## 使用说明

- **推荐 AI 工具**：Claude 3.5 Sonnet / Cursor / v0
- **使用方式**：直接复制 [prompt.md](prompt.md) 中的完整提示词粘贴至 AI 工具中即可生成完整代码。
