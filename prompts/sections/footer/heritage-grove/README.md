# Heritage Grove

> 单文件无依赖典雅东方水墨风全视口页脚组件，1080p茶青水墨山水视频背景、Cormorant Garamond衬线字标与5级响应式流式布局。

## [效果预览]

<!-- 将效果截图放在本目录下，推荐命名为 preview.png -->
![效果预览](preview.png)

## [简介]

Heritage Grove是一款充满东方诗意与现代典雅质感的高端全视口网站页脚组件。采用纯原生单文件自包含架构（零构建步骤、零外部框架、零外部JavaScript依赖），仅引入Google Fonts字体库。设计采用独特的茶青色墨韵调色盘（--ink: #175A67，--cream: #EAE3DE），搭配静谧的1080p手绘山水水墨微动视频背景与纯CSS阶梯进场动画编排，完美契合高端手工艺、东方美学、艺术生活方式及文化创意品牌的官网落地页。

## [核心设计与特性]

- **手绘水墨全屏视频背景 (Teal Ink Landscape)**：
  - 采用10秒1080p循环的高清茶青水墨山水画卷，展现层叠远山、静水湖泊、岩松与双鹤翱翔意境；
  - 桌面端（>1100px）采用纯粹无遮罩（Full-Bleed）直绘，文本直接映衬在艺术画面之上，拒绝死板蒙层；
  - 移动端（≤1100px）巧妙转换为内容下方的自然流式图文排布，配合顶部淡入平滑渐变羽化缝隙（Soft Seam），彻底杜绝画面过度裁剪或仙鹤被文字遮挡。
- **典雅双字体排印与品牌徽标 (Dual Typography & Brand Mark)**：
  - 品牌字标采用Cormorant Garamond 500经典衬线字体，正文与UI导航采用现代几何无衬线Poppins；
  - 内联绘制高精品牌椭圆树苗徽标（brand-mark，viewBox 0 0 96 120），传递自然与工匠精神。
- **全内联矢量图标系统与极简表单**：
  - 包含完整的联系方式图标（信封、电话、定位图钉）、社交媒体链接组（Facebook、Twitter、Instagram、LinkedIn）与右箭头发送按钮；
  - 极简单行邮件订阅框，内置半透明背景与细描边，配备符合无障碍标准的隐藏label与16px防iOS缩放输入体验。
- **5级渐进式自适应流式断点 (5-Breakpoint Responsive Hierarchy)**：
  - 桌面宽屏（>1100px）：5栏弹性网格布局；
  - 平板模式（721px-1100px）：3栏网格，视频自动下移为流式元素；
  - 手机模式（≤720px）：双栏紧凑排布，大幅提升触控点击热区至40px，全面适配iOS安全区域（env(safe-area-inset-*)）；
  - 小屏与窄屏模式（≤440px / ≤359px）：流式单栏优雅降级，从320px到1440px全视口保证0水平溢出。
- **纯CSS阶梯律动进场与减弱动效 (Choreographed Entrance & Reduced Motion)**：
  - 通过@keyframes rise-in与cubic-bezier(.22,1,.36,1)缓动曲线，为品牌信息、各导航列、订阅区与底部栏提供毫秒级精细递增延迟；
  - 完整适配prefers-reduced-motion:reduce媒体查询，在减弱动画模式下优雅降级为静态海报背景。

## [技术栈]

- 原生HTML5（语义化footer、nav、form、video标签，完全满足无障碍标准）
- 原生CSS3（CSS自定义属性、clamp流式计算、CSS Grid、Keyframes序列、安全区域）
- Google Fonts（Cormorant Garamond、Poppins）

## [使用说明]

- **[推荐]AI工具**：Claude 3.5 Sonnet / Cursor / v0
- **使用方式**：直接复制[prompt.md](prompt.md)中的完整提示词粘贴至AI编程助手中即可生成完整单文件代码。
