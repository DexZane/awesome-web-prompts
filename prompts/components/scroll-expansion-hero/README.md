# Scroll Expansion Hero

> 滚轮与触控驱动的沉浸式媒体展开组件，支持视频与图片平滑放大、文字视差混合与双模态切换。

## 效果预览

<!-- 将效果截图放在本目录下，推荐命名为 preview.png -->
![效果预览](preview.png)

## 简介

Scroll Expansion Hero 是一款基于 Next.js / React、Tailwind CSS 与 Framer Motion 构建的高交互感媒体展开 Hero 组件。在用户向下滚动或触摸滑动的过程中，居中的视频或图片卡片会平滑展开至全屏，文字以视差混合模式向两侧平移，当展开至 100% 后无缝过渡至后续内容展示。

## 核心特性

- **滚轮与触控双重驱动**：精准监听 wheel 与 touch 事件，支持移动端自适应触控灵敏度与返回滚动阻尼。
- **多媒体支持**：原生支持 HTML5 视频、YouTube Embed 视频以及静态高质感图片。
- **文字视差与混合模式**：支持 `mix-blend-difference` 与文字左右视差偏移动画。
- **无缝内容展开**：当媒体完全展开（`scrollProgress === 1`）时解锁主视口滚动并淡入展示子组件内容。
- **完整 Demo 与模式切换**：内置视频/图片模式切换以及多种文字视差混合演示。

## 技术栈

- Next.js (App Router / Pages Router) / React 18+
- Tailwind CSS
- TypeScript
- Framer Motion
- shadcn/ui 目录规范 (`@/components/ui` 或 `@/components/blocks`)

## 使用说明

- **推荐 AI 工具**：Claude 3.5 Sonnet / Cursor / v0
- **使用方式**：复制 [prompt.md](prompt.md) 中的组件代码与集成指引直接集成至项目中。
