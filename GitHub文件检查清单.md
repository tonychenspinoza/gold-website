# 🔍 GitHub 文件检查清单

## 问题诊断
本地构建 ✅ 成功，但 Vercel 构建 ❌ 失败，说明 GitHub 上的文件有问题。

## 必须检查的事项

### 1. 确认文件路径
GitHub 上的文件路径必须是：
```
src/app/layout.tsx
```

**不是**：
- ❌ `app/layout.tsx`（缺少 `src/`）
- ❌ `layout.tsx`（路径不对）
- ❌ `src/layout.tsx`（缺少 `app/`）

### 2. 确认文件内容
文件内容必须完全一致，包括：
- ✅ 导入语句
- ✅ Viewport 单独导出
- ✅ 完整的 RootLayout 组件

### 3. 检查 Vercel 配置
在 Vercel 项目设置中，检查：
- **Root Directory**: 应该是 `./` 或留空（不是 `gold-website`）
- **Framework Preset**: Next.js
- **Build Command**: `npm run build`

## 完整正确的文件内容

文件路径：`src/app/layout.tsx`

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

## 如何检查和修复

### 步骤 1: 检查文件是否存在
访问：https://github.com/tonychenspinoza/gold-website/tree/main/src/app

应该能看到 `layout.tsx` 文件。

### 步骤 2: 检查文件内容
点击 `layout.tsx` 文件，确认内容是否和上面一致。

### 步骤 3: 如果文件不存在或内容不对
1. 点击文件（如果存在）或点击 "Add file" → "Create new file"
2. 确保路径是：`src/app/layout.tsx`
3. 复制上面的完整代码
4. 提交更改

### 步骤 4: 检查其他必需文件
确保以下文件也存在：
- ✅ `src/app/page.tsx`
- ✅ `src/app/globals.css`
- ✅ `package.json`
- ✅ `next.config.js`

## 如果还是不行

可能需要检查：
1. Vercel 的 Root Directory 设置
2. GitHub 仓库的目录结构
3. 是否有其他配置文件缺失

