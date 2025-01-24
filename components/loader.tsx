"use client"

import { Loader2 } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card"
import { useRouter } from "next/navigation"
import { useState } from "react"

export function Loader() {
  const router = useRouter()
  const [isAccepted, setIsAccepted] = useState(false)
  const [error, setError] = useState<string | null>(null)
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 text-center w-full pt-64">
    <Card className="w-full max-w-md">
      <CardHeader>
        <CardTitle>{isAccepted ? "تم قبول الدفع" : error ? "حدث خطأ" : "يرجى الانتظار"}</CardTitle>
        <CardDescription>
          {isAccepted ? "سيتم توجيهك إلى صفحة التحقق من OTP" : error ? error : "نحن نتحقق من حالة الدفع الخاصة بك"}
        </CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col items-center space-y-4">
        {!isAccepted && !error && <img src="/load2.gif" className="h-16 w-16 animate-spin text-primary" />}
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

