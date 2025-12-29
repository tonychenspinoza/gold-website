'use client'

import React, { useState, useMemo, Suspense } from 'react'
import { useSearchParams } from 'next/navigation'
import { Lang, ProductCategory } from '@/types'
import { translations } from '@/content/translations'
import { products } from '@/content/products'
import { ProductCard } from '@/components/ui/ProductCard'
import { normalizeLang } from '@/lib/lang-utils'

interface ProductsPageContentProps {
  lang: Lang
}

function ProductsPageContent({ lang }: ProductsPageContentProps) {
  const searchParams = useSearchParams()
  const initialCategory = (searchParams.get('category') as ProductCategory) || 'all'
  
  const [selectedCategory, setSelectedCategory] = useState<ProductCategory | 'all'>(initialCategory)
  const t = translations[lang].products

  // 分类列表
  const categories: Array<{ id: ProductCategory | 'all'; label: string }> = [
    { id: 'all', label: t.all },
    { id: 'bars', label: translations[lang].home.categories.bars.title },
    { id: 'jewelry', label: translations[lang].home.categories.jewelry.title },
    { id: 'craft', label: translations[lang].home.categories.craft.title },
  ]

  // 过滤产品
  const filteredProducts = useMemo(() => {
    if (selectedCategory === 'all') {
      return products
    }
    return products.filter((p) => p.category === selectedCategory)
  }, [selectedCategory])

  return (
    <div className="py-16 md:py-20">
      <div className="container-custom">
        {/* 页面标题 */}
        <div className="mb-12 text-center fade-in">
          <h1 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">
            {t.title}
          </h1>
        </div>

        {/* 分类筛选 */}
        <div className="mb-12 flex flex-wrap justify-center gap-4 fade-in">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`rounded-lg px-6 py-3 text-sm font-medium transition-all duration-200 ${
                selectedCategory === category.id
                  ? 'bg-gold text-gray-900'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* 产品网格 */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} lang={lang} />
            ))}
          </div>
        ) : (
          <div className="py-12 text-center">
            <p className="text-lg text-gray-600">{t.noProducts}</p>
          </div>
        )}
      </div>
    </div>
  )
}

interface ProductsPageProps {
  params: { lang: string }
}

export default function ProductsPage({ params }: ProductsPageProps) {
  const lang = normalizeLang(params.lang)
  
  return (
    <Suspense fallback={<div className="py-16 text-center">Loading...</div>}>
      <ProductsPageContent lang={lang} />
    </Suspense>
  )
}

