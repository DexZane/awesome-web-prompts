# 贡献指南

感谢你对 Awesome Web Prompts 的关注！欢迎贡献优质网页 AI 提示词、源代码或独立 HTML 演示。

## 目录结构说明

仓库采用扁平化条目目录与单一分类配置文件（`config/taxonomy.json`）：

- `collection/<slug>/`：每个条目占用一个以小写短横线（kebab-case）命名的独立目录
  - `README.md`：包含 YAML Frontmatter 元数据与双语说明文档
  - `prompt.md`：完整提示词或源代码
  - `preview.png`：效果截图（可选）
  - `index.html`：独立可运行网页演示（可选）

## 添加新条目

### 1. 使用脚手架创建目录

```bash
# 创建一个落地页 Prompt 条目
npm run new -- my-awesome-page --category=landing

# 创建一个 Hero 区块条目（scope 会根据 category 自动推导）
npm run new -- cyber-hero --category=hero --format=prompt
```

查看全部可用参数与分类：

```bash
npm run new -- --help
```

### 2. 完善 `README.md` 与 `prompt.md`

编辑 `collection/<slug>/README.md` 顶部的 YAML Frontmatter：

- `id`：必须与目录名 `<slug>` 一致
- `name`：展示名称
- `scope`：`page` / `section` / `component`（见 `config/taxonomy.json`）
- `category`：分类 ID，必须与 `scope` 匹配（见 `config/taxonomy.json`）
- `format`：`prompt` 或 `source-code`
- `tech_stack`：技术栈列表（至少 1 项）
- `tags`：关键词标签列表（至少 1 项）
- `description.zh` / `description.en`：中英文简介（必填）
- `preview`：截图文件名（例如 `"preview.png"`），暂无截图时保持 `""`

然后将提示词或源码写入 `collection/<slug>/prompt.md`。如果有可单独预览的单页代码，可同时放置 `index.html`。

### 3. 校验与构建索引

```bash
# 校验格式与分类一致性
npm run lint

# 重新生成 README.md、README_EN.md、catalog/index.json 与 catalog/demos.md
npm run build

# 一次性检查校验结果与生成产物是否最新
npm run check
```

### 4. 提交 PR

```bash
git add .
git commit -m "feat: add <slug> entry"
git push
```

## 规范要求

- 仅收录与网页开发（HTML/CSS/JS/React/Vue 等）相关的提示词或源码
- 目录名与 `id` 使用全小写短横线风格（`^[a-z0-9]+(?:-[a-z0-9]+)*$`）
- 请确保内容来源合规并如实填写 `author` 与 `source_url`
