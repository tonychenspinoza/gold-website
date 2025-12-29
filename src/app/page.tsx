'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

// 根路径重定向到默认语言（中文）
// 使用客户端重定向以支持静态导出
export default function RootPage() {
  const router = useRouter()
  
  useEffect(() => {
    router.replace('/zh')
  }, [router])

  // 显示加载提示
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50">
      <div className="text-center">
        <p className="text-gray-600">正在跳转...</p>
      </div>
    </div>
  )
}

