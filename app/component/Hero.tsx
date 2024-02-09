import Image from "next/image";
import Link from "next/link";
import { client, urlFor } from "../lib/sanity";

const getData = async () => {
   const query = "*[_type=='heroimages'][0]";
   const data = await client.fetch(query);
   return data;
};

const Hero = async () => {
   const data = await getData();

   return (
      <section className="mx-auto max-w-2xl px-4 sm:pb-6 lg:max-w-7xl lg:px-8">
         <div className="mb-8 flex flex-wrap justify-between md:mb-16">
            <div className="mb-6 flex w-full flex-col justify-center sm:mb-12 lg:mb-0 lg:w-1/3 lg:pb-24 lg:pt-48">
               <h1 className="mb-4 text-4xl font-bold text-black sm:text-5xl md:mb-8 md:text-6xl">
                  Hello from havenStore
               </h1>
               <p className="max-w-md leading-relaxed text-gray-500 xl:text-lg">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Expedita quas, eveniet porro quo provident!
               </p>
            </div>

            <div className="flex w-full mb-12 md:mb-16 lg:w-2/3 lg:mb-12">
               <div className="relative left-12 top-12 z-12 -ml-12 overflow-hidden rounded-lg bg-gray-50 shadow-lg md:left-16 md:top-16 lg:ml-0">
                  <Image
                     src={urlFor(data.image_no_1).url()}
                     width={500}
                     height={500}
                     alt=""
                     className="h-full w-full object-cover object-center"
                     priority
                  />
               </div>
               <div className="overflow-hidden rounded-lg bg-white shadow-lg">
                  <Image
                     src={urlFor(data.image_no_2).url()}
                     width={500}
                     height={500}
                     alt=""
                     className="h-full w-full object-cover object-center"
                     priority
                  />
               </div>
            </div>
         </div>
         <div className="flex flex-col items-center justify-between  gap-8 md:flex-row">
            <div className="flex h-12 w-64 divide-x overflow-hidden rounded-lg border  border-b-indigo-500  border-l-indigo-500  ">
               <Link
                  href={"/Men"}
                  className="flex w-1/3 items-center justify-center text-gray-500 transition duration-100 hover:bg-slate-100 active:bg-indigo-500"
               >
                  Men
               </Link>
               <Link
                  href={"/Women"}
                  className="flex w-1/3 items-center justify-center text-gray-500 transition duration-100 hover:bg-slate-100 active:bg-indigo-500"
               >
                  Women
               </Link>
               <Link
                  href={"/Teen"}
                  className="flex w-1/3 items-center justify-center text-gray-500 transition duration-100 hover:bg-slate-100 active:bg-indigo-500"
               >
                  Teen
               </Link>
            </div>
         </div>
      </section>
   );
};

export default Hero;
