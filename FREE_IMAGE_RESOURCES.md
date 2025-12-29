# 免费黄金饰品图片资源

我已经在网站中使用了 Pexels 的免费图片。Pexels 提供高质量、可免费商业使用的图片。

## 当前使用的图片服务

- **Pexels**: https://www.pexels.com/
  - 所有图片都可以免费使用，包括商业用途
  - 无需注册即可使用
  - 建议注明图片来源（可选）

## 如何查找更多黄金饰品图片

### 1. Pexels 搜索关键词
访问 https://www.pexels.com/ 搜索以下关键词：
- "gold jewelry"（黄金首饰）
- "gold bar"（金条）
- "gold ring"（黄金戒指）
- "gold bracelet"（黄金手镯）
- "gold necklace"（黄金项链）
- "gold ingot"（金锭）

### 2. 其他免费图片网站

#### Pixabay
- 网址：https://pixabay.com/
- 搜索："gold jewelry", "gold bar"
- 完全免费，可商业使用

#### Unsplash
- 网址：https://unsplash.com/
- 搜索："gold", "jewelry", "gold bar"
- 高质量图片，免费使用

#### FreeImages
- 网址：https://www.freeimages.com/
- 搜索："gold jewelry"
- 注册后免费下载

## 更新图片的方法

### 方法1: 直接在代码中替换URL

找到产品图片数组，替换为新的图片URL：

```typescript
// src/content/products.ts
images: [
  'https://images.pexels.com/photos/新的图片ID/pexels-photo-新的图片ID.jpeg?auto=compress&cs=tinysrgb&w=800&h=800&fit=crop',
],
```

### 方法2: 下载图片到本地

1. 从免费图片网站下载图片
2. 放到 `public/images/products/` 目录
3. 更新代码中的路径为 `/images/products/your-image.jpg`

## 推荐的图片尺寸

- **Hero图片**: 1200x600px
- **产品分类**: 600x400px  
- **产品图片**: 800x800px（正方形）
- **证书图片**: 400x300px

## 注意事项

1. **版权**: 确保使用的图片可以商业使用
2. **质量**: 选择高清、清晰的图片
3. **内容**: 确保图片内容符合产品描述
4. **优化**: 上传前压缩图片以提高加载速度

