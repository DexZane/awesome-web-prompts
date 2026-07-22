# Securify Data Security Hero

> 数据安全类 SaaS 的极简首屏，以巨大的错落排版和浮动的数据统计块构建专业信任感。

## 效果预览

![alt text](image.png)

## 简介

一款专为 B2B SaaS、数据安全或云存储产品设计的全屏 Hero 落地页。它的设计语言极其大胆且克制——没有花哨的彩色渐变，全站基于纯黑白与 Neutral 色系（`neutral-900` / `white/70` 等）打造。视觉中心由三个巨大的、交错排列的单词（`protect`, `your`, `data`）占据，配合四周绝对定位的浮动数据统计块（带有标志性的斜线分隔符），在无缝循环的背景视频映衬下，展现出强烈的科技感和可靠性。

### 亮点特性

- **极致张力的错落排版（Staggered Typography）**：利用绝对定位和极简小写字母（全小写 `lowercase`）构建的超大标题（`14vw`），将短句 `protect your data` 变成画面的视觉骨架
- **悬浮统计数据模块（Floating Stat Blocks）**：分布在画面四周（右上、左下、右下）的业务数据块（如 `+65k startups use`），通过轻量级的斜向线条（`rotate-[20deg]`）进行视觉牵引，打破了传统的居中排版套路
- **高阶沉浸式导航（Floating Pill Navbar）**：分为左、中、右三个独立的“胶囊”导航块，使用了高斯模糊（`backdrop-blur`）配合超高透明度的 `neutral-900/90`，并巧妙地隐藏了移动端不必要的信息
- **纯粹黑白中性调色**：完全禁用了常见的紫/蓝科技色，强制使用 `neutral`、纯黑（`#000`）和透明白（`white/40` 等），极度强化产品的克制与专业属性
- **精密字体控制**：引入了 Google Font 的 `Readex Pro`，并通过 `-0.04em` 的紧凑字间距（tracking）和 `0.95` 的行高，让巨大字体显得极度凝聚

### 技术栈

- React 18 + TypeScript + Vite
- Tailwind CSS 3
- 纯 Tailwind 绝对定位排版（绝对无额外 CSS/动画库依赖）

## 使用说明

- **推荐 AI 工具**：Cursor / Claude / ChatGPT
- **使用方式**：复制 [prompt.md](prompt.md) 中的提示词，在 AI 工具中生成完整项目代码
- **注意事项**：
  - 巨大文字尺寸使用了响应式的 `vw` 视口单位，若你需要将其内嵌在某个限定宽度的容器中，需将 `vw` 改为 `cqw`（容器查询单位）或百分比
  - 此组件依赖的字体 `Readex Pro` 极大地影响了标题的最终视觉张力，请确保网络能正常加载 Google Fonts
  - 左侧边栏包含了一个通过 SVG 原生 `path` 手绘拼接的复杂 Logo，请保证该 SVG 的正常渲染

## 来源

- 来源：互联网收集
