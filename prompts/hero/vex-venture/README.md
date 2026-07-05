# VEX Venture Hero

> 极致极简风创投全屏展示页，纯粹原生视频背景加原生 React 精密延迟动效编排。

## 效果预览

![alt text](image.png)

## 简介

专为风险投资（Venture Capital）、咨询机构或高端金融品牌设计的首屏区域。页面采取了极简的排版和色调搭配，最大的特色在于它的背景：没有任何黑色半透明遮罩、渐变层叠加或滤镜减弱（No dark overlay, NO dimming），让精挑细选的高质感视频原生地满屏播放，直接冲击视觉。

### 亮点特性

- **极致原生视频播放**：大胆舍弃了常规 Hero 组件里的背景叠加层（Overlay），以真实的原始明暗度展示视频素材，依靠强对比的极简界面凸显层次
- **无依赖高阶动效**：不使用任何外部动画库（Framer Motion 或 GSAP），完全基于原生 React State、`setTimeout` 延迟逻辑与纯 CSS Transition（`translateX`、`opacity`）打造错落有致的出场顺序
- **打字机错落文字展现**：标题部分（AnimatedHeading）将文字拆分至行、再拆分至字符级别，借助精确计算的指数/错位延迟（`charDelay * index`）实现字符自左向右依次飞入（`translateX(-18px)` 到 `0`）的丝滑效果
- **Liquid Glass 暗色玻璃**：底部标签区域与 Navbar 采用了调整后的偏暗调 `liquid-glass` 玻璃形态（`rgba(0, 0, 0, 0.4)`底色），结合精细的线性双层渐变边框，使其在全亮度视频上也能提供足够的阅读辨识度
- **极简排版约束**：字体采用纯正的 Inter 家族系列，通过极限微调的 Tracking（`letterSpacing: '-0.04em'`）展现顶尖设计质感

### 技术栈

- React 18 + TypeScript + Vite
- Tailwind CSS 3
- 原生 CSS (Transition, Gradient, Background Blend Mode)
- 纯原生 JS/React State 动效控制系统

## 使用说明

- **推荐 AI 工具**：Cursor / Claude / ChatGPT
- **使用方式**：复制 [prompt.md](prompt.md) 中的提示词，在 AI 工具中生成完整项目代码
- **注意事项**：
  - 此模板高度依赖原始视频的质感和构图（需要画面本身具备一定的留白或者高对比度深色区域），替换背景视频时需要精心挑选
  - 由于动效强依赖 `setTimeout` 计时器，在热更新（HMR）开发环境中可能会出现乱序，重新刷新页面即可看到完美的时序

## 来源

- 来源：互联网收集
