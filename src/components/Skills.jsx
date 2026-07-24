import React from 'react';
import { FaCss3Alt, FaGithub, FaHtml5, FaNode, FaReact } from 'react-icons/fa';
import { IoLogoJavascript } from 'react-icons/io5';
import { SiExpress, SiMongodb, SiNextdotjs, SiTailwindcss, SiTypescript } from 'react-icons/si';
import { motion, AnimatePresence } from "framer-motion";
import { spaceGrotesk } from '@/lib/fonts';
const Skills = () => {
    return (
       <section id="skills" className="reveal-section mb-40 pt-10 scroll-mt-20 text-center">
      {/* Top section heading */}
      <div className="text-center mb-12">
        <h2 className={`${spaceGrotesk.className} text-3xl md:text-4xl lg:text-5xl font-bold uppercase tracking-widest drop-shadow-[0_0_10px_rgba(249,115,22,0.3)]`}>SKILLS</h2>
        <p className="text-gray-400 text-sm mt-1">My technical arsenal</p>
      </div>

      <div className="skill-container backdrop-blur-2xl rounded-[2.5rem] p-10 max-w-4xl mx-auto shadow-[0_8px_32px_rgba(0,0,0,0.3)] hover:border-white/20 transition-all duration-500 relative overflow-hidden group">
        {/* Ambient blue glow blob positioned dead center *inside* the card container */}
        <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl z-0" />

        <div className="absolute inset-0 bg-gradient-to-tr from-brand-orange/5 to-brand-red/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

        {/* Frontend */}
        <h3 className="text-xs font-semibold text-gray-300 mb-8 uppercase tracking-widest bg-white/5 inline-block px-5 py-2.5 rounded-full border border-white/10 shadow-sm relative z-10">Frontend</h3>
        <div className="flex flex-wrap justify-center gap-6 mb-12 relative z-10">
          {[
            { icon: <FaHtml5 className="w-7 h-7 text-[#E44D26]" />, name: 'HTML' },
            { icon: <FaCss3Alt className="w-7 h-7 text-[#264DE4]" />, name: 'CSS' },
            { icon: <IoLogoJavascript className="w-7 h-7 text-[#F7DF1E]" />, name: 'JavaScript' },
            { icon: <SiTypescript className="w-7 h-7 text-[#3178C6]" />, name: 'TypeScript' },
            { icon: <FaReact className="w-7 h-7 text-[#61DAFB]" />, name: 'React' },
            { icon: <SiTailwindcss className="w-7 h-7 text-[#38B2AC]" />, name: 'Tailwind' },
            { icon: <SiNextdotjs className="w-7 h-7 text-[#38B2AC]" />, name: 'Next.js' },
          ].map((skill, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -5, scale: 1.05 }}
              className="skill-item flex flex-col items-center gap-3 bg-white/5 p-5 rounded-3xl border border-white/5 hover:border-white/20 transition-colors backdrop-blur-md shadow-lg hover:shadow-[0_0_25px_rgba(59,130,246,0.5)]"
            >
              <div className="w-12 h-12 flex items-center justify-center drop-shadow-lg">
                {skill.icon}
              </div>
              <span className="text-xs font-bold text-gray-400">{skill.name}</span>
            </motion.div>
          ))}
        </div>

        {/* Backend & Tools */}
        <h3 className="text-xs font-semibold text-gray-300 mb-8 uppercase tracking-widest bg-white/5 inline-block px-5 py-2.5 rounded-full border border-white/10 shadow-sm relative z-10">Backend & Database</h3>
        <div className="flex flex-wrap justify-center gap-6 relative z-10">
          {[
            { icon: <FaNode className="w-7 h-7 text-[#339933]" />, name: 'Node.js' },
            { icon: <SiMongodb className="w-7 h-7 text-[#47A248]" />, name: 'MongoDB' },
            { icon: <SiExpress className="w-7 h-7 text-gray-300" />, name: 'Express' },
            { icon: <FaGithub className="w-7 h-7 text-white" />, name: 'Git/GitHub' },
          ].map((skill, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -5, scale: 1.05 }}
              className="skill-item flex flex-col items-center gap-3 bg-white/5 hover:bg-white/10 p-5 rounded-3xl border border-white/5 hover:border-white/20 transition-colors backdrop-blur-md shadow-lg hover:hover:shadow-[0_0_25px_rgba(59,130,246,0.5)]"
            >
              <div className="w-12 h-12 flex items-center justify-center drop-shadow-lg">
                {skill.icon}
              </div>
              <span className="text-xs font-bold text-gray-400">{skill.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
    );
};

export default Skills;