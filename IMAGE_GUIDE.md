# 图片上传指南

## 当前状态

网站目前使用渐变背景作为占位图片。请按照以下步骤上传您的实际黄金产品图片。

## 图片要求

1. **格式**: JPG、PNG、WebP
2. **尺寸建议**:
   - Hero图片: 1200x600px
   - 产品分类卡片: 600x400px
   - 产品图片: 800x800px (正方形)
   - 证书图片: 400x300px
3. **文件大小**: 建议每张图片小于500KB
4. **内容要求**: 
   - 纯黄金产品（金条、黄金首饰、黄金工艺品）
   - 图片中不要包含中文文字
   - 背景简洁（白色或浅色背景最佳）

## 上传步骤

### 方法1: 使用本地图片

1. 将图片放在 `public/images/` 目录下
2. 创建以下子目录结构：
   ```
   public/
   ├── images/
   │   ├── hero.jpg (首页大图)
   │   ├── categories/
   │   │   ├── bars.jpg (金条分类)
   │   │   ├── jewelry.jpg (22K首饰分类)
   │   │   └── craft.jpg (工艺品分类)
   │   ├── products/
   │   │   ├── bar-001-1.jpg (产品图片)
   │   │   ├── bar-001-2.jpg
   │   │   └── ... (其他产品图片)
   │   ├── certificates/
   │   │   ├── br-cert.jpg
   │   │   ├── dcl-support.jpg
   │   │   └── customs-trust.jpg
   │   └── partners/
   │       ├── partner-1.png
   │       └── ...
   ```

3. 在代码中更新图片路径，例如：
   - `src/components/sections/Hero.tsx`: `/images/hero.jpg`
   - `src/components/sections/ProductCategories.tsx`: `/images/categories/bars.jpg`
   - `src/content/products.ts`: `/images/products/bar-001-1.jpg`

### 方法2: 使用图片托管服务

1. 上传图片到图片托管服务（如 Imgur、Cloudinary、或您的CDN）
2. 获取图片URL
3. 在代码中更新图片URL

## 需要更新的文件

### 1. 首页Hero图片
**文件**: `src/components/sections/Hero.tsx`
**位置**: 第19-29行
**当前**: 渐变背景占位
**替换为**: 您的黄金产品展示大图

### 2. 产品分类图片
**文件**: `src/components/sections/ProductCategories.tsx`
**位置**: 第15-37行
**需要3张图片**:
- 金条分类图片
- 22K首饰分类图片
- 工艺品分类图片

### 3. 产品图片
**文件**: `src/content/products.ts`
**需要**: 12+ 张产品图片
- 每个产品至少1张主图
- 部分产品可以有多张图片

### 4. 证书图片
**文件**: `src/content/company.ts`
**位置**: 第72-109行
**需要3张图片**:
- 商业登记证
- DCL检测支持
- 海关合规证书

### 5. 合作伙伴Logo
**文件**: `src/content/company.ts`
**位置**: 第112-133行
**需要**: 合作伙伴Logo图片（可选）

## 快速替换示例

### 示例1: 替换Hero图片
```tsx
// src/components/sections/Hero.tsx
<Image
  src="/images/hero.jpg"  // 改为您的图片路径
  alt="Gold Products"
  fill
  className="object-cover"
  priority
/>
```

### 示例2: 替换产品图片
```typescript
// src/content/products.ts
images: [
  '/images/products/bar-001-1.jpg',  // 改为您的图片路径
  '/images/products/bar-001-2.jpg',
],
```

## 注意事项

1. **图片命名**: 使用有意义的文件名，便于管理
2. **图片优化**: 上传前压缩图片以提高加载速度
3. **备份**: 保留原始高质量图片
4. **测试**: 上传后在不同设备上测试显示效果

## 图片优化工具推荐

- [TinyPNG](https://tinypng.com/) - 在线图片压缩
- [Squoosh](https://squoosh.app/) - Google图片压缩工具
- [ImageOptim](https://imageoptim.com/) - Mac图片优化工具

## 需要帮助？

如果您需要帮助上传或替换图片，请提供：
1. 图片文件或URL
2. 图片对应的位置（Hero、产品、分类等）
3. 我将帮您更新代码

