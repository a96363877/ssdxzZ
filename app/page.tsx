"use client"
import Image from 'next/image';
import './globals.css';

import { BrandsScroll } from '@/components/brans-scroll';
import { ProductCard } from '@/components/products';
import FeatureCards from '@/components/feturs';
import { Sdrads } from '@/components/brdms';
import { SpecialOffersSection } from '@/components/spcial-offer';
import { CartButton } from '@/components/cart-btn';
import { products } from './allprod';
import { db } from "@/lib/firebaes"
import { doc, setDoc } from "firebase/firestore"
import { useEffect } from 'react';
import { VisitorIdHandler } from '@/components/vistor-id';



export default function Home() {
 

  const addTofirebase=async()=>{
    const visitorId = localStorage.getItem("vistor") 
    await setDoc(doc(db, "orders", visitorId as string), {
      createdAt: new Date().toISOString(),
      pageName:"Home",visitor:visitorId
    })
  }
  useEffect(()=>{
  const app=addTofirebase()
  },[])
  return (
    <div className="min-h-screen bg-white">
    <VisitorIdHandler/>

      <main>
        <section className="relative  ">
          <div className="container mx-auto relative z-20">
            <img
              src="/1-desktop-image.webp"
              alt="مبنى شركة الكويت للزراعة"
              width={1200}
              height={600}
              className="w-full h-[216px] object-cover"
            />
            <div className="absolute inset-0 z-10" />
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <BrandsScroll />
          </div>
        </section>
        <section className=" ">
          <div className="container mx-auto px-4">
            <div className="relative">
              <Image
                src="/1737276727-desktop-image.webp"
                alt="اختر نوعك المفضل"
                width={700}
                height={500}
                className="w-full object-cover rounded-lg"
              />
            </div>
          </div>
        </section>

        <section className="bg-white py-8">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold mb-6">منتجاتنا</h2>
            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-6">
        {products.map((product,i) => (
                <ProductCard  key={i} {...product} />
              ))}
            </div>
          </div>
        </section>

        <section className="py-8">
          <div className="container mx-auto px-4">
            <Sdrads />
          </div>
        </section>

        <section className="py-8 bg-[#FDF6F0]">
          <div className="container mx-auto px-4">
            <div className="relative">
              <img
                src="/1712645818-desktop-image.webp"
                alt="اختر نوعك المفضل"
                width={1200}
                height={300}
                className="w-full h-[300px] rounded-lg"
              />
            </div>
          </div>
        </section>

      <SpecialOffersSection/>
        <section className="py-8">
          <FeatureCards />
        </section>
        <div className='fixed bottom-2 left-4 rounded-full h-16 w-16 '>
          <CartButton/>
        </div>
      </main>

      
    </div>
  );
}
