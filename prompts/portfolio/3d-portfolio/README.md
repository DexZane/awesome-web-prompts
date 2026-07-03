# 3D Portfolio

> 为 3D 创作者设计的作品集落地页，暗色主题，大量运用 Framer Motion 滚动动画、磁性悬停与卡片堆叠效果。

## 效果预览

<!-- 请添加效果截图 -->
![alt text](image.png)

## 简介

专为 3D 创作者设计的个人作品集落地页（Portfolio Landing Page）。全站采用极具张力的深色主题（#0C0C0C），配合大字排版和丰富的交互动效。包含完整的五大区块：首屏（Hero）、无限滚动走马灯（Marquee）、关于我（About）、服务项目（Services）以及粘性卡片堆叠展示的作品集（Projects）。

### 亮点特性

- **磁性悬停交互（Magnet Effect）**：首屏人物肖像包含跟随光标移动的物理磁性动效
- **滚动驱动的无缝走马灯（Marquee）**：双行 3D 动图展示阵列，随页面滚动进行左右反向位移（Scroll-driven translateX）
- **文字逐字揭示（Animated Text）**：关于我区域的介绍文本，其透明度随用户的滚动进度逐字从 0.2 过渡到 1
- **粘性卡片堆叠（Sticky Stacking Cards）**：作品集区域使用 `position: sticky` 和 `useTransform` 实现了炫酷的卡片堆叠与缩放效果
- **复杂渐变与投影**：定制的 Contact 按钮，采用多重渐变背景与内阴影构建立体感，标题文字使用了金属质感渐变色
- **深度融合 Framer Motion**：大规模使用 `useScroll`、`useTransform`、`whileInView` 等 API 构建沉浸式体验

### 技术栈

- React 18 + TypeScript + Vite
- Tailwind CSS 3
- framer-motion（核心动效驱动库）
- lucide-react
- Google Fonts（Kanit）

## 使用说明

- **推荐 AI 工具**：Cursor / Claude / ChatGPT
- **使用方式**：复制 [prompt.md](prompt.md) 中的提示词，在 AI 工具中生成完整项目代码
- **注意事项**：
  - 走马灯包含大量外部 GIF 资源，作品集包含多张高清渲染图，需保持网络畅通
  - 依赖最新版的 framer-motion，请确保安装正确
  - 初始化项目后建议配置 Tailwind 扩展支持自定义颜色和断点

## 来源

- 来源：互联网收集
