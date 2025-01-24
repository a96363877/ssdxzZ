import Image from "next/image"
import { CountdownTimer } from "./count-down"
import { AddToCartButton } from "./add-to-car-button"

interface SpecialOfferCardProps {
  id: string
  image: string
  category: string
  title: string
  originalPrice: number
  salePrice: number
  countdown: {
    days: number
    hours: number
    minutes: number
    seconds: number
  }
  soldOut?: boolean
}

export function SpecialOfferCard({
  id,
  image,
  category,
  title,
  originalPrice,
  salePrice,
  countdown,
  soldOut = false,
}: SpecialOfferCardProps) {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md">
      <CountdownTimer {...countdown} />
      <div className="p-4">
        <div className="aspect-square relative mb-4">
          <Image src={image || "/placeholder.svg"} alt={title} fill className="object-contain" />
        </div>
        <div className="space-y-2">
          <div className="text-gray-500 text-sm">{category}</div>
          <h3 className="font-medium line-clamp-2 min-h-[48px]">{title}</h3>
          <div className="flex items-center gap-2">
            <span className="text-blue-600 font-bold">د.ك {salePrice.toFixed(3)}</span>
            <span className="text-gray-400 line-through text-sm">د.ك {originalPrice.toFixed(3)}</span>
          </div>
          {soldOut ? (
            <div className="w-full py-2 px-4 text-center bg-gray-100 text-gray-500 rounded-md">بيعت كل القطع</div>
          ) : (
            <AddToCartButton
              product={{
                id,
                title,
                salePrice,
                image,
              }}
            />
          )}
        </div>
      </div>
    </div>
  )
}

