---
id: vertex
name: Vertex
level: pages
category: ecommerce
type: Prompt
tech_stack:
  - "HTML5"
  - "CSS3"
  - "JavaScript"
  - "Google Fonts"
tags:
  - "E-Commerce"
  - "SaaS"
  - "3D Ring Carousel"
  - "Canvas Scaling"
  - "Dark Mode"
  - "Keyframes Animation"
recommended_ai:
  - "Claude Fable 5.1"
  - "GPT-6 Astra"
  - "Gemini 3.8 Flash"
  - "Claude Code"
  - "Cursor"
description:
  zh: 单文件无依赖电商SaaS全视口页面，1172×657缩放画布、37张卡片3D透视圆环圆柱与底部发光按钮
  en: "Single-file zero-dependency e-commerce SaaS hero with 1172x657 scaled canvas, 37-card 3D perspective cylinder ring, and bottom-glow buttons"
preview: ""
author: Community
source_url: ""
---

# Vertex

> 单文件无依赖电商SaaS全视口页面，1172×657缩放画布、37张卡片3D透视圆环圆柱与底部发光按钮。

## [效果预览]

<!-- 将效果截图放在本目录下，推荐命名为 preview.png -->
![效果预览](preview.png)

## [简介]

Vertex（Vertex Shops）是一款专为高端电商SaaS与数字零售平台打造的纯单文件无依赖全视口Hero落地页。单文件（单个index.html）、无构建步骤、无本地资源与外部框架。基于固定1172×657px设计画布构建，桌面端通过全局单一CSS变换`scale(var(--k))`根据视口比例动态缩放居中，杜绝传统流式布局在大屏下的版面失真。页面核心视觉由37张高精度创意卡片构成的3D透视圆柱圆环（R=891px）驱动，与前端浮动并向底部裁切溢出的真实护肤品牌浏览器视窗（Browser Mockup）形成具有强烈纵深感的空间遮挡层叠。严格遵循像素契约（Pixel Contracts），实现底部微光截断按钮（Bottom-Glow Button）与左侧图标锁定的极简微标（Badge），并内建三级自适应拓扑架构（桌面端、平板端动态Ramp、手机端全流式排布）与自研字体高精吻合器（Type Fitter）。

## [核心设计与特性]

- **固定比例缩放画布架构 (Fixed 1172×657 Scaled Canvas Architecture)**：
  - 桌面端全站元素以绝对坐标在1172×657px画布上精确布置（光学中心x=586），避免流式容器拉伸导致的比例失真；
  - 视口自适应缩放公式为`k = min(vw / W, vh / 560)`，故意以560作为高度除数使浏览器视窗底部自然溢出视口，消弭上下黑边（Letterboxing）；
  - 内置纯JS动态生成的双层点阵星空底纹（Layer A：150颗0px模糊星辰；Layer B：18颗1.2px微晕星辰），单节点巨量box-shadow渲染零额外DOM负担。
- **高保真3D圆柱透视旋转轮播 (True 3D Perspective Cylinder Ring)**：
  - 37张高精度商品与品牌创意卡片（130×300px）以R=891px圆柱形切向分布，中心摄像机视距891px，视平线y=918px；
  - 角步进360/37=9.7297°，基于`requestAnimationFrame`以1.9deg/s角速度平滑自旋；
  - 动态计算`translate3d(R*sin(r), 0, R*(1-c)) rotateY(-a)`与视界裁剪（|a|>42°时设置visibility:hidden剔除背面），并赋予`brightness(0.84 + 0.5*(1/c - 1))`边缘明暗渐变；
  - 10款轮换创意排版（Checkout支付、Launch发布、Shop护肤方案、Brand配方、Shipping免费送达、Power女性力量、Sale折扣等），全HTML/CSS文字排印叠加，集成图片加载失败自动回退占位。
- **像素契约A：左定边极简微标 (Pixel Contract A - Pinned Icon Badge)**：
  - 绝对定位250×39px规格（border-radius: 12px），深色近透明微光底色与毛玻璃滤镜（backdrop-filter: blur(12px)）；
  - 左侧固定内嵌4px边距的29×29px青蓝渐变小方块，内嵌白描闪电矢量图标（SVG）；文本自45px处左对齐排布，杜绝Flex居中或药丸胶囊变形，严格保持12px物理间距。
- **像素契约B：底光内敛剪裁按钮 (Pixel Contract B - Precision Bottom-Glow Button)**：
  - 近纯黑底色（#0a111d）按钮，底部约18px区域呈现青蓝向亮浅青过渡的多阶渐变光池；
  - 强制声明`overflow: hidden`并由按钮自身的圆角边框（14px/13px）实现硬截断，光线绝不溢出外部；
  - 导航端按钮顶部附着2px微光条（::before），侧边辅以带遮罩衰减的双侧边缘光（::after mask）；Hero端主按钮（See prices）移除顶条，两枚按钮均采用标准`<a><span>`结构，无下划线、无外发光模糊晕染。
- **前景层叠浏览器展示视窗 (Foreground Overlapping Browser Mockup)**：
  - 842px宽度的拟真深色浏览器视窗（z-index: 100）绝对定位于y=558px，覆盖并遮挡3D轮播卡片下三分之一，构建强烈的空间纵深感；
  - 顶部搭载高精度磨砂控制栏（三色窗口圆点、Omnibar地址搜索栏、矢量操作图标组）；
  - 内部承载完整的护肤品牌"GLOW SKIN CARE"电商界面，包含通知跑马横条、品牌Logo、21:9大画幅Hero横幅、四列产品网格卡片（折扣标签、价格划线对比）与底部服务承诺条。
- **三级视口响应式拓扑与字体吻合器 (Three-Tier Responsive Architecture & Type Fitter)**：
  - **桌面端（>1080px）**：严格缩放画布；运行时启动基于Canvas 2D度量的Type Fitter，精准校准主标题、微标与按钮文案的墨水宽度（Ink Width）与基线（Baseline）；
  - **平板端（701–1080px）**：视窗自适应动态过渡收窄（W在920至1172间线性过渡），计算高度富余量并在轮播轮位移（sshift）、视距缩放（rs）与Hero位移（stshift）三者间智能分配空间；
  - **手机端（≤700px）**：彻底解构为原生纵向弹性流式布局（Flex Column），取消缩放变换，微标宽度自适应，主标题智能断行，商品网格切换为双列排布；
  - **单次入场微动效 (One-Shot Master Entrance Timeline)**：以单独的translate/scale/clip-path属性驱动DOM节点依序出场，标题从基线向上擦除展开，4秒超时自动熔断保证内容绝对可见，完备支持`prefers-reduced-motion`。

## [技术栈]

- 单文件原生HTML5 / CSS3 / JavaScript（无任何外部框架，无构建工具）
- 纯CSS 3D变换（`perspective: 891px`、`transform-style: preserve-3d`、`translate3d`、`rotateY`）
- 原生Canvas 2D字体度量（Font Metrics / Ink Width / Cap Ratio计算）
- Google Fonts（Poppins / Playfair Display）
- Web Animations API（Element.animate入场时间轴）

## [使用说明]

- **[推荐]AI工具**：Claude 3.5 Sonnet / Cursor
- **使用方式**：直接复制[prompt.md](prompt.md)中的完整提示词粘贴至AI编程助手中即可生成完整的单文件生产就绪代码。
