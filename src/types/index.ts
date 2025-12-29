// 语言类型
export type Lang = 'zh-HK' | 'en'

// 产品分类
export type ProductCategory = 'bars' | 'jewelry' | 'craft'

// 产品数据
export interface Product {
  id: string
  slug: string
  category: ProductCategory
  name: {
    'zh-HK': string
    en: string
  }
  description: {
    'zh-HK': string
    en: string
  }
  purity: string // 如 "999.9", "22K"
  weight: string // 如 "1 oz", "100g"
  size?: string // 可选尺寸
  craftsmanship?: string // 可选工艺说明
  certificate?: string[] // 证书类型数组
  images: string[] // 图片URL数组
  price?: {
    'zh-HK': string
    en: string
  }
}

// 公司信息
export interface CompanyInfo {
  name: string
  address: {
    'zh-HK': string
    en: string
  }
  phone?: string
  email?: string
  whatsapp?: string
}

// 里程碑
export interface Milestone {
  year: number
  title: {
    'zh-HK': string
    en: string
  }
  description: {
    'zh-HK': string
    en: string
  }
}

// 证书信息
export interface Certificate {
  id: string
  name: {
    'zh-HK': string
    en: string
  }
  description: {
    'zh-HK': string
    en: string
  }
  image: string // 占位图URL
}

