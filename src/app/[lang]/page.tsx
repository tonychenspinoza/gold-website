import React from 'react'
import { Metadata } from 'next'
import { Lang } from '@/types'
import { Hero } from '@/components/sections/Hero'
import { CompanyIntro } from '@/components/sections/CompanyIntro'
import { ProductCategories } from '@/components/sections/ProductCategories'
import { TrustBadges } from '@/components/sections/TrustBadges'
import { Button } from '@/components/ui/Button'
import { translations } from '@/content/translations'
import { normalizeLang } from '@/lib/lang-utils'

interface HomePageProps {
  params: { lang: string }
}

export async function generateMetadata({
  params,
}: {
  params: { lang: string }
}): Promise<Metadata> {
  const lang = normalizeLang(params.lang)
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://example.com'
  const t = translations[lang].home

  return {
    title: lang === 'zh-HK'
      ? '首頁 - SING CHEN TRADE LIMITED'
      : 'Home - SING CHEN TRADE LIMITED',
    description: t.hero.description,
    alternates: {
      languages: {
        'zh-HK': `${baseUrl}/zh`,
        'en': `${baseUrl}/en`,
      },
    },
  }
}

export default function HomePage({ params }: HomePageProps) {
  const lang = normalizeLang(params.lang)
  const t = translations[lang].home

  return (
    <>
      <Hero lang={lang} />
      <CompanyIntro lang={lang} />
      <ProductCategories lang={lang} />
      <TrustBadges lang={lang} />

      {/* CTA Section */}
      <section className="bg-gold-light py-16 md:py-20">
        <div className="container-custom">
          <div className="mx-auto max-w-2xl text-center fade-in">
            <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">
              {t.cta.title}
            </h2>
            <p className="mb-8 text-lg text-gray-700">
              {t.cta.description}
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button variant="primary" href={`/${lang}/contact`}>
                {t.cta.contact}
              </Button>
              <Button variant="secondary" href={`/${lang}/products`}>
                {lang === 'zh-HK' ? '查看產品' : 'View Products'}
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

