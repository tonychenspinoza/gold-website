# 🚀 Vercel 操作指南

## 一、查看部署状态

1. **访问 Vercel 控制台**：
   - 打开：https://vercel.com/dashboard
   - 登录你的账号

2. **找到项目**：
   - 在项目列表中找到 `gold-website` 或 `tonychenspinoza/gold-website`
   - 点击进入项目

3. **查看部署**：
   - 点击 "Deployments" 标签
   - 查看最新的部署状态

## 二、重新部署

### 方法 1: 通过 GitHub 触发（推荐）
- 在 GitHub 上做任何小改动（比如修改 README）
- 推送到 main 分支
- Vercel 会自动检测并重新部署

### 方法 2: 在 Vercel 上手动触发
1. 进入项目页面
2. 点击 "Deployments" 标签
3. 找到最新的部署
4. 点击右侧的 "..." 菜单
5. 选择 "Redeploy"
6. 确认重新部署

## 三、查看构建日志

1. 进入项目 → "Deployments"
2. 点击最新的部署
3. 查看 "Build Logs"
4. 检查是否有错误

## 四、配置项目设置

1. 进入项目 → "Settings"
2. **General**：
   - Framework Preset: Next.js
   - Root Directory: `./`（留空）
   - Build Command: `npm run build`
   - Output Directory: `.next`（自动）

3. **Environment Variables**（如果需要）：
   - 添加 `NEXT_PUBLIC_BASE_URL`（你的域名）

## 五、查看部署网址

1. 进入项目页面
2. 在顶部可以看到：
   - **Production**: `https://your-project.vercel.app`
   - **Preview**: 每次部署的预览网址

## 六、常见操作

### 查看实时日志
- 项目 → "Deployments" → 点击部署 → "Functions" → 查看日志

### 回滚到之前的版本
- "Deployments" → 找到之前的部署 → "..." → "Promote to Production"

### 添加自定义域名
- "Settings" → "Domains" → "Add Domain"

## 七、当前项目状态检查清单

✅ **已完成的修复**：
- [x] 修复了 `src/app/layout.tsx`（viewport 单独导出）
- [x] 修复了根目录 `package.json`（Next.js 版本）
- [x] 添加了 `vercel.json` 配置文件
- [x] 代码已推送到 GitHub

⏳ **等待 Vercel 自动部署**：
- Vercel 会自动检测 GitHub 的更改
- 通常 2-3 分钟内完成部署

## 八、如果部署失败

1. **检查构建日志**：
   - 查看具体的错误信息
   - 检查是否缺少依赖

2. **检查项目设置**：
   - Root Directory 是否正确
   - Build Command 是否正确
   - Node.js 版本（建议 18.x）

3. **清除缓存重新部署**：
   - "Deployments" → "..." → "Redeploy" → 勾选 "Clear Build Cache"

## 快速链接

- **Vercel 控制台**: https://vercel.com/dashboard
- **项目设置**: https://vercel.com/dashboard → 选择项目 → Settings
- **部署列表**: https://vercel.com/dashboard → 选择项目 → Deployments

