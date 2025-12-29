import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'SING CHEN TRADE LIMITED - 香港黃金貿易公司',
  description: 'SING CHEN TRADE LIMITED 為香港註冊之黃金貿易公司，提供金條、22K 黃金首飾及精品黃金製品的展示與線下交易服務。',
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh-HK">
      <body className={inter.className}>{children}</body>
    </html>
  )
}

