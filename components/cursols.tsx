"use client"

import * as React from "react"
import Image from "next/image"
import { Card } from "@/components/ui/card"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"

const slides = [
  {
    id: 1,
    title: "First Slide",
    description: "This is the first slide of the carousel",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    id: 2,
    title: "Second Slide",
    description: "This is the second slide of the carousel",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    id: 3,
    title: "Third Slide",
    description: "This is the third slide of the carousel",
    image: "/placeholder.svg?height=400&width=600",
  },
]

export default function CarouselDemo() {
  return (
    <div className="py-12">
      <Carousel className="w-full max-w-4xl mx-auto">
        <CarouselContent>
          {slides.map((slide) => (
            <CarouselItem key={slide.id}>
              <Card className="relative overflow-hidden">
                <div className="aspect-[16/9] relative">
                  <Image
                    src={slide.image || "/placeholder.svg"}
                    alt={slide.title}
                    fill
                    className="object-cover"
                    priority={slide.id === 1}
                  />
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-black/60 text-white p-4">
                  <h3 className="text-xl font-bold mb-2">{slide.title}</h3>
                  <p className="text-sm text-gray-200">{slide.description}</p>
                </div>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-4" />
        <CarouselNext className="right-4" />
      </Carousel>
    </div>
  )
}

