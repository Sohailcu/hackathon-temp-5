import { Link } from 'lucide-react';
import React from 'react';
import { FaTwitter, FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const PricingFAQ = () => {

    const faqs = [
        {
            question: 'How do I track my order?',
            answer:
                'Once your order is shipped, you’ll receive a confirmation email with a tracking number. Use this to track your package on our website or the carrier’s platform.',
        },
        {
            question: 'What is your return policy?',
            answer:
                'We offer a 30-day return policy for unused and undamaged items. Simply contact our support team to initiate the process.',
        },
        {
            question: 'Do you offer international shipping?',
            answer:
                'Yes, we ship internationally. Shipping times and costs vary based on your location. Check the shipping details at checkout for accurate estimates.',
        },
        {
            question: 'Can I change my order after placing it?',
            answer:
                'Order changes are possible within 24 hours of placing the order. Contact our customer support team immediately for assistance.',
        },
        {
            question: 'Do you provide discounts for bulk purchases?',
            answer:
                'Yes, we offer special discounts for bulk orders. Please contact our sales team for a custom quote based on your requirements.',
        },
        {
            question: 'What payment methods do you accept?',
            answer:
                'We accept all major credit cards, PayPal, and Apple Pay. Additional payment methods may be available based on your location.',
        },
    ];

    return (
        <div className="bg-white py-16 px-4 sm:px-8 lg:px-16">
            {/* Header */}
            <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-[#252B42]">Pricing FAQs</h2>
                <p className="mt-4 text-[20px] font-normal text-[#737373]">
                    Problems trying to resolve the conflict between <br /> the two major realms of Classical physics
                </p>
            </div>

            {/* FAQs */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {faqs.map((faq, index) => (
                    <div key={index} className="flex items-start space-x-4 px-12 m-4">
                        {/* Icon */}
                        <div className="text-blue-500 mt-1">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth="2"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M9 5l7 7-7 7"
                                />
                            </svg>
                        </div>
                        {/* Content */}
                        <div>
                            <h3 className="text-[16px] font-semibold text-[#252B42]">{faq.question}</h3>
                            <p className="mt-2 text-[14px] font-normal text-[#737373]">{faq.answer}</p>
                        </div>
                    </div>
                ))}
            </div>

            {/* Footer */}
            <div className="mt-16 text-center">
                <p className="text-[#737373] text-[20px]">
                    Haven’t got your answer?{' '}
                    <a href="/contact" className="text-blue-600 hover:underline">
                        Contact our support
                    </a>
                </p>
            </div>

            {/* Start Free Trial Section */}
            <div className="py-16 text-center mt-10">
                <h2 className="text-4xl font-bold text-[#252B42]">
                    Start your 14-day free trial
                </h2>
                <p className="text-[#737373] text-sm py-3 mx-auto">
                    Met minim Mollie non deserunt Alamo est sit cliquey dolor <br /> do
                    met sent. RELUIT official consequat.
                </p>
                <button className="mt-6 bg-[#23A6F0] rounded-md text-sm font-semibold text-white px-7 py-3 hover:bg-blue-500 hover:font-bold hover:text-sm">
                    Try it free now
                </button>

                <div className="flex justify-center mt-10 cursor-pointer duration-200">
                    <FaTwitter size={30} className="text-[#55ACEE] hover:animate-bounce hover:text-blue-500 mx-2" />
                    <FaFacebookF size={30} className="text-[#395185] hover:animate-bounce hover:text-blue-800 mx-2" />
                    <FaInstagram size={30} className="text-[#000000] hover:animate-bounce hover:text-gray-950 mx-2" />
                    <FaLinkedinIn size={30} className="text-[#0A66C2] hover:animate-bounce hover:text-blue-400 mx-2" />
                </div>
            </div>

        </div>
    );
};

export default PricingFAQ;
