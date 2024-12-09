"use client";
import { FaSearch, FaHeart, FaShoppingCart, FaUser } from 'react-icons/fa'; // Use react-icons
import Link from "next/link";
import { useState } from 'react';
import { FiSearch, FiShoppingCart, FiX, FiMenu, FiChevronDown, FiHeart, FiUser } from 'react-icons/fi';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <main className="border-b-2 bg-neutral-100">
      <div className="w-full h-[65px] flex items-center justify-between bg-white px-4">
        {/* Left Side: Logo */}
        <div className="flex items-center">
          <h1 className="text-4xl text-[#252B42] font-bold ml-6">Bandage</h1>
        </div>

        {/* Action Icons (Mobile and Desktop) */}
        <div className="flex items-center gap-4 md:hidden">
          <FiSearch className="text-2xl text-[#252B42] cursor-pointer" />
          <FiShoppingCart className="text-2xl text-[#252B42] cursor-pointer" />
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <FiX className="text-3xl text-[#252B42]" />
            ) : (
              <FiMenu className="text-3xl text-[#252B42]" />
            )}
          </button>
        </div>

        {/* Center: Navigation Links */}
        <div className="flex-1 flex justify-center">
          <ul className="flex gap-x-[2px] text-[#737373] text-md font-normal opacity-90 -ml-48">
            <li className="p-4 hover:underline underline-offset-2 hover:text-[#23A6F0]">
              <Link href="/">Home</Link>
            </li>
            <li className="relative group p-4 hover:underline underline-offset-2 hover:text-[#23A6F0]">
              <Link href="/shop" className="flex items-center justify-between w-full">
                <span>Shop</span>
                <span className="ml-2 group-hover:text-[#23A6F0] transition-all">
                  <FiChevronDown />
                </span>
              </Link>
            </li>
            <li className="p-4 hover:underline underline-offset-2 hover:text-[#23A6F0]">
              <Link href="/about">About</Link>
            </li>
            <li className="p-4 hover:underline underline-offset-2 hover:text-[#23A6F0]">
              <Link href="/blog">Blog</Link>
            </li>
            <li className="p-4 hover:underline underline-offset-2 hover:text-[#23A6F0]">
              <Link href="/contact">Contact</Link>
            </li>
            <li className="p-4 hover:underline underline-offset-2 hover:text-[#23A6F0]">
              <Link href="/pages">Pages</Link>
            </li>
          </ul>
        </div>

        {/* Right Side: Login/Register and Icons */}
        <div className="hidden md:flex items-center gap-x-4 mr-4">
          {/* Login/Register */}
          <span className="text-[15px] text-blue-400 hover:text-blue-600 mr-2 cursor-pointer flex items-center">
            <FiUser className="inline-block mr-2 w-[22] h-[22]" />Login / Register
          </span>

          {/* Search Icon */}
          <FiSearch className="w-[22] h-[22] text-blue-400 hover:text-blue-600 cursor-pointer" />

          {/* Shopping Cart Icon */}
          <FiShoppingCart className="w-[22] h-[22] text-blue-400 hover:text-blue-600 cursor-pointer" />

          {/* Heart Icon */}
          <FiHeart className="w-[22] h-[22] text-blue-400 hover:text-blue-600 cursor-pointer" />
        </div>
         {/* Mobile Menu */}
         <div
          className={`${
            isMenuOpen ? "block" : "hidden"
          } md:hidden bg-white shadow-md transition-all duration-300 ease-in-out`}
        >
          <ul className="flex flex-col gap-6 p-4 text-[20px] text-[#737373] text-center">
            <li>
              <Link href="/" className="hover:text-[#23A6F0] transition-all">
                Home
              </Link>
            </li>
            <li>
              <Link href="/product" className="hover:text-[#23A6F0] transition-all">
                Product
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="hover:text-[#23A6F0] transition-all"
              >
                Pricing
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="hover:text-[#23A6F0] transition-all"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </main>
  );
}

export default Header;
