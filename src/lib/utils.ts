/**
 * 通用工具函数
 */

/**
 * 格式化电话号码（用于WhatsApp链接）
 */
export function formatWhatsAppNumber(phone: string): string {
  // 移除所有非数字字符
  const cleaned = phone.replace(/\D/g, '')
  return cleaned
}

/**
 * 生成WhatsApp链接
 */
export function getWhatsAppLink(phone: string, message?: string): string {
  const cleaned = formatWhatsAppNumber(phone)
  const text = message ? encodeURIComponent(message) : ''
  return `https://wa.me/${cleaned}${text ? `?text=${text}` : ''}`
}

/**
 * 格式化产品slug用于URL
 */
export function formatSlug(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .trim()
}

/**
 * 延迟函数（用于模拟异步操作）
 */
export function delay(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

