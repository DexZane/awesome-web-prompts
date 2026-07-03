# Health Portal (Dental Health)

> 极致大图遮罩拼接（Masked Cards）与滚动视差交互的单页牙科医疗落地页。

## 效果预览

![](image.png)

## 简介

专为牙科诊所或高端医疗机构设计的单页 Landing Page。核心亮点是使用了“**Masked Cards（遮罩卡片拼接）**”这一高级网页排版技术：通过精密计算多张卡片的绝对位置偏移与图片比例，让首屏的多个卡片完美拼接显示同一张背景大图，形成网格化又浑然一体的视觉错觉。同时，该页面包含了原生实现的定制加载动画（Splash Screen）和流畅的错落入场动效。

### 亮点特性

- **高级 Masked Cards 拼接排版**：Section 1 和 2 使用自定义的 React Hook (`useMaskPositions`, `useImageWidth`) 监听 ResizeObserver，动态计算背景图位置偏移 (`backgroundPosition`)，将一张完整的超宽素材无缝裁剪拼接到了独立的 DOM 元素网格中
- **开场数字加载幕（Splash Screen）**：进场时白色全屏遮罩左下角展示 0 到 100 的计数动画，耗时精调至 2000ms（每帧 20ms），结束后 700ms 丝滑淡出
- **自定义交错入场动画**：定制 `useStaggeredReveal` Hook 结合 `IntersectionObserver`，当每个模块滚动进入视口时，内部卡片以 `0.6s cubic-bezier(0.16,1,0.3,1)` 的弹簧阻尼感分批次错落上浮出现
- **全定制响应式导航与汉堡菜单**：移动端汉堡菜单采用了三线变叉的原生 CSS `transition` 动画控制，菜单面板滑动进场且内置背景模糊遮罩
- **极限排版细节**：无缝模块拼接（`pb-1.5 md:pb-2` 紧密贴合），`clamp()` 流式大标题（极限缩放 `clamp(3rem,11vw,11rem)`），全透/半透毛玻璃网格叠加

### 技术栈

- React 18 + TypeScript + Vite
- Tailwind CSS 3
- 原生 ResizeObserver & IntersectionObserver（零外部动画依赖）
- 纯净实现（零组件库、零外部图标库，全量内联 SVG）
- Google Fonts（Open Sauce One）

## 使用说明

- **推荐 AI 工具**：Cursor / Claude / ChatGPT
- **使用方式**：复制 [prompt.md](prompt.md) 中的提示词，在 AI 工具中生成完整项目代码（整个应用将被生成在一个 `App.tsx` 文件中以保证极致的便携性）
- **注意事项**：
  - 代码对 DOM 节点的引用及宽高计算依赖精准，如需修改网格结构，请留意 `MaskedCard` 组件对响应式断点的兼容
  - 依赖多张在线 CDN 托管的医疗主题图片（WebP），首次渲染时可能会受网络影响，可考虑替换为本地静态资源优化首屏

## 来源

- 来源：互联网收集
