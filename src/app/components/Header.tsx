"use client";
import { FaSearch, FaHeart, FaShoppingCart, FaUser } from "react-icons/fa"; // Use react-icons
import Link from "next/link";
import { useState } from "react";
import { FiSearch, FiShoppingCart, FiX, FiMenu, FiChevronDown, FiHeart, FiUser } from "react-icons/fi";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <main className="border-b-2 bg-neutral-100">
      <div className="w-full h-[65px] flex items-center justify-between bg-white px-4">
        {/* Left Side: Logo */}
        <div className="flex items-center">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl text-[#252B42] font-bold ml-4 lg:ml-6">
            Bandage
          </h1>
        </div>

        {/* Mobile Icons */}
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
        <div className="hidden md:flex-1 md:flex justify-center">
          <ul className="flex gap-x-[10px] text-[#737373] text-xs md:text-sm lg:text-[16px] font-normal opacity-90">
            <li className="p-4 hover:underline underline-offset-2 hover:text-[#23A6F0]">
              <Link href="/">Home</Link>
            </li>
            <li className="relative group p-4 hover:underline underline-offset-2 hover:text-[#23A6F0]">
              <Link href="/cart" className="flex items-center">
                <span>Shop</span>
                <FiChevronDown className="ml-1 group-hover:text-[#23A6F0]" />
              </Link>
            </li>
            <li className="p-4 hover:underline underline-offset-2 hover:text-[#23A6F0]">
              <Link href="/product">Product</Link>
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
              <Link href="/team">Pages</Link>
            </li>
          </ul>
        </div>

        {/* Right Side: Login/Register and Icons */}
        <div className="hidden md:flex items-center gap-4 mr-4">
          <Link href="/signup">
            <span className="text-sm lg:text-[16px] text-blue-400 hover:text-blue-600 flex items-center cursor-pointer mr-4">
              <FiUser className="inline-block mr-2" />
              Login / Register
            </span>
          </Link>
          <FiSearch className="text-lg text-blue-400 hover:text-blue-600 cursor-pointer" />
          <FiShoppingCart className="text-lg text-blue-400 hover:text-blue-600 cursor-pointer" />
          <FiHeart className="text-lg text-blue-400 hover:text-blue-600 cursor-pointer" />
        </div>

        {/* Mobile Menu */}
        <div
          className={`${
            isMenuOpen ? "block" : "hidden"
          } md:hidden bg-white shadow-md transition-all duration-300 ease-in-out absolute top-[65px] left-0 w-full`}
        >
          <ul className="flex flex-col gap-6 p-4 text-base text-[#737373] text-center">
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
              <Link href="/about" className="hover:text-[#23A6F0] transition-all">
                About
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-[#23A6F0] transition-all">
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
