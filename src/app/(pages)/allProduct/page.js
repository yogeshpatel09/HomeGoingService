"use client"
import React from 'react';
import data from '@/app/data'; // Adjust the path based on your folder structure
import { useCart } from '../cartContext/page';

function Page() {
  const { addToCart } = useCart();

  const products = data.categories.flatMap((category) => category.products);

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold text-start mb-6">All Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="border rounded-lg p-4 bg-white shadow-md flex flex-col items-center"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-24 h-24 object-cover text-center rounded-full mb-3"
            />
            <h3 className="text-lg font-medium mb-2">{product.name}</h3>
            <p className="text-sm text-gray-500 text-center mb-2">
              {product.description}
            </p>
            <p className="text-lg font-bold mb-4">
              ₹{product.discountPrice}{' '}
              <span className="text-sm text-gray-400 line-through">
                ₹{product.price}
              </span>
            </p>
            <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
            onClick={addToCart}
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Page;
