import Image from "next/image"
import { Button } from "@/components/ui/button"
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
}: any) {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md">
      <CountdownTimer {...countdown} />
      <div className="p-2">
        <div className="aspect-[1/1] relative p-2">
          <img src={image || "/placeholder.svg"} alt={title}  className="object-contain" />
        </div>
        <div className="space-y-2 " >
          <div className="text-gray-500 text-xsm">{category}</div>
          <h3 className="font-xsm line-clamp-2 ">{title}</h3>
          <div className="flex items-center gap-2">
           <div className="flex flex-col">
           <span className="text-blue-600 ">د.ك {salePrice.toFixed(2)}</span>
            <span className="text-gray-400 line-through text-xsm">د.ك {originalPrice.toFixed(2)}</span>
           </div>
            {soldOut ? (
            <div className="w-full  px-4 text-center bg-gray-100 text-gray-500 rounded-md">بيعت كل القطع</div>
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
    </div>
  )
}

