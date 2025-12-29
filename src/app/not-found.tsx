import React from 'react'
import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50">
      <div className="text-center">
        <h1 className="mb-4 text-6xl font-bold text-gray-900">404</h1>
        <h2 className="mb-4 text-2xl font-semibold text-gray-700">
          页面未找到 / Page Not Found
        </h2>
        <p className="mb-8 text-gray-600">
          抱歉，您访问的页面不存在。
          <br />
          Sorry, the page you are looking for does not exist.
        </p>
        <Link
          href="/zh"
          className="inline-flex items-center justify-center rounded-lg bg-gold px-6 py-3 font-medium text-gray-900 transition-colors duration-200 hover:bg-gold-dark"
        >
          返回首页 / Back to Home
        </Link>
      </div>
    </div>
  )
}

