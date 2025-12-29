# 如何更新黄金饰品图片

由于我无法直接访问图片网站验证图片内容，建议您按以下步骤操作：

## 方法1: 使用Pexels搜索黄金饰品图片

1. 访问 https://www.pexels.com/
2. 搜索关键词：
   - "gold jewelry"（黄金首饰）
   - "gold ring"（黄金戒指）
   - "gold bar"（金条）
   - "gold bracelet"（黄金手镯）
   - "gold necklace"（黄金项链）

3. 选择图片后，点击下载
4. 复制图片的URL（右键图片 -> 复制图片地址）
5. 将URL粘贴到代码中替换

## 方法2: 使用Pixabay搜索

1. 访问 https://pixabay.com/
2. 搜索相同的关键词
3. 选择免费图片（Commercial use allowed）
4. 复制图片URL

## 方法3: 使用本地图片

1. 下载图片到 `public/images/` 目录
2. 在代码中使用路径：`/images/your-image.jpg`

## 需要更新的文件

### 1. 首页Hero图片
文件：`src/components/sections/Hero.tsx`
行号：约21行

### 2. 产品分类图片
文件：`src/components/sections/ProductCategories.tsx`
行号：约20, 27, 34行

### 3. 所有产品图片
文件：`src/content/products.ts`
每个产品的 `images` 数组

## 示例替换代码

找到这一行：
```typescript
images: [
  'https://cdn.pixabay.com/photo/...',
],
```

替换为：
```typescript
images: [
  '您找到的新图片URL',
],
```

## 注意事项

- 确保图片可以免费商业使用
- 图片中不要包含中文文字
- 优先选择高质量、清晰的图片
- 建议图片尺寸：800x800px（产品图）

