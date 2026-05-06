"use client";


import Link from "next/link";
import { Pacifico } from "next/font/google";
import { useState } from "react";
import { IoMdClose } from "react-icons/io";
import { RiMenu3Line } from "react-icons/ri";


const pacifico = Pacifico({
  subsets: ["latin"],
  weight: "400",
});

const Navbar = () => {
   const [menuOpen, setMenuOpen] =useState(false);

  return (
   
     <nav className="w-full flex justify-center  ">
      <div className="w-[90%] md:w-[80%] flex justify-between items-center px-6 py-3 relative
        rounded-full 
        bg-white/0 
        backdrop-blur-md 
        border border-white/20 
        shadow-lg">

        {/* Logo */}
        <h1 className={`bg-linear-to-r from-blue-500 to-blue-700 bg-clip-text text-transparent font-semibold tracking-wide text-2xl ${pacifico.className}`}>
          Dulal Ahmed
        </h1>

        {/* Menu */}
        <ul className="hidden md:flex gap-8 text-gray-300 text-md">
          <li className="hover:text-white cursor-pointer "><Link href='#project'>Projects</Link></li>
          <li className="hover:text-white cursor-pointer">Services</li>
          <li className="hover:text-white cursor-pointer">Testimonials</li>
          <li className="hover:text-white cursor-pointer">FAQs</li>
        </ul>

        {/* Button */}
        <button className="bg-linear-to-r from-blue-500 to-blue-700 hidden md:inline-block
          text-white px-5 py-2 rounded-full text-sm 
          hover:scale-105 transition">
          Book a call
        </button>
          <div className="md:hidden">
        {menuOpen ? (
          <IoMdClose
            className="text-red-800 text-3xl cursor-pointer"
            onClick={() => setMenuOpen(false)}
          />
        ) : (
          <RiMenu3Line
            className="text-blue-800 text-3xl cursor-pointer"
            onClick={() => setMenuOpen(true)}
          />
        )}
      </div>
       
         <ul
        className={`md:hidden absolute left-0 w-full bg-white shadow-md transition-all duration-900 ease-in-out
        ${menuOpen ? "top-16 opacity-100" : "-top-40 opacity-0 pointer-events-none"}`}
      >
        <li className="p-3 hover:bg-blue-500 hover:text-white cursor-pointer">
          <Link href="#project">Projects</Link>
        </li>

        <li className="p-3 hover:bg-blue-500 hover:text-white cursor-pointer">
          Services
        </li>

        <li className="p-3 hover:bg-blue-500 hover:text-white cursor-pointer">
          Testimonials
        </li>

        <li className="p-3 hover:bg-blue-500 hover:text-white cursor-pointer">
          FAQs
        </li>
      </ul>
      </div>
    </nav>
  );
};

export default Navbar;