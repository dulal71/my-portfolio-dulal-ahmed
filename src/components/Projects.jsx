'use client'
import React, { useState } from 'react';
import { FaHeart, FaWind, FaExternalLinkAlt, FaGithub, FaAtom, FaLaptopCode } from "react-icons/fa";
import { BiAtom } from 'react-icons/bi';
import { motion } from "framer-motion";
import Image from 'next/image';
import { spaceGrotesk } from '@/lib/fonts';

const projects = [
    {
      title: "Nexora-Shopping-Platform",
      color: "blue-500",
      hex: " #3F72AF",
      tech: [ "Next.js","TypeScript","Tailwind CSS", "MongoDB","Node.js","Express.js", "Better-Auth",  "HeroUI","Gemini AI"],
      icon: <FaLaptopCode className="w-5 h-5 text-white" />,
      repo: "https://github.com/dulal71/nexora",
      live: "https://nexora-mocha-theta.vercel.app/",
      desc: " A modern full-stack e-commerce web application built with Next.js, TypeScript, Express.js, and MongoDB. The platform provides a secure shopping experience with authentication, product management, cart, wishlist, online payments, and an admin dashboard. ",
      image: "/nexora-shopping-platform.png"
    },
    {
      title: "Blood Bridge Donation Network",
      color: "brand-red",
      hex: "#e11d48",
      tech: [ "Next.js","Tailwind CSS", "MongoDB","Node.js","Express.js", "Better-Auth",  "HeroUI","Gemini AI"],
      icon: <FaLaptopCode className="w-5 h-5 text-white" />,
      repo: "https://github.com/dulal71/blood-donation-client",
      live: "https://blood-donation-client-pi.vercel.app/",
      desc: " A scalable healthcare platform designed to streamline emergency blood donation, featuring robust session-based security and real-time coordination for life-saving support. ",
      image: "/blood-donation-project.png"
    },
     {
      title: "Doctor Appointment Manager",
      color: "brand-red",
      hex: "#e11d48",
      tech: [ "Next.js","Tailwind CSS", "MongoDB","Node.js","Express.js", "Better-Auth",  "HeroUI"],
      icon: <FaLaptopCode className="w-5 h-5 text-white" />,
      repo: "https://github.com/dulal71/doctor-appointment-manager",
      live: "https://doctor-appointment-manager-six.vercel.app/",
      desc: "A modern full-stack Doctor Appointment web application where users can easily book appointments, manage schedules, and securely authenticate using Google login.",
      image: "/project.png"
    },
    {
      title: "SkillSphere Online Platform",
      color: "brand-red",
      hex: "#e11d48",
      tech: ["React", "Next.js", "MongoDB", "Better-Auth", "Google-Auth", "HeroUI"],
      icon: <FaLaptopCode className="w-5 h-5 text-white" />,
      repo: "https://github.com/dulal71/skillSphere",
      live: "https://skill-sphere-bwih.vercel.app/",
      desc: "A sophisticated online learning platform with secure authentication and a modern dashboard for managing courses and skills.",
      image: "/project-1.png"
    },
    {
      title: "The Dragon News",
      color: "purple-500",
      hex: "#a855f7",
      tech: ["Next.js", "Tailwind", "React", "Better-Auth",'Hero UI'],
      icon: <FaAtom className="w-5 h-5 text-white" />,
      repo: "https://github.com/dulal71/dragon-news-portal",
      live: "https://dragon-news-portal-one.vercel.app/category/01",
      desc: "A premium e-commerce accessories store built with Next.js, featuring a sleek purple aesthetic and high-end product displays.",
      image: "/project-2.png"
    },
    {
      title: "DigiTools",
      color: "blue-500",
      hex: "#7c3aed",
      tech: ["React", "Tailwind CSS", "DaisyUI", "Lucide React"],
      icon: <FaWind className="w-5 h-5 text-white" />,
      repo: "https://github.com/dulal71/digitools-platform",
      live: "https://digitools-platform-delta.vercel.app/",
      desc: "A powerful platform to supercharge your digital workflow with premium AI tools, design assets, and productivity software.",
      image: "/project-4.png"
    },
    {
      title: "Keen Keeper",
      color: "brand-orange",
      hex: "#10b981",
      tech: ["React", "Tailwind CSS", "Lucide React", "DaisyUI"],
      icon: <FaHeart className="w-5 h-5 text-white" />,
      repo: "https://github.com/dulal71/keen-keeper",
      live: "https://keen-keeper-pied-three.vercel.app/",
      desc: "A personal shelf of meaningful connections to browse, tend, and nurture the relationships that matter most.",
      image: "/project-3.png"
    },
    {
      title: "English Janala Web App",
      color: "purple-500",
      hex: "#a855f7",
      tech: ["Tailwind", "Vanilla JS", "DaisyUI"],
      icon: <BiAtom className="w-5 h-5 text-white" />,
      repo: "https://github.com/dulal71/english-janala",
      live: "https://english-janala-seven.vercel.app/",
      desc: "A clean and modern vocabulary learning application designed to help users master English words through an interactive UI.",
      image: "/project-5.png"
    }
];

