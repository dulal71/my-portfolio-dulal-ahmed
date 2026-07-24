'use client'
import React from 'react';
import { FaBriefcase } from "react-icons/fa";
import { motion } from "framer-motion";
import { spaceGrotesk } from '@/lib/fonts';

const experiences = [
  {
    role: "Frontend Developer Intern",
    comp: "Flyrank AI",
    year: "1 Month",
    icon: <FaBriefcase className="w-4 h-4 text-white" />,
    desc: "Worked as an intern focusing on frontend development, implementing responsive UI designs, building modern web components, and optimizing user experiences."
  }
];

const Experience = () => {
    return (
        <section id="experience" className="reveal-section mb-20 pt-10 scroll-mt-20">
          <div className="text-center mb-16">
            <h2 className={`${spaceGrotesk.className} text-3xl md:text-4xl lg:text-5xl font-bold uppercase tracking-widest drop-shadow-[0_0_10px_rgba(249,115,22,0.3)]`}>
              Experience
            </h2>
            <p className="text-gray-400 text-sm mt-2">My professional journey</p>
          </div>

          <div className="timeline-container relative pl-8 md:pl-0 max-w-2xl mx-auto">
            <div className="timeline-line md:left-[16px] bg-gradient-to-b from-blue-500/50 via-brand-red/50 to-transparent shadow-[0_0_15px_rgba(59,130,246,0.5)]"></div>

            {/* Experience Items */}
            {experiences.map((exp, idx) => (
              <motion.div
                key={idx}
                whileHover={{ x: 10 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="timeline-item relative mb-14 md:pl-16 group"
              >
                <div 
                  className="timeline-dot flex items-center justify-center w-9 h-9 rounded-2xl md:left-[-2px] left-[-32px] top-4 group-hover:scale-110 shadow-lg transition-transform z-10 border border-white/20" 
                  style={{ backgroundColor: `${exp.hex}cc` }}
                >
                  {exp.icon}
                </div>
                
                <div className="timeline-content bg-neutral-900/60 backdrop-blur-2xl p-5 md:p-8 rounded-[2.5rem] border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.3)] hover:shadow-[0_15px_40px_rgba(225,29,72,0.15)] relative overflow-hidden transition-all duration-300">
                  <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  <div className="relative z-10">
                    <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-3">
                      <h3 className="text-xl font-bold text-white transition tracking-tight">{exp.role}</h3>
                      <span 
                        className="text-xs font-bold text-white px-4 py-1.5 rounded-full mt-3 md:mt-0 w-max backdrop-blur-md shadow-sm" 
                        style={{ backgroundColor: `${exp.hex}33`, border: `1px solid ${exp.hex}4d` }}
                      >
                        {exp.year}
                      </span>
                    </div>
                    
                    <h4 className="text-sm font-bold mb-4 tracking-wide text-green-500" >
                      {exp.comp}
                    </h4>
                    
                    <p className="text-sm text-gray-300 leading-relaxed">
                      {exp.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
    );
};

export default Experience;