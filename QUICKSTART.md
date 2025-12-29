# 快速开始指南

## 前置要求

- Node.js 18+ 
- pnpm（推荐）或 npm/yarn

## 安装步骤

### 1. 进入项目目录

```bash
cd gold-website
```

### 2. 安装依赖

```bash
pnpm install
```

或使用 npm:

```bash
npm install
```

### 3. 启动开发服务器

```bash
pnpm dev
```

或使用 npm:

```bash
npm run dev
```

### 4. 打开浏览器

访问 [http://localhost:3000](http://localhost:3000)

默认会重定向到 [http://localhost:3000/zh](http://localhost:3000/zh) (繁体中文)

访问 [http://localhost:3000/en](http://localhost:3000/en) 查看英文版本

## 下一步

1. **更新公司信息**: 编辑 `src/content/company.ts`
   - 更新地址、电话、邮箱、WhatsApp号码

2. **添加产品**: 编辑 `src/content/products.ts`
   - 添加或修改产品数据
   - 更新产品图片URL

3. **修改文案**: 编辑 `src/content/translations.ts`
   - 更新中英文文案内容

4. **替换占位图片**: 
   - 将真实图片放入 `public/images/` 目录
   - 更新代码中的图片路径

5. **配置表单**: 
   - 编辑 `src/components/sections/ContactForm.tsx`
   - 接入 EmailJS 或创建 API Route

## 构建生产版本

```bash
pnpm build
pnpm start
```

## 部署到 Vercel

1. 将代码推送到 GitHub
2. 在 [Vercel](https://vercel.com) 导入项目
3. 自动部署完成

详细部署说明请参考 `DEPLOYMENT_GUIDE.md`

## 常见问题

### Q: 页面显示错误？

A: 确保已运行 `pnpm install` 安装所有依赖

### Q: 样式不显示？

A: 确保 TailwindCSS 已正确配置，检查 `tailwind.config.ts`

### Q: 图片不显示？

A: 检查图片路径是否正确，确保图片文件存在于 `public/` 目录

### Q: 表单提交不工作？

A: 当前为前端模拟提交，需要接入真实邮件服务（参考 README.md）

