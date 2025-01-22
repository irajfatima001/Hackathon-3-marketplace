// // "use client";

// // import Image from "next/image";
// // // import Link from "next/link";
// // import { useRouter, useSearchParams } from "next/navigation";
// // import { useEffect, useState } from "react";

// // interface Iproduct {
// //   name: string;
// //   price: string;
// //   description: string;
// //   image: string;
// //   quantity: number;
// // }

// // export default function ShoppingCart() {
// //   const router = useRouter();
// //   const searchParam = useSearchParams();
// //   const [wishListItems, setwishListItems] = useState<Iproduct[]>([]);

// //   // Fetch  Items from Local Storage and Add New Items from Query Params
// //   useEffect(() => {
// //     const wishlist = localStorage.getItem("wishlist");
// //     const updatedWishlist = wishlist ? JSON.parse(wishlist) : [];

// //     const name = searchParam.get("name");
// //     const price = searchParam.get("price");
// //     const description = searchParam.get("description");
// //     const image = searchParam.get("image");

// //     if (name && price && description && image) {
// //       const isDuplicate = updatedWishlist.some(
// //         (item: Iproduct) => item.name === name
// //       );

// //       if (!isDuplicate) {
// //         updatedWishlist.push({ name, price, description, image, quantity: 1 });
// //       }

// //       localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));
// //       setwishListItems(updatedWishlist);
// //       router.replace("/wishlist"); // Remove query params
// //     } else {
// //         setwishListItems(updatedWishlist);
// //     }
// //   }, [searchParam, router]);

// //   // Remove Item from Cart
// //   const handleRemoveItem = (index: number) => {
// //     const updatedCart = [...wishListItems];
// //     updatedCart.splice(index, 1);
// //     localStorage.setItem("wishlist", JSON.stringify(updatedCart));
// //     setwishListItems(updatedCart);
// //   };

 

// //   return (
// //     <div className="container mx-auto px-4 py-8 mt-10">
      
// //       {/* wishlist Section */}
// //       <div className="grid lg:grid-cols-3 gap-8 ml-40 pl-20">
// //         {/* wishlist Items */}
// //         <div className="lg:col-span-2">
// //           <h1 className="text-3xl font-medium mb-6 text-center">Your Wishlist</h1>
// //           {wishListItems.length > 0 ? (
// //             wishListItems.map((item, index) => (
// //               <div
// //                 key={index}
// //                 className="flex items-center justify-between mb-6 border-b pb-4"
// //               >
// //                 <div className="flex items-center gap-4">
// //                   <Image
// //                     src={item.image}
// //                     alt={item.name}
// //                     width={80}
// //                     height={80}
// //                     className=""
// //                   />
// //                   <div>
// //                     <h3 className="font-medium">{item.name}</h3>
// //                     <p className="text-sm text-gray-600">
// //                       {item.description}
// //                     </p>
// //                     <p className="text-sm font-medium">
// //                       ₹ {Number(item.price) * item.quantity}
// //                     </p>
// //                   </div>
// //                 </div>
// //                 <div className="flex items-center gap-4">
                  
// //                   <button
// //                     onClick={() => handleRemoveItem(index)}
// //                     className="text-red-500 underline"
// //                   >
// //                     Remove from wishlist
// //                   </button>
// //                 </div>
// //               </div>
// //             ))
// //           ) : (
// //             <p>Your wishlist is empty.</p>
// //           )}
// //         </div>

       
// //       </div>
// //     </div>
// //   );
// // }
// // "use client";

// // import Image from "next/image";
// // import { useRouter, useSearchParams } from "next/navigation";
// // import { useEffect, useState } from "react";

// // interface Iproduct {
// //   name: string;
// //   price: string;
// //   description: string;
// //   image: string;
// //   quantity: number;
// // }

// // export default function ShoppingCart() {
// //   const router = useRouter();
// //   const searchParam = useSearchParams();
// //   const [wishListItems, setwishListItems] = useState<Iproduct[]>([]);
// //   const [showToast, setShowToast] = useState(false); // State to track toast visibility

// //   // Fetch Items from Local Storage and Add New Items from Query Params
// //   useEffect(() => {
// //     const wishlist = localStorage.getItem("wishlist");
// //     const updatedWishlist = wishlist ? JSON.parse(wishlist) : [];

// //     const name = searchParam.get("name");
// //     const price = searchParam.get("price");
// //     const description = searchParam.get("description");
// //     const image = searchParam.get("image");

// //     if (name && price && description && image) {
// //       const isDuplicate = updatedWishlist.some(
// //         (item: Iproduct) => item.name === name
// //       );

// //       if (!isDuplicate) {
// //         updatedWishlist.push({ name, price, description, image, quantity: 1 });
// //         setShowToast(true); // Show the toast icon when a new item is added

// //         // Hide the toast after 3 seconds
// //         setTimeout(() => {
// //           setShowToast(false);
// //         }, 3000);
// //       }

// //       localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));
// //       setwishListItems(updatedWishlist);
// //       router.replace("/wishlist"); // Remove query params
// //     } else {
// //       setwishListItems(updatedWishlist);
// //     }
// //   }, [searchParam, router]);

