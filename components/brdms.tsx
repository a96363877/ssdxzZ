import Image from 'next/image';
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area';
import { Card } from './ui/card';

export function Sdrads() {
  const brands = [
    '/ka.webp',
    '/alfakhir.webp',
    '/allana.webp',
    '/altaieb.webp',
    '/bahcivan.webp',
    '/baidar.webp',
    '/countrysun.webp',
  ];

  return (
    <div className="w-full">
      <h2 className="text-2xl font-bold mb-6 text-right">علاماتنا التجارية</h2>
      <ScrollArea className="w-full whitespace-nowrap rounded-lg border">
        <div className="flex w-max space-x-1 p-4">
          {brands.map((brand, i) => (
            <div key={i} className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-6">
                <div className=" mx-auto mb-4  bg-[#dbefff94] hover:shadow-lg transition-shadow rounded-full">
                  <img className=" w-24 h-24 rounded-full" src={brand} alt="s" />
                </div>
            </div>
          ))}
        </div>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
    </div>
  );
}
