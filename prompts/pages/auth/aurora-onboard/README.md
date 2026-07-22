# Aurora Onboard / Sign Up

> 现代化双栏布局注册页，全屏自动播放视频搭配优雅的分步指示器，黑白极简风格。

## 效果预览

<!-- 请添加效果截图 -->
_待添加预览截图_

## 简介

Aurora Onboard 是一个设计极为精细的双栏（Two-Column）登录/注册引导页。左侧栏使用了无遮罩的原始视频全屏铺满（在桌面端占据 52% 的宽度），并悬浮着引导步骤（StepItem），具有平滑的错落进场动画。右侧栏则是高度可用的极简表单，包括社交登录、自定义输入框以及交互微动效。

整个页面采用了绝对纯净的黑白配色方案（`#000000` 与 `#FFFFFF`），仅用少量的灰色（`#1A1A1A`）作为输入框背景，通过 `motion/react` 实现了细腻的视线引导。

## 核心设计模式

*   **非对称双栏布局 (Asymmetric Split Screen)**：左侧视频区 52%，右侧表单区 48%，在视觉重量上左侧更加饱满。移动端自动隐藏左侧视频，右侧自适应铺满。
*   **纯净视频背景 (Pure Video Background)**：明确移除了所有暗色遮罩和滤镜（**CRITICAL 要求**），直接在原画质视频上方使用高对比度的纯白文字进行排版。
*   **层叠动画进场 (Staggered Animations)**：左侧的标题与步骤列表具有严密的 `staggerChildren` 控制，伴随微小的 `y` 轴位移滑入。
*   **分步状态指示器 (Step Indicator)**：包含激活与未激活状态的步骤组件，激活状态为白底黑字反色，未激活为透明底色。
*   **极致输入框细节 (Input Group)**：包含自定义的密码查看图标（Lucide Eye）以及微小的帮助提示文本，交互时带有明显的 Ring 边框（`focus:ring-white/20`）。

## 技术栈要求

*   React 18+
*   Vite
*   Tailwind CSS v4 (使用 `@apply` 与自定义 CSS 变量)
*   Framer Motion (`motion/react`)
*   Lucide React (Icons)

## 文件结构提示

本 Prompt 强调高内聚，要求将所有逻辑与组件收敛到极简的结构中：
*   `src/index.css`：配置基础主题（Theme）、Inter 字体与 `--color-brand-gray` 变量。
*   `src/App.tsx`：包含主布局（Main Layout）、左侧 Hero 视窗、右侧 SignUp 表单以及底部的三个内部功能组件（`<StepItem>`, `<SocialButton>`, `<InputGroup>`）。
