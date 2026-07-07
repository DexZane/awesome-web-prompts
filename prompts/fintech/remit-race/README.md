# Remit Race

> 深色紫调竞赛风移动端 App Mockup，带有 3D 地球旋转视频和分层叠加倒计时条。

## 效果预览

<!-- 请添加效果截图 -->
_待添加预览截图_

## 简介

一款以跨境汇款竞赛为主题的移动端 App 界面 Mockup 展示页。它不是一个传统意义上的网页落地页，而是在深色背景上渲染了一个精确尺寸（393x820px）的手机边框，内部呈现完整的 App 界面。整体采用了深紫色调（`#050410` / `#0c0a16`），配合 3D 地球旋转视频和层层叠加的倒计时胶囊条，营造出极具科技感和紧迫感的竞赛氛围。

### 亮点特性

- **精确手机 Mockup 框架**：393x820px 的真实手机尺寸，配合 `border-radius: 28px` 圆角和深度阴影（`0 30px 80px rgba(0,0,0,0.6)`），并通过 `zoom: 0.78` 全局缩放适配展示
- **CSS Transform 内容缩放**：内容区域（300x626px）使用 `transform: scale(1.31)` 进行精确放大，模拟了 App 内部的视觉密度
- **幽灵文字（Ghost Text）**：绝对定位的超大号（68px）低透明度文字"ONE GLOBE, ONE FUTURE"作为背景装饰，使用了专门加载的 Qanelas-Heavy 字体
- **分层叠加倒计时条（Layered Countdown）**：4 个半透明紫色胶囊从左到右递进叠加（通过递增的 `z-index` 和 `left` 偏移），每一层的背景透明度逐渐增加，营造出层次分明的时间紧迫感
- **3D 地球旋转视频**：底部嵌入了一个自动播放的 3D 地球旋转视频（宽度 135%，溢出裁切），上方覆盖渐变遮罩实现丝滑过渡
- **毛玻璃 Hero 卡片**：`backdrop-filter: blur(18px)` 配合极低透明度的紫色渐变背景，让卡片在视频上方若隐若现

### 技术栈

- React 18 + TypeScript + Vite
- Tailwind CSS 3
- 原生 CSS (@font-face, Transform, Backdrop-filter)
- 自定义字体 Qanelas-Heavy (外部 woff2/woff 加载)

## 使用说明

- **推荐 AI 工具**：Cursor / Claude / ChatGPT
- **使用方式**：复制 [prompt.md](prompt.md) 中的提示词，在 AI 工具中生成完整项目代码
- **注意事项**：
  - 字体 Qanelas-Heavy 从外部 CDN 加载（`db.onlinewebfonts.com`），请确保网络可访问
  - 此模板高度依赖精确的像素定位（绝对定位 + 固定数值），修改内容时需注意各元素间的位置关系
  - `zoom: 0.78` 属性在 Firefox 中的表现可能与 Chrome/Safari 不同，可考虑用 `transform: scale(0.78)` 替代

## 来源

- 来源：互联网收集
