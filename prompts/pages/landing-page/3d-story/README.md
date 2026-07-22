# 3D Story

> 滚动驱动的沉浸式落地页，视频帧逐帧随滚动播放，配合粒子系统和卡片揭示动效。

## 效果预览

![效果预览](image.png)

## 简介

为 3D Web 框架 **Veldara** 设计的沉浸式营销落地页。核心体验是**滚动控制视频进度**——随着用户向下滚动，视频帧逐帧播放，形成"3D 世界随手势展开"的叙事感。

### 亮点特性

- **滚动驱动视频帧**：预先 fetch 视频并提取帧序列缓存为 `ImageBitmap`，滚动时按进度索引精准渲染，流畅无卡顿
- **降级策略**：帧提取失败时自动回退到 `<video>` 元素 seek 模式，保证兼容性
- **Canvas 粒子系统**：背景飘浮粒子，独立 RAF 循环，自动适应窗口尺寸
- **卡片滚动揭示**：三列功能卡片通过 `mask-image` 线性渐变从左向右依次揭示
- **Hero 淡出**：向下滚动时首屏内容平滑淡出，聚焦背景视频叙事
- **Section 3 进场**：IntersectionObserver 触发模糊上升动画
- **纯原生实现**：无任何框架依赖，单 HTML 文件，开箱即用

### 技术栈

- 纯 HTML / CSS / JavaScript（无框架）
- Canvas API（视频帧提取 + 粒子）
- `createImageBitmap` / `fetch` / `requestAnimationFrame`
- IntersectionObserver
- Google Fonts（Inter）

## 使用说明

- **推荐 AI 工具**：ChatGPT / Claude / Cursor
- **使用方式**：直接复制 [prompt.md](prompt.md) 中的完整 HTML，保存为 `.html` 文件在浏览器中打开即可运行
- **注意事项**：
  - 视频资源来自外部 CDN，需要网络访问；跨域需服务器支持 CORS
  - 帧提取在低配设备上可能较慢，已内置降级方案
  - 建议通过本地 HTTP 服务器（如 `npx serve`）打开，避免 `file://` 协议的 CORS 限制

## 来源

- 来源：互联网收集
