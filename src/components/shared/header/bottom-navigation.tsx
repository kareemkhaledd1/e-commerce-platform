import Link from "next/link";
import { Heart, Home, LayoutGrid, ShoppingCart, User } from "lucide-react";
import React from "react";

const BottomNavigation = () => {
  return (
    <nav className="fixed bottom-0 left-0 w-full bg-white shadow-md border-t border-gray-200 lg:hidden z-50">
      <div className="flex justify-around p-2">
        <Link href="/" className="flex flex-col items-center text-gray-600">
          <Home size={24} />
          <span className="text-xs">Home</span>
        </Link>
        <Link
          href={"/categories"}
          className="flex flex-col items-center text-gray-600"
        >
          <LayoutGrid size={24} />
          <span className="text-xs">Categories</span>
        </Link>
        <Link
          href={"/wishlist"}
          className="flex flex-col items-center text-gray-600"
        >
          <Heart size={24} />
          <span className="text-xs">Wishlist</span>
        </Link>
        <Link
          href={"/account"}
          className="flex flex-col items-center text-gray-600"
        >
          <User size={24} />
          <span className="text-xs">Account</span>
        </Link>
        <Link
          href={"/cart"}
          className="flex flex-col items-center text-gray-600"
        >
          <ShoppingCart size={24} />
          <span className="text-xs">Cart</span>
        </Link>
      </div>
    </nav>
  );
};

export default BottomNavigation;
