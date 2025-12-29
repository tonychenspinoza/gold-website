'use client'

import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Lang } from '@/types'
import { getAlternatePath, languageNames } from '@/lib/i18n'

export const LanguageSwitcher: React.FC = () => {
  const pathname = usePathname()
  const currentLang = pathname.startsWith('/en') ? 'en' : 'zh-HK'
  const alternateLang: Lang = currentLang === 'en' ? 'zh-HK' : 'en'
  const alternatePath = getAlternatePath(pathname, alternateLang)

  return (
    <Link
      href={alternatePath}
      className="rounded-lg px-3 py-2 text-sm font-medium text-gray-700 transition-colors duration-200 hover:bg-gray-100 hover:text-gold"
      aria-label={`切换到 ${languageNames[alternateLang]}`}
    >
      {languageNames[alternateLang]}
    </Link>
  )
}

