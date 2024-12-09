/* eslint-disable @next/next/no-img-element */
import React from 'react'
import { IoIosArrowForward } from 'react-icons/io'

function Futuredpost() {
    return (
        <div>
            <section className="text-gray-600 body-font">
                <div className="container px-5 py-24 mx-auto -mt-24 max-w-screen-lg"> {/* Adjust container width */}
                    {/* Heading */}
                    <div className="text-center mb-12 font-Montserrat">
                        <p className="text-blue-600 text-sm font-semibold mt-2 font-Montserrat">
                            Practice Advice
                        </p>
                        <h2 className="text-2xl lg:text-3xl font-bold text-[#252B42] font-Montserrat mt-3 capitalize">
                            Featured Posts
                        </h2>
                        <p className="text-[#737373] text-sm font-light mt-2 font-Montserrat">
                            Problems trying to resolve the conflict between <br />
                            the two major realms of Classical physics: Newtonian mechanics
                        </p>
                    </div>
                    <div className="flex flex-flex-nowrap justify-start -ml-14"> {/* Set items in one line */}
                        {/* Post-1 */}
                        <div className="p-4 w-[350px] h-[606px] mr-2">
                            <div className="rounded-lg w-[348px] h-[300px] overflow-hidden">
                                <img
                                    alt="content"
                                    className="object-cover object-center h-[300px] w-full"
                                    src="/images/future/FUT-1.png"
                                />
                            </div>
                            <ul className='inline-flex justify-between space-x-3 mt-3 -mb-4 font-Montserrat text-sm text-[#737373]'>
                                <li className='text-[#8EC2F2] cursor-pointer'>Google</li>
                                <li className='text-green-300 cursor-pointer'>Trending</li>
                                <li className='text-red-300 cursor-pointer'>New</li>
                            </ul>
                            <h2 className="text-xl font-normal title-font text-[#252B42] font-Montserrat mt-5">
                                Loudest à la Madison #1 <br />
                                (L&apos;integral)
                            </h2>
                            <p className="text-[14px] leading-relaxed mt-2 text-[#737373] font-Montserrat">
                                We focus on ergonomics and meeting <br />
                                you where you work. It&apos;s only a <br />
                                keystroke away.
                            </p>
                            <div className='inline-flex justify-start mt-4 items-center text-[#737373] text-[12px] font-Montserrat font-normal'>
                                <img src="/images/future/icon akar-icons-calendar.png"
                                    alt="time"
                                    className=''
                                />
                                <span className='ml-1'> 22 April 2021</span>
                                <img src="/images/future/icon ant-design-area-chart-outlined.png"
                                    alt="chart"
                                    className='ml-[124px]'
                                />
                                <span className='ml-1'>10 Comments</span>
                            </div>
                            <div>
                                <a className="text-[#737373] text-sm font-semibold font-Montserrat inline-flex items-center mt-6">
                                    Learn More
                                    <span><IoIosArrowForward className='text-blue-500 text-2xl ml-2 cursor-pointer' /></span>
                                </a>
                            </div>
                        </div>
                        {/* Post-2 */}
                        <div className="p-4 w-[350px] h-[606px] mr-2">
                            <div className="rounded-lg w-[348px] h-[300px] overflow-hidden">
                                <img
                                    alt="content"
                                    className="object-cover object-center h-full w-full"
                                    src="/images/future/FUT-2.png"
                                />
                            </div>
                            <ul className='inline-flex justify-between space-x-3 mt-3 -mb-4 font-Montserrat text-sm text-[#737373]'>
                                <li className='text-[#8EC2F2] cursor-pointer'>Google</li>
                                <li className='text-green-300 cursor-pointer'>Trending</li>
                                <li className='text-red-300 cursor-pointer'>New</li>
                            </ul>
                            <h2 className="text-xl font-normal title-font text-[#252B42] font-Montserrat mt-5">
                                Loudest à la Madison #2 <br />
                                (L&apos;integral)
                            </h2>
                            <p className="text-[14px] leading-relaxed mt-2 text-[#737373] font-Montserrat">
                                We focus on ergonomics and meeting <br />
                                you where you work. It&apos;s only a <br />
                                keystroke away.
                            </p>
                            <div className='inline-flex mt-4 items-center text-[#737373] text-[12px] font-Montserrat font-normal'>
                                <img src="/images/future/icon akar-icons-calendar.png"
                                    alt="time"
                                    className=''
                                />
                                <span className='ml-1'> 18 April 2022</span>
                                <img src="/images/future/icon ant-design-area-chart-outlined.png"
                                    alt="chart"
                                    className='ml-[124px]'
                                />
                                <span className='ml-1'>16 Comments</span>
                            </div>
                            <div>
                                <a className="text-[#737373] text-sm font-semibold font-Montserrat inline-flex items-center mt-6">
                                    Learn More
                                    <span><IoIosArrowForward className='text-blue-500 text-2xl ml-2 cursor-pointer' /></span>
                                </a>
                            </div>
                        </div>
                        {/* Post-3 */}
                        <div className="p-4 w-[350px] h-[606px] mr-2">
                            <div className="rounded-lg w-[348px] h-[300px] overflow-hidden">
                                <img
                                    alt="content"
                                    className="object-cover object-center h-full w-full"
                                    src="/images/future/FUT-3.png"
                                />
                            </div>
                            <ul className='inline-flex justify-between space-x-3 mt-3 -mb-4 font-Montserrat text-sm text-[#737373]'>
                                <li className='text-[#8EC2F2] cursor-pointer'>Google</li>
                                <li className='text-green-300 cursor-pointer'>Trending</li>
                                <li className='text-red-300 cursor-pointer'>New</li>
                            </ul>
                            <h2 className="text-xl font-normal title-font text-[#252B42] font-Montserrat mt-5">
                                Loudest à la Madison #2 <br />
                                (L&apos;integral)
                            </h2>
                            <p className="text-[14px] leading-relaxed mt-2 text-[#737373] font-Montserrat">
                                We focus on ergonomics and meeting <br />
                                you where you work. It&apos;s only a <br />
                                keystroke away.
                            </p>
                            <div className='inline-flex mt-4 items-center text-[#737373] text-[12px] font-Montserrat font-normal'>
                                <img src="/images/future/icon akar-icons-calendar.png"
                                    alt="time"
                                    className=''
                                />
                                <span className='ml-1'> 8 May 2021</span>
                                <img src="/images/future/icon ant-design-area-chart-outlined.png"
                                    alt="chart"
                                    className='ml-32'
                                />
                                <span className='ml-1'>25 Comments</span>
                            </div>
                            <div>
                                <a className="text-[#737373] text-sm font-semibold font-Montserrat inline-flex items-center mt-6">
                                    Learn More
                                    <span><IoIosArrowForward className='text-blue-500 text-2xl ml-2 cursor-pointer' /></span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Futuredpost
