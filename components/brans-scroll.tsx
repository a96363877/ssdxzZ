import Image from 'next/image';
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area';
import { Card, CardFooter } from './ui/card';

export function BrandsScroll() {
  const brands = [
   {title:"الأرز", img:'/rice.webp',count:9},
   {title:"الخضراوت", img:'/frozen-vegetables.webp',count:9},
   {title:"المعلبات", img:'/cans.webp',count:22},
   {title:"فواكة مجففة", img:'/dried-fruit.webp',count:59},
   {title:"فواكة مجمدة", img:'/frozen-fruits.webp',count:29},
   {title:"KA", img:'/ka.webp',},
   {title:"الزيتون", img:'/olive.webp',count:41},
   {title:"القهوة", img:'/coffee.webp',count:84},
   {title:"مصنعات دجاج", img:'/processed-chicken.webp',count:29},
   {title:"حبوب", img:'/cereals.webp',count:22},
   {title:"معكرونة", img:'/pasta.webp',count:31},
   {title:"الزيوت", img:'/oil.webp',count:74},
  ];

  return (
    <div className="w-full">
      <h2 className="text-2xl font-bold mb-6 text-right">التصنيفات</h2>
      <ScrollArea className="w-full whitespace-nowrap rounded-lg border">
        <div className="flex w-max space-x-4 p-2">
          {brands.map((brand, i) => (
            <div key={i} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="p-6 text-center hover:shadow-lg transition-shadow bg-[#dbefff94]">
                <div className="w-32 h-32 mx-auto mb-4">
                  <img src={brand.img} alt="s" />
                </div>
                <h3 className="text-sm  mb-2">{brand.title}</h3>
                <p className="text-gray-600">{brand.count} المنتجات</p>
              </Card>
            </div>
          ))}
        </div>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
    </div>
  );
}
