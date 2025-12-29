import { Lang } from '@/types'

/**
 * 将 URL 路径中的语言代码转换为 Lang 类型
 * URL 路径使用 'zh' 和 'en'，但内部使用 'zh-HK' 和 'en'
 */
export function normalizeLang(urlLang: string): Lang {
  if (urlLang === 'zh') {
    return 'zh-HK'
  }
  if (urlLang === 'en') {
    return 'en'
  }
  // 默认返回中文
  return 'zh-HK'
}