// //   // Remove Item from Wishlist
// //   const handleRemoveItem = (index: number) => {
// //     const updatedCart = [...wishListItems];
// //     updatedCart.splice(index, 1);
// //     localStorage.setItem("wishlist", JSON.stringify(updatedCart));
// //     setwishListItems(updatedCart);
// //   };

// //   return (
// //     <div className="container mx-auto px-4 py-8 mt-10">
// //       {/* Toast Notification */}
// //       {showToast && (
// //         <div className="fixed top-4 right-4 bg-green-600 text-white px-4 py-2 rounded-md shadow-md">
// //           Item added to wishlist!
// //         </div>
// //       )}

// //       {/* Wishlist Section */}
// //       <div className="grid lg:grid-cols-3 gap-8 ml-40 pl-20">
// //         {/* Wishlist Items */}
// //         <div className="lg:col-span-2">
// //           <h1 className="text-3xl font-medium mb-6 text-center">Your Wishlist</h1>
// //           {wishListItems.length > 0 ? (
// //             wishListItems.map((item, index) => (
// //               <div
// //                 key={index}
// //                 className="flex items-center justify-between mb-6 border-b pb-4"
// //               >
// //                 <div className="flex items-center gap-4">
// //                   <Image
// //                     src={item.image}
// //                     alt={item.name}
// //                     width={80}
// //                     height={80}
// //                     className=""
// //                   />
// //                   <div>
// //                     <h3 className="font-medium">{item.name}</h3>
// //                     <p className="text-sm text-gray-600">{item.description}</p>
// //                     <p className="text-sm font-medium">
// //                       ₹ {Number(item.price) * item.quantity}
// //                     </p>
// //                   </div>
// //                 </div>
// //                 <div className="flex items-center gap-4">
// //                   <button
// //                     onClick={() => handleRemoveItem(index)}
// //                     className="text-red-500 underline"
// //                   >
// //                     Remove from wishlist
// //                   </button>
// //                 </div>
// //               </div>
// //             ))
// //           ) : (
// //             <p>Your wishlist is empty.</p>
// //           )}
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }


// // "use client";

// // import Image from "next/image";
// // import { useRouter, useSearchParams } from "next/navigation";
// // import { useEffect, useState } from "react";

// // interface Iproduct {
// //   name: string;
// //   price: string;
// //   description: string;
// //   image: string;
// //   quantity: number;
// // }

// // export default function ShoppingCart() {
// //   const router = useRouter();
// //   const searchParam = useSearchParams();
// //   const [wishListItems, setwishListItems] = useState<Iproduct[]>([]);
// //   const [showToast, setShowToast] = useState(false);

// //   // Fetch Items from Local Storage and Add New Items from Query Params
// //   useEffect(() => {
// //     const wishlist = localStorage.getItem("wishlist");
// //     const updatedWishlist = wishlist ? JSON.parse(wishlist) : [];

// //     const name = searchParam.get("name");
// //     const price = searchParam.get("price");
// //     const description = searchParam.get("description");
// //     const image = searchParam.get("image");

// //     if (name && price && description && image) {
// //       const isDuplicate = updatedWishlist.some(
// //         (item: Iproduct) => item.name === name
// //       );

// //       if (!isDuplicate) {
// //         updatedWishlist.push({ name, price, description, image, quantity: 1 });
// //         setShowToast(true);

// //         setTimeout(() => {
// //           setShowToast(false);
// //         }, 3000);
// //       }

// //       localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));
// //       setwishListItems(updatedWishlist);
// //       router.replace("/wishlist");
// //     } else {
// //       setwishListItems(updatedWishlist);
// //     }
// //   }, [searchParam, router]);

// //   // Remove Item from Wishlist
// //   const handleRemoveItem = (index: number) => {
// //     const updatedCart = [...wishListItems];
// //     updatedCart.splice(index, 1);
// //     localStorage.setItem("wishlist", JSON.stringify(updatedCart));
// //     setwishListItems(updatedCart);
// //   };

// //   return (
// //     <div className="container mx-auto px-4 py-8 mt-10 ">
// //       {/* Toast Notification */}
// //       {showToast && (
// //         <div className="fixed top-4 right-4 bg-green-600 text-white px-4 py-2 rounded-md shadow-md">
// //           Item added to wishlist!
// //         </div>
// //       )}

