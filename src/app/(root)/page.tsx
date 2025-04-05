import ProductCard from "@/components/shared/product/product-card";
import { ArrowRight } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import HomePageSlider from "@/components/shared/homepage/home-page-slider";
import { products } from "@/db/sampleData";

export default function Home() {
  return (
    <div>
      {/* Header Section */}
      <HomePageSlider />
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-xl sm:text-2xl font-bold">Featured Products</h1>
        <span className="text-blue-500 text-sm font-semibold cursor-pointer underline underline-offset-2">
          View All <ArrowRight size={10} className="inline" />
        </span>
      </div>

      {/* Large Screens - Carousel */}
      <div className="hidden xl:block">
        <Carousel className="w-full">
          <CarouselContent>
            {products.map((product) => (
              <CarouselItem key={product.id} className="basis-1/5">
                <ProductCard product={product} />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="cursor-pointer" />
          <CarouselNext className="cursor-pointer" />
        </Carousel>
      </div>

      {/* Small Screens - Scrollable */}
      <div className="flex xl:hidden overflow-x-auto gap-3 pb-4 [&::-webkit-scrollbar]:hidden [scrollbar-width:none]">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
