import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { client } from "../lib/sanity";

interface product {
   _id: string;
   imgUrl: string;
   price: number;
   slug: string;
   category: string;
   name: string;
}

const getData = async () => {
   const query = `*[_type=='product'][0...4] | order(_createdAt desc){
    _id, name, price,
      "slug": slug.current,
      "category": catagory->name,
      "imgUrl": image[0].asset->url
      
  }`;

   const data = await client.fetch(query);
   if (!data) {
      return null;
   }
   return data;
};

const Feature = async () => {
   const data: product[] = await getData();

   return (
      <div className=" bg-white">
         <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8 ">
            <div className="flex justify-between items-center ">
               <h2 className="text-2xl  font-bold tracking-tight text-gray-800 ">
                  Feature Product
               </h2>
               <Link
                  className="text-indigo-500 flex items-center gap-x-1"
                  href={"/all"}
               >
                  See more{" "}
                  <span>
                     <ArrowRight />
                  </span>
               </Link>
            </div>
            <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8  ">
               {data.map((product) => (
                  <div key={product._id} className="group relative">
                     <div className="aspect-square w-full overflow-hidden rounded-md bg-white group-hover:opacity-75 lg:h-80">
                        <Image
                           src={product.imgUrl}
                           alt={product.name}
                           className="w-full h-full object-center object-cover lg:w-full lg:h-full"
                           width={300}
                           height={300}
                        />
                     </div>
                     <div className="mt-4 flex justify-between ">
                        <div className="">
                           <h2 className="text-md text-gray-700">
                              <Link href={`/product/${product.slug}`}>
                                 {product.name}
                              </Link>
                           </h2>
                           <p className="mt-1 text-sm text-gray-500">
                              {product.category}
                           </p>
                        </div>
                        <p>${product.price}</p>
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </div>
   );
};

export default Feature;
