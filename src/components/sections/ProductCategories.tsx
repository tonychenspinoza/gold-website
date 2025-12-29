import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Lang } from '@/types'
import { translations } from '@/content/translations'
import { Card } from '@/components/ui/Card'

interface ProductCategoriesProps {
  lang: Lang
}

export const ProductCategories: React.FC<ProductCategoriesProps> = ({ lang }) => {
  const t = translations[lang].home.categories

  const categories = [
    {
      id: 'bars',
      title: t.bars.title,
      description: t.bars.description,
      image: 'https://images.pexels.com/photos/29816650/pexels-photo-29816650.jpeg?cs=srgb&dl=pexels-eugenia-sol-1769194548-29816650.jpg&fm=jpg',
      href: `/${lang}/products?category=bars`,
    },
    {
      id: 'jewelry',
      title: t.jewelry.title,
      description: t.jewelry.description,
      image: 'https://images.pexels.com/photos/33740462/pexels-photo-33740462.jpeg?cs=srgb&dl=pexels-zulfugarkarimov-33740462.jpg&fm=jpg',
      href: `/${lang}/products?category=jewelry`,
    },
    {
      id: 'craft',
      title: t.craft.title,
      description: t.craft.description,
      image: 'https://images.pexels.com/photos/30721007/pexels-photo-30721007.jpeg?cs=srgb&dl=pexels-ayseguldelice-30721007.jpg&fm=jpg',
      href: `/${lang}/products?category=craft`,
    },
  ]

  return (
    <section className="bg-gray-50 py-16 md:py-20">
      <div className="container-custom">
        <div className="mb-12 text-center fade-in">
          <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">
            {t.title}
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {categories.map((category) => (
            <Link key={category.id} href={category.href}>
              <Card hover className="h-full">
                <div className="relative mb-4 aspect-video w-full overflow-hidden rounded-lg bg-gray-200">
                  <Image
                    src={category.image}
                    alt={category.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <h3 className="mb-2 text-xl font-semibold text-gray-900">
                  {category.title}
                </h3>
                <p className="text-gray-600">{category.description}</p>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

