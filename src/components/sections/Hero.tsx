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
        </div>
      </div>
    </section>
  )
}

