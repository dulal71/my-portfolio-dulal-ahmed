import React from 'react';
import { FaGraduationCap } from 'react-icons/fa';
import { FcGraduationCap } from 'react-icons/fc';
import { motion } from "framer-motion";
import { spaceGrotesk } from '@/lib/fonts';

const Education = () => {
    return (
        <section id="education" className="reveal-section mb-40 pt-10 scroll-mt-20">
          <div className="text-center mb-16">
            <h2 className={`${spaceGrotesk.className} text-3xl md:text-4xl lg:text-5xl font-bold uppercase tracking-widest drop-shadow-[0_0_10px_rgba(249,115,22,0.3)]`}>Education</h2>
            <p className="text-gray-400 text-sm mt-1">My academic background</p>
          </div>

          <div className="timeline-container relative pl-8 md:pl-0 max-w-2xl mx-auto">
            <div className="timeline-line md:left-[16px] bg-gradient-to-b from-blue-500/50 via-purple-500/50 to-transparent shadow-[0_0_15px_rgba(59,130,246,0.5)]"></div>

            {/* Education Items */}
            {[
              {
                degree: "Mathematics",
                school: "National University",
                year: "2023 - 2027",
                hex: "#3b82f6",
                icon: <FcGraduationCap className="w-6 h-6" />,
                desc: "Studying core mathematics including algebra, calculus, and advanced problem-solving techniques."
              },
              {
                degree: "HSC",
                school: "Moulvibazar Govt College",
                year: "2020 - 2023",
                hex: "#a855f7",
                icon: <FcGraduationCap className="w-6 h-6" />,
                desc: "Completed secondary education with a strong foundation in science and mathematics."
              },
              {
                degree: "MERN Stack Development",
                school: "Programming Hero",
                year: "January 2026 - present",
                hex: "#22c55e",
                icon: <FaGraduationCap className="w-6 h-6 text-green-500" />,
                desc: "Completed structured training in full-stack web development using React, Node.js, Express, and MongoDB. Built real-world projects."
              }
            ].map((edu, idx) => (
              <motion.div
                key={idx}
                whileHover={{ x: 10 }}
                className="timeline-item relative mb-14 md:pl-16 group"
              >
                <div className="timeline-dot flex items-center justify-center w-8 h-8 md:left-[-1px] left-[-32px] top-4 group-hover:scale-110 transition-transform z-10 bg-transparent shadow-none">
                  {edu.icon}
                </div>
                <div className="timeline-content bg-white/5 backdrop-blur-2xl p-5  md:p-8 rounded-[2.5rem] border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.3)] hover:shadow-[0_15px_40px_rgba(59,130,246,0.15)] relative overflow-hidden transition-colors">
                  <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative z-10">
                    <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-4">
                      <h3 className="text-xl font-bold text-white transition">{edu.degree}</h3>
                      <span className="text-xs font-bold text-white px-4 py-1.5 rounded-full mt-3 md:mt-0 w-max backdrop-blur-md" style={{ backgroundColor: `${edu.hex}33`, border: `1px solid ${edu.hex}4d` }}>{edu.year}</span>
                    </div>
                    <h4 className="text-sm font-bold mb-4" style={{ color: edu.hex }}>{edu.school}</h4>
                    <p className="text-sm text-gray-300 leading-relaxed">
                      {edu.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
    );
};

export default Education;