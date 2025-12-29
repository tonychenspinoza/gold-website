import React from 'react'
import Image from 'next/image'
import { Lang } from '@/types'
import { translations } from '@/content/translations'
import { certificates } from '@/content/company'
import { Card } from '@/components/ui/Card'

interface TrustBadgesProps {
  lang: Lang
}

export const TrustBadges: React.FC<TrustBadgesProps> = ({ lang }) => {
  const t = translations[lang].home.trust

  return (
    <section className="py-16 md:py-20">
      <div className="container-custom">
        <div className="mb-12 text-center fade-in">
          <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">
            {t.title}
          </h2>
        </div>

        {/* 信任要点列表 */}
        <div className="mb-12 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
          {t.items.map((item, index) => (
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

        {/* 证书展示 */}
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
  )
}

