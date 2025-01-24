import { Card } from "@/components/ui/card"
import { CartContent } from "./cart-content"

export default function CartPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        <Card className="p-6">
          <h1 className="text-2xl font-bold mb-6">سلة التسوق</h1>
          <CartContent />
        </Card>
      </div>
    </div>
  )
}

