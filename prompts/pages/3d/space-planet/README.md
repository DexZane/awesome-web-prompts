---
id: space-planet
name: Space Planet
level: pages
category: 3d
type: Prompt
tech_stack:
  - "HTML5"
  - "CSS3"
  - "JavaScript"
  - "Google Fonts"
tags:
  - "3D"
  - "Space"
  - "Astronomy"
  - "Interactive Planet Switcher"
  - "Video Background"
  - "Unit Scaling System"
  - "Keyframes Animation"
recommended_ai:
  - "Claude Fable 5.1"
  - "GPT-6 Astra"
  - "Gemini 3.8 Flash"
  - "Claude Code"
  - "Cursor"
description:
  zh: 单文件无依赖沉浸式宇宙天体全视口页面，三大行星高清微动视频无缝切换、--u绝对设计度量与双侧透明切片微交互
  en: "Single-file zero-dependency immersive space hero with seamless 3-planet video switching, --u reference unit scaling, and interactive planet cut-outs"
preview: ""
author: Community
source_url: ""
---

# Space Planet

> 单文件无依赖沉浸式宇宙天体全视口页面，三大行星高清微动视频无缝切换、--u绝对设计度量与双侧透明切片微交互。

## [效果预览]

<!-- 将效果截图放在本目录下，推荐命名为 preview.png -->
![效果预览](preview.png)

## [简介]

Space Planet是一款专为SpaceEdu太空天文学与探索教育平台设计的单文件自包含（Single-file self-contained `index.html`）全屏电影级宇宙天体营销页面。纯原生架构，零外部框架、零构建流程、零第三方JS库依赖，仅引入Google Fonts字体库（Prata衬线体、Hanken Grotesk无衬线正文字体及Poppins字标字体）。页面以深邃幽暗的星空夜色（#04101f）为基底，全视口展现场景中央的宏伟主行星循环微动视频；居中排布“PLANET”眉标、Prata衬线行星名称、青色微高光分割线、导读正文与高光白色胶囊行动号召（CTA）按钮；屏幕左右两侧对称切入两颗侧边旋转行星透明高精切片，支持多向点击平滑轮播与瞬时无缝切换。

## [核心设计与特性]

- **三大天体全视口循环与双侧透明切片轮播 (Three-Planet Rotating Stage)**：
  - 完整收录地球（Earth）、金星（Venus）与火星（Mars）三大天体，任意时刻精确呈现“一颗主行星视频背景 + 两侧候补行星切片”；
  - 初始默认地球为主行星，点击左侧或右侧行星切片即时将对应天体设为主视界，余下两颗自动补位填充至两侧卡槽，支持无限可逆双向轮转。
- **零延迟DOM切片显隐机制与意图感知预热 (Zero-Lag Switcher & Intent Preheating)**：
  - 两大卡槽预先在DOM内完整内嵌3张2048×2048高精透明PNG切片，切换时仅通过CSS类名`.is-shown`进行显隐切换，严禁动态修改`img.src`，彻底根除切片二次加载导致的白屏与闪烁（切换延迟小于2ms）；
  - 背景视频采用按需取流机制，通过监听卡槽按钮的`pointerenter`与`focus`事件提前触发预热加载（`warm()`），并在首屏绘制后通过`requestIdleCallback`（4秒兜底）自动闲置拉取其余行星视频。
- **单变量绝对设计单位度量系统 (`--u` Reference Unit System)**：
  - 拒绝模糊的百分比与rem猜想，整站严格基于1353×1163基准画幅建立纯粹数学映射；
  - 全局CSS所有边距、定位、字号、圆角均严格由`calc(N * var(--u))`计算推导；
  - 引入`--vshift`动态纵向补差，在超高视口下将主体内容区平滑下推42%，确保在任何极端比例下画面光学重心始终稳定。
- **六级渐进式自适应断点体系 (6-Tier Responsive Architecture)**：
  - **A) 导航收拢（≤1030px或高度≤620px）**：导航菜单平滑折叠至毛玻璃悬浮下拉面板，避免触控目标过小；
  - **B) 平板适配（580px-1030px且高度>620px）**：保持对称居中视觉核心，重新计算`--u`缩放比；
  - **C) 手机流式排布（≤579px或高度≤620px）**：主体内容由绝对定位平滑转换为Flex纵向弹性流，完美适配多行文本自然折行；
  - **D) 矮视口滚动隐藏（高度≤660px）**：自动隐藏底部滚动指示按钮释放纵向空间；
  - **E) 短屏极限防溢出（高度≤620px）**：强制将`--vshift`重置为0并压缩标题间距，杜绝强制滚动条；
  - **F) 超窄屏自适应（≤500px）**：左右行星标签自动沉降至CTA按钮下方独立行，保证左右边距无溢出。
- **一次性阶梯律动进场与自清除机制 (Choreographed Entrance & Clean Self-Removal)**：
  - 在`<head>`中嵌入阻塞式初始化检测，未开启动画减弱模式时立即挂载`.anim`类名防止未排版闪烁；
  - 包含遮罩向上拉起（`ent-reveal`）、垂直短距抬升（`ent-rise`）、中心缩放成型（`ent-draw`）与全屏背景淡入（`ent-fade`）等阶梯补间动画；
  - 进场完成后于2150ms自动彻底移除`.anim`与`.play`类，使DOM完全回归纯净无常驻计时器的稳态。
- **全方位无障碍与色彩聚焦规范 (Accessibility & Reduced Motion)**：
  - 侧边卡槽采用语义化`<button type="button">`并动态注入无障碍标签（`aria-label="Show <NAME>"`）；
  - 键盘Tab导航下高亮展示青色（`--cyan`）聚焦外环；
  - 开启`prefers-reduced-motion: reduce`时自动绕过全部进场动画序列，直接显示高清静态海报并隐藏背景视频。

## [技术栈]

- 原生HTML5（语义化header、nav、video、button结构，完全满足无障碍标准）
- 原生CSS3（`--u`绝对度量缩放、容器视口计算、Keyframes逐帧编排、高光渐变与backdrop-filter毛玻璃）
- 原生JavaScript（行星状态机无缝切换、预热取流算法、视口自适应对比控制）
- Google Fonts（Prata、Hanken Grotesk、Poppins）

## [使用说明]

- **[推荐]AI工具**：Claude 3.5 Sonnet / Cursor / v0
- **使用方式**：直接复制[prompt.md](prompt.md)中的完整提示词粘贴至AI编程助手中即可生成完整单文件代码。
