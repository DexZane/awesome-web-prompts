# Contact Cybernetic Hero

> 结合了“原生滑动 Scrub 视频背景”、“打字机特效”与“动态弹簧多选标签”的高阶联系页面首屏。

## 效果预览

<!-- 请添加效果截图 -->
_待添加预览截图_

## 简介

这款名为 Contact Cybernetic 的组件，适合作为数字代理机构（Digital Agency）或科技工作室的“联系我们（Contact Us）”页面首屏。其最引人瞩目的特色是将复杂的后台技术和细腻的前端交互融为一体：桌面端保留了高级的鼠标水平 Scrub 视频背景播放控制；移动端则智能回退到自动播放。并且，表单的第一步采用了基于 Framer Motion 的高光反馈多选胶囊（Multi-select Pills），拥有极佳的弹簧手感和状态回显。

### 亮点特性

- **响应式 Scrub 视频背景**：原生 JS 检测设备宽度（`< 1024px` 触发移动端逻辑）。在桌面端开启鼠标 `mousemove` 的横向增量 Scrub 交互控制；在移动端则自动回退至常规的 `autoplay` 播放，保证了双端最优性能
- **打字机特效加持**：再次运用纯手工打造的 `useTypewriter` React Hook，文字行级展开并附带原生的 CSS 闪烁光标（Blinking Cursor）动效，打造赛博极客感
- **Framer Motion 多选胶囊阵列**：将枯燥的下拉选框变成一系列高辨识度的药丸形按钮。依靠 Framer Motion 提供的 `type: "spring"`、`stiffness: 300` 弹簧属性，实现打勾图标的丝滑掉落（Drop-in）和选中状态的高亮（Bg `#1C2E1E`）
- **动态状态反馈横幅（Contingent Feedback Banner）**：使用 `AnimatePresence` 监听选项数组的变化。未选择时显示幽灵占位符；一旦选择任意项目，横幅将“弹跳”（Spring height gracefully）展开，并动态渲染 `[array.join(", ")]` 和“Let's Go”行动呼吁

### 技术栈

- React 18 + TypeScript + Vite
- Tailwind CSS 3
- Framer Motion (多选动画、AnimatePresence 状态切换)
- lucide-react (图标)
- 原生 JS DOM 事件监听 (`mousemove`, `seeked`) 与 响应式断点逻辑

## 使用说明

- **推荐 AI 工具**：Cursor / Claude / ChatGPT
- **使用方式**：复制 [prompt.md](prompt.md) 中的提示词，在 AI 工具中生成完整项目代码
- **注意事项**：
  - 此组件依赖的视频交互方式与 Retro-Futurist 类似，但针对移动端加入了优雅降级（Graceful Degradation）逻辑
  - Framer Motion 的 `AnimatePresence` 需要所有处于切换状态的 DOM 元素拥有唯一确定的 `key` 属性，让 AI 生成时确保已加入 `key`，避免状态更新时 DOM 发生闪烁
  - 颜色变量中带有特定的绿色系灰阶（如 `#1C2E1E`, `#FAFBF9`），这些颜色构成了组件的基础赛博质感，不建议大幅度修改

## 来源

- 来源：互联网收集
