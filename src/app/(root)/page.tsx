import ProductCard from "@/components/shared/product/product-card";
import { ArrowRight } from "lucide-react";

export const products = [
  {
    id: "p1",
    name: "iPhone 15 Pro",
    description: "The latest iPhone with A17 Bionic chip.",
    details: [
      "6.1-inch Super Retina XDR display",
      "A17 Bionic chip",
      "Triple-lens camera system",
      "Titanium frame",
    ],
    brand: "Apple",
    price: 1099.99,
    discount: 10.0,
    finalPrice: 989.99,
    stock: 20,
    categoryId: "1", // Assuming this matches an existing category
    images: [
      { id: "img1", url: "https://via.placeholder.com/200", productId: "p1" },
      { id: "img2", url: "https://via.placeholder.com/200", productId: "p1" },
    ],
    createdAt: new Date(),
    updatedAt: new Date(),
    offerId: null,
    wishList: [],
    CartItem: [],
  },
  {
    id: "p2",
    name: "Samsung Galaxy S24 Ultra",
    description: "Powerful smartphone with an advanced camera system.",
    details: [
      "6.8-inch Dynamic AMOLED 2X",
      "Snapdragon 8 Gen 3",
      "200MP camera",
      "S Pen included",
    ],
    brand: "Samsung",
    price: 1299.99,
    discount: 15.0,
    finalPrice: 1104.99,
    stock: 15,
    categoryId: "1",
    images: [
      { id: "img3", url: "https://via.placeholder.com/200", productId: "p2" },
      { id: "img4", url: "https://via.placeholder.com/200", productId: "p2" },
    ],
    createdAt: new Date(),
    updatedAt: new Date(),
    offerId: null,
    wishList: [],
    CartItem: [],
  },
  {
    id: "p3",
    name: "MacBook Pro 16",
    description: "Powerful laptop for professionals with M2 Pro chip.",
    details: [
      "16-inch Liquid Retina XDR display",
      "Apple M2 Pro chip",
      "32GB unified memory",
      "1TB SSD storage",
    ],
    brand: "Apple",
    price: 2499.99,
    discount: 5.0,
    finalPrice: 2374.99,
    stock: 10,
    categoryId: "2",
    images: [
      { id: "img5", url: "https://via.placeholder.com/200", productId: "p3" },
      { id: "img6", url: "https://via.placeholder.com/200", productId: "p3" },
    ],
    createdAt: new Date(),
    updatedAt: new Date(),
    offerId: null,
    wishList: [],
    CartItem: [],
  },
  {
    id: "p4",
    name: "Sony WH-1000XM5",
    description: "Premium noise-cancelling headphones with exceptional sound.",
    details: [
      "Industry-leading noise cancellation",
      "30-hour battery life",
      "High-resolution audio",
      "Comfortable design",
    ],
    brand: "Sony",
    price: 399.99,
    discount: 0,
    finalPrice: 399.99,
    stock: 25,
    categoryId: "3",
    images: [
      { id: "img7", url: "https://via.placeholder.com/200", productId: "p4" },
      { id: "img8", url: "https://via.placeholder.com/200", productId: "p4" },
    ],
    createdAt: new Date(),
    updatedAt: new Date(),
    offerId: null,
    wishList: [],
    CartItem: [],
  },
  {
    id: "p5",
    name: "iPad Pro 12.9",
    description:
      "The ultimate iPad experience with M2 chip and stunning display.",
    details: [
      "12.9-inch Liquid Retina XDR display",
      "Apple M2 chip",
      "Thunderbolt / USB 4 port",
      "Face ID",
    ],
    brand: "Apple",
    price: 1099.99,
    discount: 8.0,
    finalPrice: 1011.99,
    stock: 18,
    categoryId: "4",
    images: [
      { id: "img9", url: "https://via.placeholder.com/200", productId: "p5" },
      { id: "img10", url: "https://via.placeholder.com/200", productId: "p5" },
    ],
    createdAt: new Date(),
    updatedAt: new Date(),
    offerId: null,
    wishList: [],
    CartItem: [],
  },
];

// Products array remains the same...

export default async function Home() {
  return (
    <div className="">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-xl sm:text-2xl font-bold">Featured Products</h1>
        <span className="text-blue-500 text-sm font-semibold cursor-pointer underline underline-offset-2">
          view all <ArrowRight size={10} className="inline" />
        </span>
      </div>
      <div className="flex overflow-x-auto gap-3 pb-4 xl:grid xl:grid-cols-5 [&::-webkit-scrollbar]:hidden [scrollbar-width:none]">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
