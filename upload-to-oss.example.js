/**
 * 阿里云 OSS 上传脚本（示例文件）
 * 使用方法：
 * 1. 复制此文件为 upload-to-oss.js
 * 2. 安装依赖：npm install ali-oss mime-types
 * 3. 配置下面的 ACCESS_KEY_ID 和 ACCESS_KEY_SECRET
 * 4. 运行：node upload-to-oss.js
 */

const OSS = require('ali-oss');
const fs = require('fs');
const path = require('path');
const mime = require('mime-types');

// ========== 配置区域 ==========
// 请填写你的阿里云 OSS 配置信息
const config = {
  // 从阿里云控制台获取：右上角头像 -> AccessKey 管理 -> 创建 AccessKey
  accessKeyId: 'YOUR_ACCESS_KEY_ID',        // 你的 AccessKey ID
  accessKeySecret: 'YOUR_ACCESS_KEY_SECRET', // 你的 AccessKey Secret
  bucket: 'your-bucket-name',                // Bucket 名称
  region: 'oss-cn-hangzhou',                 // 地域：华东1（杭州）
};

// ========== 上传函数 ==========

async function uploadDirectory(client, localDir, remoteDir = '') {
  const files = fs.readdirSync(localDir);

  for (const file of files) {
    const localPath = path.join(localDir, file);
    const stat = fs.statSync(localPath);

    if (stat.isDirectory()) {
      await uploadDirectory(client, localPath, path.join(remoteDir, file).replace(/\\/g, '/'));
    } else {
      const remotePath = path.join(remoteDir, file).replace(/\\/g, '/');
      const contentType = mime.lookup(localPath) || 'application/octet-stream';
      try {
        await client.put(remotePath, localPath, { headers: { 'Content-Type': contentType } });
        console.log(`✅ 上传成功: ${remotePath} (${contentType})`);
      } catch (error) {
        console.error(`❌ 上传失败: ${remotePath}`, error.message);
      }
    }
  }
}

// ========== 主函数 ==========

async function main() {
  try {
    console.log('🚀 开始上传到阿里云 OSS...\n');
    console.log(`📦 Bucket: ${config.bucket}`);
    console.log(`🌍 地域: ${config.region}\n`);

    const client = new OSS(config);
    const outDir = path.join(__dirname, 'out');

    if (!fs.existsSync(outDir)) {
      console.error('❌ 错误: out 目录不存在，请先运行 npm run build');
      process.exit(1);
    }

    await uploadDirectory(client, outDir);

    console.log('\n✅ 上传完成！\n');
    console.log(`🌐 访问地址: http://${config.bucket}.${config.region}.aliyuncs.com`);
    console.log(`   或: https://${config.bucket}.${config.region}.aliyuncs.com`);
  } catch (error) {
    console.error('❌ 错误:', error.message);
    process.exit(1);
  }
}

main();

