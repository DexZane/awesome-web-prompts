# Interactive Discovery

> 全屏暗色主题 Hero Section，核心特性是光标跟随聚光灯揭示第二张图片，适用于地质品牌网站。

## 效果预览

![效果预览](image.png)

## 简介

一个为地质品牌 **Lithos** 设计的全屏沉浸式 Hero Section。核心交互是一个**跟随光标的聚光灯效果**，通过柔和的圆形遮罩在基础图片上方揭示第二张图片，营造出"拨开表层发现深层"的地质探索感。

### 亮点特性

- **光标聚光灯揭示**：Canvas 生成径向渐变遮罩，实现丝滑的鼠标跟随揭示效果
- **平滑跟随动画**：requestAnimationFrame + 线性插值（lerp），光标追踪自然流畅
- **进场动画**：模糊上升（blur-rise）、渐入上移（fade-up）、Ken Burns 缩放等多层动画，交错触发
- **磨砂玻璃导航**：中置药丸导航栏，backdrop-blur 半透明效果
- **完整响应式**：支持移动端 `100dvh`、断点自适应排版
- **无障碍支持**：`prefers-reduced-motion` 媒体查询

### 技术栈

- React 18 + TypeScript + Vite
- Tailwind CSS
- lucide-react（图标）
- Google Fonts（Inter + Playfair Display）

## 使用说明

- **推荐 AI 工具**：Cursor / Claude / ChatGPT
- **使用方式**：复制 [prompt.md](prompt.md) 中的提示词，在 AI 工具中生成完整项目代码
- **注意事项**：
  - 提示词中包含两张在线图片 URL，需要网络访问
  - 需要先初始化 Vite + React + TypeScript 项目并安装 Tailwind CSS

## 来源

- 来源：互联网收集
