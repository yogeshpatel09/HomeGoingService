// app/products/page.js
"use client";
import React, { useState } from "react";
import Image from "next/image";
import Fillter from "@/app/component/Fillter";
import Link from "next/link";
import { categoriesData, dummyProducts } from "@/app/data";
import { FiFilter } from "react-icons/fi"; // Import filter icon from react-icons

const Page = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="px-4 sm:px-8 md:px-16 lg:px-24 py-8 relative">
      
      {/* Filter Floating Action Button */}
      <div className="flex items-center mb-8">
        <button
          onClick={toggleSidebar}
          className="flex items-center px-3 py-2 mr-4 bg-blue-500 text-white rounded-full shadow-lg hover:bg-blue-600 focus:outline-none "
        >
          <FiFilter size={20} className="mr-2" />
          <span className="">Filter</span>
        </button>
        
        <h1 className="font-semibold text-2xl sm:text-3xl">All Products</h1>
      </div>

      <div className="w-full flex flex-col  gap-8">
        
        {/* Filter Sidebar */}
        <div
          className={`fixed inset-y-0 left-0 bg-white w-3/4 max-w-xs p-4 shadow-lg transform ${
            isSidebarOpen ? "translate-x-0" : "-translate-x-full"
          } transition-transform duration-300 ease-in-out  `}
        >
          <Fillter/>
          
          {/* Close Button for Sidebar on Small Screens */}
          <button
            onClick={toggleSidebar}
            className=" mt-4 px-4 py-2 bg-red-500 text-white rounded-md w-full hover:bg-red-600"
          >
            Close Filter
          </button>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-4 flex-1">
          {dummyProducts.map((product) => (
            <div key={product.id} className="border rounded-lg p-4 shadow-lg">
              <Link href={`/pages/productDetails/${product.id}`}>
                <img
                  src={product.category.image}
                  alt={product.name}
                  
                  className="w-full  object-cover rounded-md"
                />
              </Link>

              <h3 className="font-medium text-lg mt-3">{product.name}</h3>
              <p className="text-sm text-gray-600 mt-1">
                {product.category.name}
              </p>
              <p className="mt-2 text-xl font-semibold">
                ${product.hiddenprice.toFixed(2)}
                <span className="text-sm text-gray-500 line-through ml-2">
                  ${product.price.toFixed(2)}
                </span>
              </p>
              <p className="text-sm text-green-500 mt-1">{product.offer}</p>
              <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md w-full hover:bg-blue-600">
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Overlay for Sidebar */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 "
          onClick={toggleSidebar}
        ></div>
      )}
    </div>
  );
};

export default Page;
