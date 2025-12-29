import React from 'react'
import { Metadata } from 'next'
import Image from 'next/image'
import { Lang } from '@/types'
import { translations } from '@/content/translations'
import { companyInfo, milestones, certificates, partners } from '@/content/company'
import { Card } from '@/components/ui/Card'
import { normalizeLang } from '@/lib/lang-utils'

interface AboutPageProps {
  params: { lang: string }
}

export async function generateMetadata({
  params,
}: {
  params: { lang: string }
}): Promise<Metadata> {
  const lang = normalizeLang(params.lang)
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://example.com'
  const t = translations[lang].about

  return {
    title: lang === 'zh-HK'
      ? '關於我們 - SING CHEN TRADE LIMITED'
      : 'About Us - SING CHEN TRADE LIMITED',
    description: t.intro.content,
    alternates: {
      languages: {
        'zh-HK': `${baseUrl}/zh/about`,
        'en': `${baseUrl}/en/about`,
      },
    },
  }
}

export default function AboutPage({ params }: AboutPageProps) {
  const lang = normalizeLang(params.lang)
  const t = translations[lang].about

  return (
    <div className="py-16 md:py-20">
      <div className="container-custom">
        {/* 页面标题 */}
        <div className="mb-12 text-center fade-in">
          <h1 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">
            {t.title}
          </h1>
        </div>

        {/* 公司简介 */}
        <section className="mb-16">
          <div className="mx-auto max-w-3xl text-center fade-in">
            <p className="mb-6 text-lg leading-relaxed text-gray-600 md:text-xl">
              {t.intro.content}
            </p>
            <p className="text-lg leading-relaxed text-gray-600 md:text-xl">
              {t.intro.content2}
            </p>
          </div>
        </section>

        {/* 我们的优势 */}
        <section className="mb-16 bg-gray-50 py-12 md:py-16">
          <div className="container-custom">
            <div className="mb-8 text-center fade-in">
              <h2 className="mb-4 text-2xl font-bold text-gray-900 md:text-3xl">
                {t.strengths.title}
              </h2>
            </div>
            <div className="mx-auto grid max-w-4xl grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
              {t.strengths.items.map((item, index) => (
                <div
                  key={index}
                  className="flex items-start space-x-3 rounded-lg border border-gray-200 bg-white p-4"
                >
                  <svg
                    className="mt-0.5 h-6 w-6 flex-shrink-0 text-gold"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <p className="text-sm text-gray-700 md:text-base">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 合规与文件 */}
        <section className="mb-16">
          <div className="mx-auto max-w-3xl fade-in">
            <h2 className="mb-4 text-center text-2xl font-bold text-gray-900 md:text-3xl">
              {t.compliance.title}
            </h2>
            <p className="text-center text-lg leading-relaxed text-gray-600">
              {t.compliance.content}
            </p>
          </div>
        </section>

        {/* 发展历程 */}
        <section className="mb-16">
          <div className="mb-8 text-center fade-in">
            <h2 className="mb-4 text-2xl font-bold text-gray-900 md:text-3xl">
              {t.milestones.title}
            </h2>
          </div>
          <div className="mx-auto max-w-4xl">
            <div className="relative">
              {/* 时间轴线条 */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gray-300 md:left-1/2"></div>

              {/* 里程碑项目 */}
              <div className="space-y-12 pl-4 md:pl-0">
                {milestones.map((milestone, index) => (
                  <div
                    key={milestone.year}
                    className="relative"
                  >
                    {/* 年份圆圈 */}
                    <div className="absolute left-0 top-0 z-10 flex h-14 w-14 -translate-x-1/2 items-center justify-center rounded-full bg-gold text-sm font-bold text-gray-900 shadow-md md:left-1/2 md:h-16 md:w-16 md:text-base">
                      {milestone.year}
                    </div>

                    {/* 内容卡片 */}
                    <div
                      className={`ml-8 rounded-lg border border-gray-200 bg-white p-6 shadow-sm md:ml-0 md:w-5/12 ${
                        index % 2 === 0 ? 'md:mr-auto md:pr-20' : 'md:ml-auto md:pl-20'
                      }`}
                    >
                      <h3 className="mb-2 text-xl font-semibold text-gray-900">
                        {milestone.title[lang]}
                      </h3>
                      <p className="text-gray-600">{milestone.description[lang]}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 证书与牌照 */}
        <section className="mb-16 bg-gray-50 py-12 md:py-16">
          <div className="container-custom">
            <div className="mb-8 text-center fade-in">
              <h2 className="mb-4 text-2xl font-bold text-gray-900 md:text-3xl">
                {t.certificates.title}
              </h2>
            </div>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              {certificates.map((cert) => (
                <Card key={cert.id} className="text-center">
                  <div className="relative mb-4 aspect-video w-full overflow-hidden rounded-lg bg-gradient-to-br from-gray-100 to-gray-200">
                    {cert.image ? (
                      <Image
                        src={cert.image}
                        alt={cert.name[lang]}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 33vw"
                      />
                    ) : (
                      <div className="flex h-full items-center justify-center">
                        <div className="text-center text-gray-600">
                          <div className="mb-2 text-3xl">📄</div>
                          <p className="text-xs">{cert.name[lang]}</p>
                        </div>
                      </div>
                    )}
                  </div>
                  <h3 className="mb-2 text-lg font-semibold text-gray-900">
                    {cert.name[lang]}
                  </h3>
                  <p className="text-sm text-gray-600">{cert.description[lang]}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* 合作伙伴 */}
        <section>
          <div className="mb-8 text-center fade-in">
            <h2 className="mb-4 text-2xl font-bold text-gray-900 md:text-3xl">
              {t.partners.title}
            </h2>
          </div>
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {partners.map((partner) => (
              <div
                key={partner.id}
                className="flex items-center justify-center rounded-lg border border-gray-200 bg-gray-50 p-6"
              >
                {partner.logo ? (
                  <div className="relative h-20 w-full">
                    <Image
                      src={partner.logo}
                      alt={partner.name}
                      fill
                      className="object-contain"
                      sizes="(max-width: 768px) 50vw, 25vw"
                    />
                  </div>
                ) : (
                  <div className="text-center text-gray-400">
                    <div className="text-2xl mb-1">🏢</div>
                    <p className="text-xs">{partner.name}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}

