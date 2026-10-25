---
id: freight-scroll-hero
name: Freight Scroll Hero
level: pages
category: supply
type: Prompt
tech_stack:
  - "HTML5"
  - "CSS3"
  - "Vanilla JS"
  - "Sticky Scroll-Driven Video"
  - "Deterministic Video Scrubbing"
  - "Dual-Rate Camera Elevation Curve"
  - "Cloud Fadeover Gradient"
tags:
  - "Supply Chain"
  - "Logistics"
  - "Freight"
  - "Hero"
  - "Scroll-Driven Video"
  - "Video Scrubbing"
  - "Mirrored Layout"
  - "Sticky Track"
recommended_ai:
  - "Claude Fable 5.1"
  - "GPT-6 Astra"
  - "Gemini 3.8 Flash"
  - "Claude Code"
  - "Cursor"
description:
  zh: "全视口滚动驱动货运物流 Hero 落地页——高频关键帧航拍货运列车纯滚轮时间轴抓取、中轴对称镜像排版、双阶相机攀升映射与云层过渡客户口碑引言墙"
  en: "Full-viewport scroll-driven freight logistics hero featuring sticky keyframe-dense aerial train video scrub, mirrored axis layout, two-part camera climb mapping, and seamless cloud transition to customer trust section"
preview: ""
author: Community
source_url: ""
---

# Freight Scroll Hero — Logistics that works as hard as you do

> 现代供应链与货运物流全视口滚动驱动（Scroll-Driven）沉浸式 Hero 落地页。纯原生零构建自包含架构，底层粘性吸附高频关键帧俯瞰重载集装箱货运列车穿行黑色煤田视频（1920×1080，4 帧一关键帧高速跳帧）；滚动过程中视频永不自主播放，完全由页面滚动位置高灵敏线性抓取（Scrubbing）。画面随滚动由近距列车特写逐渐垂直拔升并穿破迷雾，上层正文由居中大标题过渡至沿列车中轴对称镜像的 5 组核心特性，并在列车隐入白云后无缝融进清爽的纯文本客户口碑信赖墙。

## [简介]

Freight Scroll Hero 是一套面向高端跨国货代、重工业联运及智能供应链品牌的单页滚动叙事典范。不同于传统自动播放的视频背景，该页面将视频作为滚动驱动的交互物理时间轴（Timeline Scrubbing）：
1. **入场静止定格**：页面初加载时，全屏仅定格呈现红白集装箱货运列车穿越黑色地面的高清俯视特写；
2. **中轴大标题升起**：随着用户向下滚动，超大 Exo 2 特粗标题与 "WHY US" 眉标沿列车垂直中轴线向上滑移揭示；
3. **两列对称特性镜像**：行进至列车中部，4 个核心服务区块左右对称排开，图标紧贴中轴内侧，文字朝外对齐；随后第 5 个区块居中承接；
4. **两段式攀升映射与白云交接**：最后文字离开视口瞬间，相机加速拔升，四周边缘翻滚的洁白云海迅速合拢覆盖整屏，通过 -34vh 的平滑蒙版渐变过渡，自然承接至底部的灰白调客户引言区块。

## [核心设计与特性]

- **1280×800 比例度量系统与视口比例换算 (Frame Unit Metrics)**：
  - 基于基准尺寸建立 `u = min(100vh / 800, 100vw / 716)`，排版严格由相对单位换算；
  - 800px 设计基准等于 100vh，各滚动层绝对顶端位移严格遵循 `N / 8 vh` 公式；
- **高频关键帧视频抓取与双段阻尼插值 (Two-Part Scrubbing & Physics Damping)**：
  - 采用专为视频时间轴交互压制的 MP4 素材（每 4 帧注入一个 I-frame），消除浏览器默认大关键帧间距带来的解码卡顿；
  - 严格双段拐点算法：根据末尾区块底边距离 `knee = lastBlock.bottom / end` 进行非线性分段——文字仍在视口内时仅释放前 46% 镜头（保持近距列车爬升），当文字完全离场后镜头快速攀升至 100% 钻入白云；
  - 逐帧应用 `cur += (target - cur) * 0.22` 阻尼滤波，并在 `seeked` 事件中闭环纠偏；支持 `?rec=1` 确定性录制模式。
- **沿列车中轴对称镜像排版 (Mirrored Axis Layout)**：
  - 左列文字向右对齐，右列文字向左对齐，白色线性 SVG 图标（地球虚线环、阶梯集装箱、带勾圆盘、加粗美元符号、双折线）精准贴靠中央中轴，形成工业级机械对称美感；
  - 文本附带温润的多层软阴影（`0 12u 32u rgba(0,0,0,0.5)`），确保在多变视频底色上始终保持超高可读性。
- **云层融入客户信赖引言墙 (Cloud-to-Page Seamless Transition)**：
  - 粘性轨道结束处通过 -34vh 负外边距拉起 `<section class="trust">`，以 34vh 高度的半透明渐变将视频末尾的云雾完美融进 `#e2dedd` 纯灰背景；
  - 简约精炼的双列排版布局展示国际客户实名引言与运营总监真实反馈，无花哨装饰，尽显商业稳重。
- **全端自适应与坚实退化 (Responsive & Fallbacks)**：
  - 屏幕宽度 ≤ 900px 或探测到移动端节流网络时自动切换为 720p 极速流；
  - 窄屏及竖屏模式（≤ 609px 或任意纵向屏幕）自适应收拢为单列垂直流，间距自动松绑，杜绝横向滚动。
