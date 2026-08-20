# ADHD Planner (Drift)

> 极简温润风 ADHD 友好日程规划应用 Drift 落地页，全屏视频 Hero、奶油色 About 区块与滚动联动卡片。

## 效果预览

<!-- 将效果截图放在本目录下，推荐命名为 preview.png -->
![效果预览](preview.png)

## 简介

Drift 是一款主打温和、低刺激感、专为注意力分散与 ADHD 群体设计的日程规划应用落地页。采用三段式视觉节奏：全屏视频背景 Hero 与居中悬浮胶囊导航、温润奶油色（`#F6E4CF`）重叠排版的 About 区块，以及左侧粘性停靠（Sticky）、右侧 IntersectionObserver 视差滚动的深色 Features 特性卡片。

## 核心设计与特性

- **视觉减负与温和调色**：柔和奶油色、深咖啡色字体与低饱和度渐变，打造无心理压力的专注氛围。
- **居中悬浮胶囊导航**：动态平滑过渡汉堡包 ↔ X 状态机及下拉菜单。
- **混排艺术字体**：Inter 搭配 Instrument Serif 斜体（`the stress`），突出从容感。
- **左侧粘性与右侧联动滚动**：使用 IntersectionObserver 监听右侧 3 组视频卡片，与左侧导航按钮高亮状态精确联动。

## 技术栈

- React 18+
- TypeScript
- Tailwind CSS
- Vite
- Lucide React

## 使用说明

- **推荐 AI 工具**：Claude 3.5 Sonnet / Cursor / v0
- **使用方式**：直接复制 [prompt.md](prompt.md) 中的完整提示词粘贴至 AI 工具中即可生成完整代码。
