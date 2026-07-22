# Wellbeing OS

> 全屏 SaaS 产品 Hero Section，核心特性是奢华质感液体玻璃（Liquid Glass）效果、动态悬浮下拉菜单、移动端折叠菜单以及平滑的视频背景。

## 效果预览

暂无预览图（已根据用户偏好关闭图像生成）

## 简介

一个为 SaaS 平台 **flowpath** 设计的全屏沉浸式 Hero Section。背景采用精美的动态循环视频，搭配前沿的高级液体玻璃材质（Liquid Glass）设计系统，包括极具物理质感的分层阴影和磨砂玻璃边框，为 SaaS Landing Page 带来尊贵、前卫的质感。

### 亮点特性

- **高阶液体玻璃效果**：利用 CSS `::before` 伪元素多层重叠渐变描边与 `backdrop-filter: blur(4px)` 结合，实现比标准 Tailwind 更逼真的半透明磨砂玻璃卡片与按钮。
- **悬浮感下拉菜单**：桌面端支持鼠标滑入（Hover-triggered）无缝展开下拉菜单，集成 180° 旋转的 ChevronDown 图标并配有软缩放进场动效 (`animate-dropdown`)。
- **移动端伸缩导航**：采用 `cubic-bezier(0.16, 1, 0.3, 1)` 曲线的 400ms 平滑下滑式浮层菜单，支持展示带有缩进的多级子菜单项，并集成动态切换的汉包包与关闭（Menu/X）图标。
- **电影感视频背景**：采用 `object-cover` 覆盖全屏的流畅循环视频背景，叠加 `bg-black/10` 遮罩确保文字对比度与排版的高级感。

### 技术栈

- React
- Tailwind CSS
- lucide-react (图标：ChevronDown, Menu, X)
- Helvetica Now Text (引入外部网络字体)

## 使用说明

- **推荐 AI 工具**：Cursor / Claude / ChatGPT
- **使用方式**：复制 [prompt.md](prompt.md) 中的提示词，在 AI 工具中生成完整项目代码
- **注意事项**：
  - 需要在主 CSS 文件中导入指定的 "Helvetica Now Text" 网络字体。
  - 下拉菜单在 Tailwind 和自定义 `.liquid-glass` 配合时，需加 `!absolute` 强制覆盖以避免定位冲突。

## 来源

- 来源：互联网收集
