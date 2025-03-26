import React from "react";
import { Heart } from "lucide-react";
import { APP_NAME } from "@/lib/constants";
import Link from "next/link";
import SearchBar from "./searchBar";
import UserAccount from "@/components/shared/header/user-account";
import BottomNavigation from "@/components/shared/header/bottom-navigation";
import Cart from "@/components/shared/header/cart";

const Header = () => {
  return (
    <header className="bg-background border-b border-gray-200 py-3">
      <div className="wrapper flex flex-col lg:flex-row lg:items-center justify-between p-4">
        <div className="flex w-full justify-between items-center">
          <Link href={"/"} className="flex items-center gap-3">
            <span className="font-bold text-2xl text-blue-400">{APP_NAME}</span>
          </Link>
          <SearchBar />
          <div className="hidden lg:flex items-center space-x-4">
            <UserAccount />
            <Link href={"/wishlist"} className="flex items-center gap-2">
              <Heart size={20} className="text-blue-400" />
            </Link>
            <Cart />
          </div>
        </div>
      </div>

      <BottomNavigation />
    </header>
  );
};

export default Header;
