import Link from 'next/link';
import React from 'react';

function HeroSection() {
  return (
    <div
      className="hero min-h-screen flex items-center w-full h-[716px] px-6 py-0 sm:px-6 md:px-10"
      style={{
        backgroundImage: "url('/images/Hero/Hero-1.jpg')", // Replace with your image path
        backgroundSize: "cover",
        backgroundPosition: "right center", // Adjusting the focus area
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Content Section */}
      <div className="relative z-10 max-w-screen-xl mx-auto flex flex-col lg:flex-row items-start ml-56">
        {/* Text Content */}
        <div className="text-center lg:text-left lg:w-1/2">
        <p className="text-xs sm:text-sm md:text-base font-semibold text-white uppercase mb-4 tracking-wide">
            Summer 2020
          </p>
          <h1 className="flex text-3xl sm:text-4xl md:text-5xl lg:text-[64px] text-nowrap font-extrabold text-white mb-4 leading-snug lg:leading-tight">
            New Collection
          </h1>
          <p className="text-md sm:text-base md:text-md lg:text-md text-white mb-10 -mr-10 leading-relaxed">
            We know how large objects will act, <br className="hidden md:block" />but things on a small scale.
          </p>
          <Link href="/product">
            <button className="px-6 sm:px-8 py-2 sm:py-3 text-xs sm:text-sm md:text-base font-medium text-white bg-green-500 rounded-md shadow-lg hover:bg-green-600 transition duration-200">
              Shop Now
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
