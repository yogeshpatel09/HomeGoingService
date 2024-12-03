"use client";

import React from "react";
import { useCart } from "../cartContext/page";

function Page() {
  const { cartItems, increaseQuantity, decreaseQuantity, removeFromCart } = useCart(); // Access cartItems and functions from context

  // Calculate the total price of the cart
  const totalPrice = cartItems.reduce((total, item) => {
    return total + item.discountPrice * item.quantity; // Sum up the price of each item multiplied by its quantity
  }, 0);

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-6 text-center">Your Cart</h1>
      {cartItems.length === 0 ? (
        <p className="text-center text-gray-500">Your cart is empty.</p>
      ) : (
        <div className="flex flex-col items-center bg-white rounded-md">
          {cartItems.map((item, index) => (
            <div
              key={index}
              className="w-full max-w-4xl flex flex-col sm:flex-row items-center justify-between border-b py-4"
            >
              {/* Product Info */}
              <div className="flex items-center gap-4 w-full sm:w-2/3">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-20 h-20 object-cover rounded-lg"
                />
                <div>
                  <h3 className="text-lg font-medium">{item.name}</h3>
                  <p className="text-sm text-gray-500">{item.description}</p>
                </div>
              </div>

              {/* Price and Action */}
              <div className="flex flex-col items-end w-full sm:w-1/3 mt-4 sm:mt-0">
                <p className="text-lg font-bold">
                  ₹{item.discountPrice}{" "}
                  <span className="text-sm text-gray-400 line-through">
                    ₹{item.price}
                  </span>
                </p>

                {/* Quantity Controls */}
                <div className="flex items-center gap-4 mt-2">
                  <button
                    className="bg-gray-200 text-lg px-4 py-2 rounded-lg"
                    onClick={() => decreaseQuantity(item.id)}
                  >
                    -
                  </button>
                  <span className="text-lg">{item.quantity}</span>
                  <button
                    className="bg-gray-200 text-lg px-4 py-2 rounded-lg"
                    onClick={() => increaseQuantity(item.id)}
                  >
                    +
                  </button>
                </div>

                {/* Remove Button */}
                <button
                  className="mt-4 text-red-600 hover:text-red-800"
                  onClick={() => removeFromCart(item.id)}
                >
                  <span className="text-lg font-bold">Remove</span>
                </button>
              </div>
            </div>
          ))}

          {/* Total Price */}
          <div className="mt-6 text-lg font-semibold">
            <p className="text-right">Total Price: ₹{totalPrice.toFixed(2)}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default Page;
