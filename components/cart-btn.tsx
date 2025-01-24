"use client"

import { ShoppingCart } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useCart } from "./cart-provider"

export function CartButton() {
  const { totalItems } = useCart()

  return (
    <Button  variant="secondary" size="default" className="relative rounded-full  bg-gray-800 text-white" asChild>
      <Link href="/cart">
        <ShoppingCart className="h-8 w-8 " />
        {totalItems > 0 && (
          <span className="absolute -top-2 -right-2 bg-blue-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
            {totalItems}
          </span>
        )}
      </Link>
    </Button>
  )
}

