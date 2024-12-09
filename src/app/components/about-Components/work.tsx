import Image from "next/image";
import React from "react";

const Work = () => {
  return (
    <div className="bg-[#2A7CC7] w-[1440px] h-[636px] px-4 mb-12 mx-auto">
      <div className="flex flex-col md:flex-row items-center justify-between h-full">
        {/* Text Section */}
        <div className="text-left w-full md:w-[438px] -mt-[40px] ml-20 p-4 md:p-8">
          <h3 className="text-[#FFFFFF] font-bold text-[16px] mb-4 md:mb-6">
            WORK WITH US
          </h3>
          <h2 className="text-[#FFFFFF] text-nowrap font-bold text-[28px] md:text-[40px] mb-4 md:mb-6">
            Now Let&apos;s grow Yours
          </h2>
          <p className="text-[#FFFFFF] text-[10px] font-light md:text-[16px] mb-6">
            The gradual accumulation of information about atomic and
            small-scale behavior during the first quarter of the 20th
          </p>
          <button className="border px-6 py-2 md:px-9 md:py-3 text-[#FFFFFF] rounded-lg transition-transform hover:scale-110 hover:bg-[#1E6CB3] hover:border-white">
            Button
          </button>
        </div>

        {/* Image Section */}
        <div className="md:w-[590px] md:h-[640px]">
          <Image
            src="/images/about/work.png"
            alt="work"
            width={590}
            height={640}
            className="w-full h-full object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default Work;
