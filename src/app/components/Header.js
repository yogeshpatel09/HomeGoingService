// app/components/Header.js
"use client";
import React, { useState } from "react";
import Link from "next/link";
import { FaLuggageCart, FaSearch, FaUser, FaWhatsapp } from "react-icons/fa";
import { useCart } from "../(pages)/cartContext/page";
import CartSidebar from "./CartSidebar";

function Header() {
  const { cartCount } = useCart();
  const [isCartOpen, setIsCartOpen] = useState(false);

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  return (
    <>
      <header>
        <div className="w-full flex items-center justify-between px-4 py-2 shadow-md">
          <Link href={'/'} className="w-1/3 flex items-center justify-around">
            <img
              className="h-12"
              src="https://img.thecdn.in/278804/cat/284549_cat-1730035020233.jpg?height=200&format=webp"
              alt=""
            />
            <div>
              <h1 className="font-bold text-sm sm:text-base md:text-lg">HOME GOING SERVICE</h1>
              <p className="text-xs sm:text-sm px-1 -m-1">All documentary solutions</p>
            </div>
          </Link>

          <div className="w-1/2 flex justify-center">
            <div className="flex justify-center items-center border rounded-xl px-1 py-1 w-[90%]">
              <input type="text" className="outline-none w-full" placeholder="Search" />
              <FaSearch />
            </div>
          </div>

          <div className="w-1/3 flex gap-6 justify-center items-center">
            <Link href={"/Login"}>
              <FaUser className="text-2xl" />
            </Link>
            <div className="relative" onClick={toggleCart}>
              <FaLuggageCart className="text-2xl cursor-pointer" />
              {cartCount > 0 && (
                <span className="h-5 w-5 bg-blue-600 text-xs flex justify-center items-center rounded-full absolute -top-2 -right-2 font-semibold">
                  {cartCount}
                </span>
              )}
            </div>
            <Link href={"https://www.whatsapp.com/"}>
              <FaWhatsapp className="text-2xl" />
            </Link>
          </div>
        </div>
      </header>

      {/* Cart Sidebar */}
      <CartSidebar isCartOpen={isCartOpen} toggleCart={toggleCart} />
    </>
  );
}

export default Header;
