import { OTPForm } from "./otp-form"

export default function OTPPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4 max-w-md">
        <div className="space-y-6">
          <div className="text-center">
            <h1 className="text-2xl font-bold">رمز التحقق</h1>
            <p className="text-gray-500 mt-2">الرجاء إدخال رمز التحقق المرسل إلى هاتفك</p>
          </div>
          <OTPForm />
        </div>
      </div>
    </div>
  )
}

