import Image from "next/image";
import React from "react";

const BigCompanies = () => {
  return (
    <div className="bg-[#FAFAFA] mt-10 py-11">
      {/* Heading and description */}
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-[40px] font-bold text-[#252B42]">Big Companies Are Here</h1>
        <p className="text-[#737373] text-[14px] font-normal mt-3 text-center">
          Problems trying to resolve the conflict between
          <br />
          the two major realms of Classical physics: Newtonian mechanics
        </p>
      </div>

      {/* Companies logos section */}
      <div className="mt-12 flex justify-center items-center">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 w-full md:w-[80%] lg:w-[70%] pb-5">
          {/* Image 1 */}
          <div className="relative group">
            <Image
              src="/images/about/fa-brands-1.png"
              alt="hooli"
              width={70}
              height={50}
              className="w-full h-full object-contain border transition-all duration-300 ease-in-out group-hover:grayscale-0 group-hover:scale-105 group-hover:border-[#23A6F0]"
            />
          </div>
          {/* Image 2 */}
          <div className="relative group">
            <Image
              src="/images/about/fa-brands-2.png"
              alt="lyat"
              width={70}
              height={50}
              className="w-full h-full object-contain border transition-all duration-300 ease-in-out group-hover:grayscale-0 group-hover:scale-105 group-hover:border-[#23A6F0] grayscale"
            />
          </div>
          {/* Image 3 */}
          <div className="relative group">
            <Image
              src="/images/about/fa-brands-3.png"
              alt="tree"
              width={70}
              height={50}
              className="w-full h-full object-contain border transition-all duration-300 ease-in-out group-hover:grayscale-0 group-hover:scale-105 group-hover:border-[#23A6F0] grayscale"
            />
          </div>
          {/* Image 4 */}
          <div className="relative group">
            <Image
              src="/images/about/fa-brands-4.png"
              alt="strip"
              width={70}
              height={50}
              className="w-full h-full object-contain border transition-all duration-300 ease-in-out group-hover:grayscale-0 group-hover:scale-105 group-hover:border-[#23A6F0] grayscale"
            />
          </div>
          {/* Image 5 */}
          <div className="relative group">
            <Image
              src="/images/about/fa-brands-5.png"
              alt="aws"
              width={70}
              height={50}
              className="w-full h-full object-contain border transition-all duration-300 ease-in-out group-hover:grayscale-0 group-hover:scale-105 group-hover:border-[#23A6F0] grayscale"
            />
          </div>
          {/* Image 6 */}
          <div className="relative group">
            <Image
              src="/images/about/fa-brands-6.png"
              alt="bot"
              width={70}
              height={50}
              className="w-full h-full object-contain border transition-all duration-300 ease-in-out group-hover:grayscale-0 group-hover:scale-105 group-hover:border-[#23A6F0] grayscale"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BigCompanies;
