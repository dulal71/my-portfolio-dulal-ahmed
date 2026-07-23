"use client";

import { useState, useEffect, useRef } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useLenis } from "lenis/react";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("#home");
  const [scrollProgress, setScrollProgress] = useState(0);

  const drawerRef = useRef(null);
  const lenis = useLenis();

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Contact", href: "#contact" },
  ];

  // Scroll effect + scroll progress bar
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      setIsScrolled(scrollTop > 20);
      setScrollProgress(docHeight > 0 ? (scrollTop / docHeight) * 100 : 0);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Active section observer
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

  // Close drawer on Escape + basic focus handling
  useEffect(() => {
    if (!isDrawerOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setIsDrawerOpen(false);
        return;
      }

      if (e.key === "Tab" && drawerRef.current) {
        const focusable = drawerRef.current.querySelectorAll(
          'a[href], button:not([disabled])'
        );
        if (focusable.length === 0) return;

        const first = focusable[0];
        const last = focusable[focusable.length - 1];

        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    const closeBtn = drawerRef.current?.querySelector("button");
    closeBtn?.focus();

    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isDrawerOpen]);

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
            className="font-extrabold text-xl tracking-widest bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent"
          >
            DULAL AHMED<span className="text-red-500">.</span>
          </Link>

          {/* Desktop Menu (Background & Border Removed) */}
          <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 gap-1 text-sm px-2 py-1.5">
            {navLinks.map((link) => {
              const isActive = activeTab === link.href;

              return (
                <Link
                  key={link.name}
                  href={link.href}
                  scroll={false}
                  onClick={() => setActiveTab(link.href)}
                  className={`relative px-5 py-2 rounded-full transition-colors duration-200 ${
                    isActive ? "text-white font-medium" : "text-gray-300 hover:text-white"
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute inset-0 bg-blue-500/30 border border-blue-400/30 rounded-full shadow-[0_0_15px_rgba(59,130,246,0.3)]"
                      transition={{ type: "spring", stiffness: 350, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{link.name}</span>
                </Link>
              );
            })}
          </div>

          {/* Desktop right side: CTA only (Socials removed) */}
          <div className="hidden md:flex items-center gap-4">
  <Link
    href="#contact"
    scroll={false}
    onClick={() => setActiveTab("#contact")}
    className="inline-flex items-center px-5 py-2 rounded-full bg-blue-500/10 border border-blue-500/50 text-white text-sm font-medium hover:bg-blue-500/20 transition-colors duration-200"
  >
    Let's Talk
  </Link>
</div>

          {/* Mobile Button */}
          <button
            onClick={() => setIsDrawerOpen(true)}
            aria-label="Open menu"
            aria-expanded={isDrawerOpen}
            className="md:hidden text-white p-2 bg-white/5 rounded-xl border border-white/10"
          >
            <Menu />
          </button>
        </div>

        {/* Scroll progress bar */}
        <div className="absolute bottom-0 left-0 h-[2px] bg-white/10 w-full">
          <div
            className="h-full bg-gradient-to-r from-blue-500 to-blue-700 transition-[width] duration-150 ease-out"
            style={{ width: `${scrollProgress}%` }}
          />
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
              aria-hidden="true"
            />

            {/* Drawer */}
            <motion.div
              ref={drawerRef}
              role="dialog"
              aria-modal="true"
              aria-label="Mobile navigation"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25 }}
              className="fixed right-0 top-0 h-full w-72 bg-black/80 backdrop-blur-2xl z-[60] p-8"
            >
              <button
                onClick={() => setIsDrawerOpen(false)}
                aria-label="Close menu"
                className="text-white absolute top-4 right-4"
              >
                <X />
              </button>

              <div className="mt-16 flex flex-col gap-2">
                {navLinks.map((link, i) => {
                  const isActive = activeTab === link.href;

                  return (
                    <motion.div
                      key={link.name}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.05 }}
                    >
                      <Link
                        href={link.href}
                        scroll={false}
                        onClick={() => {
                          setActiveTab(link.href);
                          setIsDrawerOpen(false);
                        }}
                        className={`block px-4 py-3 rounded-xl transition-colors duration-200 ${
                          isActive
                            ? "bg-blue-500/20 text-white font-medium border border-blue-500/30"
                            : "text-gray-400 hover:text-white"
                        }`}
                      >
                        {link.name}
                      </Link>
                    </motion.div>
                  );
                })}

                {/* CTA inside drawer */}
                <motion.div
  initial={{ opacity: 0, x: 20 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ delay: navLinks.length * 0.05 }}
  className="mt-4"
>
  <Link
    href="#contact"
    scroll={false}
    onClick={() => {
      setActiveTab("#contact");
      setIsDrawerOpen(false);
    }}
    className="block text-center px-4 py-3 rounded-xl bg-blue-500/10 border border-blue-500/50 text-white font-medium hover:bg-blue-500/20 transition-colors duration-200"
  >
    Let's Talk
  </Link>
</motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}