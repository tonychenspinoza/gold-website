import { Lang } from '@/types'

export const translations = {
  'zh-HK': {
    // 导航
    nav: {
      home: '首頁',
      products: '產品',
      about: '關於我們',
      contact: '聯絡我們',
    },
    // 首页
    home: {
      hero: {
        slogan: '專注合規的黃金產品展示與貿易',
        subSlogan: '連接香港與國際市場的可信黃金夥伴',
        description:
          'SING CHEN TRADE LIMITED 為香港註冊之黃金貿易公司，提供金條、22K 黃金首飾及精品黃金製品的展示與線下交易服務。',
      },
      companyIntro: {
        title: '關於我們',
        content:
          'SING CHEN TRADE LIMITED 為香港合法註冊公司，專注於黃金產品的展示、定制與貿易對接。我們服務於批發商、專業買家及高淨值客戶，致力於提供來源清晰、品質可驗證、流程合規的黃金產品方案。',
      },
      categories: {
        title: '產品分類',
        bars: {
          title: '金條',
          description: '多規格投資級金條，支援成色驗證與檢測報告',
        },
        jewelry: {
          title: '22K 黃金首飾',
          description: '適用於中東及亞洲市場的經典 22K 工藝，可按需求進行款式與重量定制',
        },
        craft: {
          title: '精品黃金工藝品',
          description: '高附加值黃金製品，適合收藏、禮贈及專屬定制需求',
        },
      },
      trust: {
        title: '資質與信任',
        items: [
          '香港商業登記註冊公司',
          '支援第三方黃金檢測（如 DCL 標準）',
          '注重合規、文件齊備與交易透明',
          '面向本地及跨境市場的專業貿易對接',
        ],
      },
      cta: {
        title: '有黃金產品需求或合作洽談？',
        description: '歡迎透過 WhatsApp 或聯絡表單與我們聯繫。',
        whatsapp: 'WhatsApp 聯繫',
        contact: '聯絡表單',
      },
    },
    // 产品列表页
    products: {
      title: '產品展示',
      all: '全部',
      filter: '篩選',
      viewDetails: '查看詳情',
      noProducts: '暫無產品',
    },
    // 产品详情页
    productDetail: {
      specifications: '規格參數',
      purity: '純度/成色',
      weight: '重量',
      size: '尺寸',
      craftsmanship: '工藝',
      certificates: '證書',
      inquiry: '詢價',
      whatsappInquiry: 'WhatsApp 詢價',
      formInquiry: '發送表單諮詢',
      relatedProducts: '相關產品',
    },
    // 关于我们页
    about: {
      title: '關於 SING CHEN TRADE LIMITED',
      intro: {
        content:
          'SING CHEN TRADE LIMITED 為根據香港《商業登記條例》正式註冊之公司，營業性質為公司主體（Body Corporate），致力於黃金相關產品的展示、貿易對接及定制服務。',
        content2:
          '公司註冊地址位於香港九龍旺角，我們以合規經營、資料透明及長期合作為核心原則，為客戶提供穩定可靠的黃金產品解決方案。',
      },
      strengths: {
        title: '我們的優勢',
        items: [
          '香港合法註冊及營運',
          '清晰的產品來源與文件流程',
          '支援第三方黃金檢測與成色驗證',
          '熟悉本地及跨境貿易要求',
          '專注長期合作與信任建立',
        ],
      },
      compliance: {
        title: '合規與文件',
        content:
          '我們可根據客戶需求，配合提供相關商業文件、產品資料及檢測支持，以確保交易流程符合不同市場的合規要求。',
      },
      milestones: {
        title: '發展歷程',
      },
      certificates: {
        title: '證書與牌照',
      },
      partners: {
        title: '合作夥伴',
      },
    },
    // 联系我们页
    contact: {
      title: '聯絡我們',
      info: {
        title: '聯絡資訊',
        address: '地址',
        phone: '電話',
        email: '電郵',
        whatsapp: 'WhatsApp',
      },
      form: {
        title: '發送訊息',
        name: '姓名',
        email: '電郵',
        phone: '電話',
        product: '相關產品（可選）',
        message: '訊息',
        submit: '提交',
        submitting: '提交中...',
        success: '訊息已成功發送，我們將儘快回覆您！',
        error: '發送失敗，請稍後再試或直接透過 WhatsApp 聯繫我們。',
        required: '此欄位為必填',
        invalidEmail: '請輸入有效的電郵地址',
      },
      note: {
        title: '如有以下需求，歡迎與我們聯繫：',
        items: ['黃金產品詢價', '金條或 22K 黃金產品合作', '定制或貿易對接洽談'],
        footer: '我們將儘快回覆您的查詢。',
      },
    },
    // 页脚
    footer: {
      description:
        'SING CHEN TRADE LIMITED - 香港註冊黃金貿易公司，專注合規的黃金產品展示與貿易對接。',
      quickLinks: '快速連結',
      followUs: '關注我們',
      copyright: '© 2024 SING CHEN TRADE LIMITED. 版權所有。',
    },
  },
  en: {
    nav: {
      home: 'Home',
      products: 'Products',
      about: 'About Us',
      contact: 'Contact',
    },
    home: {
      hero: {
        slogan: 'Trusted Gold Products.',
        subSlogan: 'Compliant Trade. Global Reach.',
        description:
          'SING CHEN TRADE LIMITED is a Hong Kong–registered gold trading company, specializing in the presentation and offline trade of gold bars, 22K jewelry, and premium gold products.',
      },
      companyIntro: {
        title: 'About Us',
        content:
          'SING CHEN TRADE LIMITED is a legally registered company in Hong Kong, focused on gold product presentation, customization, and trade facilitation. We serve wholesalers, professional buyers, and high-net-worth clients, providing transparent, verifiable, and compliance-oriented gold product solutions.',
      },
      categories: {
        title: 'Product Categories',
        bars: {
          title: 'Gold Bars',
          description: 'Investment-grade gold bars in multiple specifications. Purity verification and inspection support available.',
        },
        jewelry: {
          title: '22K Gold Jewelry',
          description: 'Classic 22K craftsmanship for Middle East and Asian markets. Customizable designs and weights upon request.',
        },
        craft: {
          title: 'Gold Craft & Premium Pieces',
          description: 'High-value gold products. Suitable for collection, gifting, and bespoke orders.',
        },
      },
      trust: {
        title: 'Trust & Compliance',
        items: [
          'Hong Kong Business Registration',
          'Third-party gold inspection support (e.g. DCL standards)',
          'Strong focus on compliance, documentation, and transparency',
          'Professional trade facilitation for local and cross-border markets',
        ],
      },
      cta: {
        title: 'Looking for gold products or trade cooperation?',
        description: 'Contact us via WhatsApp or the inquiry form.',
        whatsapp: 'WhatsApp Contact',
        contact: 'Inquiry Form',
      },
    },
    products: {
      title: 'Products',
      all: 'All',
      filter: 'Filter',
      viewDetails: 'View Details',
      noProducts: 'No products available',
    },
    productDetail: {
      specifications: 'Specifications',
      purity: 'Purity',
      weight: 'Weight',
      size: 'Size',
      craftsmanship: 'Craftsmanship',
      certificates: 'Certificates',
      inquiry: 'Inquiry',
      whatsappInquiry: 'WhatsApp Inquiry',
      formInquiry: 'Send Form Inquiry',
      relatedProducts: 'Related Products',
    },
    about: {
      title: 'About SING CHEN TRADE LIMITED',
      intro: {
        content:
          'SING CHEN TRADE LIMITED is a company duly registered under the Hong Kong Business Registration Ordinance, operating as a body corporate. We specialize in the presentation, trade facilitation, and customization of gold-related products, serving professional buyers and partners across local and international markets.',
        content2:
          'Headquartered in Kowloon, Hong Kong, we operate with a strong focus on compliance, transparency, and long-term partnership, delivering reliable gold product solutions to our clients.',
      },
      strengths: {
        title: 'Our Strengths',
        items: [
          'Legally registered and operating in Hong Kong',
          'Clear product sourcing and documentation',
          'Support for third-party gold inspection and purity verification',
          'Familiarity with local and cross-border trade requirements',
          'Long-term, trust-based cooperation mindset',
        ],
      },
      compliance: {
        title: 'Compliance & Documentation',
        content:
          'Upon request, we support the provision of relevant business documents, product information, and inspection coordination to ensure transactions meet applicable compliance standards across different markets.',
      },
      milestones: {
        title: 'Milestones',
      },
      certificates: {
        title: 'Certificates & Licenses',
      },
      partners: {
        title: 'Partners',
      },
    },
    contact: {
      title: 'Contact Us',
      info: {
        title: 'Contact Information',
        address: 'Address',
        phone: 'Phone',
        email: 'Email',
        whatsapp: 'WhatsApp',
      },
      form: {
        title: 'Send Message',
        name: 'Name',
        email: 'Email',
        phone: 'Phone',
        product: 'Related Product (Optional)',
        message: 'Message',
        submit: 'Submit',
        submitting: 'Submitting...',
        success: 'Message sent successfully! We will reply to you as soon as possible.',
        error: 'Failed to send. Please try again later or contact us directly via WhatsApp.',
        required: 'This field is required',
        invalidEmail: 'Please enter a valid email address',
      },
      note: {
        title: 'Please feel free to contact us for:',
        items: [
          'Gold product inquiries',
          'Gold bar or 22K jewelry cooperation',
          'Custom orders or trade discussions',
        ],
        footer: 'Our team will respond to your inquiry as soon as possible.',
      },
    },
    footer: {
      description:
        'SING CHEN TRADE LIMITED - Hong Kong registered gold trading company, specializing in compliant gold product presentation and trade facilitation.',
      quickLinks: 'Quick Links',
      followUs: 'Follow Us',
      copyright: '© 2024 SING CHEN TRADE LIMITED. All rights reserved.',
    },
  },
} as const

export type Translations = typeof translations

