import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Facebook, Instagram, Twitter } from "lucide-react";
import { APP_NAME } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="bg-muted">
      <div className="wrapper px-4 py-5 md:px-6 md:py-8">
        <div className="grid gap-8 grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <h3 className="text-lg font-bold">{APP_NAME}</h3>
            <p className="text-sm text-muted-foreground">
              Discover premium products with fast shipping and secure checkout
              experience.
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Button>
              <Button variant="ghost" size="icon">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Button>
              <Button variant="ghost" size="icon">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Button>
            </div>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-bold">Shop</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href={"/products"} className="hover:underline">
                  All Products
                </Link>
              </li>
              <li>
                <Link href={"/category/clothing"} className="hover:underline">
                  Clothing
                </Link>
              </li>
              <li>
                <Link
                  href={"/category/accessories"}
                  className="hover:underline"
                >
                  Accessories
                </Link>
              </li>
              <li>
                <Link href={"/category/footwear"} className="hover:underline">
                  Footwear
                </Link>
              </li>
              <li>
                <Link href={"/category/home"} className="hover:underline">
                  Home
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-bold">Company</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href={"/about"} className="hover:underline">
                  About Us
                </Link>
              </li>
              <li>
                <Link href={"/contact"} className="hover:underline">
                  Contact
                </Link>
              </li>
              <li>
                <Link href={"/careers"} className="hover:underline">
                  Careers
                </Link>
              </li>
              <li>
                <Link href={"/blog"} className="hover:underline">
                  Blog
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t pt-8 text-center text-sm text-muted-foreground flex flex-col-reverse gap-2 md:gap-0 md:flex-row items-center justify-between pb-[52px] lg:pb-0">
          <p>
            &copy; {new Date().getFullYear()} StyleHub. All rights reserved.
          </p>
          <div className="mt-2 flex justify-center space-x-4">
            <Link href={"/privacy"} className="hover:underline">
              Privacy Policy
            </Link>
            <Link href={"/terms"} className="hover:underline">
              Terms of Service
            </Link>
            <Link href={"/shipping"} className="hover:underline">
              Shipping & Returns
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
