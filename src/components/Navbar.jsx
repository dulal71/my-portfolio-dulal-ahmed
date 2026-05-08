"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useLenis } from "lenis/react";



export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("#home");

  const lenis = useLenis();

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Contact", href: "#contact" },
  ];

  // Scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Active section observer (FIXED)
  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveTab(`#${entry.target.id}`);
          }
        });
      },
      { threshold: 0.6 }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  // Lenis + scroll lock fix
  useEffect(() => {
    if (lenis) {
      if (isDrawerOpen) lenis.stop();
      else lenis.start();
    }

    document.body.style.overflow = isDrawerOpen ? "hidden" : "auto";
  }, [isDrawerOpen, lenis]);

  return (
    <>
      {/* NAVBAR */}
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className={`fixed top-0 w-full z-40 py-4 transition-all duration-500 ${
          isScrolled
            ? "bg-white/5 backdrop-blur-2xl border-b border-white/10 shadow-lg"
            : "bg-transparent py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center relative">
          
          {/* Logo */}
          <Link
            href="#home"
            scroll={false}
            onClick={() => setActiveTab("#home")}
            className='font-extrabold text-xl tracking-widest  bg-linear-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent'>
            PORTFOLIO<span className="text-red-500">.</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 gap-1 text-sm bg-white/5 border border-white/10 px-2 py-1.5 rounded-full backdrop-blur-xl">
            {navLinks.map((link) => {
              const isActive = activeTab === link.href;

              return (
                <Link
                  key={link.name}
                  href={link.href}
                  scroll={false}
                  onClick={() => setActiveTab(link.href)}
                  className="relative px-5 py-2 rounded-full text-gray-300"
                >
                  {isActive && (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute inset-0 bg-white/20 rounded-full"
                    />
                  )}
                  <span className="relative z-10">{link.name}</span>
                </Link>
              );
            })}
          </div>

          {/* Mobile Button */}
          <button
            onClick={() => setIsDrawerOpen(true)}
            className="md:hidden text-white p-2 bg-white/5 rounded-xl border border-white/10"
          >
            <Menu />
          </button>
        </div>
      </motion.nav>

      {/* MOBILE DRAWER */}
      <AnimatePresence>
        {isDrawerOpen && (
          <>
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/60 z-[55]"
              onClick={() => setIsDrawerOpen(false)}
            />

            {/* Drawer */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25 }}
              className="fixed right-0 top-0 h-full w-72 bg-black/80 backdrop-blur-2xl z-[60] p-8"
            >
              <button
                onClick={() => setIsDrawerOpen(false)}
                className="text-white absolute top-4 right-4"
              >
                <X />
              </button>

              <div className="mt-16 flex flex-col gap-4">
                {navLinks.map((link) => {
                  const isActive = activeTab === link.href;

                  return (
                    <Link
                      key={link.name}
                      href={link.href}
                      scroll={false}
                      onClick={() => {
                        setActiveTab(link.href);
                        setIsDrawerOpen(false);
                      }}
                      className={`px-4 py-3 rounded-xl ${
                        isActive
                          ? "bg-white/10 text-white"
                          : "text-gray-400"
                      }`}
                    >
                      {link.name}
                    </Link>
                  );
                })}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}