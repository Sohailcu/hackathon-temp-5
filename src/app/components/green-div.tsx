/* eslint-disable @next/next/no-img-element */
import Image from 'next/image';

export default function GreenDiv() {
    return (
        <div
            className="hero min-h-screen flex items-center w-full h-[432px] px-6 py-0"
            style={{
                backgroundImage: "url('/images/Hero/carouselgreen.png')", // Replace with your image path
                backgroundSize: "cover",
                backgroundPosition: "right center", // Adjusting the focus area
                backgroundRepeat: "no-repeat",
            }}
        >
            {/* Text Section */}
            <div className="w-[509px] h-[432px] pt-[60px] flex flex-col gap-[20px] mt-8 ml-40">
                <h4 className="font-Montserrat font-semibold text-[16px] leading-[30px] text-white">SUMMER 2020</h4>
                <h1 className="font-Montserrat font-bold text-[48px] leading-[80px] text-white">
                    Vita Classic <br className="-mt-4" /> Product
                </h1>
                <p className="font-Montserrat font-light text-[14px] leading-[20px] -mt-2 text-white">
                    We know how large objects will act, We know <br />
                    how are objects will act, We know
                </p>
                <div className="flex items-center gap-[34px]">
                    <h3 className="font-Montserrat font-bold text-[20px] leading-[32px] text-white">$16.48</h3>
                    <button className="px-8 py-2 text-md font-semibold text-white bg-green-500 
                                                rounded-sm shadow-lg hover:bg-green-600 transition duration-200">
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>
    );
}

