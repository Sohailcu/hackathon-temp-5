import Image from "next/image";
import { FiChevronRight } from "react-icons/fi";

export default function Hero() {
    return (
        <div className="text-center py-10 px-4">
            {/* Title Section */}
            <h2 className="text-[#737373] font-bold text-[14px] md:text-[16px] mt-3">
                WHAT WE DO
            </h2>
            <h1 className="text-[32px] md:text-[48px] font-bold mt-2 text-[#252B42]">
                Innovation tailored for you
            </h1>
            <p className="text-[#252B42] mt-4 font-bold text-[12px] md:text-[14px] flex justify-center items-center gap-1">
                About <FiChevronRight className="text-[#BDBDBD] text-[20px] md:text-[25px]" />{" "}
                <span className="text-[#737373]">Team</span>
            </p>

            {/* Image Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-8 px-6">
                {/* First Image taking 2 columns on larger screens */}
                <div className="sm:col-span-2">
                    <Image
                        src="/images/desk/desk-1.png"
                        alt="desk-1"
                        height={530}
                        width={700}
                        className="w-full h-auto rounded-md"
                        priority
                    />
                </div>
                {/* Image Section Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-2 ml-1">
                    {/* Image 1 */}
                    <div className="relative w-full sm:w-[350px] lg:w-[320px] h-[260px]">
                        <Image
                            src="/images/desk/desk-2.png"
                            alt="desk-2"
                            height={260}
                            width={361}
                            className="w-full h-auto rounded-md sm:top-0 sm:left-[1070px]"
                        />
                    </div>

                    {/* Image 2 */}
                    <div className="relative w-full sm:w-[350px] lg:w-[320px] h-[260px] ml-44">
                        <Image
                            src="/images/desk/desk-3.png"
                            alt="desk-3"
                            height={260}
                            width={361}
                            className="w-full h-auto rounded-md transform rotate-360 sm:top-0 sm:left-[1440px]"
                        />
                    </div>

                    {/* Image 3 */}
                    <div className="relative w-full sm:w-[350px] lg:w-[320px] h-[260px] -mt-5">
                        <Image
                            src="/images/desk/desk-4.png"
                            alt="desk-4"
                            height={260}
                            width={361}
                            className="w-full h-auto rounded-md sm:top-[270px] sm:left-[1070px]"
                        />
                    </div>

                    {/* Image 4 */}
                    <div className="relative w-full sm:w-[350px] lg:w-[320px] h-[260px] ml-44 -mt-5">
                        <Image
                            src="/images/desk/desk-5.png"
                            alt="desk-5"
                            height={260}
                            width={361}
                            className="w-full h-auto rounded-md sm:top-[270px] sm:left-[1040px]"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
