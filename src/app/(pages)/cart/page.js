// app/(pages)/cart/page.js
"use client";
import React from "react";
import { useCart } from "../cartContext/page";

function CartPage() {
  const { cartItems, removeFromCart, increaseQuantity, decreaseQuantity } = useCart();

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.quantity * item.discountPrice,
    0
  );

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold text-start mb-6">Your Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          <ul>
            {cartItems.map((item) => (
              <li key={item.id} className="border-b py-4 flex justify-between items-center">
                <div>
                  <p>{item.name}</p>
                  <p>₹{item.discountPrice} x {item.quantity}</p>
                </div>
                <div>
                  <button onClick={() => increaseQuantity(item.id)}>+</button>
                  <button onClick={() => decreaseQuantity(item.id)}>-</button>
                  <button onClick={() => removeFromCart(item.id)}>Remove</button>
                </div>
              </li>
            ))}
          </ul>
          <h2>Total: ₹{totalPrice}</h2>
        </div>
      )}
    </div>
  );
}

export default CartPage;
