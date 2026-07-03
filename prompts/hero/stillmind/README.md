# Stillmind

> 多视频切换全屏 Hero，液态玻璃 UI 风格，正念/专注类 App 品牌落地页。

## 效果预览

<!-- 请添加效果截图 -->
_待添加预览截图_

## 简介

为正念专注应用 **Lumora** 设计的全屏电影感 Hero Section。4 段背景视频可切换，带有淡入淡出过渡；叠加透明 PNG 配合持续漂浮动画；所有 UI 组件统一使用自定义 Liquid Glass 玻璃拟态效果。第 3 段视频（Deep Woods）激活时，主内容区整体切换为深色调，细节极为丰富。

### 亮点特性

- **4 视频切换**：点击底部标签切换场景（Golden Hour / Still Water / Deep Woods / Quiet Dawn），1000ms 淡入淡出，防抖处理
- **Liquid Glass UI**：自定义 `.liquid-glass` 类，`backdrop-blur` + 渐变边框 `::before` 伪元素，胶囊导航/徽章/输入框统一风格
- **漂浮 PNG 叠层**：`translateY(0 → -6px)` 3s 无限循环 + `scale(1.03)` 防边缘穿帮
- **Dark Mode 场景**：第 3 视频激活时主内容 700ms 过渡至深蓝色 `#182C41`
- **移动端菜单**：汉堡/关闭图标 90° 旋转交叉淡入，全屏菜单项 staggered 上滑进场
- **Email 采集**：Liquid Glass 胶囊输入框 + 白色 CTA 按钮内嵌布局

### 技术栈

- React 18 + TypeScript + Vite
- Tailwind CSS
- lucide-react（Menu、X 图标）
- Google Fonts（Instrument Serif）

## 使用说明

- **推荐 AI 工具**：Cursor / Claude / ChatGPT
- **使用方式**：复制 [prompt.md](prompt.md) 中的提示词，在 AI 工具中生成完整项目代码
- **注意事项**：
  - 4 段视频资源均来自外部 CDN，需要网络访问
  - 透明 PNG 叠层来自 Figma CDN，同样需要网络访问
  - 整个应用写在单个 `App.tsx` + `index.css` 中，无需路由

## 来源

- 来源：互联网收集
