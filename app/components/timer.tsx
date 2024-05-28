// import { useEffect, useState } from "react";

// export default function Timer() {
//     const [timeLeft, setTimeLeft] = useState(60);
  
//     useEffect(() => {
//       if (!timeLeft) return;
  
//       const timerId = setInterval(() => {
//         setTimeLeft(timeLeft - 1);
//       }, 1000);
  
//       return () => clearInterval(timerId);
//     }, [timeLeft]);
  
//     return (
//       <div>
//         Time left: {timeLeft}
//       </div>
//     );
//   }


// import Link from "next/link";
// import { simplifiedProduct, fullProduct } from "../interface";
// import { client } from "../lib/sanity";
// import { ArrowRight, Star, Truck } from "lucide-react";
// import Image from "next/image";
// import AddToBag from "@/app/components/AddToBag";
// import CheckoutNow from "@/app/components/CheckoutNow";
// import ImageGallery from "@/app/components/ImageGallery";
// import { Button } from "@/components/ui/button";

// async function getData() {
//   const query = `*[_type == "product"][0...4] | order(_createdAt desc) {
//         _id,
//           price,
//         name,
//           "slug": slug.current,
//           "categoryName": category->name,
//           "imageUrl": images[0].asset->url
//       }`;

//   const data = await client.fetch(query);

//   return data;
// }

// async function getSingleProductData(slug: string) {
//   const query = `*[_type == "product" && slug.current == "${slug}"][0] {
//         _id,
//           images,
//           price,
//           name,
//           description,
//           "slug": slug.current,
//           "categoryName": category->name,
//           price_id
//       }`;

//   const data = await client.fetch(query);

//   return data;
// }

// export default async function Newest() {
//   const data: simplifiedProduct[] = await getData();

//   return (
//     <div className="bg-white">
//       <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
//         <div className="flex justify-between items-center">
//           <h2 className="text-2xl font-bold tracking-tight text-gray-900 ">
//           <span className="hover:text-violet-500 ">Our </span> <span className="hover:text-violet-500 ">Newest</span> <span className="hover:text-violet-500 ">Products</span>
//           </h2>
//         </div>

//         <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
//           {data.map((product) => (
//             <div key={product._id} className="group relative">
//               <div className="aspect-square w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:h-80 hover:scale-105 duration-200 ">
//                 <a href={`/product/${product.slug}`}>
//                 <Image
//                   src={product.imageUrl}
//                   alt="Product image"
//                   className="w-full h-full object-cover object-center lg:h-full lg:w-full"
//                   width={300}
//                   height={300}
//                 />
//                 </a>
//               </div>

//               <div className="mt-4 flex justify-between">
//                 <div>
//                   <h3 className="text-sm text-gray-700">
//                     <Link href={`/product/${product.slug}`}>
//                       {product.name}
//                     </Link>
//                   </h3>
//                   <p className="mt-1 text-sm text-gray-500">
//                     {product.categoryName}
//                   </p>
//                 </div>
//                 <p className="text-sm font-medium text-gray-900">
//                   ₹{product.price}
//                 </p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

// export const dynamic = "force-dynamic";

// export default async function ProductPge({
//   params,
// }: {
//   params: { slug: string };
// }) {
//   const data: fullProduct = await getSingleProductData(params.slug);

//   return (
//     <div className="bg-white">
//       <div className="mx-auto max-w-screen-xl px-4 md:px-8">
//         <div className="grid gap-8 md:grid-cols-2">
//           <ImageGallery images={data.images} />

//           <div className="md:py-8">
//             <div className="mb-2 md:mb-3">
//               <span className="mb-0.5 inline-block text-gray-500">
//                 {data.categoryName}
//               </span>
//               <h2 className="text-2xl font-bold text-gray-800 lg:text-3xl">
//                 {data.name}
//               </h2>
//             </div>

//             <div className="mb-6 flex items-center gap-3 md:mb-10">
//               <Button className="rounded-full gap-x-2">
//                 <span className="text-sm">4.2</span>
//                 <Star className="h-5 w-5" />
//               </Button>

//               <span className="text-sm text-gray-500 transition duration-100">
//                 56 Ratings
//               </span>
//             </div>

//             <div className="mb-4">
//               <div className="flex items-end gap-2">
//                 <span className="text-xl font-bold text-gray-800 md:text-2xl">
//                   ₹{data.price}
//                 </span>
//                 <span className="mb-0.5 text-red-500 line-through">
//                   ₹{data.price + 30}
//                 </span>
//               </div>

//               <span className="text-sm text-gray-500">
//                 Incl. Vat plus shipping
//               </span>
//             </div>

//             <div className="mb-6 flex items-center gap-2 text-gray-500">
//               <Truck className="w-6 h-6" />
//               <span className="text-sm">2-4 Day Shipping</span>
//             </div>

//             <div className="flex gap-2.5">
//               <AddToBag
//                 currency="INR"
//                 description={data.description}
//                 image={data.images[0]}
//                 name={data.name}
//                 price={data.price}
//                 key={data._id}
//                 price_id={data.price_id}
//               />
//               <CheckoutNow
//                 currency="INR"
//                 description={data.description}
//                 image={data.images[0]}
//                 name={data.name}
//                 price={data.price}
//                 key={data._id}
//                 price_id={data.price_id}
//               />
//             </div>

//             <p className="mt-12 text-base text-gray-500 tracking-wide">
//               {data.description}
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
