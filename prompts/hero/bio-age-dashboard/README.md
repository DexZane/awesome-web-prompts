# Bio-Age Dashboard

> 健康与生物学年龄仪表盘 Hero，复杂的无限刻度尺动效与展开式悬浮卡片，结合慢旋转光效背景。

## 效果预览

![alt text](image.png)

## 简介

专为健康科技、抗衰老或医疗数据看板设计的 Dashboard 风格 Hero 页。核心视觉是一个巨大的“生物学年龄（Biological Age）”展示模块，内置流光溢彩的慢速旋转背景、动态递增的数字动画以及精致的无限滚动刻度尺动效。右侧配套展示了一组 2x2 网格的数据卡片，其中包含支持高度平滑展开交互的健康快照卡片。

### 亮点特性

- **慢速旋转光效背景（Rotating Aura）**：中心年龄卡片内部的背景图进行 360° 匀速慢速旋转（30s周期），配合绝对居中的文字营造出深邃感
- **无限滚动刻度尺（Ruler Ticker）**：底部由数十根精确高度（18px/26px/40px）分割的金色刻度线组成的标尺，配合左右两端遮罩（Fade Mask）进行无缝循环水平移动
- **数字跳动逻辑（Count-up）**：主数字具有两阶段逻辑，首先 1.8 秒内从 0 快速跳动至 28，随后进入“年龄递增”模式，每隔 6 秒自动加 1
- **悬停展开卡片（Expandable Card）**：右侧的 "Your Health Snapshot" 卡片默认紧凑，Hover（桌面端）或 Click（移动端）时高度平滑扩展，颜色主题反转（暗背景变白底），展示详细医学建议
- **进场动画序列**：基于 `IntersectionObserver` 实现定制化的一套入场系统，各元素（导航、卡片、数字）具有精确的 staggered 错落延迟，弹簧阻尼感缓动（cubic-bezier）

### 技术栈

- React 18 + TypeScript + Vite
- Tailwind CSS 3
- 原生 CSS 动画（Keyframes for Ticker & Spin）
- 原生 IntersectionObserver（入场动画系统）
- lucide-react (Arrow 交互图标)

## 使用说明

- **推荐 AI 工具**：Cursor / Claude / ChatGPT
- **使用方式**：复制 [prompt.md](prompt.md) 中的提示词，在 AI 工具中生成完整项目代码
- **注意事项**：
  - 依赖多个 Figma CDN 托管的背景层与透明图像资源，需确保网络可访问
  - Tailwind 配置需正确引入 `surface` 和 `gold` 自定义颜色谱系

## 来源

- 来源：互联网收集
