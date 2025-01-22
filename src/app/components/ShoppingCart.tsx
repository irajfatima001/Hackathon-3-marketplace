// components/ShoppingCart.tsx
"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

interface Iproduct {
  name: string;
  price: string;
  description: string;
  image: string;
  quantity: number;
}

export default function ShoppingCart() {
  const router = useRouter();
  const searchParam = useSearchParams();
  const [cartItems, setCartItems] = useState<Iproduct[]>([]);

  useEffect(() => {
    const cart = localStorage.getItem("cart");
    const updatedCart = cart ? JSON.parse(cart) : [];

    const name = searchParam.get("name");
    const price = searchParam.get("price");
    const description = searchParam.get("description");
    const image = searchParam.get("image");

    if (name && price && description && image) {
      const isDuplicate = updatedCart.some(
        (item: Iproduct) => item.name === name
      );

      if (!isDuplicate) {
        updatedCart.push({ name, price, description, image, quantity: 1 });
      }

      localStorage.setItem("cart", JSON.stringify(updatedCart));
      setCartItems(updatedCart);
      router.replace("/cart");
    } else {
      setCartItems(updatedCart);
    }
  }, [searchParam, router]);

  const handleRemoveItem = (index: number) => {
    const updatedCart = [...cartItems];
    updatedCart.splice(index, 1);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    setCartItems(updatedCart);
  };

  const handleQuantityChange = (index: number, quantity: number) => {
    if (quantity < 1) return;
    const updatedCart = [...cartItems];
    updatedCart[index].quantity = quantity;
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    setCartItems(updatedCart);
  };

  const calculateTotalPrice = () => {
    return cartItems.reduce(
      (total, item) => total + Number(item.price) * item.quantity,
      0
    );
  };

  return (
    <div className="container min-h-screen mx-auto px-4 py-8 mt-10">
      {/* Free Delivery Banner */}
      <div className="mb-8 bg-gray-50 p-4 rounded-lg">
        <div className="flex items-center justify-between">
          <p className="text-sm font-medium">Free Delivery</p>
          <p className="text-sm text-gray-600">
            Applies to orders of ₹14,000 or more.
          </p>
          <Link href="/shipment">
            <button className="text-sm text-blue-500 underline">
              View details
            </button>
          </Link>
        </div>
      </div>

      {/* Cart Section */}
      <div className="grid lg:grid-cols-3 gap-8">
        {/* Cart Items */}
        <div className="lg:col-span-2">
          <h1 className="text-2xl font-medium mb-6">Your Shopping Cart</h1>
          {cartItems.length > 0 ? (
            cartItems.map((item, index) => (
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
                    <p className="text-sm font-medium">
                      ₹ {Number(item.price) * item.quantity}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <input
                    type="number"
                    min={1}
                    value={item.quantity}
                    onChange={(e) =>
                      handleQuantityChange(index, Number(e.target.value))
                    }
                    className="w-12 border rounded px-2 text-center"
                  />
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
            <p>Your cart is empty.</p>
          )}
        </div>

        {/* Summary Section */}
        <div className="p-6 bg-gray-100 rounded-lg">
          <h2 className="text-xl font-medium mb-4">Summary</h2>
          <div className="mb-4">
            <div className="flex justify-between mb-2">
              <span className="text-sm">Subtotal</span>
              <span className="text-sm">₹ {calculateTotalPrice()}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm">Delivery</span>
              <span className="text-sm">Free</span>
            </div>
          </div>
          <div className="flex justify-between font-medium mb-6">
            <span>Total</span>
            <span>₹ {calculateTotalPrice()}</span>
          </div>
          <Link href="/checkout">
            <button className="w-full bg-blue-500 text-white py-2 rounded">
              Proceed to Checkout
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
