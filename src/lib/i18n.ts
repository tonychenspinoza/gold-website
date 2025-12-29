import { Lang } from '@/types'

export const supportedLanguages: Lang[] = ['zh-HK', 'en']

export const defaultLanguage: Lang = 'zh-HK'

export const languageNames: Record<Lang, string> = {
  'zh-HK': '繁體中文',
  en: 'English',
}

/**
 * 获取语言的URL前缀
 */
export function getLanguagePath(lang: Lang): string {
  return lang === defaultLanguage ? '/zh' : '/en'
}

/**
 * 从路径中提取语言代码
 */
export function getLangFromPath(pathname: string): Lang {
  if (pathname.startsWith('/en')) {
    return 'en'
  }
  return 'zh-HK'
}

/**
 * 获取当前路径的其他语言版本
 */
export function getAlternatePath(currentPath: string, targetLang: Lang): string {
  const pathWithoutLang = currentPath.replace(/^\/(zh|en)/, '') || '/'
  const targetPath = targetLang === defaultLanguage ? '/zh' : '/en'
  return `${targetPath}${pathWithoutLang}`
}

/**
 * 生成hreflang链接数组（用于SEO）
 */
export function generateHreflangs(pathname: string): Array<{ lang: string; href: string }> {
  const currentLang = getLangFromPath(pathname)
  const pathWithoutLang = pathname.replace(/^\/(zh|en)/, '') || '/'
  
  return supportedLanguages.map((lang) => ({
    lang: lang === 'zh-HK' ? 'zh-HK' : 'en',
    href: `${lang === defaultLanguage ? '/zh' : '/en'}${pathWithoutLang}`,
  }))
}

