# 贡献指南

感谢你对Awesome Web Prompts的关注！欢迎贡献你发现的优质AI网页提示词。

## 如何添加新提示词

### 1. 确定归类与创建文件夹

根据提示词的粒度，选择对应分类目录（`pages`全页 / `sections`区块 / `components`组件）：

```bash
# 示例：添加一个Hero提示词
cp -r prompts/_template prompts/sections/hero/你的项目名
```

### 2. 填写元数据 `meta.json`

编辑`prompts/.../你的项目名/meta.json`，填入类型、标签、中英文简介与技术栈等信息：

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

> [!NOTE]
> 若暂无本地截图文件，请将`preview`字段设为空字符串`""`。

### 3. 编写提示词与说明文档

- 编辑`prompt.md`：填入完整提示词内容或源代码。
- 编辑`README.md`：包含核心特征与使用说明。
- 放置`preview.png`：效果预览截图（可选）。

### 4. 自动构建主页面与校验

运行自动化构建命令，脚本会自动更新中英文主页表格：

```bash
# 校验目录与文件格式
npm run lint

# 自动生成主页README.md与README_EN.md
npm run build:readme
```

### 5. 提交PR

```bash
git add .
git commit -m "feat: 新增你的项目名提示词"
git push
```

## 规范

- 提示词必须是用于**网页开发**的（HTML/CSS/JS/React/Vue相关）
- 建议遵循`DESIGN.md`中定义的高级设计美学与色彩排版规范
- 请确保提示词来源合规，注明出处
- 文件名和目录名使用全小写短横线风格，避免使用特殊字符和空格

## 感谢每一位贡献者！
