# 📤 如何将修复后的代码上传到 GitHub

## 问题
GitHub 仓库 `tonychenspinoza/gold-website` 中缺少 `src/app/layout.tsx` 文件，导致 Vercel 构建失败。

## 解决方案：在 GitHub 上创建文件

### 方法一：通过 GitHub 网页创建文件（推荐）

1. **访问仓库主页**：
   ```
   https://github.com/tonychenspinoza/gold-website
   ```

2. **进入 src/app 目录**：
   - 点击 `src` 文件夹
   - 再点击 `app` 文件夹
   - 如果文件夹不存在，需要先创建

3. **创建 layout.tsx 文件**：
   - 点击右上角的 **"Add file"** 按钮
   - 选择 **"Create new file"**
   - 文件名输入：`layout.tsx`
   - 将以下代码粘贴到编辑器中：

```typescript
import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'SING CHEN TRADE LIMITED - 香港黃金貿易公司',
  description: 'SING CHEN TRADE LIMITED 為香港註冊之黃金貿易公司，提供金條、22K 黃金首飾及精品黃金製品的展示與線下交易服務。',
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh-HK">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
```

4. **提交文件**：
   - 滚动到页面底部
   - 在 "Commit new file" 部分：
     - Commit message: `fix: add root layout with viewport for Next.js 14`
     - 选择 "Commit directly to the main branch"
   - 点击 **"Commit new file"** 按钮

5. **等待 Vercel 自动部署**：
   - Vercel 会自动检测到更改
   - 等待 2-3 分钟完成部署

### 方法二：使用 Git 命令行推送

如果你有仓库的访问权限，可以使用命令行：

```bash
# 1. 确保在正确的目录
cd gold-website

# 2. 检查远程仓库
git remote -v

# 3. 如果没有设置正确的远程，添加它
git remote set-url origin https://github.com/tonychenspinoza/gold-website.git

# 4. 添加文件
git add src/app/layout.tsx

# 5. 提交
git commit -m "fix: add root layout with viewport for Next.js 14"

# 6. 推送
git push origin main
```

## 如果文件夹结构不存在

如果 `src/app` 文件夹在 GitHub 上不存在，需要：

1. 先创建 `src` 文件夹
2. 在 `src` 中创建 `app` 文件夹
3. 在 `app` 中创建 `layout.tsx` 文件

或者，你可以：
- 在 GitHub 上点击 "Add file" → "Upload files"
- 直接上传整个 `src` 文件夹

## 验证

部署完成后：
1. 访问 Vercel 控制台查看构建日志
2. 应该看到 "✓ Compiled successfully"
3. 获得可访问的测试网址

