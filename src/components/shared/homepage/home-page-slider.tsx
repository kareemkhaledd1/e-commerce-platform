"use client";

import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import Image from "next/image";

const banners = [
  {
    bgColor: "bg-gradient-to-r from-[#1E3A8A] to-[#4A90E2]",
    title: "New Arrivals Smartphones",
    description: "Up to 80% OFF on all smart wearables.",
    cta: "Shop Now",
    image: "/images/laptop.png",
  },
  {
    bgColor: "bg-gradient-to-r from-[#065F46] to-[#50C878]",
    title: "Best Deals on Smart Watches",
    description: "Discover the latest models at unbeatable prices.",
    cta: "Explore",
    image: "/images/smart-watch.png",
  },
  {
    bgColor: "bg-gradient-to-r from-[#7B1E1E] to-[#E25141]",
    title: "Limited Offer on Laptops",
    description: "Save big on top brands with limited-time discounts.",
    cta: "Get Deals",
    image: "/images/laptop.png",
  },
];

export default function HomePageSlider() {
  const [api, setApi] = useState<CarouselApi | null>(null);
  const [current, setCurrent] = useState(0);

  // Improved auto-slide with cleanup
  useEffect(() => {
    if (!api) return;

    let intervalId: NodeJS.Timeout;
    const startInterval = () => {
      intervalId = setInterval(() => {
        api.scrollNext();
      }, 5000);
    };

    // Start initial interval
    startInterval();

    // Reset interval on any slide change
    api.on("select", () => {
      clearInterval(intervalId);
      startInterval();
    });

    return () => {
      clearInterval(intervalId);
      api.off("select", startInterval);
    };
  }, [api]);

  // Track current slide
  useEffect(() => {
    if (!api) return;

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  return (
    <Carousel
      setApi={setApi}
      className="w-full relative max-w-[1200px] mx-auto mb-16"
      opts={{ loop: true }} // Enable infinite loop
    >
      <CarouselContent className="h-[400px]">
        {banners.map((banner, index) => (
          <CarouselItem key={index} className="h-full">
            <div
              className={`${banner.bgColor} h-full w-full flex flex-col-reverse justify-center md:flex-row md:justify-between items-center text-white p-4 lg:p-10 rounded-lg shadow-lg overflow-hidden`}
            >
              {/* Content section */}
              <div className="flex flex-col md:max-w-[60%] mb-6 md:mb-0 md:pl-8">
                <h1 className="text-xl md:text-3xl lg:text-5xl font-extrabold mb-4">
                  {banner.title}
                </h1>
                <p className="text-sm lg:text-xl mb-6">{banner.description}</p>
                <Button className="bg-white text-black hover:bg-gray-200 px-6 py-3 w-full lg:w-fit">
                  {banner.cta}
                </Button>
              </div>

              {/* Image section */}
              <div className="relative w-[500px] h-48 md:h-[300px] flex items-center justify-center">
                <Image
                  src={banner.image}
                  priority
                  fill
                  alt="Banner product"
                  className="object-contain h-auto w-full drop-shadow-xl "
                />
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>

      {/* Navigation controls */}
      <CarouselPrevious className="left-2 hidden lg:flex text-white cursor-pointer" />
      <CarouselNext className="right-2 hidden lg:flex text-white cursor-pointer" />

      {/* Dots indicator */}
      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-2">
        {banners.map((_, index) => (
          <button
            key={index}
            className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
              current === index ? "bg-white/80 scale-125" : "bg-white/30"
            }`}
            onClick={() => api?.scrollTo(index)}
          />
        ))}
      </div>
    </Carousel>
  );
}
