"use client";

import { spaceGrotesk } from "@/lib/fonts";
import { motion } from "framer-motion";


const About = () => {
  return (
   <section
  id="about"
  className="max-w-7xl mx-auto md:px-10 py-6 relative overflow-hidden"
>
  {/* Ambient background glow */}
  <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[35rem] h-[35rem] bg-blue-500/15 rounded-full blur-[120px]" />

  {/* Heading */}
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.7 }}
    className="text-center mb-16 relative z-10"
  >
    <h2 className={`${spaceGrotesk.className} text-3xl md:text-4xl lg:text-5xl font-bold uppercase tracking-widest drop-shadow-[0_0_10px_rgba(249,115,22,0.3)]`}>
      ABOUT ME
    </h2>
    <div className="w-36 h-[2px] bg-gradient-to-r from-transparent via-blue-500/50 to-transparent mx-auto mt-4" />
  </motion.div>

  {/* Two-Column Layout Flow Matching the Reference Image */}
  <div className="grid md:grid-cols-2 gap-12 relative z-10 items-start px-2">
    
    {/* Left Column: WHO AM I? & Intro content */}
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="space-y-8"
    >
      <div>
        <h3 className="text-2xl font-bold text-white uppercase tracking-wider mb-6 flex items-center gap-3">
          WHO <span className="text-blue-400">AM</span> I?
        </h3>
        
        <p className="text-gray-300 leading-8 mb-6">
          Hello, I'm <span className="text-blue-400 font-semibold">Dulal Ahmed</span>. I'm a dedicated <span className="text-blue-400 font-semibold">Full Stack / MERN Developer</span> who loves crafting modern web applications and building smooth, user-friendly experiences from front to back.
        </p>

        <p className="text-gray-400 leading-8">
          When I’m not coding or pushing commits, you can find me playing or watching football or going out for a refreshing cycling session. I bring that same focus and teamwork into my development work!
        </p>
      </div>

      {/* Download CV / Action Button */}
      <div className="pt-2">
        <a
      href="/Dulal Ahmed Full Stack Developer Resume .pdf"
          className="inline-block bg-[#222222] hover:bg-blue-600 text-white font-semibold px-8 py-4 rounded-xl border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.35)] transition-all duration-300 uppercase tracking-widest text-xs"
        >
          Download My CV
        </a>
      </div>
    </motion.div>

    {/* Right Column: EXPERT IN & Progress Bars / Skill breakdown */}
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="space-y-6"
    >
      <div>
        <h3 className="text-2xl font-bold text-white uppercase tracking-wider mb-6">
          EXPERT <span className="text-blue-400">IN</span>
        </h3>
        <p className="text-gray-400 text-sm leading-7 mb-8">
My journey started with Programming Hero as a beginner, exploring both frontend and backend development to build my skills step by step.
        </p>
      </div>

      {/* Progress Bar Items */}
      <div className="space-y-6 px-2 md:px-0">
        
        {/* Skill 1: React & Next.js */}
        <div>
          <div className="flex justify-between text-xs font-bold text-gray-300 uppercase tracking-wider mb-2">
            <span>React & Next.js</span>
            <span className="text-blue-400">80%</span>
          </div>
          <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden p-[1px] border border-white/5">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: '80%' }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="h-full bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full shadow-[0_0_12px_rgba(59,130,246,0.6)]"
            />
          </div>
        </div>

        {/* Skill 2: JavaScript / TypeScript */}
        <div>
          <div className="flex justify-between text-xs font-bold text-gray-300 uppercase tracking-wider mb-2">
            <span>JavaScript & TypeScript</span>
            <span className="text-blue-400">80%</span>
          </div>
          <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden p-[1px] border border-white/5">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: '80%' }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.1, ease: "easeOut" }}
              className="h-full bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full shadow-[0_0_12px_rgba(59,130,246,0.6)]"
            />
          </div>
        </div>

        {/* Skill 3: Tailwind CSS / HTML */}
        <div>
          <div className="flex justify-between text-xs font-bold text-gray-300 uppercase tracking-wider mb-2">
            <span>Tailwind CSS & UI Design</span>
            <span className="text-blue-400">90%</span>
          </div>
          <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden p-[1px] border border-white/5">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: '90%' }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
              className="h-full bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full shadow-[0_0_12px_rgba(59,130,246,0.6)]"
            />
          </div>
        </div>

        {/* Skill 4: Node.js & MongoDB */}
        <div>
          <div className="flex justify-between text-xs font-bold text-gray-300 uppercase tracking-wider mb-2">
            <span>Node.js & MongoDB</span>
            <span className="text-blue-400">70%</span>
          </div>
          <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden p-[1px] border border-white/5">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: '70%' }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
              className="h-full bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full shadow-[0_0_12px_rgba(59,130,246,0.6)]"
            />
          </div>
        </div>

      </div>
    </motion.div>

  </div>
</section>
  );
};

export default About;