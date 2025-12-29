import { Product } from '@/types'

export const products: Product[] = [
  // 金条类产品
  {
    id: 'bar-001',
    slug: '1oz-gold-bar-9999',
    category: 'bars',
    name: {
      'zh-HK': '1 盎司投資金條 (999.9)',
      en: '1 oz Investment Gold Bar (999.9)',
    },
    description: {
      'zh-HK': '標準投資級金條，成色 999.9，適合投資收藏。',
      en: 'Standard investment-grade gold bar with 999.9 purity, suitable for investment and collection.',
    },
    purity: '999.9',
    weight: '1 oz',
    size: '約 50mm × 25mm × 2mm',
    craftsmanship: '標準鑄造',
    certificate: ['DCL檢測', '成色證書'],
    images: [
      'https://images.pexels.com/photos/248077/pexels-photo-248077.jpeg?cs=srgb&dl=pexels-pixabay-248077.jpg&fm=jpg',
      'https://images.pexels.com/photos/29816650/pexels-photo-29816650.jpeg?cs=srgb&dl=pexels-eugenia-sol-1769194548-29816650.jpg&fm=jpg',
      'https://images.pexels.com/photos/1670723/pexels-photo-1670723.jpeg?cs=srgb&dl=pexels-git-stephen-gitau-302905-1670723.jpg&fm=jpg',
    ],
  },
  {
    id: 'bar-002',
    slug: '100g-gold-bar-9999',
    category: 'bars',
    name: {
      'zh-HK': '100 克投資金條 (999.9)',
      en: '100g Investment Gold Bar (999.9)',
    },
    description: {
      'zh-HK': '100 克規格投資金條，成色 999.9，適合機構投資。',
      en: '100g investment gold bar with 999.9 purity, suitable for institutional investment.',
    },
    purity: '999.9',
    weight: '100g',
    size: '約 55mm × 32mm × 3mm',
    craftsmanship: '精密鑄造',
    certificate: ['DCL檢測', '成色證書', '來源證明'],
    images: [
      'https://images.pexels.com/photos/1670723/pexels-photo-1670723.jpeg?cs=srgb&dl=pexels-git-stephen-gitau-302905-1670723.jpg&fm=jpg',
      'https://images.pexels.com/photos/29816650/pexels-photo-29816650.jpeg?cs=srgb&dl=pexels-eugenia-sol-1769194548-29816650.jpg&fm=jpg',
    ],
  },
  {
    id: 'bar-003',
    slug: '500g-gold-bar-9999',
    category: 'bars',
    name: {
      'zh-HK': '500 克投資金條 (999.9)',
      en: '500g Investment Gold Bar (999.9)',
    },
    description: {
      'zh-HK': '大規格投資金條，成色 999.9，適合高淨值客戶。',
      en: 'Large-size investment gold bar with 999.9 purity, suitable for high-net-worth clients.',
    },
    purity: '999.9',
    weight: '500g',
    size: '約 85mm × 45mm × 8mm',
    craftsmanship: '精密鑄造，激光標記',
    certificate: ['DCL檢測', '成色證書', '來源證明', '海關合規'],
    images: [
      'https://images.pexels.com/photos/3488259/pexels-photo-3488259.jpeg?cs=srgb&dl=pexels-marcio-norris-1880733-3488259.jpg&fm=jpg',
      'https://images.pexels.com/photos/29816650/pexels-photo-29816650.jpeg?cs=srgb&dl=pexels-eugenia-sol-1769194548-29816650.jpg&fm=jpg',
    ],
  },
  {
    id: 'bar-004',
    slug: '1kg-gold-bar-9999',
    category: 'bars',
    name: {
      'zh-HK': '1 公斤投資金條 (999.9)',
      en: '1kg Investment Gold Bar (999.9)',
    },
    description: {
      'zh-HK': '超大規格投資金條，成色 999.9，適合機構及批發客戶。',
      en: 'Extra-large investment gold bar with 999.9 purity, suitable for institutions and wholesale clients.',
    },
    purity: '999.9',
    weight: '1kg',
    size: '約 117mm × 52mm × 10mm',
    craftsmanship: '精密鑄造，激光標記，防偽標識',
    certificate: ['DCL檢測', '成色證書', '來源證明', '海關合規', '保險證明'],
    images: [
      'https://images.pexels.com/photos/15950900/pexels-photo-15950900.jpeg?cs=srgb&dl=pexels-c-iso-329101566-15950900.jpg&fm=jpg',
      'https://images.pexels.com/photos/29816650/pexels-photo-29816650.jpeg?cs=srgb&dl=pexels-eugenia-sol-1769194548-29816650.jpg&fm=jpg',
    ],
  },
  // 22K首饰类产品
  {
    id: 'jewelry-001',
    slug: '22k-gold-bracelet-classic',
    category: 'jewelry',
    name: {
      'zh-HK': '22K 經典黃金手鐲',
      en: '22K Classic Gold Bracelet',
    },
    description: {
      'zh-HK': '經典款 22K 黃金手鐲，適合中東及亞洲市場，可定制重量。',
      en: 'Classic 22K gold bracelet, suitable for Middle East and Asian markets, customizable weight.',
    },
    purity: '22K (916)',
    weight: '20g - 50g（可定制）',
    craftsmanship: '傳統22K工藝，手工打磨',
    certificate: ['22K成色證書', 'DCL檢測'],
    images: [
      'https://images.pexels.com/photos/30721007/pexels-photo-30721007.jpeg?cs=srgb&dl=pexels-ayseguldelice-30721007.jpg&fm=jpg',
      'https://images.pexels.com/photos/18285682/pexels-photo-18285682.jpeg?cs=srgb&dl=pexels-arif-18285682.jpg&fm=jpg',
      'https://images.pexels.com/photos/26592834/pexels-photo-26592834.jpeg?cs=srgb&dl=pexels-kristina-rivera-1424395320-26592834.jpg&fm=jpg',
      'https://images.pexels.com/photos/29693658/pexels-photo-29693658.jpeg?cs=srgb&dl=pexels-vurzie-kim-325095862-29693658.jpg&fm=jpg',
    ],
  },
  {
    id: 'jewelry-002',
    slug: '22k-gold-necklace-traditional',
    category: 'jewelry',
    name: {
      'zh-HK': '22K 傳統黃金項鏈',
      en: '22K Traditional Gold Necklace',
    },
    description: {
      'zh-HK': '傳統設計 22K 黃金項鏈，適合中東市場需求。',
      en: 'Traditional design 22K gold necklace, suitable for Middle East market requirements.',
    },
    purity: '22K (916)',
    weight: '30g - 100g（可定制）',
    craftsmanship: '傳統22K工藝，精美花紋',
    certificate: ['22K成色證書', 'DCL檢測'],
    images: [
      'https://images.pexels.com/photos/30720992/pexels-photo-30720992.jpeg?cs=srgb&dl=pexels-ayseguldelice-30720992.jpg&fm=jpg',
      'https://images.pexels.com/photos/33740462/pexels-photo-33740462.jpeg?cs=srgb&dl=pexels-zulfugarkarimov-33740462.jpg&fm=jpg',
      'https://images.pexels.com/photos/16935588/pexels-photo-16935588.jpeg?cs=srgb&dl=pexels-lorena-villarreal-546639145-16935588.jpg&fm=jpg',
      'https://images.pexels.com/photos/12753204/pexels-photo-12753204.jpeg?cs=srgb&dl=pexels-harper-sunday-12753204.jpg&fm=jpg',
    ],
  },
  {
    id: 'jewelry-003',
    slug: '22k-gold-earrings-set',
    category: 'jewelry',
    name: {
      'zh-HK': '22K 黃金耳環套裝',
      en: '22K Gold Earrings Set',
    },
    description: {
      'zh-HK': '22K 黃金耳環套裝，精美工藝，適合禮贈。',
      en: '22K gold earrings set with exquisite craftsmanship, suitable for gifting.',
    },
    purity: '22K (916)',
    weight: '5g - 15g（可定制）',
    craftsmanship: '精細22K工藝，多款設計',
    certificate: ['22K成色證書', 'DCL檢測'],
    images: [
      'https://images.pexels.com/photos/12194345/pexels-photo-12194345.jpeg?cs=srgb&dl=pexels-mlkbnl-12194345.jpg&fm=jpg',
      'https://images.pexels.com/photos/29502913/pexels-photo-29502913.jpeg?cs=srgb&dl=pexels-zandatsu-29502913.jpg&fm=jpg',
      'https://images.pexels.com/photos/16055233/pexels-photo-16055233.jpeg?cs=srgb&dl=pexels-alejandro-aznar-155337093-16055233.jpg&fm=jpg',
      'https://images.pexels.com/photos/34628917/pexels-photo-34628917.jpeg?cs=srgb&dl=pexels-fav-img-2155240542-34628917.jpg&fm=jpg',
      'https://images.pexels.com/photos/12145089/pexels-photo-12145089.jpeg?cs=srgb&dl=pexels-duygukamar-12145089.jpg&fm=jpg',
      'https://images.pexels.com/photos/12145309/pexels-photo-12145309.jpeg?cs=srgb&dl=pexels-duygukamar-12145309.jpg&fm=jpg',
    ],
  },
  {
    id: 'jewelry-004',
    slug: '22k-gold-ring-set',
    category: 'jewelry',
    name: {
      'zh-HK': '22K 黃金戒指套裝',
      en: '22K Gold Ring Set',
    },
    description: {
      'zh-HK': '22K 黃金戒指套裝，多種尺寸可選。',
      en: '22K gold ring set with multiple sizes available.',
    },
    purity: '22K (916)',
    weight: '8g - 25g（可定制）',
    craftsmanship: '傳統22K工藝，舒適佩戴',
    certificate: ['22K成色證書', 'DCL檢測'],
    images: [
      'https://images.pexels.com/photos/32266896/pexels-photo-32266896.jpeg?cs=srgb&dl=pexels-arjunadinata-32266896.jpg&fm=jpg',
      'https://images.pexels.com/photos/29816650/pexels-photo-29816650.jpeg?cs=srgb&dl=pexels-eugenia-sol-1769194548-29816650.jpg&fm=jpg',
      'https://images.pexels.com/photos/12194315/pexels-photo-12194315.jpeg',
    ],
  },
  // 精品工艺品类产品
  {
    id: 'craft-001',
    slug: 'gold-dragon-sculpture',
    category: 'craft',
    name: {
      'zh-HK': '999.9 黃金龍形工藝品',
      en: '999.9 Gold Dragon Sculpture',
    },
    description: {
      'zh-HK': '精美999.9黃金龍形工藝品，適合收藏及高端禮贈。',
      en: 'Exquisite 999.9 gold dragon sculpture, suitable for collection and premium gifting.',
    },
    purity: '999.9',
    weight: '50g - 200g（可定制）',
    size: '根據重量定制尺寸',
    craftsmanship: '精密工藝，手工精雕',
    certificate: ['999.9成色證書', 'DCL檢測', '工藝證書'],
    images: [
      'https://images.pexels.com/photos/29502924/pexels-photo-29502924.jpeg?cs=srgb&dl=pexels-zandatsu-29502924.jpg&fm=jpg',
      'https://images.pexels.com/photos/26592834/pexels-photo-26592834.jpeg?cs=srgb&dl=pexels-kristina-rivera-1424395320-26592834.jpg&fm=jpg',
    ],
  },
  {
    id: 'craft-002',
    slug: 'gold-buddha-statue',
    category: 'craft',
    name: {
      'zh-HK': '999.9 黃金佛像工藝品',
      en: '999.9 Gold Buddha Statue',
    },
    description: {
      'zh-HK': '莊嚴999.9黃金佛像工藝品，適合收藏及供奉。',
      en: 'Solemn 999.9 gold Buddha statue, suitable for collection and enshrinement.',
    },
    purity: '999.9',
    weight: '30g - 500g（可定制）',
    size: '根據重量定制尺寸',
    craftsmanship: '傳統工藝，精細雕刻',
    certificate: ['999.9成色證書', 'DCL檢測', '工藝證書'],
    images: [
      'https://images.pexels.com/photos/29502321/pexels-photo-29502321.jpeg?cs=srgb&dl=pexels-zandatsu-29502321.jpg&fm=jpg',
      'https://images.pexels.com/photos/29502913/pexels-photo-29502913.jpeg?cs=srgb&dl=pexels-zandatsu-29502913.jpg&fm=jpg',
    ],
  },
  {
    id: 'craft-003',
    slug: 'gold-coins-commemorative',
    category: 'craft',
    name: {
      'zh-HK': '999.9 紀念金幣套裝',
      en: '999.9 Commemorative Gold Coin Set',
    },
    description: {
      'zh-HK': '精美999.9紀念金幣套裝，限量發行，適合收藏。',
      en: 'Exquisite 999.9 commemorative gold coin set, limited edition, suitable for collection.',
    },
    purity: '999.9',
    weight: '1 oz × 5枚',
    size: '直徑 32mm',
    craftsmanship: '精密鑄造，激光雕刻',
    certificate: ['999.9成色證書', 'DCL檢測', '限量證書'],
    images: [
      'https://images.pexels.com/photos/21928764/pexels-photo-21928764.jpeg?cs=srgb&dl=pexels-kenzero14-21928764.jpg&fm=jpg',
      'https://images.pexels.com/photos/29816650/pexels-photo-29816650.jpeg?cs=srgb&dl=pexels-eugenia-sol-1769194548-29816650.jpg&fm=jpg',
    ],
  },
  {
    id: 'craft-004',
    slug: 'gold-pen-premium',
    category: 'craft',
    name: {
      'zh-HK': '999.9 黃金筆套裝（精品）',
      en: '999.9 Premium Gold Pen Set',
    },
    description: {
      'zh-HK': '高端999.9黃金筆套裝，適合商務禮贈及收藏。',
      en: 'Premium 999.9 gold pen set, suitable for business gifting and collection.',
    },
    purity: '999.9',
    weight: '30g - 80g（可定制）',
    craftsmanship: '精密工藝，鍍金筆身',
    certificate: ['999.9成色證書', 'DCL檢測', '精品證書'],
    images: [
      'https://images.pexels.com/photos/29502314/pexels-photo-29502314.jpeg?cs=srgb&dl=pexels-zandatsu-29502314.jpg&fm=jpg',
      'https://images.pexels.com/photos/16055233/pexels-photo-16055233.jpeg?cs=srgb&dl=pexels-alejandro-aznar-155337093-16055233.jpg&fm=jpg',
    ],
  },
]
