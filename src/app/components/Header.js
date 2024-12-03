"use client";
import Link from 'next/link';
import React from 'react';
import { FaLuggageCart, FaSearch, FaUser, FaWhatsapp } from "react-icons/fa";
import { useCart } from '../(pages)/cartContext/page';

function Header() {
  const { cartCount } = useCart(); // Access cartCount from context

  return (
    <div>
      <header>
        <div className="w-full flex items-center justify-between px-4 py-2 shadow-md">
          <div className="w-full sm:w-1/3 flex items-center justify-around">
            <img className="h-12" src="https://img.thecdn.in/278804/cat/284549_cat-1730035020233.jpg?height=200&format=webp" alt="Logo" />
            <div>
              <h1 className="font-bold text-sm sm:text-base md:text-lg">HOME GOING SERVICE</h1>
              <p className="text-xs sm:text-sm px-1 -m-1">All documentary solutions</p>
            </div>
          </div>

          <div className="w-full  sm:w-1/2 flex justify-center mt-2 sm:mt-0">
            <div className="flex  justify-center items-center border rounded-xl px-2 py-1 w-[90%]">
              <input type="text" className="outline-none w-full" placeholder="Search" />
              <FaSearch className="ml-2" />
            </div>
          </div>

          <div className="w-full sm:w-1/3 flex gap-6 justify-center items-center mt-2 sm:mt-0">
            <Link href={'/LogIn'}>
              <FaUser className="text-2xl" />
            </Link>

            {/* Cart Link with Badge */}
            <Link href={'/cart'} className="relative">
              <FaLuggageCart className="text-2xl" />
              {cartCount > 0 && (
                <span className="h-5 w-5 bg-blue-600 text-xs flex justify-center items-center rounded-full absolute -top-2 -right-2 font-semibold">
                  {cartCount}
                </span>
              )}
            </Link>

            <Link href={'https://www.whatsapp.com/'}>
              <FaWhatsapp className="text-2xl" />
            </Link>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Header;
