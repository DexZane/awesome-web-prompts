# AI Trip Planner (Wandor)

> Wandor 旅游 AI 行程规划落地页 Hero 区块，包含全屏视频背景、白色渐变遮罩、液态毛玻璃提示词卡片及智能交互。

## 效果预览

<!-- 将效果截图放在本目录下，推荐命名为 preview.png -->
![效果预览](preview.png)

## 简介

Wandor 是一款 AI 旅游行程规划应用。该单页 Hero Section 采用了“全屏视频背景 + 顶部白色渐变遮罩 + 液态毛玻璃（Liquid Glass）提示卡片”的视觉设计。用户可在高质感的毛玻璃卡片中输入自然语言行程需求，或上传行程参考文件。

## 核心设计模式

* **全屏视频背景与渐变过渡 (Video & Top Gradient)**：采用 `object-cover` 视频背景，叠加 `linear-gradient` 顶部遮罩，保证导航栏与大标题的高可读性。
* **液态毛玻璃卡片 (Liquid Glass Prompt Card)**：极低透明度白色填充 (`bg-white/[0.06]`)、3px 纯白边框、`backdrop-blur-[20px]` 与软阴影。
* **打字机品牌 Logo (Typewriter Serif Wordmark)**：使用 Google Fonts 中的 Special Elite 字体作为 wordmark，与正文 Geist 字体形成鲜明反差。
* **微交互动效 (Micro-interactions)**：所有的按钮包含平滑的透明度切换、缩放 (`hover:scale-105`) 与点击反馈 (`active:scale-95`)。

## 技术栈要求

* React + TypeScript (Vite)
* Tailwind CSS
* Lucide React Icons
* Google Fonts (Geist & Special Elite)

## 使用说明

- **推荐 AI 工具**：Claude 3.5 Sonnet / Cursor / v0
- **使用方式**：复制 [prompt.md](prompt.md) 中的完整提示词粘贴至 AI 工具中生成代码。

## 来源

- 来源链接：用户提供
- 作者：未知
