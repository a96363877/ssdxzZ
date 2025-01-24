import { Card, CardContent } from '@/components/ui/card';
import { Tag, Truck, Receipt, LayoutGrid } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function FeatureCards() {
  return (
    <div className="min-h-screen bg-gray-50" dir="rtl">
      {/* Feature Cards */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="bg-white rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
            <CardContent className="p-6 flex items-center justify-between  bg-blue-100 ">
              <div className="w-16 h-16 flex-shrink-0 bg-blue-100 rounded-full flex items-center justify-center">
                <img src="/icon-1.webp" className="w-12 h-12" />
              </div>
              <div className="space-y-2  w-full px-3">
                <h3 className="text-xl font-bold">أفضل الأسعار والعروض</h3>
                <p className="text-gray-500">
                  الطلبات بقيمة 10 دينار كويتي أو أكثر
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
            <CardContent className="p-6 flex items-center justify-between  bg-blue-100 ">
              <div className="w-16 h-16 flex-shrink-0rounded-full flex items-center justify-center">
                <img src="/icon-2.webp" className="w-12 h-12" />
              </div>
              <div className="space-y-2  w-full px-3">
                <h3 className="text-xl font-bold">توصيل سريع</h3>
                <p className="text-gray-500">
                  خدمات مذهلة على مدار الساعة 24/7
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
            <CardContent className="p-6 flex items-center justify-between bg-blue-100">
              <div className="w-16 h-16 flex-shrink-0  rounded-full flex items-center justify-center">
                <img src="/icon-3.webp" className="w-12 h-12" />
              </div>
              <div className="space-y-2 w-full px-3">
                <h3 className="text-xl font-bold">عروض رائعة</h3>
                <p className="text-gray-500">عروض مستمرة</p>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
            <CardContent className="p-6 flex items-center justify-between bg-blue-100">
              <div className="w-16 h-16 flex-shrink-0 bg-blue-100 rounded-full flex items-center justify-center">
                <img src="/icon-4.webp" className="w-12 h-12" />
              </div>
              <div className="space-y-2 w-full px-3">
                <h3 className="text-xl font-bold">تشكيلة واسعة</h3>
                <p className="text-gray-500">خصومات متنوعة</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Fixed Buttons */}
    </div>
  );
}
