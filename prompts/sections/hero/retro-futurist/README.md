# Retro-Futurist Hero

> 极其新颖的“鼠标横向 Scrub”视频背景交互，配合复古科幻风格的打字机特效，打造极客风创意机构首屏。

## 效果预览

![alt text](image.png)

## 简介

一款复古未来主义（Retro-Futurist）风格的全屏展示页，非常适合创意机构、极客团队或 Web3 项目。最大亮点在于放弃了传统的“自动循环播放”背景视频，而是通过原生 JavaScript 的 `mousemove` 事件捕获鼠标横向移动轨迹（X轴偏移），将其精准映射到背景视频的时间轴（`currentTime`）上。这意味着：**用户的鼠标左右滑动，就能让背景视频按比例倒退或快进！**

### 亮点特性

- **基于鼠标 Scrub 的原生视频控制**：通过监听全屏的 `mousemove` 计算 `currentX - prevX` 增量，并利用防抖/防流控（Seek-flooding prevention）策略实时修改 `<video>` 元素的 `currentTime`，实现类似剪辑软件时间轴的滑动交互
- **纯手写打字机特效（Typewriter Hook）**：没有使用第三方包，手写了精准的打字机自定义 Hook（带有可配置的初始延迟与单字间隔），并搭配了经典的闪烁光标（Blinking Cursor）CSS 动画
- **反常识的极简毛玻璃文本（Blurred Intro）**：使用了固定静态的 `filter: blur(4px)` 高斯模糊文本作为“AI Agent”的角色引言，强化科幻悬疑感
- **极致字体与排版**：全面使用经典高阶无衬线字体 HelveticaNowDisplay，精确至微秒的自研淡入滑出（Fade-in + slide-up）交互胶囊按钮集合
- **复制至剪贴板功能集成**：原生集成 `navigator.clipboard.writeText` 交互，点击按钮可将指定邮箱地址一键复制

### 技术栈

- React 18 + TypeScript + Vite
- Tailwind CSS 3
- 原生 JS DOM 事件监听 (`mousemove`, `onSeeked`)
- 原生 CSS (Keyframes, Filters)

## 使用说明

- **推荐 AI 工具**：Cursor / Claude / ChatGPT
- **使用方式**：复制 [prompt.md](prompt.md) 中的提示词，在 AI 工具中生成完整项目代码
- **注意事项**：
  - 视频 Scrub 交互强依赖视频本身的编码格式（需要关键帧密集、易于 Seek 的 MP4/WebM），提供的示例视频已经过测试
  - 移动端由于没有持续悬停的 `mousemove` 事件，视频背景将表现为静态帧（符合移动端性能要求）或需要另外适配 `touchmove` 事件，可在生成后根据需求调整

## 来源

- 来源：互联网收集
