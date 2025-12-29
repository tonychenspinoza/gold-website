/** @type {import('next').NextConfig} */
const nextConfig = {
  // 静态导出配置（用于 OSS 等静态托管）
  output: 'export',
  eslint: {
    // 在构建时忽略 ESLint 错误，允许构建继续
    ignoreDuringBuilds: true,
  },
  typescript: {
    // 在构建时忽略 TypeScript 错误，允许构建继续
    ignoreBuildErrors: true,
  },
  images: {
    // 静态导出需要禁用图片优化
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.pixabay.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'images.pexels.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'via.placeholder.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'i.postimg.cc',
        port: '',
        pathname: '/**',
      },
    ],
  },
}

module.exports = nextConfig

