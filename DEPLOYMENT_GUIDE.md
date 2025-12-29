# 上线部署指南

本文档提供将 SING CHEN TRADE LIMITED 网站部署到生产环境的完整步骤。

## 一、Vercel 部署（推荐）

### 步骤 1: 准备代码仓库

1. 初始化 Git 仓库（如果还没有）:
```bash
cd gold-website
git init
git add .
git commit -m "Initial commit"
```

2. 创建 GitHub 仓库并推送:
```bash
git remote add origin https://github.com/your-username/sing-chen-gold-website.git
git branch -M main
git push -u origin main
```

### 步骤 2: 在 Vercel 部署

1. 访问 [Vercel](https://vercel.com)
2. 使用 GitHub 账号登录
3. 点击 "Add New Project"
4. 选择你的 GitHub 仓库
5. 配置项目:
   - **Framework Preset**: Next.js（自动检测）
   - **Root Directory**: `./` (或 `gold-website` 如果在子目录)
   - **Build Command**: `pnpm build` (或 `npm run build`)
   - **Output Directory**: `.next` (自动)
6. 环境变量（可选）:
   - `NEXT_PUBLIC_BASE_URL`: 你的域名（例如: `https://www.yourdomain.com`）
7. 点击 "Deploy"

### 步骤 3: 配置自定义域名

1. 在 Vercel 项目设置中，进入 "Domains"
2. 添加你的域名（例如: `www.singchengold.com`）
3. 根据 Vercel 提供的 DNS 记录配置域名:
   - 类型: `CNAME`
   - 名称: `www`
   - 值: `cname.vercel-dns.com`
   - 或者使用 `A` 记录指向 Vercel IP
4. SSL 证书会自动配置（Let's Encrypt）

## 二、域名购买与配置

### 推荐域名注册商

- **Namecheap** - 性价比高，界面友好
- **GoDaddy** - 全球最大域名注册商
- **Cloudflare Registrar** - 价格透明，无隐藏费用

### 域名建议

- `singchengold.com` / `singchengold.hk`
- `singchentrade.com`
- `schgold.com`

### DNS 配置示例

```
类型    名称      值                    TTL
A       @         76.76.21.21           自动
CNAME   www       cname.vercel-dns.com  自动
```

## 三、SEO 优化 Checklist

### ✅ 基础 SEO

- [x] Meta Title 和 Description（已实现，支持多语言）
- [x] Hreflang 标签（已实现，支持 zh-HK 和 en）
- [x] 结构化数据（产品、企业信息）- 可进一步优化
- [x] 图片 Alt 文本（需检查占位图）
- [x] 移动端友好（响应式设计已实现）
- [x] 页面加载速度优化（Next.js Image 组件）

### 📝 需要手动完成的任务

#### 1. 提交 Sitemap

创建 `src/app/sitemap.ts`:

```typescript
import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.yourdomain.com'
  
  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: `${baseUrl}/zh`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: `${baseUrl}/en`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    // ... 添加其他页面
  ]
}
```

#### 2. Google Search Console

1. 访问 [Google Search Console](https://search.google.com/search-console)
2. 添加属性（网站）
3. 验证所有权（通过 DNS 或 HTML 文件）
4. 提交 sitemap: `https://www.yourdomain.com/sitemap.xml`

#### 3. Bing Webmaster Tools

1. 访问 [Bing Webmaster Tools](https://www.bing.com/webmasters)
2. 添加网站
3. 提交 sitemap

#### 4. 社交媒体 Meta Tags

在 `src/app/[lang]/layout.tsx` 中添加 Open Graph 和 Twitter Card:

```typescript
export const metadata: Metadata = {
  // ... 现有配置
  openGraph: {
    title: 'SING CHEN TRADE LIMITED',
    description: '...',
    images: ['/og-image.jpg'],
    locale: 'zh_HK',
    alternateLocale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SING CHEN TRADE LIMITED',
    description: '...',
    images: ['/twitter-image.jpg'],
  },
}
```

#### 5. Google Analytics / 百度统计

添加 Google Analytics 4:

1. 在 Google Analytics 创建账户
2. 获取 Measurement ID (G-XXXXXXXXXX)
3. 创建 `src/app/layout.tsx` 中的 Script 组件
4. 或使用 `next/script` 组件

#### 6. 替换占位图片

- Hero 图片: `public/images/hero.jpg`
- 产品图片: `public/images/products/`
- 证书图片: `public/images/certificates/`
- Logo: `public/images/logo.svg`

#### 7. 更新公司信息

在 `src/content/company.ts` 中更新:
- 完整的公司地址
- 真实电话号码
- 真实邮箱地址
- WhatsApp 号码

## 四、性能优化

### 图片优化

- 使用 Next.js Image 组件（已实现）
- 压缩图片（使用 [TinyPNG](https://tinypng.com) 或 [Squoosh](https://squoosh.app)）
- 使用 WebP 格式
- 配置合适的图片尺寸

### 代码优化

- 生产构建已自动优化
- 使用 `pnpm build` 生成优化的生产版本

## 五、安全考虑

### HTTPS

Vercel 自动提供 HTTPS（Let's Encrypt 证书）

### 表单安全

- 添加 reCAPTCHA（Google reCAPTCHA v3）
- 实施速率限制（Rate Limiting）
- 验证和清理用户输入（已实现前端验证）

## 六、监控与分析

### 推荐工具

1. **Vercel Analytics** - 集成简单，免费版可用
2. **Google Analytics 4** - 免费，功能强大
3. **Sentry** - 错误监控（可选）

## 七、备份策略

- 代码备份: GitHub（自动）
- 内容备份: 定期导出 `src/content/` 目录
- 数据库备份: 如后续使用数据库，定期备份

## 八、维护清单

### 定期检查（每月）

- [ ] 检查网站运行状态
- [ ] 更新产品信息
- [ ] 检查表单提交功能
- [ ] 查看 Google Analytics 数据
- [ ] 检查外部链接是否有效

### 季度检查

- [ ] 更新依赖包
- [ ] 检查 SEO 排名
- [ ] 审查网站内容
- [ ] 性能测试

## 九、常见问题

### Q: 如何更新内容？

A: 编辑 `src/content/` 目录下的文件，然后重新部署（Vercel 会自动检测 Git 推送并部署）

### Q: 如何添加新页面？

A: 在 `src/app/[lang]/` 下创建新目录和 `page.tsx` 文件

### Q: 如何更改样式？

A: 修改 `src/app/globals.css` 或 `tailwind.config.ts`

### Q: 表单不工作？

A: 检查 `src/components/sections/ContactForm.tsx`，确保已接入邮件服务（EmailJS 或 API Route）

## 十、支持与联系

如有技术问题，请参考:
- [Next.js 文档](https://nextjs.org/docs)
- [Vercel 文档](https://vercel.com/docs)
- [TailwindCSS 文档](https://tailwindcss.com/docs)

---

**最后更新**: 2024年
**维护者**: SING CHEN TRADE LIMITED

