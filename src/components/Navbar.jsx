"use client";

import Link from "next/link";
import { useState } from "react";
import { IoMdClose } from "react-icons/io";
import { RiMenu3Line } from "react-icons/ri";
import { Pacifico } from "next/font/google";

const pacifico = Pacifico({
  subsets: ["latin"],
  weight: "400",
});

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="w-full flex justify-center">
      <div className="w-[90%] md:w-[80%] flex justify-between items-center px-6 py-3 relative rounded-full bg-white/10 backdrop-blur-md border border-white/20 shadow-lg">

        {/* Logo */}
        <h1 className={`text-2xl font-semibold tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-blue-700 ${pacifico.className}`}>
          Dulal Ahmed
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 text-gray-300 text-md">
          <li className="hover:text-white">
            <Link href="#project">Projects</Link>
          </li>

          <li className="hover:text-white">
            <Link href="#services">Services</Link>
          </li>

          <li className="hover:text-white">
            <Link href="#testimonials">Testimonials</Link>
          </li>

          <li className="hover:text-white">
            <Link href="#faqs">FAQs</Link>
          </li>
        </ul>

        {/* Button */}
        <button className="hidden md:inline-block bg-gradient-to-r from-blue-500 to-blue-700 text-white px-5 py-2 rounded-full text-sm hover:scale-105 transition">
          Book a call
        </button>

        {/* Mobile Icon */}
        <div className="md:hidden">
          {menuOpen ? (
            <IoMdClose
              className="text-red-600 text-3xl cursor-pointer"
              onClick={() => setMenuOpen(false)}
            />
          ) : (
            <RiMenu3Line
              className="text-blue-600 text-3xl cursor-pointer"
              onClick={() => setMenuOpen(true)}
            />
          )}
        </div>

        {/* Mobile Menu */}
        <ul
          className={`md:hidden absolute left-0 w-full bg-white shadow-md transition-all duration-900 ease-in-out ${
            menuOpen
              ? "top-16 opacity-100"
              : "-top-40 opacity-0 pointer-events-none"
          }`}
        >
          <li className="p-3 hover:bg-blue-500 hover:text-white">
            <Link href="#project">Projects</Link>
          </li>

          <li className="p-3 hover:bg-blue-500 hover:text-white">
            <Link href="#services">Services</Link>
          </li>

          <li className="p-3 hover:bg-blue-500 hover:text-white">
            <Link href="#testimonials">Testimonials</Link>
          </li>

          <li className="p-3 hover:bg-blue-500 hover:text-white">
            <Link href="#faqs">FAQs</Link>
          </li>
        </ul>

      </div>
    </nav>
  );
};

export default Navbar;