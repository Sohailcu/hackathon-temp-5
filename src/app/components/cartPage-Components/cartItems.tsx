/* eslint-disable @next/next/no-img-element */
import React from 'react';
import Image from 'next/image';
import { FaEye, FaHeart } from 'react-icons/fa';
import { FiChevronRight } from 'react-icons/fi';
import { IoCartOutline } from 'react-icons/io5';

function CartItems() {
  return (
    <div>
      <section className="text-gray-600 body-font overflow-hidden">
        {/* Main Shop Page Section */}
        <div className="w-full h-[65px] flex items-center justify-between bg-[#FAFAFA] px-3">
          {/* Left Side: Logo */}
          <div className="flex items-center ml-8">
            <p className="text-md mt-1 text-[#252B42] font-bold">Home</p>
            <FiChevronRight className="text-[#BDBDBD] text-[24px] mt-1" />
            <p className="text-md mt-1 text-[#BDBDBD] font-bold">Shop</p>
          </div>
        </div>
        {/* Product Cart */}
        <div className="container px-5 py-16 mx-auto">
          <div className="lg:w-4/5 mx-auto flex flex-wrap">
            <img
              alt="ecommerce"
              className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
              src="/images/desk product/main-1.jpg"
            />
            <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
              <h1 className="text-[#252B42] text-2xl title-font font-medium mb-1">
                Floating Phone
              </h1>
              <div className="flex mb-4">
                <span className="flex items-center gap-1.5">
                  {[...Array(4)].map((_, index) => (
                    <svg
                      key={index}
                      fill="currentColor"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      className="w-[18px] h-[18px] text-[#F3CD03]"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                  ))}
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    className="w-[18px] h-[18px] text-[#F3CD03]"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                  <span className="text-[#737373] font-bold text-[14px] ml-3">
                    10 Reviews
                  </span>
                </span>
              </div>
              <div>
                <h1 className="title-font font-bold text-2xl text-[#252B42]">$1,139.33</h1>
                <p className="text-sm font-bold mt-2 text-[#737373]">
                  Availability : <span className="text-[#23A6F0]">In Stock</span>
                </p>
              </div>
              <p className="leading-relaxed mt-10 border-b-2 border-gray-200 mb-5 pb-5">
                Met minim Mollie non desert Alamo est sit cliquey dolor do met
                sent. RELIT official consequent door ENIM RELIT Mollie.
                Excitation venial consequent sent nostrum met.
              </p>
              <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
                <div className="flex">
                  <span className="mr-3">Color</span>
                  <button className="border-2 border-gray-200 ml-1 bg-blue-300 rounded-full w-6 h-6 focus:outline-none" />
                  <button className="border-2 border-gray-200 ml-1 bg-green-700 rounded-full w-6 h-6 focus:outline-none" />
                  <button className="border-2 border-gray-200 ml-1 bg-yellow-600 rounded-full w-6 h-6 focus:outline-none" />
                  <button className="border-2 border-gray-200 ml-1 bg-blue-800 rounded-full w-6 h-6 focus:outline-none" />
                </div>
              </div>
              <div className="flex">
                <button className="flex justify-center items-center text-white font-bold text-sm bg-[#23A6F0] border-0 py-2 px-10 focus:outline-none hover:bg-blue-500 rounded">
                  Select Option
                </button>
                <button className="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
                  <FaHeart size={18} className="text-black" />
                </button>
                <button className="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
                  <IoCartOutline size={18} className="text-black" />
                </button>
                <button className="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
                  <FaEye size={18} className="text-black" />
                </button>
              </div>
            </div>

            {/* Thumbnail Section */}
            <div className="flex mt-5 gap-4 w-[150px] h-[75px]">
                  <Image
                    src={`/images/desk product/single-product-1-thumb-2.jpg`}
                    alt={`Thumbnail`}
                    width={100}
                    height={100}
                    className="object-cover"
                  />
                   <Image
                    src={`/images/desk product/main-1.jpg`}
                    alt={`Thumbnail`}
                    width={100}
                    height={100}
                    className="object-cover"
                  />
                   <Image
                    src={`/images/desk product/7.jpg`}
                    alt={`Thumbnail`}
                    width={100}
                    height={100}
                    className="object-cover"
                  />
                </div>
            </div>
          </div>
      </section>
    </div>
  );
}

export default CartItems;
