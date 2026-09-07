# Intelligent Performance

> 单文件无依赖SaaS高性能全视口营销舞台，双端自适应视频背景、LED点阵字型生成器与3张429×554毛玻璃指标卡。

## [效果预览]

<!-- 将效果截图放在本目录下，推荐命名为 preview.png -->
![效果预览](preview.png)

## [简介]

Intelligent Performance是一款专为高性能AI计算与SaaS基础设施设计的单文件自包含（Single-file self-contained `index.html`）全视口营销舞台。采用纯原生架构（零框架、零构建、零外部JS脚本库），页面以低饱和纸灰调（#ececeb）为底色，桌面端锁定单屏视口无滚动条，移动端无缝转为单列堆叠滚动。顶部配置双行大标题与基于位图点阵算法动态生成的LED发光字型“Intelligent”，主体承载3张429×554刚性等比缩放的液态毛玻璃卡片，辅以雷达微光扫描表盘、多层切片晶体墙与跨源网络拓扑图，营造兼具工业精密感与未来感的高端数字舞台。

## [核心设计与特性]

- **双端自适应视频背景体系 (Responsive Dual Video Background)**：
  - 桌面端（≥768px）：加载1080p宽屏微动视频背景，叠加双层轻微半透明蒙版（linear-gradient(rgba(236,236,234,.10), rgba(236,236,234,.10))）与静态海报兜底回退；
  - 移动端（<768px）：智能切换为竖版轻量流式微动视频与特定窄屏海报，配合`prefers-reduced-motion: reduce`无障碍媒体查询自动隐藏动态画面。
- **纯JS动态位图LED点阵字型引擎 (7-Row Bitmap LED Dot Typography)**：
  - 内置7行像素位图映射表（涵盖0-9数字、点号及“Intelligent”等全量英文字符）；
  - 运行时自动遍历解析`[data-dots]`属性，计算间距与半径并即时构建纯SVG矢量圆形阵列，呈现极客质感的LED矩阵发光效果。
- **刚性等比自适应容器卡片架构 (Rigid 429×554 Unit Scaling via `--u`)**：
  - 基于CSS容器查询（`container-type: inline-size/size`）定义`--u: calc(100cqw / 429)`基准单位；
  - 3张指标卡严格锁定429×554宽高比，卡片内部元素尺寸、边距与字号完全由`--u`等比驱动，杜绝内部错位；
  - 平板端（768px-1180px竖屏）自适应为双列网格+居中末卡，移动端流式单列纵向铺开。
- **三大性能度量卡片与专属图形系统 (Three Distinct Visual Modules)**：
  - **卡片1 推理速度 (`.card--speed`)**：18层径向复合渐变底色，搭载SVG雷达弧形发光表盘、半透明阴影环与动态微刻度指针线（23道角度刻度），展示“118 ms”超低延迟；
  - **卡片2 上下文窗口 (`.card--context`)**：紫粉色多层霓虹渐变底板，构建精细切片晶体墙（3顶/3中/1底色带、微噪点与倒角玻璃窗体），展示“2.4 M”上下文处理量；
  - **卡片3 智能连接 (`.card--connections`)**：暖橙色炽热渐变底板，集成高精网络拓扑折线图与5颗高亮点阵节点，呈现“16 K”跨数据源互联指标。
- **单次编排进场动效与安全降级 (One-Shot Choreographed Entrance & Safe Cleanup)**：
  - HTML挂载`entrance-active`启动类，对标题行、副文本、卡片本体、内部图表、度量数据与CTA按钮执行阶梯毫秒级进场补间；
  - 进场完成后通过`animationend`事件自动移除活动类并清除定时器，确保交互常态下的纯净性能；开启减弱动效时直接秒级重置。

## [技术栈]

- 原生HTML5（语义化结构、双端video标签、容器查询、自适应布局）
- 原生CSS3（CSS变量、clamp计算流式体系、18层高级渐变、SVG噪点滤镜）
- 原生JavaScript（7行位图LED矢量生成引擎、动效生命周期监听）
- Google Fonts（Inter字体簇）

## [使用说明]

- **[推荐]AI工具**：Claude 3.5 Sonnet / Cursor / v0
- **使用方式**：直接复制[prompt.md](prompt.md)中的完整提示词粘贴至AI编程助手中即可生成完整单文件代码。
