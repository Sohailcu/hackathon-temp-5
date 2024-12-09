import React from "react";
import { FaInstagram, FaFacebook, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-white text-gray-700">
      <div className="container mx-auto px-6 py-4">
        <div>
          <div className="w-full h-[75px] flex items-center justify-between bg-gray-100 px-4 mb-4 shadow-lg">
            {/* Left Side: Logo */}
            <div className="flex items-center">
              <span className="text-2xl text-[#252B42] font-bold ml-6">Bandage</span>
            </div>
            <span className="flex items-center space-x-4">
              {/* Social Media Icons */}
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <FaInstagram className="h-[18px] w-[18px] text-blue-500 hover:text-pink-500" />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <FaFacebook className="h-[18px] w-[18px] text-blue-500 hover:text-blue-500" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <FaTwitter className="h-[18px] w-[18px] text-blue-500 hover:text-blue-400" />
              </a>
            </span>
          </div>
        </div>
        {/* Top Section */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-start space-y-6 md:space-y-0 mt-12 -ml-10">
          {/* Logo and Social Icons */}
          <div className="flex flex-col items-center md:items-start">
          </div>
          {/* Links Section */}
          <div className="flex flex-wrap justify-center md:justify-start space-x-0 md:space-x-16 space-y-6 md:space-y-0 -ml-14 mt-20">
            {/* Column 1 */}
            <div className="w-1/2 sm:w-auto">
              <h3 className="font-bold text-[16px] text-[#252B42]">Company Info</h3>
              <ul className="mt-4 space-y-2 text-[#737373] text-[14px] font-bold">
                <li><a href="#" className="hover:text-blue-500" >About Us</a></li>
                <li><a href="#" className="hover:text-blue-500">Carrier</a></li>
                <li><a href="#" className="hover:text-blue-500">We are hiring</a></li>
                <li><a href="#" className="hover:text-blue-500">Blog</a></li>
              </ul>
            </div>
            {/* Column 2 */}
            <div className="w-1/2 sm:w-auto">
              <h3 className="font-bold text-[16px] text-gray-800">Legal</h3>
              <ul className="mt-4 space-y-2 text-[#737373] text-[14px] font-bold">
                <li><a href="#" className="hover:text-blue-500">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-blue-500">Terms of Service</a></li>
                <li><a href="#" className="hover:text-blue-500">Cookies</a></li>
                <li><a href="#" className="hover:text-blue-500">License</a></li>
              </ul>
            </div>
            {/* Column 3 */}
            <div className="w-1/2 sm:w-auto">
              <h3 className="font-bold text-[16px] text-gray-800">Features</h3>
              <ul className="mt-4 space-y-2 text-[#737373] text-[14px] font-bold">
                <li><a href="#" className="hover:text-blue-500">Business Marketing</a></li>
                <li><a href="#" className="hover:text-blue-500">User Analytics</a></li>
                <li><a href="#" className="hover:text-blue-500">Live Chat</a></li>
                <li><a href="#" className="hover:text-blue-500">Unlimited Support</a></li>
              </ul>
            </div>
            {/* Column 4 */}
            <div className="w-1/2 sm:w-auto">
              <h3 className="font-bold text-[16px] text-gray-800">Resources</h3>
              <ul className="mt-4 space-y-2 text-[#737373] text-[14px] font-bold">
                <li><a href="#" className="hover:text-blue-500">iOS & Android</a></li>
                <li><a href="#" className="hover:text-blue-500">Watch a Demo</a></li>
                <li><a href="#" className="hover:text-blue-500">Customers</a></li>
                <li><a href="#" className="hover:text-blue-500">API</a></li>
              </ul>
            </div>
          </div>

          {/* Newsletter Section */}
          <div className="flex flex-col items-center md:items-start mr-6">
            <h3 className="font-semibold text-gray-800">Get In Touch</h3>
            <form className="mt-4 w-full sm:w-auto">
              <div className="flex flex-col sm:flex-row">
                <input
                  type="email"
                  placeholder="Your Email"
                  className="p-2 w-full border border-gray-300 rounded-t-md sm:rounded-l-md sm:rounded-t-none focus:outline-none focus:ring focus:ring-blue-300"
                />
                <button
                  type="submit"
                  className="bg-blue-500 text-white px-4 py-2 rounded-b-md sm:rounded-l-none sm:rounded-r-md hover:bg-blue-600"
                >
                  Subscribe
                </button>
              </div>
              <p className="mt-2 text-sm text-gray-500 text-center sm:text-left">
                Lore imp sum dolor Amit.
              </p>
            </form>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="w-full h-[40px] text-gry-600 text-sm mt-14 flex items-center justify-between bg-gray-100 px-4 mb-4 shadow-lg">
          Made With Love By Finland All Right Reserved
        </div>
      </div>
    </footer>
  );
};

export default Footer;