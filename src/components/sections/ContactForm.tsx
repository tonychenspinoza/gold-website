'use client'

import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { Lang } from '@/types'
import { translations } from '@/content/translations'
import { products } from '@/content/products'
import { Button } from '@/components/ui/Button'

interface ContactFormProps {
  lang: Lang
  productSlug?: string
}

interface FormData {
  name: string
  email: string
  phone: string
  product?: string
  message: string
}

export const ContactForm: React.FC<ContactFormProps> = ({ lang, productSlug }) => {
  const t = translations[lang].contact.form
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    defaultValues: {
      product: productSlug || '',
    },
  })

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      // TODO: 这里后续可以接入 EmailJS 或 API Route
      // 现在只是模拟提交
      await new Promise((resolve) => setTimeout(resolve, 1000))

      console.log('Form data:', data)
      setSubmitStatus('success')
      reset()
    } catch (error) {
      console.error('Form submission error:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  // 获取产品列表用于下拉选择
  const productOptions = products.map((p) => ({
    value: p.slug,
    label: p.name[lang],
  }))

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      {/* 姓名 */}
      <div>
        <label htmlFor="name" className="mb-2 block text-sm font-medium text-gray-700">
          {t.name} <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          id="name"
          {...register('name', { required: t.required })}
          className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2"
        />
        {errors.name && (
          <p className="mt-1 text-sm text-red-500">{errors.name.message}</p>
        )}
      </div>

      {/* 邮箱 */}
      <div>
        <label htmlFor="email" className="mb-2 block text-sm font-medium text-gray-700">
          {t.email} <span className="text-red-500">*</span>
        </label>
        <input
          type="email"
          id="email"
          {...register('email', {
            required: t.required,
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: t.invalidEmail,
            },
          })}
          className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2"
        />
        {errors.email && (
          <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>
        )}
      </div>

      {/* 电话 */}
      <div>
        <label htmlFor="phone" className="mb-2 block text-sm font-medium text-gray-700">
          {t.phone} <span className="text-red-500">*</span>
        </label>
        <input
          type="tel"
          id="phone"
          {...register('phone', { required: t.required })}
          className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2"
        />
        {errors.phone && (
          <p className="mt-1 text-sm text-red-500">{errors.phone.message}</p>
        )}
      </div>

      {/* 产品选择（可选） */}
      <div>
        <label htmlFor="product" className="mb-2 block text-sm font-medium text-gray-700">
          {t.product}
        </label>
        <select
          id="product"
          {...register('product')}
          className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2"
        >
          <option value="">-- {lang === 'zh-HK' ? '請選擇' : 'Please select'} --</option>
          {productOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>

      {/* 消息 */}
      <div>
        <label htmlFor="message" className="mb-2 block text-sm font-medium text-gray-700">
          {t.message} <span className="text-red-500">*</span>
        </label>
        <textarea
          id="message"
          rows={5}
          {...register('message', { required: t.required })}
          className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2"
        />
        {errors.message && (
          <p className="mt-1 text-sm text-red-500">{errors.message.message}</p>
        )}
      </div>

      {/* 提交状态提示 */}
      {submitStatus === 'success' && (
        <div className="rounded-lg bg-green-50 p-4 text-green-800">
          {t.success}
        </div>
      )}
      {submitStatus === 'error' && (
        <div className="rounded-lg bg-red-50 p-4 text-red-800">
          {t.error}
        </div>
      )}

      {/* 提交按钮 */}
      <Button
        type="submit"
        variant="gold"
        disabled={isSubmitting}
        className="w-full md:w-auto"
      >
        {isSubmitting ? t.submitting : t.submit}
      </Button>
    </form>
  )
}

