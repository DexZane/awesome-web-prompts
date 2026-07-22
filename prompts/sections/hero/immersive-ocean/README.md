# Immersive Ocean

> 全屏暗色主题 Hero Section，核心特性是沉浸式海底背景视频、响应式导航栏与移动端菜单，以及交错进场的文本动画。

## 效果预览

![效果预览](image.png)

## 简介

一个为创意工作室 **Foldcraft** 设计的全屏沉浸式 Hero Section。背景采用深海主题的循环播放视频，搭配极简大气的现代排版和流畅的进场过渡动效，营造极具高级感和电影级质感的视觉体验。

### 亮点特性

- **沉浸式视频背景**：铺满全屏的循环播放视频，通过 `object-cover` 和精确的定位在不同设备上均能完美呈现。
- **响应式导航栏**：配备桌面端水平链接和移动端汉堡包菜单。移动端菜单支持平滑的高度与透明度缓动过渡，以及菜单/关闭图标的旋转动画。
- **交错文本动效**：基于 CSS `@keyframes` 自定义 `fadeSlideUp` 动效，对徽章、主标题、副标题和 CTA 按钮进行 staggered 交错式延迟进场。
- **高端字体排印**：引入 Google 字体 Geist 现代无衬线字体，设置字重 300-700，打造极致前沿的视觉排版。

### 技术栈

- React
- Tailwind CSS
- lucide-react (图标：ArrowRight, Menu, X)
- Google Fonts (Geist)

## 使用说明

- **推荐 AI 工具**：Cursor / Claude / ChatGPT
- **使用方式**：复制 [prompt.md](prompt.md) 中的提示词，在 AI 工具中生成完整项目代码
- **注意事项**：
  - 提示词中包含在线视频 URL，需确保网络正常以加载背景视频
  - 需在 `index.html` 中引入 Geist 字体，并在 Tailwind 配置文件中将其定义为 `font-geist` 并在外层容器上使用

## 来源

- 来源：互联网收集
