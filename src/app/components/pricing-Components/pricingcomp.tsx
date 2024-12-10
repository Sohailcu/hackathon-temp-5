"use client"

/* eslint-disable @next/next/no-img-element */
import React, { useState } from 'react';
import PricingPlans from './pricingPlans';
import { FiChevronRight } from 'react-icons/fi';

const PricingComp = () => {
    const [billingCycle, setBillingCycle] = useState('Monthly');

    const plans = [
        {
            name: 'FREE',
            price: { Monthly: '$0', Yearly: '$0' },
            description: 'Organize across all apps by hand',
            features: ['Unlimited product updates', '1GB Cloud storage', 'Email and community support'],
        },
        {
            name: 'STANDARD',
            price: { Monthly: '$9.99', Yearly: '$99.99' },
            description: 'Organize across all apps by hand',
            features: ['Unlimited product updates', '1GB Cloud storage', 'Email and community support'],
        },
        {
            name: 'PREMIUM',
            price: { Monthly: '$19.99', Yearly: '$199.99' },
            description: 'Organize across all apps by hand',
            features: ['Unlimited product updates', '1GB Cloud storage', 'Email and community support'],
        },
    ];

    return (
        <div className="bg-gray-50 py-16 px-4 sm:px-8 lg:px-16">
             {/* TOP Header */}
             <div className="text-center mb-8 py-12 p-8 -mt-14 bg-white">
                <h5 className="text-[16px] font-bold text-[#737373] uppercase">Pricing</h5>
                <h1 className="text-[48px] font-bold text-[#252B42]">Simple Pricing</h1>
                <p className="text-[#252B42] mt-6 font-bold text-[12px] md:text-[14px] flex justify-center items-center gap-2">
                Home <FiChevronRight className="text-[#BDBDBD] text-[20px] md:text-[25px]" />{" "}
                <span className="text-[#737373]">Pricing</span>
            </p>
            </div>
            {/* Header */}
            <div className="text-center mb-12">
                <h1 className="text-[40px] font-bold text-[#252B42]">Pricing</h1>
                <p className="mt-4 text-[14px] font-normal text-[#737373]">
                    Problems trying to resolve the conflict between <br /> the two major realms of Classical physics: Newtonian mechanics.
                </p>
            </div>

            {/* Toggle Switch */}
            <div className="flex justify-center items-center mb-12">
                <button
                    className={`px-4 py-2 text-[16px] font-bold ${billingCycle === 'Monthly' ? 'text-[#252B42]' : 'text-[#252B42]'
                        }`}
                    onClick={() => setBillingCycle('Monthly')}
                >
                    Monthly
                </button>
                <span>
                    <svg width="46" height="25" viewBox="0 0 46 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="1" y="0.5" width="44" height="24" rx="12" fill="white" />
                        <rect x="1" y="0.5" width="44" height="24" rx="12" stroke="#23A6F0" />
                        <circle cx="14" cy="12.5" r="9" fill="#EBEBEB" stroke="#D0D0D0" />
                    </svg>
                </span>
                <button
                    className={`px-4 py-2 text-[16px] font-bold ${billingCycle === 'Yearly' ? 'text-[#252B42]' : 'text-[#252B42]'
                        }`}
                    onClick={() => setBillingCycle('Yearly')}
                >
                    Yearly <span className="bg-[#B2E3FF] text-blue-500 rounded-full px-4 py-3 ml-3">Save 25%</span>
                </button>
            </div>
            {/* Pricing Cards */}
                    <div>
                        <PricingPlans/>
                    </div>
            {/* Trusted By Section */}
            <div className="mt-16 text-center">
                <h3 className="text-[20px] font-normal text-[#252B42] mb-8 capitalize">Trusted By Over 4000 Big Companies</h3>
                <div className="flex justify-center space-x-14">
                    <img src="/images/icon/fa-brands-1.png" alt="Hooli" className="h-9" />
                    <img src="/images/icon/fa-brands-2.png" alt="Lyft" className="h-9" />
                    <img src="/images/icon/fa-brands-3.png" alt="leaf" className="h-9" />
                    <img src="/images/icon/fa-brands-4.png" alt="stripe" className="h-9" />
                    <img src="/images/icon/fa-brands-5.png" alt="aws" className="h-9" />
                    <img src="/images/icon/fa-brands-6.png" alt="Google" className="h-9" />
                </div>
            </div>
        </div>
    );
};
export default PricingComp;