const Projects = () => {
    const [showAllProjects, setShowAllProjects] = useState(false);
    return (
        <section id="projects" className="reveal-section mb-40 pt-10 scroll-mt-20">
          <div className="text-center mb-16">
            <h2 className={`${spaceGrotesk.className} text-3xl md:text-4xl lg:text-5xl font-bold uppercase tracking-widest drop-shadow-[0_0_10px_rgba(249,115,22,0.3)]`}>Featured Projects</h2>
            <p className="text-gray-400 text-sm mt-2">Some of my recent work</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {(showAllProjects ? projects : projects.slice(0, 3)).map((proj, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="bg-neutral-900/60 backdrop-blur-xl rounded-[2rem] border border-white/10 overflow-hidden flex flex-col group shadow-xl hover:border-blue-500/40 hover:shadow-orange-500/10 transition-all duration-300"
              >
                {/* Image Wrapper */}
                <div className="h-56 overflow-hidden relative border-b border-white/10 bg-neutral-950">
                  <Image 
                    src={proj.image} 
                    alt={proj.title} 
                    fill
                    className="object-cover transform group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-transparent to-transparent opacity-80"></div>
                  
                  {/* Floating Icon Badge */}
                  <div className="absolute top-4 right-4">
                    <div
                      className="w-10 h-10 rounded-2xl flex items-center justify-center backdrop-blur-md border border-white/20 shadow-lg"
                      style={{ backgroundColor: `${proj.hex}cc` }}
                    >
                      {proj.icon}
                    </div>
                  </div>
                </div>

                {/* Content Wrapper */}
                <div className="p-6 flex flex-col flex-1 justify-between">
                  <div>
                    <h3 className="text-xl font-bold mb-2.5 text-white tracking-tight group-hover:text-blue-500 transition-colors">
                      {proj.title}
                    </h3>
                    <p className="text-gray-400 text-sm mb-6 leading-relaxed line-clamp-3">
                      {proj.desc}
                    </p>
                  </div>

                  <div>
                    {/* Tech Stack Chips */}
                    <div className="flex gap-1.5 mb-6 flex-wrap">
                      {proj.tech.map(t => (
                        <span 
                          key={t} 
                          className="text-[11px] font-medium text-gray-300 bg-white/5 border border-white/10 px-2.5 py-1 rounded-lg"
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    {/* Action Links */}
                    <div className="flex items-center gap-3 pt-4 border-t border-white/10">
                      <motion.a
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        href={proj.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-blue-700 hover:bg-blue-500 text-white text-xs px-4 py-2.5 rounded-xl font-semibold text-center flex items-center justify-center gap-2 flex-1 shadow-md shadow-orange-600/20 transition-colors"
                      >
                        <FaExternalLinkAlt className="w-3 h-3" />
                        Live Demo
                      </motion.a>
                      <motion.a
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        href={proj.repo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-white/5 hover:bg-white/10 border border-white/10 text-white text-xs px-4 py-2.5 rounded-xl font-semibold text-center flex items-center justify-center gap-2 flex-1 transition-colors"
                      >
                        <FaGithub className="w-3.5 h-3.5" />
                        Code
                      </motion.a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* View All Button */}
          <div className="flex justify-center mt-14">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setShowAllProjects(!showAllProjects)}
              className="bg-white/5 backdrop-blur-xl border border-white/10 hover:bg-white/10 text-white px-8 py-3.5 rounded-full text-sm font-semibold shadow-lg flex items-center gap-3 group transition-all"
            >
              <span>{showAllProjects ? "Show Less" : "View All Projects"}</span>
              <motion.span
                animate={{ rotate: showAllProjects ? 180 : 0 }}
                transition={{ duration: 0.3 }}
                className="text-blue-400 font-bold"
              >
                ↓
              </motion.span>
            </motion.button>
          </div>
        </section>
    );
};

export default Projects;