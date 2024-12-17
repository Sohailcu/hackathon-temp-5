import React from 'react';
import { FaPhoneAlt, FaEnvelope } from 'react-icons/fa'; // Correct import for FontAwesome icons
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa'; // Social media icons

const NavbarProduct = () => {
    return (
        <div className="w-full h-[58px] bg-[#23856D] text-white">
            <div className="flex justify-between items-center px-4 py-4 text-sm">
                <span className="flex items-center space-x-4">
                    {/* Phone Icon and Number */}
                    <FaPhoneAlt className="h-3 w-3 text-white" />
                    <span>(225) 555-0118</span>

                    {/* Space between Phone and Email */}
                    <span className="mx-2">|</span>

                    {/* Email Icon and Email */}
                    <FaEnvelope className="h-3 w-3 text-white" />
                    <span>michelle.rivera@example.com</span>
                </span>

                {/* Follow Us text */}
                <h1 className="flex justify-center text-center gap-10 ml-10 mr-10">
                    Follow Us and Get a chance to Win up to 80% off
                </h1>

                <h1 className="flex justify-center text-center gap-10 ml-10 -mr-36 font-semibold">
                    Follow Us :
                </h1>

                <span className="flex items-center space-x-4 ml-2">
                    {/* Social Media Icons */}
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                        <FaInstagram className="h-[18px] w-[18px] text-white hover:text-pink-500" />
                    </a>
                    <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
                        <FaYoutube className="h-[18px] w-[18px] text-white hover:text-red-500" />
                    </a>
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                        <FaFacebook className="h-[18px] w-[18px] text-white hover:text-blue-500" />
                    </a>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                        <FaTwitter className="h-[18px] w-[18px] text-white hover:text-blue-400" />
                    </a>
                </span>
            </div>
        </div>
    );
};

export default NavbarProduct;
