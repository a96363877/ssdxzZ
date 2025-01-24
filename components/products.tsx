import Image from "next/image"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { AddToCartButton } from "./add-to-car-button"

interface ProductCardProps {
  id: string
  image: string
  title: string
  salePrice: number
  originalPrice?: number
  isSpecialOffer?: boolean
  category?: string
  discount?: number
}

export function ProductCard({
  id,
  image,
  title,
  salePrice,
  originalPrice,
  isSpecialOffer,
  category = "حلويات",
  discount,
}: ProductCardProps) {
  const hasDiscount = originalPrice !== undefined && originalPrice > salePrice

  return (
    <Card className="rounded-3xl overflow-hidden relative group p-4">
      {hasDiscount && (
        <Badge variant="destructive" className="absolute top-4 left-4 z-10">
          تخفيضات {discount ? `${discount}%` : ""}
        </Badge>
      )}
      <CardContent className="p-2">
        <div className="aspect-[1/1] relative mb-4 group-hover:scale-105 transition-transform duration-300">
          <img
            src={image || "/placeholder.svg"}
            alt={title}
            className="object-contain"
          />
          {isSpecialOffer && (
            <Badge variant="destructive" className="absolute top-2 right-2">
              عرض خاص
            </Badge>
          )}
        </div>
        <div className="space-y-2">
          <p className="text-muted-foreground text-sm">{category}</p>
          <h3 className="text-xsm line-clamp-2">{title}</h3>
        </div>
      </CardContent>
      <CardFooter className="p-1 sm:p-1 pt-0 flex py-8">
        <div className="w-full flex  justify-between absolute bottom-0 left-0 right-0 px-3 py-2" >
        <div>
          <p className="text-sm sm:text-base  text-blue-800">د.ك {salePrice.toFixed(2)}</p>
          {hasDiscount && <p className="text-muted-foreground line-through text-xsm">د.ك {originalPrice.toFixed(2)}</p>}
        </div>
        <AddToCartButton
          product={{
            id,
            title,
            salePrice,
            image,
          }}
          variant="outline"
        />
        </div>
      </CardFooter>
     
    </Card>
  )
}

