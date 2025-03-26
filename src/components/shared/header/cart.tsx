import React from 'react';
import {Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger} from "@/components/ui/sheet";
import {Button} from "@/components/ui/button";
import {ShoppingCart} from "lucide-react";
import Link from "next/link";

const Cart = () => {
    return (
        <Sheet>
            <SheetTrigger asChild>
                <span className="cursor-pointer">
                    <ShoppingCart size={20} className="text-blue-400"/>
                </span>
            </SheetTrigger>
            <SheetContent>
                <SheetTitle className="flex h-full flex-col items-center justify-center space-y-4">
                    <ShoppingCart className="h-16 w-16 text-muted-foreground"/>
                    <div className="text-center">
                        <h3 className="text-lg font-medium">Your cart is empty</h3>
                        <p className="text-sm text-muted-foreground">Add items to your cart to see them here.</p>
                    </div>
                    <Link href={"/products"}>
                        <Button variant='secondary' className="hover:text-blue-400 cursor-pointer">Continue
                            Shopping</Button>
                    </Link>
                </SheetTitle>

            </SheetContent>
        </Sheet>
    );
};

export default Cart;
