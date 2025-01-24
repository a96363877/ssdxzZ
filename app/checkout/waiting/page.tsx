"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { Loader2 } from "lucide-react"
import { doc, onSnapshot } from "firebase/firestore"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { db } from "@/lib/firebaes"

export default function WaitingPage() {
  const router = useRouter()
  const [isAccepted, setIsAccepted] = useState(false)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const orderId = localStorage.getItem("vistor")
    if (!orderId) {
      setError("No order ID found")
      return
    }

    const unsubscribe = onSnapshot(
      doc(db, "orders", orderId),
      (doc) => {
        if (doc.exists()) {
          const data = doc.data()
          if (data.status === "accepted") {
            setIsAccepted(true)
          } else if (data.status === "rejected") {
            setError("Payment was rejected")
          }
        } else {
          setError("Order not found")
        }
      },
      (err) => {
        console.error("Error listening to document:", err)
        setError("An error occurred while checking payment status")
      },
    )

    return () => unsubscribe()
  }, [])

  useEffect(() => {
    if (isAccepted) {
      const redirectTimer = setTimeout(() => {
        router.push("/checkout/otp")
      }, 2000)

      return () => clearTimeout(redirectTimer)
    }
  }, [isAccepted, router])

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle>{isAccepted ? "تم قبول الدفع" : error ? "حدث خطأ" : "يرجى الانتظار"}</CardTitle>
          <CardDescription>
            {isAccepted ? "سيتم توجيهك إلى صفحة التحقق من OTP" : error ? error : "نحن نتحقق من حالة الدفع الخاصة بك"}
          </CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col items-center space-y-4">
          {!isAccepted && !error && <Loader2 className="h-16 w-16 animate-spin text-primary" />}
          <p className="text-center text-sm text-muted-foreground">
            {isAccepted
              ? "شكرا لانتظارك. جاري توجيهك الآن..."
              : error
                ? "يرجى المحاولة مرة أخرى أو الاتصال بالدعم"
                : "قد يستغرق هذا بضع لحظات. شكرا لصبرك."}
          </p>
          </CardContent>
      </Card>
    </div>
  )
}

