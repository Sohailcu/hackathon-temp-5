/* eslint-disable react/jsx-no-undef */
/* eslint-disable @next/next/no-img-element */
import React from 'react';
import Image from 'next/image';

function Categories() {
  return (
    <div className="bg-white py-16">
      {/* Heading Section */}
      <div className="text-center mb-12">
        <h2 className="text-3xl lg:text-4xl font-bold font-Montserrat text-gray-900 uppercase">
          Editor&apos;s Pick
        </h2>
        <p className="text-gray-600 text-sm mt-2 font-Montserrat">
          Problems trying to resolve the conflict between
        </p>
      </div>

      {/* Grid Section */}
      {/* Images Section */}
      <div className="w-full justify-center h-[500px] flex gap-[30px]">
        {/* Men Image */}
        <div className="relative w-[510px] h-[500px]">
          <Image
            src="/images/Category/catgeory-Mens.jpg" // Replace with your image path
            alt="men"
            width={400}
            height={400}
            className="w-full h-full object-cover rounded-md"
          />
          <button className="absolute top-[434px] left-[101px] transform -translate-x-1/2 bg-white px-[50px] py-[10px] shadow-md font-Montserrat font-bold text-[#252B42] text-[16px] leading-[24px] hover:bg-gray-100">
            MEN
          </button>
        </div>
        {/* Women Image */}
        <div className="relative w-[240px] h-[500px]">
          <Image
            src="/images/Category/catgeory-women.jpg" // Replace with your image path
            alt="women"
            width={100}
            height={100}
            className="w-full h-full object-cover"
          />
          <button className="absolute top-[434px] left-[21px] w-[136px] h-[48px] px-[48px] py-[12px] flex items-center justify-center gap-[10px] bg-white shadow-md">
            <h2 className="font-Montserrat font-bold text-[16px] leading-[24px] text-[#252B42]">
              WOMEN
            </h2>
          </button>
        </div>
        {/* Accessories and Kids */}
        <div className="w-[240px] h-[500px] flex flex-col gap-[30px]">
          {/* Accessories Image */}
          <div className="relative w-[240px] h-[242px]">
            <Image
              src="/images/Category/catgeory-access.jpg" // Replace with your image path
              alt="Accessories"
              width={100}
              height={100}
              className="w-full h-full object-cover"
            />
            <button className="absolute top-[180px] left-[20px] w-[136px] h-[48px] px-[24px] py-[12px] flex items-center justify-center gap-[10px] bg-white  shadow-md">
              <h2 className="font-Montserrat font-bold text-[16px] leading-[24px] text-[#252B42]">
                ACCESSORIES
              </h2>
            </button>
          </div>
          {/* Kids Image */}
          <div className="relative w-[240px] h-[242px] -mt-3">
            <Image
              src="/images/Category/catgeory-boys.jpg" // Replace with your image path
              alt="Kids"
              width={100}
              height={100}
              className="w-full h-full object-cover"
            />
            <button className="absolute top-[180px] left-[20px] w-[136px] h-[48px] px-[24px] py-[12px] flex items-center justify-center gap-[10px] bg-white shadow-md">
              <h2 className="font-Montserrat font-bold text-[16px] leading-[24px] text-[#252B42]">
                KIDS
              </h2>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Categories;
