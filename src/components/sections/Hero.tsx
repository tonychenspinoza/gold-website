import React from 'react'
import Image from 'next/image'
import { Lang } from '@/types'
import { translations } from '@/content/translations'
import { Button } from '@/components/ui/Button'

interface HeroProps {
  lang: Lang
}

export const Hero: React.FC<HeroProps> = ({ lang }) => {
  const t = translations[lang].home.hero

  return (
    <section className="relative bg-gradient-to-b from-gray-50 to-white py-20 md:py-32">
      <div className="container-custom">
        <div className="mx-auto max-w-4xl text-center fade-in">
          {/* Hero Image */}
          <div className="relative mb-8 aspect-video w-full overflow-hidden rounded-2xl">
            <Image
              src="https://images.pexels.com/photos/33740462/pexels-photo-33740462.jpeg?cs=srgb&dl=pexels-zulfugarkarimov-33740462.jpg&fm=jpg"
              alt="Gold Products"
              fill
              className="object-cover"
              priority
              sizes="(max-width: 768px) 100vw, 1200px"
            />
            <div className="absolute inset-0 bg-black/20" />
          </div>

          {/* Slogan */}
          <h1 className="mb-4 text-3xl font-bold text-gray-900 md:text-5xl lg:text-6xl">
            {t.slogan}
          </h1>
          <p className="mb-6 text-lg text-gray-600 md:text-xl">
            {t.subSlogan}
          </p>
          <p className="mb-8 text-base text-gray-600 md:text-lg">
            {t.description}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button
              variant="gold"
              href={`/${lang}/contact`}
            >
              {translations[lang].home.cta.contact}
            </Button>
            <Button
              variant="secondary"
              href={`/${lang}/products`}
            >
              {translations[lang].home.cta.whatsapp}
            </Button>
          </div>

          {/* Email Contact */}
          <div className="mt-6 flex items-center justify-center gap-2 text-gray-700">
            <svg
              className="h-5 w-5 text-gold"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
            <span className="text-sm font-medium">
              {lang === 'zh-HK' ? '聯絡郵箱：' : 'Email: '}
            </span>
            <a
              href="mailto:singchentrade@163.com"
              className="text-sm font-semibold text-gold hover:text-gold-dark transition-colors duration-200"
            >
              singchentrade@163.com
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

