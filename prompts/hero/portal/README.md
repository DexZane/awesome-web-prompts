# Portal Hero

> 电影/流媒体平台的全视口沉浸式首屏，配备底部模糊遮罩渐隐技术与精密编排的入场错落动效。

## 效果预览

<!-- 请添加效果截图 -->
_待添加预览截图_

## 简介

一款专为影视平台、流媒体服务或内容门户网站设计的全屏 Hero 组件。它采用"不可滚动"的单屏沉浸式设计——整个页面就是一个满屏的视觉主舞台，没有额外的区块或滚动区域。其最核心的技术亮点在于底部模糊遮罩的实现方式：没有使用常见的半透明黑色渐变覆盖层来压暗画面，而是利用 CSS `mask-image` 渐变遮罩配合 `backdrop-blur-xl`，仅在画面底部区域施加模糊效果并自然过渡到透明，保留了视频原始的色彩和亮度。

### 亮点特性

- **CSS Mask 驱动的底部模糊渐隐（No Gradient Darkening）**：放弃了常规的 `bg-gradient-to-t from-black/60` 暗色覆盖层，转而使用 `mask-image: linear-gradient(to top, black 0%, transparent 45%)` 与 `backdrop-blur-xl` 的组合，实现了底部内容区域的纯模糊化而不压暗画面
- **Liquid Glass 可复用材质系统**：包含完整的 `.liquid-glass` CSS 类定义（双层 mask 描边、luminosity 混合模式），并在导航栏按钮、搜索框、CTA 等多处复用
- **精密编排的 Blur-Fade-Up 入场动效**：自定义 `@keyframes blurFadeUp` 动画（从 `blur(20px) + translateY(40px)` 渐变到清晰状态），通过 `animationDelay` 内联样式实现从 0ms 到 900ms 的 10 级错落进场序列
- **汉堡菜单的高级图标变形**：移动端汉堡按钮在 Menu 与 X 图标间切换时，利用 `rotate-180` + `opacity` + `scale-50` 的组合过渡（`duration-500 ease-out`），而非简单的显隐切换
- **影视级元数据展示**：标题下方整合了 IMDB 评分（含实心星星图标）、片长与上映日期的水平信息条

### 技术栈

- React 18 + TypeScript + Vite
- Tailwind CSS 3
- Lucide React (图标)
- 原生 CSS (@keyframes, mask-image, backdrop-filter)

## 使用说明

- **推荐 AI 工具**：Cursor / Claude / ChatGPT
- **使用方式**：复制 [prompt.md](prompt.md) 中的提示词，在 AI 工具中生成完整项目代码
- **注意事项**：
  - `mask-image` 属性在部分旧版浏览器中需要 `-webkit-` 前缀，提示词中已明确要求同时添加
  - 由于页面设计为不可滚动的单屏，`h-screen` 在移动端 Safari 上可能存在地址栏高度问题，可考虑使用 `100dvh` 替代
  - 背景视频的 `position: fixed` 在某些移动端浏览器上可能表现不一致，生成后需在真机上验证

## 来源

- 来源：互联网收集
