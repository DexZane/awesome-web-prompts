---
id: shelf-hero
name: Shelf Hero
level: pages
category: portfolio
type: Prompt
tech_stack:
  - "HTML5"
  - "CSS3"
  - "Vanilla JS"
  - "CSS 3D Transforms"
  - "Web Animations API"
  - "SVG Filter & Mask"
  - "Google Fonts"
tags:
  - "Portfolio"
  - "Filmography"
  - "VHS Shelf"
  - "3D Transform"
  - "Web Animations API"
  - "Ink Bleed Effect"
  - "Endless Carousel"
  - "Full Viewport"
recommended_ai:
  - "Claude Fable 5.1"
  - "GPT-6 Astra"
  - "Gemini 3.8 Flash"
  - "Claude Code"
  - "Cursor"
description:
  zh: "Leon Vasari 电影作品集 3D VHS 磁带架全视口 Hero 页面——端对端无缝循环书架、三维翻转封面、墨水晕染展开详情页与物理惯性交互"
  en: "Leon Vasari filmography 3D VHS tape shelf full-viewport hero featuring endless looping rack, 3D turning active cover, ink-blot bleed detail transition, and physics spring interactions"
preview: ""
author: Community
source_url: ""
---

# Leon Vasari — VHS Filmography Shelf Hero

> 虚构传奇电影导演莱昂·瓦萨里（Leon Vasari）沉浸式作品集 3D 录像带架全视口 Hero 落地页。纯原生单文件自包含架构，零第三方库依赖。整页以温暖做旧的米色宣纸质感（#EDEBE6）为底色，画面中央横贯一条无限循环的复古磨损 VHS 录像带书架；当前激活的电影录像带从书架中抽离，并在真实三维空间中向观众正面倾斜翻转露出精美复古封套。点击封套时，纸张自封套处破茧展开至全视口，海报如水墨晕染般在宣纸纤维中层层扩散盛开。

## [效果预览]

<!-- 将效果截图放在本目录下，推荐命名为 preview.png -->
![效果预览](preview.png)

## [简介]

Leon Vasari 是一位横跨 1958 至 1989 年代的虚构电影大师。本页面为其定制了一套兼具实体物理触感与现代先锋交互的单屏导演作品档案馆：
- **无限循环磁带架 (Endless 3D Shelf)**：12 部电影录像带在三维舞台中三倍克隆排列（共 36 个卡带），通过连续函数 $B(r)$ 动态分配横向间距，当前选中的磁带从卡带群中抽离、倾斜 $-4.5^\circ$ 并向观众探出；
- **磁带三维立体翻转与动态光影 (Physically Turned 3D Cuboids)**：卡带正面为细长书脊（Spine），侧面为完整封面（Cover）。随轮播滑移，未选中的磁带以书脊朝外紧凑立正，聚焦的磁带则以平滑贝塞尔曲线绕 Y 轴旋转 $90^\circ$ 展开正面，伴随 `--shade` 光影渐变与投射在背景纸面上的真实柔和阴影；
- **多向无缝交互驱动 (Comprehensive Motion Engine)**：滚轮、鼠标拖拽（Drag）、键盘左右方向键、年代标签（1950s–1980s）与左右翻页箭头全互通联动，基于指数弹簧算法（Spring physics）平滑追随；
- **水墨晕染破茧详情页 (Paper Sheet & Organic Ink Bleed Transition)**：点击激活封套或快捷键 Enter，整个详情页面从卡带封套当前的三维透视矩形直接形变生长铺满屏幕，结合 SVG `feTurbulence` 与 `feDisplacementMap` 位移滤镜驱动的 7 组墨斑动态扩散，将封套海报如水墨印染般层层展现。

## [核心设计与特性]

- **单循环参数与连续推挤微积分 ($B(r)$ Horizontal Placement)**：
  - 空间连续函数 $B(r) = (r + \sin(\pi r)/\pi)/2$（当 $|r| < 1$ 时）消除卡带推挤的突兀跳跃；
  - 选中卡带翻转露出宽幅封面（$d \approx 0.527H$）时，左右邻居卡带自然向外推移半个宽度差加间隙，滑动过程中卡带半开半合流畅交接。
- **4 大原画雪碧图与高精度 CSS 背景裁切 (Higgsfield GPT Image 2.5 Sprite Sheets)**：
  - 全部 12 款书脊与 12 幅插画封面均从 4 张高分辨率 WebP 透明大图中提取；
  - 运行时通过 `background-size: (W/w * 100)% (H/h * 100)%` 与 `background-position: (x/(W-w)*100)% (y/(H-h)*100)%` 精准还原复古纸板磨损、丝网印刷色块与斑驳质感。
- **宣纸纹理微噪底 (Procedural Paper Grain Layer)**：
  - 全局叠加固定层（`z-index: 40`），内置 220×220 的 SVG `feTurbulence` 分形噪点与色彩矩阵转换，以正片叠底（`mix-blend-mode: multiply`）与 `0.55` 不透明度沉浸式融入底色。
- **自定义柔性磁吸光标 (Responsive Custom Cursor)**：
  - 细黑圈与中心圆点跟随指针；悬停在未激活书脊上方时轻度缩小（`.spine`），悬停在外置按钮上方时紧凑吸附（`.btn`），悬停在激活封面并触发微倾斜感应时形变为钴蓝底色圆盘，弹出双语 "OPEN / 開く" 标签。
- **无透明度淡入纯机械揭示 (Zero Opacity Fades Philosophy)**：
  - 页面摒弃了一切 `opacity` 渐显假象，字幕滚动、详情文案揭示与年代指示块滑动全基于 `overflow: hidden` 溢出掩码（Masked Lines）、`clip-path` 几何剪切与水墨滤镜形变。

