---
id: axon
name: AXON
level: pages
category: portfolio
type: Prompt
tech_stack:
  - "HTML5"
  - "CSS3"
  - "Vanilla JS"
  - "WebGL"
  - "Three.js"
  - "GPGPU Particles"
  - "GPU Fluid Simulation"
  - "Signed Distance Fields (SDF)"
  - "Ping-Pong FBO"
tags:
  - "Portfolio"
  - "Motion Research"
  - "WebGL"
  - "GPGPU"
  - "Particle System"
  - "Fluid Dynamics"
  - "SDF"
  - "Three.js"
  - "Dark Mode"
  - "Monospace UI"
recommended_ai:
  - "Claude Fable 5.1"
  - "GPT-6 Astra"
  - "Gemini 3.8 Flash"
  - "Claude Code"
  - "Cursor"
description:
  zh: "AXON 动态研究实验室全屏暗黑落地页——26 万 GPGPU 粒子雕塑、Navier-Stokes 流体模拟光标涡流扰动与 Monospace 极简排版"
  en: "AXON motion research hub full-screen dark landing page featuring a 262k GPGPU particle cloud sculpted by SDF, cursor fluid simulation turbulence, and monospace editorial UI"
preview: ""
author: Community
source_url: ""
---

# AXON — Motion Research Hub

> AXON 是一家专注于粒子系统、流体模拟和有向距离场（SDF）实时渲染的前沿动态图形研究工作室。本页面为其单页自包含的沉浸式暗黑全屏落地页：26 万粒子在 GPU 上实时演化成平滑雕塑般的虚空环体，随着鼠标划过引发的 Navier-Stokes 流体涡流而四散漂移并在数秒内自愈，上层覆盖纯粹利落的 Monospace 极简排版与视频作品阵列。

## [效果预览]

<!-- 将效果截图放在本目录下，推荐命名为 preview.png -->
![效果预览](preview.png)

## [简介]

AXON 汇集了前沿着色器算法与实时图形艺术：
- **GPGPU 粒子雕塑 (262,144 GPGPU Particles)**：利用 WebGL Ping-Pong 浮点帧缓冲（FBO）驱动 26 万点云粒子，粒子受 Curl 噪声涡流与三维 SDF 隐式几何表面梯度引导，形成极具张力与深度的有机扭曲环面；
- **GPU 流体动力学光标扰动 (Real-time GPU Fluid Simulation)**：完整的 Navier-Stokes 方程数值求解器（Curl 涡度、散度 Divergence、压力泊松求解与平流 Advection），鼠标滑过时向流体场注入动量与高亮密度，将速度投影到相机三维空间中推挤打散粒子，并随后自然平滑自愈；
- **凝视相机 (Gaze Camera Tracking)**：透视摄像机（FOV 30°）基于阻尼平滑插值跟随光标漂移，为静态页面注入细微的视差悬浮感；
- **先锋排版与混合模式 (Additive Monospace UI)**：系统原生等宽字体、细腻的 1px 分割线、加法色彩混合（`mix-blend-mode: plus-lighter`）使得文本在粒子穿行时若隐若现，4 个内联视频卡片无静默循环播放。

## [核心设计与特性]

- **有机环体 SDF 隐式几何**：
  - 核心外形由有机环体和多叶扰动 SDF 定义，深度轴引入对称缝合映射：$p_z = \sqrt{p_z^2 + 0.0215} - \sqrt{0.012}$；
  - 粒子表面受切向旋流 $\text{cross}(\mathbf{p}, \nabla \text{sdf})$ 与法向拉力 $-\nabla \text{sdf} \cdot \text{sdf}$ 双重驱动，紧密贴合外形表面。
- **Navier-Stokes 屏幕空间速度投影**：
  - 流体仿真在 256×256 速度网格与 512×512 密度网格中迭代运行；
  - 粒子三维模型坐标经投影矩阵映射至屏幕 UV，采样流体速度并反向经相机世界旋转变换回世界三维矢量，对粒子施加冲量。
- **点精灵渲染与 Matcap 着色**：
  - 粒子点精灵内置 64×64 灰色球体 Matcap 光照贴图，结合灰度与稀疏薰衣草紫色（`#aa88ff` / Lavender）粒子闪烁效果。

