"use client";
import React, { useEffect, useRef } from "react";
import { useCart } from "../(pages)/cartContext/page";

function CartSidebar({ isCartOpen, toggleCart }) {
  const { cartItems, removeFromCart, increaseQuantity, decreaseQuantity } = useCart();
  const sidebarRef = useRef(null);

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.quantity * item.discountPrice,
    0
  );

  // Close the sidebar when clicking outside of it
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        toggleCart();
      }
    };

    if (isCartOpen) {
      document.addEventListener("mousedown", handleOutsideClick);
    }

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [isCartOpen, toggleCart]);

  return (
    <div
      className={`fixed top-0 right-0 h-full w-80 bg-white shadow-lg transform ${
        isCartOpen ? "translate-x-0" : "translate-x-full"
      } transition-transform duration-300 z-50`}
      ref={sidebarRef}
    >
      {/* Close Button */}
      <button
        onClick={toggleCart}
        className="text-3xl font-bold p-1  w-full text-right"
      >
        ×
      </button>

      <div className="p-4">
        <h1 className="text-2xl font-bold mb-4">Your Cart</h1>
        {cartItems.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <div>
            <ul className="space-y-4">
              {cartItems.map((item) => (
                <li key={item.id} className="flex justify-between items-center">
                  <div>
                    <p className="font-medium">{item.name}</p>
                    <p className="text-sm text-gray-500">
                      ₹{item.discountPrice} x {item.quantity}
                    </p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <button
                      className="bg-gray-200 px-2 rounded"
                      onClick={() => increaseQuantity(item.id)}
                    >
                      +
                    </button>
                    <button
                      className="bg-gray-200 text-center px-2 rounded"
                      onClick={() => decreaseQuantity(item.id)}
                    >
                      -
                    </button>
                    <button
                      className="text-red-500 text-2xl text-center font-bold"
                      onClick={() => removeFromCart(item.id)}
                    >
                      x
                    </button>
                  </div>
                </li>
              ))}
            </ul>
            <h2 className="mt-4 text-lg font-bold">Total: ₹{totalPrice}</h2>
          </div>
        )}
      </div>
    </div>
  );
}

export default CartSidebar;
