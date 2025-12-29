# 🔍 gold-website01 仓库检查清单

## 必须检查的关键文件

### 1. 根目录必需文件 ✅

- [ ] `package.json` - 项目配置（必须包含 Next.js 依赖）
- [ ] `next.config.js` - Next.js 配置（必须包含 `eslint.ignoreDuringBuilds: true`）
- [ ] `tsconfig.json` - TypeScript 配置
- [ ] `tailwind.config.ts` - TailwindCSS 配置
- [ ] `postcss.config.js` - PostCSS 配置
- [ ] `.eslintrc.json` - ESLint 配置
- [ ] `.gitignore` - Git 忽略文件
- [ ] `vercel.json` - Vercel 部署配置（可选但推荐）

### 2. src/app 目录必需文件 ✅

- [ ] `src/app/layout.tsx` - **根布局文件（必需）**
  - 必须包含 `export const viewport: Viewport`
  - 必须包含 `export default function RootLayout`
  
- [ ] `src/app/page.tsx` - **根页面文件（必需）**
  - 应该包含重定向到 `/zh`
  
- [ ] `src/app/globals.css` - **全局样式文件（必需）**
  - layout.tsx 会导入此文件

- [ ] `src/app/[lang]/layout.tsx` - 语言布局
- [ ] `src/app/[lang]/page.tsx` - 语言首页
- [ ] `src/app/[lang]/about/page.tsx` - 关于我们
- [ ] `src/app/[lang]/contact/page.tsx` - 联系我们
- [ ] `src/app/[lang]/products/page.tsx` - 产品列表
- [ ] `src/app/[lang]/products/[slug]/page.tsx` - 产品详情

### 3. src/components 目录 ✅

- [ ] `src/components/layout/Header.tsx`
- [ ] `src/components/layout/Footer.tsx`
- [ ] `src/components/layout/LanguageSwitcher.tsx`
- [ ] `src/components/sections/Hero.tsx`
- [ ] `src/components/sections/ProductCategories.tsx`
- [ ] `src/components/sections/ContactForm.tsx`
- [ ] 其他组件文件

### 4. src/content 目录 ✅

- [ ] `src/content/translations.ts` - 双语文案
- [ ] `src/content/products.ts` - 产品数据
- [ ] `src/content/company.ts` - 公司信息
- [ ] `src/content/image-urls.ts` - 图片 URL

### 5. 其他必需文件 ✅

- [ ] `src/lib/i18n.ts` - 国际化工具
- [ ] `src/lib/lang-utils.ts` - 语言工具
- [ ] `src/lib/utils.ts` - 通用工具
- [ ] `src/types/index.ts` - TypeScript 类型定义

## 关键检查点

### ✅ 检查 1: package.json 内容

应该包含：
```json
{
  "name": "sing-chen-gold-website",
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start"
  },
  "dependencies": {
    "next": "^14.0.4",
    "react": "^18.2.0",
    "react-dom": "^18.2.0"
  }
}
```

### ✅ 检查 2: next.config.js 内容

必须包含：
```javascript
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,  // 这行很重要！
  },
  // ... 其他配置
}
```

### ✅ 检查 3: src/app/layout.tsx 内容

必须包含：
```typescript
export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
}

export default function RootLayout({ children }) {
  return (
    <html lang="zh-HK">
      <body>{children}</body>
    </html>
  )
}
```

### ✅ 检查 4: 文件结构

确保**没有**以下冲突文件：
- ❌ `app/page.tsx`（根目录的 app 文件夹）
- ✅ 只有 `src/app/page.tsx`（正确）

## 常见问题

### 问题 1: 缺少 layout.tsx
**错误**: `page.tsx doesn't have a root layout`
**解决**: 确保 `src/app/layout.tsx` 存在

### 问题 2: 缺少 globals.css
**错误**: 构建时找不到 `./globals.css`
**解决**: 确保 `src/app/globals.css` 存在

### 问题 3: ESLint 错误导致构建失败
**错误**: ESLint 错误阻止构建
**解决**: 确保 `next.config.js` 包含 `eslint.ignoreDuringBuilds: true`

### 问题 4: 文件路径冲突
**错误**: 同时存在 `app/page.tsx` 和 `src/app/page.tsx`
**解决**: 删除根目录的 `app/page.tsx`，只保留 `src/app/` 结构

## 快速验证方法

1. **访问 GitHub 仓库**: https://github.com/tonychenspinoza/gold-website01
2. **检查文件结构**: 确认上述文件都存在
3. **检查关键文件内容**: 点击 `src/app/layout.tsx` 和 `next.config.js` 查看内容
4. **尝试在 Vercel 部署**: 如果文件都正确，部署应该成功

## 如果发现问题

1. **缺少文件**: 在 GitHub 网页上创建缺失的文件
2. **文件内容错误**: 点击文件 → 编辑 → 修正内容
3. **文件路径错误**: 删除错误路径的文件，确保在正确位置

---

**检查完成后，如果所有文件都正确，Vercel 部署应该会成功！** ✅

