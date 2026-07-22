# 贡献指南

感谢你对 Awesome Web Prompts 的关注！欢迎贡献你发现的优质 AI 网页提示词。

## 如何添加新提示词

### 1. 确定归类与创建文件夹

根据提示词的粒度，选择对应分类目录（`pages` 全页 / `sections` 区块 / `components` 组件）：

```bash
# 示例：添加一个 Hero 提示词
cp -r prompts/_template prompts/sections/hero/你的项目名
```

### 2. 填写元数据 `meta.json`

编辑 `prompts/.../你的项目名/meta.json`，填入类型、标签、中英文简介与技术栈等信息：

```json
{
  "id": "你的项目名",
  "name": "Your Project Name",
  "level": "sections",
  "category": "hero",
  "type": "Prompt",
  "tech_stack": ["React", "Tailwind CSS"],
  "tags": ["Hero", "Dark Mode"],
  "description": {
    "zh": "中文简介说明",
    "en": "English description"
  },
  "preview": "preview.png"
}
```

### 3. 编写提示词与说明文档

- 编辑 `prompt.md`：填入完整提示词内容或源代码。
- 编辑 `README.md`：包含核心特征与使用说明。
- 放置 `preview.png`：效果预览截图。

### 4. 自动构建主页面与校验

运行自动化构建命令，脚本会自动更新中英文主页表格：

```bash
# 校验目录与文件格式
npm run lint

# 自动生成主页 README.md 与 README_EN.md
npm run build:readme
```

### 5. 提交 PR

```bash
git add .
git commit -m "add: 项目名 - 简短描述"
git push
```

## 规范

- 提示词必须是用于 **网页开发** 的（HTML/CSS/JS/React/Vue 相关）
- 建议遵循 `DESIGN.md` 中定义的高级设计美学与色彩排版规范
- 请确保提示词来源合规，注明出处
- 文件名和目录名避免使用特殊字符和空格

## 感谢每一位贡献者！
