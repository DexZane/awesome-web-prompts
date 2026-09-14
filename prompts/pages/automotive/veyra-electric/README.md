# Veyra Electric

> 概念纯电超跑交互落地页，1672:941共用图像平面、多路离屏Canvas视频解构悬停与车体涂装轮毂切换。

## [效果预览]

<!-- 将效果截图放在本目录下，推荐命名为 preview.png -->
![效果预览](preview.png)

## [简介]

VEYRA（Veyra Electric）是一款专为独立概念纯电动汽车（Electric Vehicle Design Study）打造的高精度单视口交互场景落地页。基于React 18、TypeScript与Vite构建，全站严格锁定单一交互视窗与画册级排印。页面围绕1672:941固定比例图像平面展开，搭载四组空间热点（前机舱开盖、底盘电池透视、车体漆面选择、轮毂款式切换），通过离屏Video多路预加载与原生Canvas帧渲染管线，实现机盖开合与电池透视的无损正反向悬停动画与最后一帧无缝冻结；同时支持深度零部件技术剖析视图（Electric drive / Battery architecture）与非侵入式外观选配面板（Paint & Wheel Dock）。

## [核心设计与特性]

- **1672:941共用图像平面与精准响应式排版 (Shared 1672:941 Image Plane & Framing)**：
  - 核心车体视觉、热点坐标（Hotspots）与技术透视图严格依附于1672:941的固定比例图像平面，杜绝全屏坐标漂移；
  - 外部包裹3px纯白硬朗外边框（桌面端border-radius: 16px，移动端12px），确保整车底盘投影、开机盖状态与前后双轮完整呈现在视窗内；
  - 桌面端（>900px）顶栏Logo、主标题、视窗媒体与底栏文字组严格左对齐同宽；移动端（≤900px）自适应堆叠并转为双列文本底栏；当高度≤780px时技术说明流式后置，保证车体构图不被压缩。
- **离屏Canvas视频解构悬停渲染引擎 (Off-DOM Multi-Video Canvas Scrubbing Engine)**：
  - 内置`HoverVideo.tsx`核心组件，维持4组离屏隐藏Video实例（前向与反向独立编码视频：`hood-hover-forward.mp4`/`reverse`，`battery-hover-forward.mp4`/`reverse`）；
  - 视频解码完成后通过原生Canvas即时抓取绘制，彻底杜绝黑屏闪烁；
  - 严格的状态机逻辑：先完成当前方向的短程播放再执行反向，绝不在两段非对称编码视频间随意seek插值；指针快速移出或重定位时平滑更新目标位姿；进入详情页时无缝冻结当前渲染帧，交接给高精度技术切面静态图。
- **四维交互热点与双级剖析导航 (Four Hotspot Matrix & Dual Detail Navigation)**：
  - **Drive动力总成（x=25%, y=48%）**：悬停触发机盖向前掀开动画，点击平滑缩放淡入机舱三维组件高保真线框图与技术条目；
  - **Battery电池架构（x=64%, y=72%）**：悬停触发底盘电池包X光透视展开动画，点击进入电池结构分解视图；
  - **Paint车身漆面（x=55%, y=51%）**与**Wheels轮毂款式（x=48%, y=71%）**：唤出底部外观配置浮动底座（Appearance Dock）；
  - 完整的`overview → entering → detail → returning → overview`生命周期护栏，点击组件条目切换专属驾驶者向解析文案，支持Esc返回与无障碍键盘焦点。
- **非侵入式独立外观配置底座 (Non-Intrusive Independent Appearance Dock)**：
  - 专属面板采用`#35586e`深蓝底色与12px圆角，悬浮于车辆底盘外侧，绝不遮挡车体或轮毂；
  - 支持5款车身漆面（Studio Silver / Electric Green / Lime Green / Sky Blue / Graphite）与3款轮毂造型（Multi-spoke / Aero Disc / Sport Forged）；
  - 互斥状态防护：唤出漆面或轮毂选配时立即中断悬停视频请求，等待车体完全归位至中立位姿后再完成换装图渲染，杜绝在掀盖或透视帧上叠加喷漆。
- **极简工程无衬线排印与冷峻工业美学 (Minimalist Industrial Aesthetic & Space Grotesk)**：
  - 全站仅采用单一体量Space Grotesk（字重400），禁止使用浏览器合成伪粗体，仅通过字号与留白构筑层级；
  - 工作室中性蓝灰（#6b879d）、冷空灰（#708fa2）、电光萤石绿（#edff39）点缀色与超细白色透明度辅助线，营造高端电动车实验研究室的克制科技氛围。

## [技术栈]

- React 18 / TypeScript
- Vite
- HTML5 Canvas API（离屏解码抓取与手势帧保持）
- HTML5 Video API（精准状态机控制与解码监听）
- 原生CSS3（固定比例容器、CSS变量计算、媒体查询响应式重构）
- Space Grotesk（单字重无衬线工程字体）

## [使用说明]

- **[推荐]AI工具**：Claude 3.5 Sonnet / Cursor
- **使用方式**：直接复制[prompt.md](prompt.md)中的完整提示词粘贴至AI编程助手中即可启动自动化克隆、环境安装与像素级复现任务。
