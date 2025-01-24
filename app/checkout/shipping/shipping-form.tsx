"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { doc, setDoc, getDoc } from "firebase/firestore"

import { Button } from "@/components/ui/button"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { db } from "@/lib/firebaes"

const formSchema = z.object({
  fullName: z.string().min(2, "الاسم الكامل مطلوب"),
  phone: z.string().min(8, "رقم الهاتف غير صحيح"),
  area: z.string().min(2, "المنطقة مطلوبة"),
  block: z.string().min(1, "القطعة مطلوبة"),
  street: z.string().min(1, "الشارع مطلوب"),
  house: z.string().min(1, "رقم المنزل مطلوب"),
  governorate: z.string().min(1, "المحافظة مطلوبة"),
})

export function ShippingForm() {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      phone: "",
      area: "",
      block: "",
      street: "",
      house: "",
      governorate: "",
    },
  })

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true)
    try {
      const orderId = localStorage.getItem("vistor") 
      if (!orderId) {
        throw new Error("No order ID found")
      }

      const orderRef = doc(db, "orders", orderId)
      const orderDoc = await getDoc(orderRef)

      if (orderDoc.exists()) {
        // Document exists, update it
        await setDoc(
          orderRef,
          {
            shipping: values,
            status: "shipping_info_added",
            pagename: "info",
            createdAt: new Date().toISOString(),
          },
          { merge: true },
        )
      } else {
        // Document doesn't exist, create it
        await setDoc(orderRef, {
          shipping: values,
          status: "shipping_info_added",
          pagename: "info",
          createdAt: new Date().toISOString(),
          visitor: orderId,
        })
      }

      router.push("/checkout/billing")
    } catch (error) {
      console.error("Error saving shipping info:", error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="fullName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>الاسم الكامل</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormItem >
              <FormLabel>رقم الهاتف</FormLabel>
           <div className="flex">
           
                 <FormControl>
              <Input maxLength={9} {...field} />
              </FormControl>
              <FormControl>
              <Input className="w-16" value={'965+'} readOnly />
              </FormControl>
              <FormMessage />
              </div>
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="governorate"
          render={({ field }) => (
            <FormItem>
              <FormLabel>المحافظة</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="اختر المحافظة" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="العاصمة">العاصمة</SelectItem>
                  <SelectItem value="حولي">حولي</SelectItem>
                  <SelectItem value="الفروانية">الفروانية</SelectItem>
                  <SelectItem value="الأحمدي">الأحمدي</SelectItem>
                  <SelectItem value="الجهراء">الجهراء</SelectItem>
                  <SelectItem value="مبارك الكبير">مبارك الكبير</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="grid grid-cols-2 gap-4">
          <FormField
            control={form.control}
            name="area"
            render={({ field }) => (
              <FormItem>
                <FormLabel>المنطقة</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="block"
            render={({ field }) => (
              <FormItem>
                <FormLabel>القطعة</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <FormField
            control={form.control}
            name="street"
            render={({ field }) => (
              <FormItem>
                <FormLabel>الشارع</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="house"
            render={({ field }) => (
              <FormItem>
                <FormLabel>رقم المنزل</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <Button type="submit" className="w-full bg-blue-600 text-white" disabled={isLoading}>
          {isLoading ? "جاري معالجة الطلب..." : "متابعة للدفع"}
        </Button>
      </form>
    </Form>
  )
}

