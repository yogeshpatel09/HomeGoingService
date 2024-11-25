"use client";

import React from "react";
import { useParams } from "next/navigation";
import { categoriesData, dummyProducts } from "@/app/data";
import Link from "next/link";

const ProductDetails = () => {
  const { id } = useParams(); // Get the route parameter directly
  const product = dummyProducts.find((item) => item.id === id);

  if (!product) return <p>Loading...</p>;

  return (
    <div className="px-4 sm:px-8 md:px-16 py-8">
      <h1 className="font-semibold text-2xl mb-8">{product.name}</h1>

      <div className="flex flex-col md:flex-row gap-8">
        {/* Product Image */}
        <Link href={`/pages/productDetails/${product.id}`} className="w-full md:w-1/2">
          <img
            src={product.category.image}
            alt={product.name}
            className="w-full max-h-[65vh] object-cover rounded-md"
          />
        </Link>

        {/* Product Details */}
        <div className="w-full md:w-1/2 flex flex-col justify-center">
          <p className="text-3xl font-bold">{product.name}</p>
          <div className="mt-4">
            <p className="text-xl font-semibold text-gray-800">
              ${product.hiddenprice.toFixed(2)}
            </p>
            {product.price && (
              <p className="text-sm text-gray-500 line-through">
                ${product.price}
              </p>
            )}
            {product.offer && (
              <p className="text-sm text-green-500 mt-1">{product.offer}</p>
            )}
          </div>
          <button className="mt-6 px-6 py-3 bg-blue-500 text-white rounded-md">
            Add to Cart
          </button>
        </div>
      </div>

      {/* Categories Section (Scroll horizontally on mobile) */}
      <div className="flex gap-4 overflow-x-auto mt-8">
        {categoriesData.map((category, index) => (
          <Link
            href={`/pages/productDetails/${product.id}`}
            key={index}
            className="p-4 min-w-[160px] max-w-[200px] border rounded-md shadow-lg"
          >
            <img
              src={category.image}
              alt={category.name}
              className="w-full h-40 object-cover rounded-md"
            />
            <h2 className="text-center font-medium mt-2">{category.name}</h2>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ProductDetails;
