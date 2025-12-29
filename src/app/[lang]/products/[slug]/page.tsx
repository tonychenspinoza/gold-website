import React from 'react'
import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { Lang } from '@/types'
import { translations } from '@/content/translations'
import { products } from '@/content/products'
import { companyInfo } from '@/content/company'
import { Button } from '@/components/ui/Button'
import { Card } from '@/components/ui/Card'
import { ProductCard } from '@/components/ui/ProductCard'
import { getWhatsAppLink } from '@/lib/utils'
import { supportedLanguages } from '@/lib/i18n'
import { normalizeLang } from '@/lib/lang-utils'

interface ProductDetailPageProps {
  params: { lang: string; slug: string }
}

export async function generateStaticParams() {
  const params: Array<{ lang: string; slug: string }> = []
  
  // URL 路径使用 'zh' 和 'en'
  const urlLangs = ['zh', 'en']
  
  urlLangs.forEach((urlLang) => {
    products.forEach((product) => {
      params.push({
        lang: urlLang,
        slug: product.slug,
      })
    })
  })
  
  return params
}

export async function generateMetadata({
  params,
}: {
  params: { lang: string; slug: string }
}): Promise<Metadata> {
  const product = products.find((p) => p.slug === params.slug)
  
  if (!product) {
    return {
      title: 'Product Not Found',
    }
  }

  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://example.com'
  const lang = normalizeLang(params.lang)

  return {
    title: `${product.name[lang]} - SING CHEN TRADE LIMITED`,
    description: product.description[lang],
    alternates: {
      languages: {
        'zh-HK': `${baseUrl}/zh/products/${params.slug}`,
        'en': `${baseUrl}/en/products/${params.slug}`,
      },
    },
  }
}

export default function ProductDetailPage({ params }: ProductDetailPageProps) {
  const lang = normalizeLang(params.lang)
  const slug = params.slug
  const product = products.find((p) => p.slug === slug)

  if (!product) {
    notFound()
  }

  const t = translations[lang].productDetail
  const relatedProducts = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 3)

  // WhatsApp链接（如果有配置）
  const whatsappMessage = encodeURIComponent(
    lang === 'zh-HK'
      ? `您好，我想了解 ${product.name[lang]} 的更多信息。`
      : `Hello, I would like to know more about ${product.name[lang]}.`
  )
  const whatsappLink = companyInfo.whatsapp && companyInfo.whatsapp !== '[待填]'
    ? getWhatsAppLink(companyInfo.whatsapp, whatsappMessage)
    : '#'

  return (
    <div className="py-16 md:py-20">
      <div className="container-custom">
        <div className="mb-8">
          <Link
            href={`/${lang}/products`}
            className="text-sm text-gray-600 hover:text-gold"
          >
            ← {translations[lang].products.title}
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          {/* 产品图片轮播 */}
          <div className="fade-in">
            <div className="relative aspect-square w-full overflow-hidden rounded-2xl bg-gray-100">
              <Image
                src={product.images[0] || 'https://images.pexels.com/photos/248077/pexels-photo-248077.jpeg?cs=srgb&dl=pexels-pixabay-248077.jpg&fm=jpg'}
                alt={product.name[lang]}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
            </div>
            {/* 如果有多个图片，可以在这里添加轮播功能 */}
            {product.images.length > 1 && product.images[1] && (
              <div className="mt-4 grid grid-cols-4 gap-4">
                {product.images.slice(1, 5).filter(img => img).map((image, index) => (
                  <div
                    key={index}
                    className="relative aspect-square w-full overflow-hidden rounded-lg bg-gray-100"
                  >
                    <Image
                      src={image}
                      alt={`${product.name[lang]} ${index + 2}`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 25vw, 12.5vw"
                    />
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* 产品信息 */}
          <div className="fade-in">
            <h1 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">
              {product.name[lang]}
            </h1>
            <p className="mb-6 text-lg text-gray-600">
              {product.description[lang]}
            </p>

            {/* 规格参数 */}
            <Card className="mb-6">
              <h2 className="mb-4 text-xl font-semibold text-gray-900">
                {t.specifications}
              </h2>
              <div className="space-y-3">
                <div className="flex justify-between border-b border-gray-200 pb-2">
                  <span className="text-gray-600">{t.purity}:</span>
                  <span className="font-medium text-gray-900">{product.purity}</span>
                </div>
                <div className="flex justify-between border-b border-gray-200 pb-2">
                  <span className="text-gray-600">{t.weight}:</span>
                  <span className="font-medium text-gray-900">{product.weight}</span>
                </div>
                {product.size && (
                  <div className="flex justify-between border-b border-gray-200 pb-2">
                    <span className="text-gray-600">{t.size}:</span>
                    <span className="font-medium text-gray-900">{product.size}</span>
                  </div>
                )}
                {product.craftsmanship && (
                  <div className="flex justify-between border-b border-gray-200 pb-2">
                    <span className="text-gray-600">{t.craftsmanship}:</span>
                    <span className="font-medium text-gray-900">{product.craftsmanship}</span>
                  </div>
                )}
                {product.certificate && product.certificate.length > 0 && (
                  <div className="pt-2">
                    <span className="text-gray-600">{t.certificates}:</span>
                    <div className="mt-2 flex flex-wrap gap-2">
                      {product.certificate.map((cert, index) => (
                        <span
                          key={index}
                          className="rounded-full bg-gold-light px-3 py-1 text-sm font-medium text-gray-900"
                        >
                          {cert}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </Card>

            {/* 认证标识 */}
            <div className="mb-6 flex flex-wrap gap-2">
              <span className="rounded-lg bg-green-50 px-4 py-2 text-sm font-medium text-green-800">
                ✓ {lang === 'zh-HK' ? '可提供檢測報告' : 'Inspection Report Available'}
              </span>
              <span className="rounded-lg bg-blue-50 px-4 py-2 text-sm font-medium text-blue-800">
                ✓ {lang === 'zh-HK' ? '品質保證' : 'Quality Guaranteed'}
              </span>
              <span className="rounded-lg bg-purple-50 px-4 py-2 text-sm font-medium text-purple-800">
                ✓ {lang === 'zh-HK' ? '海關合規' : 'Customs Compliant'}
              </span>
            </div>

            {/* CTA按钮 */}
            <div className="flex flex-col gap-4 sm:flex-row">
              {companyInfo.whatsapp && companyInfo.whatsapp !== '[待填]' ? (
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-gold inline-flex items-center justify-center rounded-lg bg-gold px-6 py-3 text-base font-medium text-gray-900 transition-all duration-200 hover:bg-gold-dark focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2"
                >
                  {t.whatsappInquiry}
                </a>
              ) : null}
              <Button variant="primary" href={`/${lang}/contact?product=${product.slug}`}>
                {t.formInquiry}
              </Button>
            </div>
          </div>
        </div>

        {/* 相关产品推荐 */}
        {relatedProducts.length > 0 && (
          <section className="mt-20">
            <h2 className="mb-8 text-2xl font-bold text-gray-900 md:text-3xl">
              {t.relatedProducts}
            </h2>
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {relatedProducts.map((relatedProduct) => (
                <ProductCard
                  key={relatedProduct.id}
                  product={relatedProduct}
                  lang={lang}
                />
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  )
}

