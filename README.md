# SING CHEN TRADE LIMITED - 香港黄金展示型官网

这是一个使用 Next.js 14 + TypeScript + TailwindCSS 构建的双语（繁体中文/英文）黄金产品展示网站。

## 功能特性

- ✅ **Next.js 14 App Router** - 最新的 Next.js 架构
- ✅ **TypeScript** - 类型安全
- ✅ **TailwindCSS** - 现代化样式
- ✅ **i18n 国际化** - 支持繁体中文（zh-HK）和英文（en）
- ✅ **响应式设计** - 移动端优先，适配所有设备
- ✅ **SEO 优化** - Meta tags、hreflang、结构化数据支持

## 页面结构

- `/` - 根路径重定向到 `/zh`
- `/[lang]` - 首页（`/zh` 或 `/en`）
- `/[lang]/products` - 产品列表页
- `/[lang]/products/[slug]` - 产品详情页
- `/[lang]/about` - 关于我们
- `/[lang]/contact` - 联系我们

## 开始使用

### 安装依赖

```bash
pnpm install
```

或使用 npm/yarn:

```bash
npm install
# 或
yarn install
```

### 开发模式

```bash
pnpm dev
```

打开 [http://localhost:3000](http://localhost:3000) 查看网站。

### 构建生产版本

```bash
pnpm build
pnpm start
```

## 项目结构

```
gold-website/
├── src/
│   ├── app/                    # Next.js App Router 页面
│   │   ├── [lang]/            # 语言路由
│   │   │   ├── page.tsx       # 首页
│   │   │   ├── products/      # 产品相关页面
│   │   │   ├── about/         # 关于我们
│   │   │   └── contact/       # 联系我们
│   │   └── layout.tsx         # 根布局
│   ├── components/            # React 组件
│   │   ├── layout/           # 布局组件（Header, Footer等）
│   │   ├── sections/         # 页面区块组件
│   │   └── ui/               # UI 基础组件
│   ├── content/              # 内容数据
│   │   ├── translations.ts   # 双语文案
│   │   ├── products.ts       # 产品数据
│   │   └── company.ts        # 公司信息
│   ├── lib/                  # 工具函数
│   │   ├── i18n.ts          # i18n 工具
│   │   └── utils.ts         # 通用工具
│   └── types/                # TypeScript 类型定义
└── public/                   # 静态资源
```

## 配置说明

### 环境变量

创建 `.env.local` 文件（可选）:

```env
NEXT_PUBLIC_BASE_URL=https://your-domain.com
```

### 更新公司信息

编辑 `src/content/company.ts` 文件，更新：
- 地址
- 电话
- 邮箱
- WhatsApp 号码

### 添加/修改产品

编辑 `src/content/products.ts` 文件，添加或修改产品数据。

### 修改文案

编辑 `src/content/translations.ts` 文件，更新中英文文案。

## 表单提交

目前表单提交为前端模拟（显示成功提示）。要接入真实邮件服务，可以：

1. **使用 EmailJS** (推荐，简单)
   - 在 `src/components/sections/ContactForm.tsx` 中的 `onSubmit` 函数添加 EmailJS 集成

2. **使用 API Route**
   - 创建 `src/app/api/contact/route.ts`
   - 集成 SendGrid、Resend 或其他邮件服务

## 样式定制

主要颜色配置在 `tailwind.config.ts`:

```typescript
colors: {
  gold: {
    DEFAULT: '#D4AF37',
    dark: '#B8860B',
    light: '#F4E4BC',
  },
}
```

## 部署

### Vercel 部署（推荐）

1. 将代码推送到 GitHub
2. 在 [Vercel](https://vercel.com) 导入项目
3. 自动部署完成

### 其他平台

项目支持部署到任何支持 Next.js 的平台：
- Netlify
- AWS Amplify
- 自托管 Node.js 服务器

## 技术栈

- **Framework**: Next.js 14
- **Language**: TypeScript
- **Styling**: TailwindCSS
- **Form**: React Hook Form
- **Image**: Next.js Image 组件

## 许可证

Private - SING CHEN TRADE LIMITED

