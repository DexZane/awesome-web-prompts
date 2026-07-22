# Animated Cards Component

> 高性能 3D 悬浮银行卡片轮播组件，支持鼠标视差倾斜、实体厚度切片与视频卡面展示。

## 效果预览

<!-- 将效果截图放在本目录下，推荐命名为 preview.png -->
![效果预览](preview.png)

## 简介

Animated Cards 是一款基于 React 和 Tailwind CSS v4 构建的高性能交互式 3D 垂直/水平卡片轮播组件。卡片拥有实体 3D 体积厚度（通过多层 div 堆叠模拟）、正面动态视频/金属芯片/JWT Logo，反面模糊背景/磁条/JetBrains Mono 字体显示卡号信息。

## 核心设计模式

* **纯物理 3D 视差 (Interactive 3D Parallax)**：基于鼠标位置结合惯性衰减（Inertia Damping）计算 rotateX / rotateY。
* **分层实体厚度 (Volumetric 3D Thickness)**：通过在 Z 轴密集叠加多层 div 切片，模拟极具质感的真实银行卡厚度。
* **平滑 60fps 渲染循环 (Smoothstep & requestAnimationFrame)**：不依赖外部动画库，纯 Math 求解圆柱旋转与视角隐现。
* **双面卡片翻转 (Front/Back Dual Face)**：卡片随轮播滚动位置自然翻转展示正反两面。

## 技术栈要求

* React 18+
* Tailwind CSS v4
* TypeScript

## 使用说明

- **推荐 AI 工具**：Claude 3.5 Sonnet / Cursor / v0
- **使用方式**：直接复制 [prompt.md](prompt.md) 中的提示词粘贴即可

## 来源

- 来源链接：用户提供
- 作者：未知
