"use client"
import React from "react";
import data from '@/app/data' // Assuming data.js is in the same folder
import Link from "next/link";

function Landing() {
  const categories = data.categories;
  const products = categories.flatMap((category) => category.products).slice(0, 10);

  return (
    <div className="p-4">
      {/* Categories Section */}
      <h2 className="text-2xl font-bold mb-4">Categories</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4 mb-8">
        {categories.map((category) => (
          <div
            key={category.id}
            className="flex flex-col items-center"
          >
            <img
              src={category.image}
              alt={category.name}
              className="w-24 h-24 object-cover rounded-full mb-2 shadow-lg"
            />
            <h3 className="font-medium text-center">{category.name}</h3>
          </div>
        ))}
      </div>

      {/* Products Section */}
      <h2 className="text-2xl font-bold mb-4">Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-8">
        {products.map((product) => (
          <div
            key={product.id}
            className="flex flex-col items-center border rounded-lg p-4 bg-white shadow-md"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-20 h-20 object-cover rounded-full mb-2"
            />
            <h3 className="text-base font-medium mb-2">{product.name}</h3>
            <p className="text-sm text-gray-500 text-center mb-2">
              {product.description}
            </p>
            <p className="text-lg font-bold mb-4">
              ₹{product.discountPrice}{" "}
              <span className="text-sm text-gray-400 line-through">
                ₹{product.price}
              </span>
            </p>
            <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
              Add to Cart
            </button>
          </div>
        ))}
      </div>

      {/* View All Products Button */}
      <Link href={'/allProduct'} className="text-center">
        <button className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600">
          View All Products
        </button>
      </Link>
    </div>
  );
}

export default Landing;
