'use client'

import React, { Suspense } from 'react'
import { useSearchParams } from 'next/navigation'
import { Lang } from '@/types'
import { translations } from '@/content/translations'
import { companyInfo } from '@/content/company'
import { ContactForm } from '@/components/sections/ContactForm'
import { Card } from '@/components/ui/Card'
import { getWhatsAppLink } from '@/lib/utils'
import { normalizeLang } from '@/lib/lang-utils'

interface ContactPageContentProps {
  lang: Lang
}

function ContactPageContent({ lang }: ContactPageContentProps) {
  const searchParams = useSearchParams()
  const productSlug = searchParams.get('product') || undefined

  const t = translations[lang].contact

  // WhatsApp链接
  const whatsappLink = companyInfo.whatsapp && companyInfo.whatsapp !== '[待填]'
    ? getWhatsAppLink(companyInfo.whatsapp)
    : '#'

  return (
    <div className="py-16 md:py-20">
      <div className="container-custom">
        {/* 页面标题 */}
        <div className="mb-12 text-center fade-in">
          <h1 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">
            {t.title}
          </h1>
        </div>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          {/* 联系信息 */}
          <div className="fade-in">
            <Card>
              <h2 className="mb-6 text-2xl font-semibold text-gray-900">
                {t.info.title}
              </h2>

              <div className="space-y-6">
                {/* 公司名称 */}
                <div>
                  <h3 className="mb-2 text-lg font-semibold text-gray-900">
                    {companyInfo.name}
                  </h3>
                </div>

                {/* 地址 */}
                <div>
                  <div className="mb-1 flex items-start space-x-3">
                    <svg
                      className="mt-1 h-5 w-5 text-gold"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                    <div>
                      <p className="font-medium text-gray-700">{t.info.address}:</p>
                      <p className="text-gray-600">{companyInfo.address[lang]}</p>
                    </div>
                  </div>
                </div>

                {/* 电话 */}
                {companyInfo.phone && companyInfo.phone !== '[待填]' && (
                  <div>
                    <div className="mb-1 flex items-center space-x-3">
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
                          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                        />
                      </svg>
                      <div>
                        <p className="font-medium text-gray-700">{t.info.phone}:</p>
                        <a
                          href={`tel:${companyInfo.phone}`}
                          className="text-gray-600 hover:text-gold"
                        >
                          {companyInfo.phone}
                        </a>
                      </div>
                    </div>
                  </div>
                )}

                {/* 邮箱 */}
                {companyInfo.email && companyInfo.email !== '[待填]' && (
                  <div>
                    <div className="mb-1 flex items-center space-x-3">
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
                      <div>
                        <p className="font-medium text-gray-700">{t.info.email}:</p>
                        <a
                          href={`mailto:${companyInfo.email}`}
                          className="text-gray-600 hover:text-gold"
                        >
                          {companyInfo.email}
                        </a>
                      </div>
                    </div>
                  </div>
                )}

                {/* WhatsApp */}
                {companyInfo.whatsapp && companyInfo.whatsapp !== '[待填]' && (
                  <div>
                    <div className="mb-1 flex items-center space-x-3">
                      <svg
                        className="h-5 w-5 text-gold"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                      </svg>
                      <div>
                        <p className="font-medium text-gray-700">{t.info.whatsapp}:</p>
                        <a
                          href={whatsappLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-600 hover:text-gold"
                        >
                          {companyInfo.whatsapp}
                        </a>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* 联系说明 */}
              <div className="mt-8 border-t border-gray-200 pt-6">
                <h3 className="mb-3 font-semibold text-gray-900">{t.note.title}</h3>
                <ul className="space-y-2 text-sm text-gray-600">
                  {t.note.items.map((item, index) => (
                    <li key={index} className="flex items-start space-x-2">
                      <span className="mt-1 text-gold">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="mt-4 text-sm text-gray-600">{t.note.footer}</p>
              </div>
            </Card>

            {/* Google Map 占位 */}
            <div className="mt-8">
              <div className="aspect-video w-full overflow-hidden rounded-lg bg-gray-200">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3691.9458!2d114.1706!3d22.3193!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjLCsDE5JzA5LjUiTiAxMTTCsDEwJzE0LjIiRQ!5e0!3m2!1sen!2shk!4v1234567890123!5m2!1sen!2shk"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="h-full w-full"
                ></iframe>
              </div>
            </div>
          </div>

          {/* 联系表单 */}
          <div className="fade-in">
            <Card>
              <h2 className="mb-6 text-2xl font-semibold text-gray-900">
                {t.form.title}
              </h2>
              <ContactForm lang={lang} productSlug={productSlug} />
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}

interface ContactPageProps {
  params: { lang: string }
}

export default function ContactPage({ params }: ContactPageProps) {
  const lang = normalizeLang(params.lang)
  
  return (
    <Suspense fallback={<div className="py-16 text-center">Loading...</div>}>
      <ContactPageContent lang={lang} />
    </Suspense>
  )
}

