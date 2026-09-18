---
id: cordex
name: Cordex
level: pages
category: manufacturing
type: Prompt
tech_stack:
  - "HTML5"
  - "CSS3"
  - "JavaScript"
  - "HTML5 Video API"
  - "Google Fonts"
tags:
  - "Manufacturing"
  - "Industrial Design"
  - "Scroll-Driven Video"
  - "All-Intra Video Scrubbing"
  - "Single-File"
  - "Dark Mode"
recommended_ai:
  - "Claude Fable 5.1"
  - "GPT-6 Astra"
  - "Gemini 3.8 Flash"
  - "Claude Code"
  - "Cursor"
description:
  zh: 单文件无依赖工业线缆防护品牌落地页，全关键帧All-Intra视频滚动逐帧洗刷与多场景规格联动
  en: Single-file zero-dependency industrial cable protection landing page featuring All-Intra video scroll-scrubbing and multi-scene spec card linkage
preview: ""
author: Community
source_url: ""
---

# Cordex

> 单文件无依赖工业线缆防护品牌落地页，全关键帧All-Intra视频滚动逐帧洗刷与多场景规格联动。

## [效果预览]

<!-- 将效果截图放在本目录下，推荐命名为 preview.png -->
![效果预览](preview.png)

## [简介]

Cordex是一款专为重工业线缆与特种防护套管制造品牌打造的高精度单文件无依赖滚动驱动落地页。基于单文件原生架构（单个index.html，内联style与script），页面核心由固定全视口Stage容器与虚拟滚动高度轨道（.track）构成。首屏采用高灵敏度滚动洗刷（Scroll-Scrubbed Video），通过All-Intra（全I帧编码，-g 1）MP4与Blob预加载机制，实现零丢帧无延迟的逐帧寻道推进；后段平滑淡入工业应用场景层（Applications Layer），集成5大极端工况环境（工程机械、混动电动、卡车巴士、轨道交通、农业机械），配合磨砂毛玻璃菜单展开与动态规格卡片联动切换。

## [核心设计与特性]

- **固定双层舞台与虚拟滚动高度架构 (Fixed Dual-Layer Stage & Track Architecture)**：
  - 页面视觉完全停驻在`position: fixed`的视口舞台内，页面本身无原生滚动条位移；
  - 底部空div容器（.track）通过JS动态设置总高度（`appsStart + appsLen + vh`），将物理滚动位移转化为视频currentTime推进、Hero向应用层的淡入淡出比例以及应用场景索引；
  - 动态注入`--vh`并设置120px防抖阈值，彻底规避移动端浏览器地址栏伸缩导致的版面抖动与重新布局。
- **All-Intra全I帧视频滚动洗刷引擎 (All-Intra Video Scroll-Scrubbing Engine)**：
  - 首屏MP4（1928×1076，24fps，6.04s）全量采用All-Intra编码（145帧全部为关键帧），杜绝常规Long-GOP编码向前解码导致的寻道卡顿；
  - 进场预加载器通过Fetch流式分块读取完整MP4生成本地Blob URL，避开流式范围请求（Range Request）对逐帧寻道的阻塞；
  - 滚动洗刷逻辑采用`gap * 0.115`平滑缓动逼近算法，并严密检测`video.seeking`原生解码状态，杜绝事件死锁与黑屏。
- **五重特种工业场景联动切换 (Five Industrial Application Scenes)**：
  - 涵盖Armatex CHG（工程机械）、Armatex VHG10 Purple（新能源混动）、Flexline PS（卡车客车）、Flexline RX（轨道交通）、Armatex AG（农业机械）；
  - 每组场景采用双层高画质图像架构：底层28px强模糊背景与顶层高清线缆主体，辅以0.55s平滑淡入淡出过渡；
  - 左侧320px磨砂毛玻璃菜单（.menu）选中时高度平滑展开至172px展示对应缩略图，右侧毛玻璃规格卡片（.card）动态呈现红标指示条、技术参数、认证Tag与配色色盘。
- **手势锁定与离散步进机制 (Discrete Step Wheel & Touch Navigation Lock)**：
  - 进入应用场景区域时，滚轮事件（wheel）与触控滑动（touch）触发620ms状态机锁定，单次手势精确步进一个产品场景；
  - 到达首尾边界后平滑释放锁定，恢复页面正常穿透滚动；
  - 顶栏分段控制器（.seg）实时同步“Full mode”与“Explore”激活态，支持点击平滑滚回。
- **移动端拓扑自适应重构 (Mobile Topology at 900px Breakpoint)**：
  - 移动端（≤900px）取消三栏水平排布，解构为单列纵向网格；
  - 隐藏中心瞄准圆点（.hotspot），菜单转换为卡片下方的横向滚动吸附条（Snap-Scroll Strip），自动计算偏移居中当前选中项；
  - 严格保持所有交互元素高度≥44px，全面注入`env(safe-area-inset-*)`安全区适配。

## [技术栈]

- 单文件原生HTML5 / CSS3 / JavaScript（零依赖、无构建工具）
- HTML5 Video API（Blob预加载、All-Intra帧寻道、`video.seeking`状态守护）
- CSS3毛玻璃滤镜与混合模式（`backdrop-filter: blur(28px)`、`mix-blend-mode: screen`）
- 原生触摸与滚轮手势状态机（Wheel / Touchstep Lock）
- Google Fonts（Inter）

## [使用说明]

- **[推荐]AI工具**：Claude 3.5 Sonnet / Cursor
- **使用方式**：直接复制[prompt.md](prompt.md)中的完整提示词粘贴至AI编程助手中即可生成完整的单文件生产就绪代码。
