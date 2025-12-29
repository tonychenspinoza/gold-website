import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Product, Lang } from '@/types'
import { Card } from './Card'

interface ProductCardProps {
  product: Product
  lang: Lang
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, lang }) => {
  return (
    <Link href={`/${lang}/products/${product.slug}`}>
      <Card hover className="h-full">
        <div className="flex flex-col">
          {/* 产品图片 */}
          <div className="relative mb-4 aspect-square w-full overflow-hidden rounded-lg bg-gray-100">
            <Image
              src={product.images[0] || 'https://images.pexels.com/photos/248077/pexels-photo-248077.jpeg?cs=srgb&dl=pexels-pixabay-248077.jpg&fm=jpg'}
              alt={product.name[lang]}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>

          {/* 产品信息 */}
          <div className="flex flex-1 flex-col">
            <h3 className="mb-2 text-lg font-semibold text-gray-900">
              {product.name[lang]}
            </h3>
            <p className="mb-4 flex-1 text-sm text-gray-600 line-clamp-2">
              {product.description[lang]}
            </p>

            {/* 规格信息 */}
            <div className="space-y-1 border-t border-gray-200 pt-4 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-600">純度 / Purity:</span>
                <span className="font-medium text-gray-900">{product.purity}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">重量 / Weight:</span>
                <span className="font-medium text-gray-900">{product.weight}</span>
              </div>
            </div>
          </div>
        </div>
      </Card>
    </Link>
  )
}

