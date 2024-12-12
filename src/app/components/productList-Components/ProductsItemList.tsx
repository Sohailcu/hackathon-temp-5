/* eslint-disable @next/next/no-img-element */
import React from 'react';

function ItemList() {
  return (
    <div>
      <div className="bg-white py-2">
        {/* Grid Section */}
        <section className="text-gray-600 body-font">
          <div className="container px-6 py-24 mx-auto">
            <div className="flex flex-wrap -m-4 justify-between">
              {/* One Product */}
              <div className="lg:w-1/4 md:w-1/2 sm:w-full p-4">
                <a className="block relative h-[415px] rounded overflow-hidden">
                  <img
                    alt="product"
                    className="object-cover object-center w-full h-full block"
                    src="/images/shop/1.png"
                  />
                </a>
                <div className="mt-4 py-4 text-center ">
                  <h2 className="text-gray-900 title-font text-lg font-Montserrat font-medium">
                    Modern Art Canvas
                  </h2>
                  <h3 className="text-gray-700 text-sm tracking-widest font-semibold title-font mb-1 mt-2">
                    Abstract Art Collection
                  </h3>
                  <p className="mt-2 text-gray-400 font-semibold">
                    $32.99 <span className="line-through text-green-800">$48.99</span>
                  </p>
                  {/* Color selection options */}
                  <div className="mt-4 flex justify-center space-x-2">
                    <span className="w-4 h-4 bg-blue-400 rounded-full block"></span>
                    <span className="w-4 h-4 bg-green-700 rounded-full block"></span>
                    <span className="w-4 h-4 bg-yellow-600 rounded-full block"></span>
                    <span className="w-4 h-4 bg-blue-900 rounded-full block"></span>
                  </div>
                </div>
              </div>
              {/* Two Product */}
              <div className="lg:w-1/4 md:w-1/2 sm:w-full p-4">
                <a className="block relative h-[415px] rounded overflow-hidden">
                  <img
                    alt="product"
                    className="object-cover object-center w-full h-full block"
                    src="/images/shop/2.jpg"
                  />
                </a>
                <div className="mt-4 py-4 text-center ">
                  <h2 className="text-gray-900 title-font text-lg font-Montserrat font-medium">
                    Elegant Wood Sculpture
                  </h2>
                  <h3 className="text-gray-700 text-sm tracking-widest font-semibold title-font mb-1 mt-2">
                    Premium Handmade Decor
                  </h3>
                  <p className="mt-2 text-gray-400 font-semibold">
                    $59.99 <span className="line-through text-green-800">$75.99</span>
                  </p>
                  {/* Color selection options */}
                  <div className="mt-4 flex justify-center space-x-2">
                    <span className="w-4 h-4 bg-green-800 rounded-full block"></span>
                    <span className="w-4 h-4 bg-blue-700 rounded-full block"></span>
                    <span className="w-4 h-4 bg-yellow-400 rounded-full block"></span>
                    <span className="w-4 h-4 bg-blue-200 rounded-full block"></span>
                  </div>
                </div>
              </div>
              {/* Three Product */}
              <div className="lg:w-1/4 md:w-1/2 sm:w-full p-4">
                <a className="block relative h-[415px] rounded overflow-hidden">
                  <img
                    alt="product"
                    className="object-cover object-center w-full h-full block"
                    src="/images/shop/3.png"
                  />
                </a>
                <div className="mt-4 py-4 text-center ">
                  <h2 className="text-gray-900 title-font text-lg font-Montserrat font-medium">
                    Vintage Desk Lamp
                  </h2>
                  <h3 className="text-gray-700 text-sm tracking-widest font-semibold title-font mb-1 mt-2">
                    Retro Lighting Series
                  </h3>
                  <p className="mt-2 text-gray-400 font-semibold">
                    $48.49 <span className="line-through text-green-800">$64.49</span>
                  </p>
                  {/* Color selection options */}
                  <div className="mt-4 flex justify-center space-x-2">
                    <span className="w-4 h-4 bg-blue-900 rounded-full block"></span>
                    <span className="w-4 h-4 bg-yellow-600 rounded-full block"></span>
                    <span className="w-4 h-4 bg-green-700 rounded-full block"></span>
                    <span className="w-4 h-4 bg-blue-400 rounded-full block"></span>
                  </div>
                </div>
              </div>
              {/* Four Product */}
              <div className="lg:w-1/4 md:w-1/2 sm:w-full p-4">
                <a className="block relative h-[415px] rounded overflow-hidden">
                  <img
                    alt="product"
                    className="object-cover object-center w-full h-full block"
                    src="/images/shop/4.png"
                  />
                </a>
                <div className="mt-4 py-4 text-center ">
                  <h2 className="text-gray-900 title-font text-lg font-Montserrat font-medium">
                    Handmade Ceramic Pot
                  </h2>
                  <h3 className="text-gray-700 text-sm tracking-widest font-semibold title-font mb-1 mt-2">
                    Rustic Home Decor
                  </h3>
                  <p className="mt-2 text-gray-400 font-semibold">
                    $23.99 <span className="line-through text-green-800">$35.99</span>
                  </p>
                  {/* Color selection options */}
                  <div className="mt-4 flex justify-center space-x-2">
                    <span className="w-4 h-4 bg-yellow-600 rounded-full block"></span>
                    <span className="w-4 h-4 bg-blue-900 rounded-full block"></span>
                    <span className="w-4 h-4 bg-green-700 rounded-full block"></span>
                    <span className="w-4 h-4 bg-blue-400 rounded-full block"></span>
                  </div>
                </div>
              </div>
              {/* Five Product */}
              <div className="lg:w-1/4 md:w-1/2 sm:w-full p-4">
                <a className="block relative h-[415px] rounded overflow-hidden">
                  <img
                    alt="product"
                    className="object-cover object-center w-full h-full block"
                    src="/images/shop/5.png"
                  />
                </a>
                <div className="mt-4 py-4 text-center ">
                  <h2 className="text-gray-900 title-font text-lg font-Montserrat font-medium">
                    Modern Art Canvas
                  </h2>
                  <h3 className="text-gray-700 text-sm tracking-widest font-semibold title-font mb-1 mt-2">
                    Abstract Art Collection
                  </h3>
                  <p className="mt-2 text-gray-400 font-semibold">
                    $32.99 <span className="line-through text-green-800">$48.99</span>
                  </p>
                  {/* Color selection options */}
                  <div className="mt-4 flex justify-center space-x-2">
                    <span className="w-4 h-4 bg-blue-400 rounded-full block"></span>
                    <span className="w-4 h-4 bg-green-700 rounded-full block"></span>
                    <span className="w-4 h-4 bg-yellow-600 rounded-full block"></span>
                    <span className="w-4 h-4 bg-blue-900 rounded-full block"></span>
                  </div>
                </div>
              </div>
              {/* Six Product */}
              <div className="lg:w-1/4 md:w-1/2 sm:w-full p-4">
                <a className="block relative h-[415px] rounded overflow-hidden">
                  <img
                    alt="product"
                    className="object-cover object-center w-full h-full block"
                    src="/images/shop/6.png"
                  />
                </a>
                <div className="mt-4 py-4 text-center ">
                  <h2 className="text-gray-900 title-font text-lg font-Montserrat font-medium">
                    Elegant Wood Sculpture
                  </h2>
                  <h3 className="text-gray-700 text-sm tracking-widest font-semibold title-font mb-1 mt-2">
                    Premium Handmade Decor
                  </h3>
                  <p className="mt-2 text-gray-400 font-semibold">
                    $59.99 <span className="line-through text-green-800">$75.99</span>
                  </p>
                  {/* Color selection options */}
                  <div className="mt-4 flex justify-center space-x-2">
                    <span className="w-4 h-4 bg-green-800 rounded-full block"></span>
                    <span className="w-4 h-4 bg-blue-700 rounded-full block"></span>
                    <span className="w-4 h-4 bg-yellow-400 rounded-full block"></span>
                    <span className="w-4 h-4 bg-blue-200 rounded-full block"></span>
                  </div>
                </div>
              </div>
              {/* Seven Product */}
              <div className="lg:w-1/4 md:w-1/2 sm:w-full p-4">
                <a className="block relative h-[415px] rounded overflow-hidden">
                  <img
                    alt="product"
                    className="object-cover object-center w-full h-full block"
                    src="/images/shop/7.png"
                  />
                </a>
                <div className="mt-4 py-4 text-center ">
                  <h2 className="text-gray-900 title-font text-lg font-Montserrat font-medium">
                    Vintage Desk Lamp
                  </h2>
                  <h3 className="text-gray-700 text-sm tracking-widest font-semibold title-font mb-1 mt-2">
                    Retro Lighting Series
                  </h3>
                  <p className="mt-2 text-gray-400 font-semibold">
                    $48.49 <span className="line-through text-green-800">$64.49</span>
                  </p>
                  {/* Color selection options */}
                  <div className="mt-4 flex justify-center space-x-2">
                    <span className="w-4 h-4 bg-blue-900 rounded-full block"></span>
                    <span className="w-4 h-4 bg-yellow-600 rounded-full block"></span>
                    <span className="w-4 h-4 bg-green-700 rounded-full block"></span>
                    <span className="w-4 h-4 bg-blue-400 rounded-full block"></span>
                  </div>
                </div>
              </div>
              {/* Eight Product */}
              <div className="lg:w-1/4 md:w-1/2 sm:w-full p-4">
                <a className="block relative h-[415px] rounded overflow-hidden">
                  <img
                    alt="product"
                    className="object-cover object-center w-full h-full block"
                    src="/images/shop/8.png"
                  />
                </a>
                <div className="mt-4 py-4 text-center ">
                  <h2 className="text-gray-900 title-font text-lg font-Montserrat font-medium">
                    Handmade Ceramic Pot
                  </h2>
                  <h3 className="text-gray-700 text-sm tracking-widest font-semibold title-font mb-1 mt-2">
                    Rustic Home Decor
                  </h3>
                  <p className="mt-2 text-gray-400 font-semibold">
                    $23.99 <span className="line-through text-green-800">$35.99</span>
                  </p>
                  {/* Color selection options */}
                  <div className="mt-4 flex justify-center space-x-2">
                    <span className="w-4 h-4 bg-yellow-600 rounded-full block"></span>
                    <span className="w-4 h-4 bg-blue-900 rounded-full block"></span>
                    <span className="w-4 h-4 bg-green-700 rounded-full block"></span>
                    <span className="w-4 h-4 bg-blue-400 rounded-full block"></span>
                  </div>
                </div>
              </div>
              {/* Nine Product */}
              <div className="lg:w-1/4 md:w-1/2 sm:w-full p-4">
                <a className="block relative h-[415px] rounded overflow-hidden">
                  <img
                    alt="product"
                    className="object-cover object-center w-full h-full block"
                    src="/images/shop/9.png"
                  />
                </a>
                <div className="mt-4 py-4 text-center ">
                  <h2 className="text-gray-900 title-font text-lg font-Montserrat font-medium">
                    Handmade Ceramic Pot
                  </h2>
                  <h3 className="text-gray-700 text-sm tracking-widest font-semibold title-font mb-1 mt-2">
                    Rustic Home Decor
                  </h3>
                  <p className="mt-2 text-gray-400 font-semibold">
                    $23.99 <span className="line-through text-green-800">$35.99</span>
                  </p>
                  {/* Color selection options */}
                  <div className="mt-4 flex justify-center space-x-2">
                    <span className="w-4 h-4 bg-yellow-600 rounded-full block"></span>
                    <span className="w-4 h-4 bg-blue-900 rounded-full block"></span>
                    <span className="w-4 h-4 bg-green-700 rounded-full block"></span>
                    <span className="w-4 h-4 bg-blue-400 rounded-full block"></span>
                  </div>
                </div>
              </div>
              {/* Ten Product */}
              <div className="lg:w-1/4 md:w-1/2 sm:w-full p-4">
                <a className="block relative h-[415px] rounded overflow-hidden">
                  <img
                    alt="product"
                    className="object-cover object-center w-full h-full block"
                    src="/images/shop/10.png"
                  />
                </a>
                <div className="mt-4 py-4 text-center ">
                  <h2 className="text-gray-900 title-font text-lg font-Montserrat font-medium">
                    Handmade Ceramic Pot
                  </h2>
                  <h3 className="text-gray-700 text-sm tracking-widest font-semibold title-font mb-1 mt-2">
                    Rustic Home Decor
                  </h3>
                  <p className="mt-2 text-gray-400 font-semibold">
                    $23.99 <span className="line-through text-green-800">$35.99</span>
                  </p>
                  {/* Color selection options */}
                  <div className="mt-4 flex justify-center space-x-2">
                    <span className="w-4 h-4 bg-yellow-600 rounded-full block"></span>
                    <span className="w-4 h-4 bg-blue-900 rounded-full block"></span>
                    <span className="w-4 h-4 bg-green-700 rounded-full block"></span>
                    <span className="w-4 h-4 bg-blue-400 rounded-full block"></span>
                  </div>
                </div>
              </div>
              {/* Eleven Product */}
              <div className="lg:w-1/4 md:w-1/2 sm:w-full p-4">
                <a className="block relative h-[415px] rounded overflow-hidden">
                  <img
                    alt="product"
                    className="object-cover object-center w-full h-full block"
                    src="/images/shop/11.png"
                  />
                </a>
                <div className="mt-4 py-4 text-center ">
                  <h2 className="text-gray-900 title-font text-lg font-Montserrat font-medium">
                    Handmade Ceramic Pot
                  </h2>
                  <h3 className="text-gray-700 text-sm tracking-widest font-semibold title-font mb-1 mt-2">
                    Rustic Home Decor
                  </h3>
                  <p className="mt-2 text-gray-400 font-semibold">
                    $23.99 <span className="line-through text-green-800">$35.99</span>
                  </p>
                  {/* Color selection options */}
                  <div className="mt-4 flex justify-center space-x-2">
                    <span className="w-4 h-4 bg-yellow-600 rounded-full block"></span>
                    <span className="w-4 h-4 bg-blue-900 rounded-full block"></span>
                    <span className="w-4 h-4 bg-green-700 rounded-full block"></span>
                    <span className="w-4 h-4 bg-blue-400 rounded-full block"></span>
                  </div>
                </div>
              </div>
              {/* Tweleve Product */}
              <div className="lg:w-1/4 md:w-1/2 sm:w-full p-4">
                <a className="block relative h-[415px] rounded overflow-hidden">
                  <img
                    alt="product"
                    className="object-cover object-center w-full h-full block"
                    src="/images/shop/12.png"
                  />
                </a>
                <div className="mt-4 py-4 text-center ">
                  <h2 className="text-gray-900 title-font text-lg font-Montserrat font-medium">
                    Handmade Ceramic Pot
                  </h2>
                  <h3 className="text-gray-700 text-sm tracking-widest font-semibold title-font mb-1 mt-2">
                    Rustic Home Decor
                  </h3>
                  <p className="mt-2 text-gray-400 font-semibold">
                    $23.99 <span className="line-through text-green-800">$35.99</span>
                  </p>
                  {/* Color selection options */}
                  <div className="mt-4 flex justify-center space-x-2">
                    <span className="w-4 h-4 bg-yellow-600 rounded-full block"></span>
                    <span className="w-4 h-4 bg-blue-900 rounded-full block"></span>
                    <span className="w-4 h-4 bg-green-700 rounded-full block"></span>
                    <span className="w-4 h-4 bg-blue-400 rounded-full block"></span>
                  </div>
                </div>
              </div>
              {/* Button Option */}
              <div className="flex items-center justify-center gap-1 p-4 mx-[435px] my-[50] mt-10 bg-white border border-gray-200 rounded-lg">
                {/* First Button */}
                <button
                  className="px-6 py-8 text-gray-500 bg-[#F3F3F3] border border-gray-300 rounded"
                  disabled
                >
                  First
                </button>

                {/* Page Numbers */}
                <button className="px-6 py-8 text-blue-500 border border-gray-300 rounded hover:bg-gray-100">
                  1
                </button>
                <button className="px-6 py-8 text-white bg-blue-500 border border-blue-500 rounded">
                  2
                </button>
                <button className="px-6 py-8 text-blue-500 border border-gray-300 rounded hover:bg-gray-100">
                  3
                </button>

                {/* Next Button */}
                <button className="px-6 py-8 text-blue-500 bg-white border border-gray-300 rounded hover:bg-gray-100">
                  Next
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default ItemList;
