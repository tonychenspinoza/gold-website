import React from 'react'
import { Lang } from '@/types'
import { translations } from '@/content/translations'

interface CompanyIntroProps {
  lang: Lang
}

export const CompanyIntro: React.FC<CompanyIntroProps> = ({ lang }) => {
  const t = translations[lang].home.companyIntro

  return (
    <section className="py-16 md:py-20">
      <div className="container-custom">
        <div className="mx-auto max-w-3xl text-center fade-in">
          <h2 className="mb-6 text-3xl font-bold text-gray-900 md:text-4xl">
            {t.title}
          </h2>
          <p className="text-lg leading-relaxed text-gray-600 md:text-xl">
            {t.content}
          </p>
        </div>
      </div>
    </section>
  )
}

