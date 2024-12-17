/* eslint-disable @next/next/no-img-element */
import React from "react";
import { IoIosArrowForward } from "react-icons/io";

function ProductDisc() {
  return (
    <div className="relative w-full h-[772px] max-w-[1440px] mx-auto">
      {/* Background Image */}
      <div
        className="absolute inset-20 bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/desk product/Bg-pinkwhitewall.png')",
        }}
      ></div>

      {/* Main Content */}
      <div className="relative z-10 px-6 lg:px-20 py-12">
        {/* Navbar */}
        <nav className="flex w-full h-[72px] mt-10 mb-10 justify-center shadow-md">
          <ul className="flex space-x-10 text-center text-[#737373] font-bold text-[16px] mt-6 capitalize font-Montserrat">
            <li className="cursor-pointer hover:underline">Description</li>
            <li className="cursor-pointer hover:underline">Additional Information</li>
            <li className="cursor-pointer hover:underline">Reviews (0)</li>
          </ul>
        </nav>

        {/* Layout */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          {/* Left Side - Image */}
          <div className="w-full md:w-1/3 flex justify-center md:justify-start">
            <div className="w-[280px] h-[350px] rounded-lg overflow-hidden mt-2 shadow-lg opacity-90">
              <img
                src="/images/desk product/unsplash_QANOF9iJlFs.png"
                alt="Product"
                className="w-full h-full object-cover mt-2"
              />
            </div>
          </div>

          {/* Center - Section 1 */}
          <div className="w-full md:w-1/3 flex justify-center gap-4 mt-2">
            <div className="w-[360px] h-[450px] p-4 -ml-24 shadow-lg rounded-lg text-start">
              <h3 className="text-[24px] font-bold text-[#252B42] mt-10">The quick fox jumps over</h3>
              <p className="text-[#737373] text-[14px] font-normal leading-relaxed mt-4">
                Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.
                <br />
                <br />
                Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.
                <br />
                <br />
                Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.
              </p>
            </div>
          </div>

          {/* Right Side - Sections 2 & 3 */}
          <div className="w-full h-[367px] md:w-1/3 flex flex-col gap-4 items-end mx-6 my-2 -mt-8">
            {/* Section 2 */}
            <div className="w-[380px] h-[220px] p-4 px-2 shadow-lg rounded-lg mr-20">
              <h3 className="text-[24px] font-bold mb-4 mt-4 text-[#252B42]">The quick fox jumps over</h3>
              <ul className="text-[#737373] text-[14px] font-bold leading-relaxed space-y-2">
                <li className="flex items-center">
                  <IoIosArrowForward className="text-[#737373] w-6 h-6 mr-2" />
                  The quick fox jumps over the lazy dog
                </li>
                <li className="flex items-center">
                  <IoIosArrowForward className="text-[#737373] w-6 h-6 mr-2" />
                  The quick fox jumps over the lazy dog
                </li>
                <li className="flex items-center">
                  <IoIosArrowForward className="text-[#737373] w-6 h-6 mr-2" />
                  The quick fox jumps over the lazy dog
                </li>
                <li className="flex items-center">
                  <IoIosArrowForward className="text-[#737373] w-6 h-6 mr-2" />
                  The quick fox jumps over the lazy dog
                </li>
              </ul>
            </div>

            {/* Section 3 */}
            <div className="w-[380px] h-[220px] p-3 px-2 shadow-lg rounded-lg mr-20">
              <h3 className="text-[24px] font-bold mb-4 text-[#252B42]">The quick fox jumps over</h3>
              <ul className="text-[#737373] text-[14px] font-bold leading-relaxed space-y-2">
                <li className="flex items-center">  
                  <IoIosArrowForward className="text-[#737373] w-6 h-6 mr-2" />
                  The quick fox jumps over the lazy dog
                </li>
                <li className="flex items-center">
                  <IoIosArrowForward className="text-[#737373] w-6 h-6 mr-2" />
                  The quick fox jumps over the lazy dog
                </li>
                <li className="flex items-center">
                  <IoIosArrowForward className="text-[#737373] w-6 h-6 mr-2" />
                  The quick fox jumps over the lazy dog
                </li>
                <li className="flex items-center">
                  <IoIosArrowForward className="text-[#737373] w-6 h-6 mr-2" />
                  The quick fox jumps over the lazy dog
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDisc;
