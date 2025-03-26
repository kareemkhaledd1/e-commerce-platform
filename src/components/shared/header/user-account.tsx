import React from "react";
import {UserIcon} from "lucide-react";
import {Button} from "@/components/ui/button";
import {
    Menubar,
    MenubarContent,
    MenubarItem,
    MenubarMenu,
    MenubarSeparator,
    MenubarTrigger,
} from "@/components/ui/menubar"
import Link from "next/link";

const UserAccount = () => {
    return (
        <Menubar>
            <MenubarMenu>
                <MenubarTrigger asChild>
                    <Button variant="ghost" className="flex items-center gap-2 cursor-pointer">
                        <UserIcon size={20} className="text-blue-400"/>
                        <span className="text-sm hidden md:block">Account</span>
                    </Button>
                </MenubarTrigger>
                <MenubarContent>
                    <MenubarItem>
                        <Link href={"/account"}>Profile</Link>
                    </MenubarItem>
                    <MenubarItem>
                        <Link href={"/account/orders"}>Orders</Link>
                    </MenubarItem>
                    <MenubarItem>
                        <Link href={"/account/settings"}>Settings</Link>
                    </MenubarItem>
                    <MenubarSeparator/>
                    <MenubarItem>
                        <Link href={"/account/logout"}>Logout</Link>
                    </MenubarItem>
                </MenubarContent>

            </MenubarMenu>
        </Menubar>
    );
};

export default UserAccount;
