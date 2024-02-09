"use client";

import { Button } from "@/components/ui/button";
import { ShoppingBag } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
   const pathName = usePathname();

   const links = [
      { name: "Home", href: "/" },
      { name: "Men", href: "/Men" },
      { name: "Women", href: "/Women" },
      { name: "Teen", href: "/Teen" },
   ];

   return (
      <>
         <header className="py-4 border-b">
            <div className="flex items-center justify-between mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl">
               <Link href="/">
                  <h1 className="text-4xl text-indigo-950 font-bold">
                     Haven<span className="text-indigo-500">Store</span>
                  </h1>
               </Link>

               <nav className="hidden gap-12 lg:flex 2xl:ml-16">
                  {links.map((item, id) => (
                     <div key={id}>
                        <Link
                           href={item.href}
                           className={`text-lg font-semibold ${
                              pathName === item.href
                                 ? "text-indigo-500"
                                 : "text-gray-700 transition duration-100 hover:text-indigo-500"
                           }`}
                        >
                           {item.name}
                        </Link>
                     </div>
                  ))}
               </nav>
               <div className="flex divide-x ">
                  <Button
                     variant={"outline"}
                     className="flex flex-col gap-y-1.5 h-10 w-10 sm:h-10 sm:w-10 md:h-12 md:w-12 rounded-lg"
                  >
                     <ShoppingBag />
                  </Button>
               </div>
            </div>
         </header>
      </>
   );
};

export default Navbar;
