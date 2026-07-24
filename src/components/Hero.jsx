"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { spaceGrotesk } from "@/lib/fonts";

// Simple typewriter that cycles through a list of roles
function Typewriter({ words, typingSpeed = 90, deletingSpeed = 45, pause = 1500 }) {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[index];

    if (!deleting && subIndex === currentWord.length) {
      const timeout = setTimeout(() => setDeleting(true), pause);
      return () => clearTimeout(timeout);
    }

    if (deleting && subIndex === 0) {
      setDeleting(false);
      setIndex((prev) => (prev + 1) % words.length);
      return;
    }

    const timeout = setTimeout(
      () => setSubIndex((prev) => prev + (deleting ? -1 : 1)),
      deleting ? deletingSpeed : typingSpeed
    );

    return () => clearTimeout(timeout);
  }, [subIndex, deleting, index, words, typingSpeed, deletingSpeed, pause]);

  return (
    <span className="inline-flex items-center">
      {words[index].slice(0, subIndex)}
      <span className="w-[2px] h-5 md:h-6 bg-blue-500 ml-1 animate-pulse" />
    </span>
  );
}

export function Hero({ socialLinks }) {
  return (
    <section
      id="home"
      className="relative mb-40 max-w-6xl mx-auto  py-16 rounded-[2.5rem]  backdrop-blur-sm  "
    >
      {/* Ambient blue glow blobs */}
      <div className="pointer-events-none absolute -top-20 -left-20 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl" />
       <div className="pointer-events-none absolute -bottom-20 -right-20 w-72 h-72 bg-blue-600/20 rounded-full blur-3xl" />

      <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* LEFT: Content */}
        <div className="flex flex-col items-center text-center lg:items-start lg:text-left space-y-6 order-2 lg:order-1">
          <span className="text-blue-400 text-sm font-semibold tracking-[0.3em] uppercase">
            Hello, I'm
          </span>

          <h1 className={`${spaceGrotesk.className} text-3xl md:text-6xl font-extrabold tracking-tight text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]`} >
            Dulal Ahmed
          </h1>

          <h2 className="text-xl md:text-2xl font-bold tracking-wide text-gray-300 h-8">
            <Typewriter
  words={[
    "Full Stack Developer",
    "Next.js Developer",
    "React Developer",
    "Building Modern Web Applications",
  ]}
/>
          </h2>

          <p className="hero-desc text-gray-300 max-w-xl text-sm md:text-base leading-relaxed  py-5 rounded-3xl backdrop-blur-md  ">
 Full Stack Developer passionate about building scalable, secure, and user-centric web applications. Committed to writing clean code and delivering solutions that create meaningful impact.


</p>

          <div className="hero-buttons flex gap-5 pt-4">
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="/dulal-ahmed-fullstack-resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-brand-red/80 backdrop-blur-xl hover:bg-blue-500 text-white px-8 py-3.5 rounded-full text-sm font-bold shadow-[0_0_20px_rgba(59,130,246,0.3)] hover:shadow-[0_0_30px_rgba(59,130,246,1)] border border-white/20"
            >
              Resume
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#projects"
              className="bg-white/5 backdrop-blur-xl border border-white/20 hover:bg-white/10 hover:border-white/40 text-white px-8 py-3.5 rounded-full text-sm font-bold shadow-[0_8px_32px_rgba(0,0,0,0.3)] hover:shadow-[0_8px_32px_rgba(255,255,255,0.1)]"
            >
              Projects
            </motion.a>
          </div>

          <div className="flex gap-5 pt-4">
            {socialLinks.map(({ icon: Icon, url }, idx) => (
              <motion.a
                key={idx}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -5, scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="w-14 h-14 rounded-full bg-white/5 backdrop-blur-xl border border-white/10 flex items-center justify-center hover:bg-white/20 hover:shadow-[0_0_30px_rgba(59,130,246,1)] text-gray-400 shadow-[0_8px_32px_rgba(0,0,0,0.3)]"
              >
                <Icon className="w-6 h-6" />
              </motion.a>
            ))}
          </div>
        </div>

        {/* RIGHT: Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="order-1 lg:order-2 flex justify-center"
        >
          <div className="relative w-64 h-64 md:w-80 md:h-80">
           

            {/* Image frame */}
            <div className="relative w-full h-full rounded-full overflow-hidden border border-white/20 bg-white/5 backdrop-blur-xl shadow-[0_0_40px_rgba(59,130,246,0.4)]">
              <img
                src="/dulal-ahmed.png"
                alt="Dulal Ahmed"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}