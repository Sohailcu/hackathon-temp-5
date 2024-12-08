"use client";
import { FaSearch, FaHeart, FaShoppingCart, FaUser } from 'react-icons/fa'; // Use react-icons
import Link from "next/link";
import { useState } from 'react';

function Header() {
  return (
    <main className="border-b-2 bg-neutral-100">
      <div className="w-full h-[65px] flex items-center justify-between bg-white px-4">
        {/* Left Side: Logo */}
        <div className="flex items-center">
          <h1 className="text-4xl text-[#252B42] font-bold ml-6">Bandage</h1>
        </div>

        {/* Center: Navigation Links */}
        <div className="flex-1 flex justify-center">
          <ul className="flex gap-x-[2px] text-[#737373] text-md font-normal opacity-90 -ml-48">
            <li className="p-4 hover:underline underline-offset-2 hover:text-black/90">
              <Link href="/">Home</Link>
            </li>
            <li className="p-4 hover:underline underline-offset-2 hover:text-black/90">
              <Link href="/shop">Shop</Link>
            </li>
            <li className="p-4 hover:underline underline-offset-2 hover:text-black/90">
              <Link href="/about">About</Link>
            </li>
            <li className="p-4 hover:underline underline-offset-2 hover:text-black/90">
              <Link href="/blog">Blog</Link>
            </li>
            <li className="p-4 hover:underline underline-offset-2 hover:text-black/90">
              <Link href="/contact">Contact</Link>
            </li>
            <li className="p-4 hover:underline underline-offset-2 hover:text-black/90">
              <Link href="/pages">Pages</Link>
            </li>
          </ul>
        </div>

        {/* Right Side: Login/Register and Icons */}
        <div className="flex items-center gap-x-4 mr-4">
          {/* Login/Register */}
          <span className="text-sm text-blue-400 hover:text-blue-500 mr-2 cursor-pointer flex items-center">
            <FaUser className="inline-block mr-2 w-[18] h-[18]" />Login / Register
          </span>

          {/* Search Icon */}
          <FaSearch className="w-[18] h-[18] text-blue-400 hover:text-blue-500 cursor-pointer" />

          {/* Shopping Cart Icon */}
          <FaShoppingCart className="w-[18] h-[18] text-blue-400 hover:text-blue-500 cursor-pointer" />

          {/* Heart Icon */}
          <FaHeart className="w-[18] h-[18] text-blue-400 hover:text-blue-500 cursor-pointer" />
        </div>
      </div>
    </main>
  );
}

export default Header;
