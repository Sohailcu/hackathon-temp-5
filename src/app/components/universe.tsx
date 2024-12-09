/* eslint-disable @next/next/no-img-element */
import React from 'react'

function Universe() {
    return (
        <div>
            <section className="text-gray-600 body-font -mt-24">
                <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center ml-36">
                    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
                        <img
                            className="object-cover object-center rounded"
                            alt="hero"
                            src="/images/Hero/col-md-6.png"
                        />
                    </div>
                    <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center font-Montserrat">
                        <p className="mb-8 leading-relaxed font-semibold uppercase text-sm text-[#BDBDBD]">
                            Summer 2020
                        </p>
                        <h1 className="title-font sm:text-4xl text-2xl mb-4 font-semibold text-[#252B42]">
                            Part of the Neural
                            <br className="hidden lg:inline-block" />
                            Universe
                        </h1>
                        <p className="mb-8 leading-relaxed text-sm text-[#737373]">
                            We know how large objects will act,<br />
                            but things on a small scale.
                        </p>
                        <div className="flex justify-center">
                            {/* Green button */}
                            <button className="inline-flex text-white bg-green-500 py-2 px-6 hover:bg-white hover:text-green-500 ring-1 ring-green-500 hover:font-semibold rounded text-md">
                                Buy Now
                            </button>
                            {/* White button with green border */}
                            <button className="ml-3 inline-flex text-green-500 bg-white py-2 px-6 ring-1 ring-green-500 hover:bg-green-500 hover:text-white hover:font-semibold rounded text-md !important">
                                Read More
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Universe
