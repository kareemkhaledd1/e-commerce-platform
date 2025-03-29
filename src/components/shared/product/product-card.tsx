"use client";

import Image from "next/image";
import Link from "next/link";
import p1 from "@/assets/images/p1-1.jpg";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { HeartIcon, ShoppingCart } from "lucide-react";
import { useState } from "react";

export default function ProductCard({ product }: { product: any }) {
  const [wishList, setWishList] = useState(false);

  return (
    <Card className="flex-shrink-0 w-[230px] gap-1 md:w-auto md:max-w-[240px] h-auto rounded-xl shadow-lg border border-gray-200 relative">
      <div className="absolute top-2 left-2 gap-2">
        <button
          className=" p-1 rounded-full shadow-sm cursor-pointer"
          onClick={() => setWishList(!wishList)}
        >
          <HeartIcon
            size={20}
            className={wishList ? "text-red-500 fill-red-500" : "text-gray-500"}
          />
        </button>
      </div>
      <div className="absolute top-2 right-2 gap-2">
        {product.discount > 0 && (
          <div className="bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-md">
            {product.discount}% OFF
          </div>
        )}
      </div>
      <Link
        href={`/product/${product.id}`}
        className="flex flex-col h-full cursor-pointer"
      >
        <CardHeader className="flex justify-center p-4">
          <Image
            src={p1}
            alt={product.name}
            width={150}
            height={150}
            className="rounded-md"
            objectFit="contain"
            priority
          />
        </CardHeader>
        <CardContent className="p-3 border-t border-gray-200 flex-grow">
          <CardTitle className="text-xs font-semibold">
            {product.name}
          </CardTitle>
          <CardDescription className="text-xs text-gray-600 max-w-lg line-clamp-2">
            {product.description}
          </CardDescription>
        </CardContent>
      </Link>
      <CardFooter className="flex flex-col items-center justify-end gap-2">
        <div className="flex items-center justify-between w-full">
          <p className="text-base font-bold text-gray-900">
            ${product.finalPrice}
          </p>
          {product.discount > 0 && (
            <p className="text-xs text-gray-500 line-through">
              ${product.price}
            </p>
          )}
        </div>
        <button className="w-full cursor-pointer flex items-center space-x-3 justify-center bg-blue-600 hover:bg-blue-700 text-white py-1.5 px-3 rounded-md text-sm font-medium transition-colors">
          <ShoppingCart size={16} />
          <span>Add to Cart</span>
        </button>
      </CardFooter>
    </Card>
  );
}
