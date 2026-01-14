# 计算机网络选择题（手机可打开链接）

本项目是一个**纯前端**刷题页：打开即可做题，交卷后自动给分，并提供错题回顾（含原句）。

## 本地运行（可选）
直接双击打开 `index.html` 即可（推荐用 Chrome / Edge / Safari）。

## 生成手机可打开的链接（推荐 2 选 1）

### 方案 A：GitHub Pages（免费、稳定）
1. 新建一个 GitHub 仓库（public）。
2. 把本目录内所有文件上传到仓库根目录（index.html / app.js / questions.js / style.css ...）。
3. 仓库 Settings → Pages → Build and deployment  
   - Source 选 “Deploy from a branch”
   - Branch 选 “main / (root)”
4. 等待部署完成后，GitHub 会给你一个链接：`https://<你的用户名>.github.io/<仓库名>/`
5. 手机上打开这个链接就能做题。

### 方案 B：Netlify（最省事：拖拽即发布）
1. 打开 Netlify，登录后选择 “Add new site” → “Deploy manually”
2. 把整个文件夹拖进去
3. Netlify 会立刻给你一个可访问链接（手机直接打开）

## 更新题库
如果你后续修改了 docx：
```bash
python build_questions.py "填空题汇总附答案.docx" "questions.js"
```
然后把新的 `questions.js` 推送/重新发布即可。