// //       {/* Wishlist Section */}
// //       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
// //         <div className="col-span-full">
// //           <h1 className="text-2xl md:text-3xl font-medium mb-6 text-center">
// //             Your Wishlist
// //           </h1>
// //         </div>
// //         <div className="col-span-full md:col-span-2">
// //           {wishListItems.length > 0 ? (
// //             wishListItems.map((item, index) => (
// //               <div
// //                 key={index}
// //                 className="flex flex-col sm:flex-row items-center justify-between mb-6 border-b pb-4"
// //               >
// //                 <div className="flex items-center gap-4 w-full">
// //                   <Image
// //                     src={item.image}
// //                     alt={item.name}
// //                     width={80}
// //                     height={80}
// //                     className="w-20 h-20 sm:w-24 sm:h-24"
// //                   />
// //                   <div className="flex-1">
// //                     <h3 className="font-medium text-center sm:text-left">
// //                       {item.name}
// //                     </h3>
// //                     <p className="text-sm text-gray-600 text-center sm:text-left">
// //                       {item.description}
// //                     </p>
// //                     <p className="text-sm font-medium text-center sm:text-left">
// //                       ₹ {Number(item.price) * item.quantity}
// //                     </p>
// //                   </div>
// //                 </div>
// //                 <div className="mt-4 sm:mt-0 sm:ml-4">
// //                   <button
// //                     onClick={() => handleRemoveItem(index)}
// //                     className="text-red-500 underline text-sm sm:text-base"
// //                   >
// //                     Remove from wishlist
// //                   </button>
// //                 </div>
// //               </div>
// //             ))
// //           ) : (
// //             <p className="text-center">Your wishlist is empty.</p>
// //           )}
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }

// "use client";

// import Image from "next/image";
// import { useRouter, useSearchParams } from "next/navigation";
// import { useEffect, useState } from "react";

// interface Iproduct {
//   name: string;
//   price: string;
//   description: string;
//   image: string;
//   quantity: number;
// }

// export default function Wishlist() {
//   const router = useRouter();
//   const searchParam = useSearchParams();
//   const [wishListItems, setwishListItems] = useState<Iproduct[]>([]);
//   const [showToast, setShowToast] = useState(false);

//   // Fetch Wishlist Items from Local Storage and Add New Items from Query Params
//   useEffect(() => {
//     try {
//       const wishlist = localStorage.getItem("wishlist");
//       const updatedWishlist = wishlist ? JSON.parse(wishlist) : [];

//       const name = searchParam.get("name");
//       const price = searchParam.get("price");
//       const description = searchParam.get("description");
//       const image = searchParam.get("image");

//       if (name && price && description && image) {
//         const isDuplicate = updatedWishlist.some(
//           (item: Iproduct) => item.name === name
//         );

//         if (!isDuplicate) {
//           updatedWishlist.push({ name, price, description, image, quantity: 1 });
//           setShowToast(true);

//           setTimeout(() => {
//             setShowToast(false);
//           }, 3000);
//         }

//         localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));
//         setwishListItems(updatedWishlist);
//         router.replace("/wishlist");
//       } else {
//         setwishListItems(updatedWishlist);
//       }
//     } catch (error) {
//       console.error("Error loading wishlist items:", error);
//     }
//   }, [searchParam, router]);

//   // Remove Item from Wishlist
//   const handleRemoveItem = (index: number) => {
//     const updatedWishlist = [...wishListItems];
//     updatedWishlist.splice(index, 1);
//     localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));
//     setwishListItems(updatedWishlist);
//   };

//   return (
//     <div className="container mx-auto px-4 py-8 mt-10">
//       {/* Toast Notification */}
//       {showToast && (
//         <div className="fixed top-4 right-4 bg-green-600 text-white px-4 py-2 rounded-md shadow-md">
//           Item added to wishlist!
//         </div>
//       )}

//       {/* Wishlist Section */}
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//         <div className="col-span-full">
//           <h1 className="text-2xl md:text-3xl font-medium mb-6 text-center">
//             Your Wishlist
//           </h1>
//         </div>
//         <div className="col-span-full md:col-span-2">
//           {wishListItems.length > 0 ? (
//             wishListItems.map((item, index) => (
//               <div
//                 key={index}
//                 className="flex flex-col sm:flex-row items-center justify-between mb-6 border-b pb-4"
//               >
//                 <div className="flex items-center gap-4 w-full">
//                   <Image
//                     src={item.image}
//                     alt={item.name}
//                     width={80}
//                     height={80}
//                     className="w-20 h-20 sm:w-24 sm:h-24"
//                   />
//                   <div className="flex-1">
//                     <h3 className="font-medium text-center sm:text-left">
//                       {item.name}
//                     </h3>
//                     <p className="text-sm text-gray-600 text-center sm:text-left">
//                       {item.description}
//                     </p>
//                     <p className="text-sm font-medium text-center sm:text-left">
//                       ₹ {Number(item.price) * item.quantity}
//                     </p>
//                   </div>
//                 </div>
//                 <div className="mt-4 sm:mt-0 sm:ml-4">
//                   <button
//                     onClick={() => handleRemoveItem(index)}
//                     className="text-red-500 underline text-sm sm:text-base"
//                   >
//                     Remove from wishlist
//                   </button>
//                 </div>
//               </div>
//             ))
//           ) : (
//             <p className="text-center">Your wishlist is empty.</p>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }

// app/wishlist/page.tsx
"use client";

import { Suspense } from "react";
import Wishlist from "../components/Wishlist";

export default function WishlistPage() {
  return (
    <Suspense fallback={<div>Loading Wishlist...</div>}>
      <Wishlist />
    </Suspense>
  );
}


