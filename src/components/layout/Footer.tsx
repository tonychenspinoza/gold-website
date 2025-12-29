import React from 'react'
import Link from 'next/link'
import { Lang } from '@/types'
import { translations } from '@/content/translations'
import { companyInfo } from '@/content/company'

interface FooterProps {
  lang: Lang
}

export const Footer: React.FC<FooterProps> = ({ lang }) => {
  const t = translations[lang].footer
  const nav = translations[lang].nav

  const navItems = [
    { href: `/${lang}`, label: nav.home },
    { href: `/${lang}/products`, label: nav.products },
    { href: `/${lang}/about`, label: nav.about },
    { href: `/${lang}/contact`, label: nav.contact },
  ]

  return (
    <footer className="border-t border-gray-200 bg-gray-50">
      <div className="container-custom py-12 md:py-16">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3 lg:grid-cols-4">
          {/* 公司信息 */}
          <div className="md:col-span-2">
            <h3 className="mb-4 text-lg font-bold text-gray-900">
              SING CHEN TRADE LIMITED
            </h3>
            <p className="mb-4 text-sm text-gray-600">{t.description}</p>
            <div className="space-y-2 text-sm text-gray-600">
              <p>{companyInfo.address[lang]}</p>
            </div>
          </div>

          {/* 快速链接 */}
          <div>
            <h4 className="mb-4 text-sm font-semibold text-gray-900">
              {t.quickLinks}
            </h4>
            <ul className="space-y-2">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-gray-600 transition-colors duration-200 hover:text-gold"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* 关注我们（占位） */}
          <div>
            <h4 className="mb-4 text-sm font-semibold text-gray-900">
              {t.followUs}
            </h4>
            <div className="flex space-x-4">
              {/* 社交链接占位 */}
              <a
                href="#"
                className="text-gray-400 transition-colors duration-200 hover:text-gold"
                aria-label="Social media"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* 版权信息 */}
        <div className="mt-8 border-t border-gray-200 pt-8 text-center text-sm text-gray-600">
          <p>{t.copyright}</p>
        </div>
      </div>
    </footer>
  )
}

