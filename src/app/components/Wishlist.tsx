"use client";

import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

interface Iproduct {
  name: string;
  price: string;
  description: string;
  image: string;
}

export default function Wishlist() {
  const searchParam = useSearchParams();
  const [wishlist, setWishlist] = useState<Iproduct[]>([]);

  useEffect(() => {
    const storedWishlist = localStorage.getItem("wishlist");
    const updatedWishlist: Iproduct[] = storedWishlist
      ? JSON.parse(storedWishlist)
      : [];

    const name = searchParam.get("name");
    const price = searchParam.get("price");
    const description = searchParam.get("description");
    const image = searchParam.get("image");

    if (name && price && description && image) {
      // Check if product already exists in wishlist
      const isDuplicate = updatedWishlist.some(
        (item) => item.name === name && item.price === price
      );

      if (!isDuplicate) {
        updatedWishlist.push({ name, price, description, image });
        localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));
        setWishlist(updatedWishlist);
      } else {
        setWishlist(updatedWishlist); // Ensure wishlist remains intact if duplicate
      }
    } else {
      setWishlist(updatedWishlist); // Load wishlist on initial render
    }
  }, [searchParam]);

  const handleRemoveItem = (index: number) => {
    const updatedWishlist = [...wishlist];
    updatedWishlist.splice(index, 1);
    localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));
    setWishlist(updatedWishlist);
  };

  return (
    <div className="container min-h-screen mx-auto px-4 py-8">
      <h1 className="text-2xl font-medium mb-6">Your Wishlist</h1>
      {wishlist.length > 0 ? (
        wishlist.map((item, index) => (
          <div
            key={index}
            className="flex items-center justify-between mb-6 border-b pb-4"
          >
            <div className="flex items-center gap-4">
              <Image
                src={item.image}
                alt={item.name}
                width={80}
                height={80}
                className="rounded-md"
              />
              <div>
                <h3 className="font-medium">{item.name}</h3>
                <p className="text-sm text-gray-600">{item.description}</p>
                <p className="text-sm font-medium">₹ {item.price}</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <button
                onClick={() => handleRemoveItem(index)}
                className="text-red-500 underline"
              >
                Remove
              </button>
            </div>
          </div>
        ))
      ) : (
        <p>Your wishlist is empty.</p>
      )}
    </div>
  );
}
