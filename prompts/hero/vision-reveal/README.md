# Vision Reveal

> 光标聚光灯揭示双层图片，拼接瓦片式入场动画 + 单词逐字模糊渐入，个人创意工作室展示页。

## 效果预览

<!-- 请添加效果截图 -->
![alt text](image.png)

## 简介

为个人创意工作室设计的全屏 Hero 展示页。入场时 10 块蓝色瓦片上下分裂退场，图片从旋转缩放状态复原，标题文字逐词模糊上升显现。核心交互同样是**光标跟随聚光灯**，通过 Canvas 径向渐变遮罩在基础图片上揭示第二张暖色人像，视觉冲击力强。

### 亮点特性

- **瓦片式入场动画**：10 个色块分上下两排，staggered 0.05s 延迟依次向外分裂，营造电影感开场
- **图片旋转缩放进场**：`scale(1.5) rotate(3deg)` → 归位，1.2s 缓动
- **单词逐字揭示**：标题文本按空格分词，每词间隔 0.05s 依次模糊上升显现
- **Canvas 聚光灯揭示**：与 Interactive Discovery 同机制，lerp 平滑追踪，软边渐变遮罩
- **底部巨型文字**：`clamp(180px, 28vw, 560px)` "Visuals" 字样从底部滑入，与图片层形成视差
- **胶囊 CTA**：悬停时白色背景向圆形箭头方向扩展，箭头圆圈反向平移
- **无框架**：纯 HTML + CSS + JS，单文件直接运行

### 技术栈

- 纯 HTML / CSS / JavaScript（无框架）
- Canvas API（聚光灯遮罩）
- Google Fonts（Inter）
- `requestAnimationFrame` 平滑动画

## 使用说明

- **推荐 AI 工具**：ChatGPT / Claude / Cursor
- **使用方式**：直接复制 [prompt.md](prompt.md) 中的完整 HTML，保存为 `.html` 文件在浏览器中打开即可运行
- **注意事项**：
  - 图片资源来自 Figma CDN，需要网络访问
  - Logo SVG 来自 Framer CDN，需要网络访问
  - 建议通过本地 HTTP 服务器打开，避免部分资源的 CORS 限制

## 来源

- 来源：互联网收集
