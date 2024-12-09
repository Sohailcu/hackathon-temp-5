import React from 'react';

function HeroSection() {
  return (
    <div
      className="hero min-h-screen flex items-center w-full h-[716px] px-6 py-0"
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
        <div className="lg:w-1/2 text-left">
          <p className="text-sm font-semibold text-white uppercase mb-6 tracking-wide">
            Summer 2020
          </p>
          <h1 className="flex text-5xl lg:text-[64px] text-nowrap font-extrabold text-white mb-6 leading-tight">
            New Collection
          </h1>
          <p className="text-md lg:text-md text-white mb-10 -mr-10 leading-relaxed">
            We know how large objects will act, <br />but things on a small scale.
          </p>
          <button className="px-10 py-3 text-md font-semibold text-white bg-green-500 rounded-sm shadow-lg hover:bg-green-600 transition duration-200">
            Shop Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
