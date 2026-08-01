# Skybridge 404

> 极简无遮罩全屏 404 错误页，包含全屏高清动态视频背景、几何像素风格品牌 Logo 以及文字渐变 404 大字。

## 效果预览

<!-- 将效果截图放在本目录下，推荐命名为 preview.png -->
![效果预览](preview.png)

## 简介

Skybridge 404 是一款精准对齐 Figma 构图的单页全视口 404 错误页面。视频背景使用 100% 透明度展示，且不叠加任何遮罩或毛玻璃效果。页面正中为使用 `background-clip: text` 实现线性渐变效果的超大 `404` 数字、一条 1px 白色分割线及优雅的提示文字，顶部居中为几何像素图形与标志 Wordmark。

## 核心设计模式

* **纯净视频背景 (Pure Video Background)**：采用 100% 不透明度语义化 `<video>` 全屏居中呈现 (`object-cover`)，不铺任何颜色或渐变遮罩。
* **Geist Mono 专有字体 (Geist Mono Typography)**：通过 `@font-face` 引入 `Geist Mono:SemiBold` (600 字重) 精准渲染数字与提示标语。
* **文字线性渐变 (Text Gradient)**：`404` 标题使用 `linear-gradient` (247.33deg, white 2.5% to rgba(255,255,255,0.4) 93.6%) 配合 `-webkit-background-clip: text` 打造高级金属高光质感。
* **精准响应式缩放 (Precision Responsive Layout)**：移动端在 `640px` 下将 Logo 等比例缩放至 75%，并利用 `clamp(140px, 52vw, 200px)` 响应式收缩超大数字。

## 技术栈要求

* React + Vite
* Tailwind CSS v4
* Geist Mono Font

## 使用说明

- **推荐 AI 工具**：Claude 3.5 Sonnet / Cursor / v0
- **使用方式**：直接复制 [prompt.md](prompt.md) 中的完整提示词粘贴至 AI 工具中生成代码。

## 来源

- 来源链接：用户提供
- 作者：未知
