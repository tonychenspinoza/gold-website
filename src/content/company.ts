import { CompanyInfo, Milestone, Certificate, Lang } from '@/types'

export const companyInfo: CompanyInfo = {
  name: 'SING CHEN TRADE LIMITED',
  address: {
    'zh-HK': '香港九龍旺角亞皆老街98號富陶大廈2樓1D室',
    en: 'Room 1D, 2/F, Fu Tao Building, 98 Argyle Street, Mongkok, Kowloon, Hong Kong',
  },
  phone: '[待填]',
  email: '[待填]',
  whatsapp: '[待填]',
}

export const milestones: Milestone[] = [
  {
    year: 2020,
    title: {
      'zh-HK': '公司成立',
      en: 'Company Founded',
    },
    description: {
      'zh-HK': 'SING CHEN TRADE LIMITED 正式在香港註冊成立',
      en: 'SING CHEN TRADE LIMITED officially registered in Hong Kong',
    },
  },
  {
    year: 2021,
    title: {
      'zh-HK': '業務拓展',
      en: 'Business Expansion',
    },
    description: {
      'zh-HK': '開始提供22K黃金首飾定制服務，拓展中東市場',
      en: 'Started providing 22K gold jewelry customization services, expanding into Middle East markets',
    },
  },
  {
    year: 2022,
    title: {
      'zh-HK': '品質認證',
      en: 'Quality Certification',
    },
    description: {
      'zh-HK': '建立第三方檢測合作（DCL標準），完善產品認證體系',
      en: 'Established third-party inspection partnerships (DCL standards), improved product certification system',
    },
  },
  {
    year: 2023,
    title: {
      'zh-HK': '跨境合作',
      en: 'Cross-border Cooperation',
    },
    description: {
      'zh-HK': '加強海關合規能力，服務更多跨境貿易客戶',
      en: 'Enhanced customs compliance capabilities, serving more cross-border trade clients',
    },
  },
  {
    year: 2024,
    title: {
      'zh-HK': '持續發展',
      en: 'Ongoing Development',
    },
    description: {
      'zh-HK': '持續優化服務，專注長期合作與信任建立',
      en: 'Continuously optimizing services, focusing on long-term partnerships and trust building',
    },
  },
]

export const certificates: Certificate[] = [
  {
    id: 'br-cert',
    name: {
      'zh-HK': '香港商業登記證',
      en: 'Hong Kong Business Registration Certificate',
    },
    description: {
      'zh-HK': '根據香港《商業登記條例》正式註冊',
      en: 'Officially registered under the Hong Kong Business Registration Ordinance',
    },
    image: 'https://i.postimg.cc/c4qwNTcj/c57cfda3-bde1-4dcc-a83d-37720f93b0ca.jpg',
  },
  {
    id: 'dcl-support',
    name: {
      'zh-HK': 'DCL 檢測支持',
      en: 'DCL Inspection Support',
    },
    description: {
      'zh-HK': '支援第三方黃金檢測，可提供 DCL 標準檢測報告',
      en: 'Support for third-party gold inspection, can provide DCL standard inspection reports',
    },
    image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=600&h=400&fit=crop&q=80',
  },
  {
    id: 'customs-trust',
    name: {
      'zh-HK': '海關合規與信譽',
      en: 'Customs Compliance & Trust',
    },
    description: {
      'zh-HK': '注重海關合規，文件齊備，交易透明',
      en: 'Strong focus on customs compliance, complete documentation, transparent transactions',
    },
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&h=400&fit=crop&q=80',
  },
]

// 合作伙伴占位数据
export const partners = [
  {
    id: 'partner-1',
    name: 'Partner 1',
    logo: '', // TODO: 替换为实际合作伙伴Logo URL
  },
  {
    id: 'partner-2',
    name: 'Partner 2',
    logo: '', // TODO: 替换为实际合作伙伴Logo URL
  },
  {
    id: 'partner-3',
    name: 'Partner 3',
    logo: '', // TODO: 替换为实际合作伙伴Logo URL
  },
  {
    id: 'partner-4',
    name: 'Partner 4',
    logo: '', // TODO: 替换为实际合作伙伴Logo URL
  },
]

