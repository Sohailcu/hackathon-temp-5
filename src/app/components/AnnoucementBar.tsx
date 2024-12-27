import React from 'react';
import { FaPhoneAlt, FaEnvelope } from 'react-icons/fa'; // Import for icons
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa'; // Social media icons

const Navbar = () => {
    return (
        <div className="w-full bg-[#252B42] text-white">
            <div className="flex flex-col sm:flex-row justify-between items-center px-4 py-4 text-sm">
                {/* Contact Info */}
                <div className="flex items-center space-x-2 sm:space-x-4">
                    <FaPhoneAlt className="h-4 w-4" />
                    <span>(225) 555-0118</span>

                    <span className="hidden sm:inline">|</span>

                    <FaEnvelope className="h-4 w-4" />
                    <span>michelle.rivera@example.com</span>
                </div>

                {/* Follow Us Text */}
                <div className="mt-2 sm:mt-0 text-center flex flex-col sm:flex-row items-center sm:space-x-4">
                    <p className="text-xs sm:text-sm md:text-base">
                        Follow Us and Get a chance to Win up to 80% off
                    </p>
                </div>

                {/* Social Media Icons */}
                <div className="flex items-center space-x-4 mt-2 sm:mt-0">
                    <span className="text-sm font-semibold hidden md:block">
                        Follow Us:
                    </span>
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                        <FaInstagram className="h-5 w-5 hover:text-pink-500" />
                    </a>
                    <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
                        <FaYoutube className="h-5 w-5 hover:text-red-500" />
                    </a>
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                        <FaFacebook className="h-5 w-5 hover:text-blue-500" />
                    </a>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                        <FaTwitter className="h-5 w-5 hover:text-blue-400" />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
