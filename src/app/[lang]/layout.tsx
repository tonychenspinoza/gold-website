import React from 'react'
import { Metadata } from 'next'
import { Lang } from '@/types'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { WhatsAppFloatButton } from '@/components/sections/WhatsAppFloatButton'
import { supportedLanguages } from '@/lib/i18n'
import { normalizeLang } from '@/lib/lang-utils'

interface LangLayoutProps {
  children: React.ReactNode
  params: { lang: string } // URL 参数可能是 'zh' 或 'en'
}

export async function generateStaticParams() {
  // URL 路径使用 'zh' 和 'en'，而不是 'zh-HK'
  return [
    { lang: 'zh' },
    { lang: 'en' },
  ]
}

export async function generateMetadata({
  params,
}: {
  params: { lang: string }
}): Promise<Metadata> {
  const lang = normalizeLang(params.lang)
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://example.com'

  return {
    title: lang === 'zh-HK' 
      ? 'SING CHEN TRADE LIMITED - 香港黃金貿易公司'
      : 'SING CHEN TRADE LIMITED - Hong Kong Gold Trading Company',
    description: lang === 'zh-HK'
      ? 'SING CHEN TRADE LIMITED 為香港註冊之黃金貿易公司，提供金條、22K 黃金首飾及精品黃金製品的展示與線下交易服務。'
      : 'SING CHEN TRADE LIMITED is a Hong Kong–registered gold trading company, specializing in gold bars, 22K jewelry, and premium gold products.',
    alternates: {
      languages: {
        'zh-HK': `${baseUrl}/zh`,
        'en': `${baseUrl}/en`,
      },
    },
  }
}

export default function LangLayout({ children, params }: LangLayoutProps) {
  const lang = normalizeLang(params.lang)

  return (
    <>
      <Header />
      <main className="min-h-screen">{children}</main>
      <Footer lang={lang} />
      <WhatsAppFloatButton lang={lang} />
    </>
  )
}

