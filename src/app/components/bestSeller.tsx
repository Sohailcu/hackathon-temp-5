/* eslint-disable @next/next/no-img-element */
import { client } from '@/sanity/lib/client';
import React from 'react';

async function getData() {
  const fetchData = await client.fetch(`*[_type == 'product'] {
    name,
    description,
    price,
    "imageUrl": image.asset->url,
    category,
    slug,
    color,
    stock
  }`);
  return fetchData;
}

const BestSeller = async () => {
  const data = await getData();

  return (
    <div className="bg-white py-16 mb-16">
      {/* Heading Section */}
      <div className="text-center mb-8 px-4">
        <p className="text-gray-600 text-sm sm:text-md font-Montserrat">
          Featured Products
        </p>
        <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-[#252B42] uppercase font-Montserrat mt-3">
          Best Seller Products
        </h2>
        <p className="text-gray-600 text-sm sm:text-md font-Montserrat mt-2">
          Explore our top-rated products, carefully curated just for you.
        </p>
      </div>

      {/* Product Grid */}
      <section className="container mx-auto px-6">
        {/* Grid with 4 columns and gap */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {data.map((product: any, index: number) => (
            <div
              key={index}
              className="border bg-gray-50 shadow-md rounded-lg p-4 transition-all hover:scale-105 hover:shadow-lg"
            >
              {/* Product Image */}
              <div className="block relative h-[300px] rounded overflow-hidden">
                <img
                  alt={product.name}
                  className="object-cover object-center w-full h-full block"
                  src={product.imageUrl}
                />
              </div>
              {/* Product Details */}
              <div className="mt-4 text-center">
                <h2 className="text-gray-900 title-font text-lg font-Montserrat font-medium">
                  {product.name}
                </h2>
                <p className="text-gray-600 text-sm mt-2">{product.description}</p>
                <p className="mt-2 text-gray-600 font-semibold">
                  Price: <span className="text-green-800">${product.price}</span>
                  <span className="ml-2 line-through text-red-500/80">$15.99</span>
                </p>
                <div className="mt-2">
                  {/* Color Selection Options */}
                  <div className="mt-4 flex justify-center space-x-2">
                    <span
                      className="w-4 h-4 rounded-full block cursor-pointer scale-100"
                      style={{
                        backgroundColor: product.color,
                        border: '1px solid #000',
                      }}
                    ></span>
                    <span className="w-4 h-4 bg-blue-600 rounded-full block cursor-pointer scale-100"></span>
                    <span className="w-4 h-4 bg-green-600 rounded-full block cursor-pointer scale-100"></span>
                    <span className="w-4 h-4 bg-yellow-500 rounded-full block cursor-pointer scale-100"></span>
                  </div>
                </div>
                <p className="text-gray-400 text-sm mt-3">
                  Stock Available: <span className="font-semibold">{product.stock}</span>
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default BestSeller;
