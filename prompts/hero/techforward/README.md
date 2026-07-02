# TechForward

> 极简黑白全屏视频 Hero，Framer Motion 动画驱动，科技感神经系统品牌风格。

## 效果预览

![效果预览](image.png)

## 简介

为神经科技品牌 **NeuralKinetics** 设计的全屏 Hero 落地页。极简黑白设计语言，全屏循环背景视频，底部内容区通过白色渐变淡出浮于视频之上。区别于其他方案，本提示词使用 **Framer Motion** 做所有入场动画，且要求使用纯 CSS（不用 Tailwind）。

### 亮点特性

- **Framer Motion 动画**：navbar 下滑、视频淡入缩放、底部内容上浮，全部 motion 驱动，缓动曲线 `[0.16, 1, 0.3, 1]`
- **底部渐变浮层**：`linear-gradient(to top, #fff, rgba(255,255,255,0.8), transparent)` 自然融合视频与文字
- **自定义 SVG Logo**：两个旋转 -35° 圆角矩形组合图标，纯 SVG 内联
- **胶囊式导航组件**：菜单按钮黑底白圈 + 标签组浅灰胶囊，设计细节丰富
- **响应式视频**：移动端视频缩至 80% 居中，桌面端全屏铺满
- **纯 CSS**：无 Tailwind，样式全部手写，易于理解和修改

### 技术栈

- React 19 + Vite
- Framer Motion（`motion` 包）
- lucide-react（Plus 图标）
- 纯 CSS（无 Tailwind）
- Google Fonts（Inter 300/400/500/600）

## 使用说明

- **推荐 AI 工具**：Cursor / Claude / ChatGPT
- **使用方式**：复制 [prompt.md](prompt.md) 中的提示词，在 AI 工具中生成完整项目代码
- **注意事项**：
  - 视频资源来自外部 CDN，需要网络访问
  - Framer Motion 需安装 `motion` 包（`npm i motion`），非 `framer-motion`
  - 需要先初始化 Vite + React 项目

## 来源

- 来源：互联网收集
