"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ShoppingBag } from "lucide-react";
import { buttonVariants } from './button'
import { useShoppingCart } from "use-shopping-cart";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const links = [
  { name: "Men", href: "/men" },
  { name: "Women", href: "/women" },
  { name: "Accessories", href: "/accessories" },
];

export default function Navbar() {
  const pathname = usePathname();
  const { handleCartClick } = useShoppingCart();
  const user = null

  return (
    <header className="mb-8 border-b">
      <div className="flex items-center justify-between mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl">
        <Link href="/">
          <h1 className="text-2xl md:text-4xl font-bold hover:scale-105 duration-200">
            Lil<span className="text-primary">Pumpkin</span>
          </h1>
        </Link>

        <nav className="hidden gap-12 lg:flex ml-0" style={{ paddingLeft: "70px" }}>

          <Link
            href="/"
            className={
              pathname === "/"
                ? "text-lg font-semibold text-primary"
                : "text-lg font-semibold text-gray-600 transition duration-100 hover:text-primary"
            }
          >
            Home
          </Link>
          
          <DropdownMenu>
            <DropdownMenuTrigger className="text-lg font-semibold text-gray-600 transition duration-100 hover:text-primary">Categories</DropdownMenuTrigger>
            <DropdownMenuContent>
              {links
                .filter((link) => link.name !== "Home")
                .map((link, idx) => (
                  <Link
                    key={idx}
                    href={link.href}
                    className={
                      pathname === link.href
                        ? "text-lg font-semibold text-primary"
                        : "text-lg font-semibold text-gray-600 transition duration-100 hover:text-primary"
                    }
                    style={{ display: 'block', whiteSpace: 'normal' }}
                  >
                    {link.name}
                  </Link>
                ))}
            </DropdownMenuContent>
          </DropdownMenu>

          <Link
            href="/About"
            className={
              pathname === "/About"
                ? "text-lg font-semibold text-primary"
                : "text-lg font-semibold text-gray-600 transition duration-100 hover:text-primary"
            }
          >
            About
          </Link>
          <Link
            href="/contact"
            className={
              pathname === "/contact"
                ? "text-lg font-semibold text-primary"
                : "text-lg font-semibold text-gray-600 transition duration-100 hover:text-primary"
            }
          >
            Contact 
          </Link>
        </nav>

        <div className="flex divide-x border-r sm:border-l">
          <Button
            variant={"ghost"}
            onClick={() => handleCartClick()}
            className="flex flex-col gap-y-1.5 h-12 w-12 sm:h-20 sm:w-20 md:h-24 md:w-24 rounded-none hover:scale-105 duration-200"
          >
            <ShoppingBag />
            <span className="hidden text-xs font-semibold text-gray-500 sm:block">
              Cart
            </span>
          </Button>
        </div>
      </div>
    </header>
  );
}
