# Organic Odyssey

> 充满电影感的全屏视频 Hero 页，配备极致的 Liquid Glass 按钮与单字 staggered 渐入特效。

## 效果预览

![alt text](image.png)

## 简介

极其精致、充满自然生态与先锋美学质感的全屏 Hero 展示页。背景采用静音循环播放的高清微观生态视频，搭配经典的 Garamond 衬线字体作为主标题，营造出画廊般的静谧感。核心亮点是极高水准的 CSS "Liquid Glass" 按钮实现以及基于 Framer Motion 的逐字符渐入动画。

### 亮点特性

- **极致 Liquid Glass（液态玻璃）材质**：自定义的 `.liquid-glass` 样式，利用 `luminosity` 混合模式、双层 `mask` 裁切渐变边框叠加高斯模糊，实现了极致真实的拟物玻璃质感
- **逐字排布渐入效果（StaggeredFade）**：将主标题拆解为单个字符，通过 `useInView` 触发 Framer Motion 的错落进场动画，每字符间隔 0.07s
- **定制化移动端下拉菜单**：移动端去除了常见的侧边栏滑出，改为在顶部中心基于 `AnimatePresence` 实现的平滑下拉式玻璃面板（带深度模糊和内阴影），内含连贯的交错上浮选项
- **经典字体排版**：完美融合了复古的 Garamond（衬线体）与现代极简的 Geist（无衬线体），通过超大字号和超密行距（leading 1.08）打造强烈的视觉冲击

### 技术栈

- React 18 + TypeScript + Vite
- Tailwind CSS 3
- framer-motion (StaggeredFade, AnimatePresence)
- lucide-react (Menu, X 图标)
- 高阶原生 CSS (混合模式、遮罩遮罩组合 `mask-composite`)

## 使用说明

- **推荐 AI 工具**：Cursor / Claude / ChatGPT
- **使用方式**：复制 [prompt.md](prompt.md) 中的提示词，在 AI 工具中生成完整项目代码
- **注意事项**：
  - 代码对字体加载依赖度较高，需保证 index.html 中正确配置了 Google Fonts（Geist）和在线引用的 Garamond
  - 液态玻璃按钮的 CSS 特性较为前沿，在过旧版本的浏览器中可能存在渲染兼容性，但大部分现代浏览器已完美支持

## 来源

- 来源：互联网收集
