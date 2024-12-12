/* eslint-disable @next/next/no-img-element */
import React from 'react'
import { FiChevronRight } from 'react-icons/fi'
import { FaTh, FaList, FaChevronDown } from "react-icons/fa"; // Import specific icons

function ProductPage() {
    return (
        <>
            {/* Main Shop Page Section */}
            <div className="w-full h-[65px] flex items-center justify-between bg-[#FAFAFA] px-3">
                {/* Left Side: Logo */}
                <div className="flex items-center">
                    <h1 className="text-2xl text-[#252B42] font-bold ml-8">Shop</h1>
                </div>
                <div className="flex items-center mr-6">
                    <p className="text-sm mt-1 text-[#252B42] font-bold">Home</p>
                    <FiChevronRight className="text-[#BDBDBD] text-[20px] mt-1" />
                    <p className="text-sm mt-1 text-[#BDBDBD] font-bold">Shop</p>
                </div>
            </div>
            {/* Product List */}
            <div className="w-full h-[271px] flex items-center justify-between bg-[#FAFAFA] px-3" >
                <div className='w-[1088px] h-[271px] mx-[176px]'>
                    <div className='flex flex-col-5 gap-2 w-[1088px] h-[223px]'>
                        {/* 1st */}
                        <div
                            className='w-[205px] h-[223px] relative'
                            style={{
                                backgroundImage: "url('/images/shopproduct/Shop-p1.png')", // Replace with your image path
                                backgroundSize: "cover",
                                backgroundPosition: "right center",
                                backgroundRepeat: "no-repeat",
                            }}
                        >
                            {/* Dark overlay */}
                            <div className="absolute inset-0 bg-black opacity-5"></div>

                            {/* Centering the text */}
                            <div className='flex flex-col items-center justify-center text-[#FFFFFF] gap-2 z-10'>
                                <h1 className='text-[16px] mt-20 font-bold'>Clothes</h1>
                                <p className='text-[14px] font-normal'>5 Items</p>
                            </div>
                        </div>
                        {/* 2nd */}
                        <div
                            className='w-[205px] h-[223px] relative'
                            style={{
                                backgroundImage: "url('/images/shopproduct/Shop-p2.jpg')", // Replace with your image path
                                backgroundSize: "cover",
                                backgroundPosition: "right center",
                                backgroundRepeat: "no-repeat",
                            }}
                        >
                            {/* Dark overlay */}
                            <div className="absolute inset-0 bg-black opacity-15 z-0"></div>

                            {/* Centering the text */}
                            <div className='flex flex-col items-center justify-center text-white gap-2 z-10'>
                                <h1 className='text-[16px] mt-20 font-bold'>Clothes</h1>
                                <p className='text-[14px] font-normal'>5 Items</p>
                            </div>
                        </div>
                        {/* 3rd */}
                        <div
                            className='w-[205px] h-[223px] relative'
                            style={{
                                backgroundImage: "url('/images/shopproduct/Shop-p3.png')", // Replace with your image path
                                backgroundSize: "cover",
                                backgroundPosition: "right center",
                                backgroundRepeat: "no-repeat",
                            }}
                        >
                            {/* Dark overlay */}
                            <div className="absolute inset-0 bg-black opacity-5"></div>

                            {/* Centering the text */}
                            <div className='flex flex-col items-center justify-center text-[#FFFFFF] gap-2 z-10'>
                                <h1 className='text-[16px] mt-20 font-bold'>Clothes</h1>
                                <p className='text-[14px] font-normal'>5 Items</p>
                            </div>
                        </div>
                        {/* 4th */}
                        <div
                            className='w-[205px] h-[223px] relative'
                            style={{
                                backgroundImage: "url('/images/shopproduct/Shop-p4.png')", // Replace with your image path
                                backgroundSize: "cover",
                                backgroundPosition: "right center",
                                backgroundRepeat: "no-repeat",
                            }}
                        >
                            {/* Dark overlay */}
                            <div className="absolute inset-0 bg-black opacity-5"></div>

                            {/* Centering the text */}
                            <div className='flex flex-col items-center justify-center text-[#FFFFFF] gap-2 z-10'>
                                <h1 className='text-[16px] mt-20 font-bold'>Clothes</h1>
                                <p className='text-[14px] font-normal'>5 Items</p>
                            </div>
                        </div>
                        {/* 5th */}
                        <div
                            className='w-[205px] h-[223px] relative'
                            style={{
                                backgroundImage: "url('/images/shopproduct/Shop-p5.png')", // Replace with your image path
                                backgroundSize: "cover",
                                backgroundPosition: "right center",
                                backgroundRepeat: "no-repeat",
                            }}
                        >
                            {/* Dark overlay */}
                            <div className="absolute inset-0 bg-black opacity-5"></div>

                            {/* Centering the text */}
                            <div className='flex flex-col items-center justify-center text-[#FFFFFF] gap-2 z-10'>
                                <h1 className='text-[16px] mt-20 font-bold'>Clothes</h1>
                                <p className='text-[14px] font-normal'>5 Items</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Button Section */}
            <div className="flex items-center justify-between mx-8 p-4 bg-white border border-gray-100 rounded-lg">
                {/* Left Section */}
                <div className="text-[#737373]">
                    Showing all <span className="font-bold">12</span> results
                </div>

                {/* Middle Section */}
                <div className="flex items-center gap-4">
                    <span className="text-gray-600">Views:</span>
                    {/* Grid View Icon */}
                    <button className="p-2 border border-gray-300 rounded focus:outline-none hover:bg-gray-100">
                        <FaTh className="text-gray-600" />
                    </button>
                    {/* List View Icon */}
                    <button className="p-2 border border-gray-300 rounded focus:outline-none hover:bg-gray-100">
                        <FaList className="text-gray-600" />
                    </button>
                </div>

                {/* Right Section */}
                <div className="flex items-center gap-4">
                    {/* Dropdown */}
                    <div className="relative">
                        <button className="flex items-center gap-2 px-4 py-2 text-gray-600 bg-white border border-gray-300 rounded hover:bg-gray-100 focus:outline-none">
                            Popularity
                            <FaChevronDown className="text-gray-500" />
                        </button>
                    </div>
                    {/* Filter Button */}
                    <button className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600 focus:outline-none">
                        Filter
                    </button>
                </div>
            </div>
            {/* Trusted By Section */}
            <div className="w-full h-[175px] bg-[#FAFAFA] ">
                <div className='flex justify-center gap-8 mt-4 align-middle bg-[#FAFAFA]'>
                    <img src="/images/icon/fa-brands-1.png" alt="Hooli" className="h-14 mt-14 cursor-pointer" />
                    <img src="/images/icon/fa-brands-2.png" alt="Lyft" className="h-14 mt-14 cursor-pointer" />
                    <img src="/images/icon/fa-brands-3.png" alt="leaf" className="h-14 mt-14 cursor-pointer" />
                    <img src="/images/icon/fa-brands-4.png" alt="stripe" className="h-14 mt-14 cursor-pointer" />
                    <img src="/images/icon/fa-brands-5.png" alt="aws" className="h-14 mt-14 cursor-pointer" />
                    <img src="/images/icon/fa-brands-6.png" alt="Google" className="h-14 mt-14 cursor-pointer" />
                </div>
            </div>

        </>
    )
}

export default ProductPage
