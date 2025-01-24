import { Noto_Kufi_Arabic } from 'next/font/google';
import type { Metadata } from 'next';
import { CartProvider } from '@/components/cart-provider';
import { Toaster } from '@/components/ui/toaster';
import Image from 'next/image';
import Link from 'next/link';
import { CartButton } from '@/components/cart-btn';
import { Button } from '@/components/ui/button';
import { Facebook, Instagram, Twitter, Youtube } from 'lucide-react';
import Head from 'next/head';
import { Loader } from '@/components/loader';

const notoKufiArabic = Noto_Kufi_Arabic({
  subsets: ['arabic'],
  weight: ['400', '500', '600', '700'],
});

export const metadata: Metadata = {
  title: 'شركة الكويت للزراعة',
  description: 'مصدركم الموثوق للمنتجات الزراعية عالية الجودة',  viewport: "width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ar" dir="rtl">
       <Head>
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0" />
  </Head>
      <body className={notoKufiArabic.className} style={{zoom:0.75}}>
      <CartProvider>

        <div> <header className="border-b ">
       
       <div className="container mx-auto px-4 h-20 flex items-center justify-between">
 
       <button className="lg:hidden">
           <div className="space-y-1.5">
             <span className="block w-6 h-0.5 bg-gray-600"></span>
             <span className="block w-6 h-0.5 bg-gray-600"></span>
             <span className="block w-6 h-0.5 bg-gray-600"></span>
           </div>
         </button>
                 <Link href="/" className="flex items-center gap-2">
           <Image
             src="/vercel.svg"
             alt="شركة الكويت للزراعة"
             width={180}
             height={50}
             className="h-12 w-auto"
           />
         </Link>
        <CartButton/>
       </div>
     </header>
        
     
        {children} 
      <Toaster  />
      <footer className="bg-white" dir="rtl">
      <div className="container mx-auto px-4 py-8">
        {/* Logo */}
        <div className="mb-8">
          <Image
            src="/vercel.svg"
            alt="Kuwait Agriculture Company"
            width={150}
            height={50}
            className="h-12 w-auto"
          />
        </div>

        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="font-bold text-lg mb-4">الشركة</h3>
            <ul className="space-y-2 text-sm">
              <li>من نحن</li>
              <li>الأقسام</li>
              <li>المنتجات</li>
              <li>الخدمات</li>
              <li>الخدمات الإلكترونية</li>
              <li>الشروط والأحكام</li>
            </ul>
          </div>
          {/* Account */}
          <div className="space-y-4">
            <h3 className="font-bold text-lg mb-4">الحساب</h3>
            <ul className="space-y-2 text-sm">
              <li>طلباتي</li>
              <li>العنوان المحفوظ</li>
              <li>سجل الطلبات</li>
              <li>القائمة</li>
            </ul>
          </div>

          {/* Follow Us */}
          <div className="space-y-4">
            <h3 className="font-bold text-lg mb-4">المتابعة</h3>
            <ul className="space-y-2 text-sm">
              <li>التقرير السنوي</li>
              <li>المناقصات</li>
              <li>معلومات عنا</li>
              <li>الأخبار والإعلام</li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="font-bold text-lg mb-4">خريطة الموقع</h3>
            <div className="space-y-2 text-sm">
              <p>العنوان: ص.ب 22228 الصفاة 13083</p>
              <p>الكويت</p>
              <p>ساعات العمل: 8:00 ... 3:00</p>
            </div>
          </div>
        </div>

        {/* Payment Methods */}
        <div className="border-t border-gray-200 pt-8 mb-8">
          <h3 className="font-bold text-lg mb-4">بوابات الدفع المقبولة</h3>
          <div className="flex gap-4">
            <Image src="/payment-method.png" alt="Visa" width={160} height={50} className="h-8 w-auto" />
          </div>
        </div>

        {/* Social Links & WhatsApp */}
        <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex gap-6">
            <Link href="#" className="text-gray-600 hover:text-gray-900">
              <Facebook className="h-5 w-5" />
            </Link>
            <Link href="#" className="text-gray-600 hover:text-gray-900">
              <Twitter className="h-5 w-5" />
            </Link>
            <Link href="#" className="text-gray-600 hover:text-gray-900">
              <Instagram className="h-5 w-5" />
            </Link>
            <Link href="#" className="text-gray-600 hover:text-gray-900">
              <Youtube className="h-5 w-5" />
            </Link>
          </div>
          <Link
            href="https://wa.me/"
            className="flex items-center gap-2 bg-green-500 text-white px-4 py-2 rounded-full hover:bg-green-600"
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            تواصل معنا
          </Link>
        </div>
      </div>
    </footer>
      </div> 
  </CartProvider>
  
  
  
  
  </body>
    </html>
  );
}
