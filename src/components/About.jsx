"use client";

import { motion } from "framer-motion";
import {
  FiUser,
  FiCode,
  FiTarget,
  FiTrendingUp,
  FiActivity,
} from "react-icons/fi";

const About = () => {
  return (
    <section
      id="about"
      className="max-w-7xl mx-auto md:px-10 py-24"
    >
      
      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="text-center mb-16"
      >
        <span className="inline-block px-5 py-2 rounded-full border border-blue-500/20 bg-blue-500/10 text-blue-300 text-sm font-semibold tracking-widest uppercase">
          About Me
        </span>

        <h2 className="mt-6 text-3xl md:text-5xl font-bold text-white">
          More Than Just a Developer
        </h2>

        <p className="text-gray-400 mt-5 max-w-2xl mx-auto leading-8">
          I'm passionate about building meaningful digital experiences that are
          fast, reliable, and user-focused.
        </p>
      </motion.div>

      {/* Grid container for separated sections */}
      <div className="grid md:grid-cols-2 gap-8">
        
        {/* 1. Introduction Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative overflow-hidden rounded-[2.5rem] border border-blue-500/20 bg-white/5 backdrop-blur-2xl p-6 md:p-8 shadow-[0_8px_32px_rgba(0,0,0,0.35)]"
        >
          <div className="absolute -top-20 -right-20 w-48 h-48 rounded-full bg-blue-500/10 blur-[100px]" />
          <div className="relative z-10">
            <div className="w-14 h-14 rounded-2xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center mb-6 shadow-[0_0_20px_rgba(59,130,246,0.3)]">
              <FiUser className="w-7 h-7 text-blue-400" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">
              Hello, I'm Dulal Ahmed
            </h3>
            <p className="text-gray-300 leading-8">
              I'm a dedicated{" "}
              <span className="text-blue-400 font-semibold">
                Full Stack / MERN Developer
              </span>{" "}
              who loves crafting modern web applications. I specialize in building smooth, user-friendly experiences from the front end to the back end.
            </p>
          </div>
        </motion.div>

        {/* 2. Programming Journey Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="relative overflow-hidden rounded-[2.5rem] border border-blue-500/20 bg-white/5 backdrop-blur-2xl p-6 md:p-8 shadow-[0_8px_32px_rgba(0,0,0,0.35)]"
        >
          <div className="absolute -top-20 -right-20 w-48 h-48 rounded-full bg-cyan-500/10 blur-[100px]" />
          <div className="relative z-10">
            <div className="w-14 h-14 rounded-2xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center mb-6 shadow-[0_0_20px_rgba(59,130,246,0.3)]">
              <FiCode className="w-7 h-7 text-blue-400" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">
              My Programming Journey
            </h3>
            <p className="text-gray-300 leading-8">
              My journey officially started with <span className="text-blue-400 font-semibold">Programming Hero</span>. From there, I mastered <span className="text-blue-400 font-semibold">HTML, CSS, Tailwind CSS, JavaScript, and TypeScript</span>, and advanced into <span className="text-blue-400 font-semibold">React and Next.js</span>. On the backend, I work with <span className="text-blue-400 font-semibold">Node.js, Express.js, and MongoDB</span>, tracked via <span className="text-blue-400 font-semibold">GitHub</span>.
            </p>
          </div>
        </motion.div>

        {/* 3. Work I Enjoy Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="relative overflow-hidden rounded-[2.5rem] border border-blue-500/20 bg-white/5 backdrop-blur-2xl p-6 md:p-8 shadow-[0_8px_32px_rgba(0,0,0,0.35)]"
        >
          <div className="absolute -top-20 -right-20 w-48 h-48 rounded-full bg-blue-500/10 blur-[100px]" />
          <div className="relative z-10">
            <div className="w-14 h-14 rounded-2xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center mb-6 shadow-[0_0_20px_rgba(59,130,246,0.3)]">
              <FiTarget className="w-7 h-7 text-blue-400" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">
              What I Love Building
            </h3>
            <p className="text-gray-300 leading-8">
              I genuinely enjoy solving real-world problems through code. My favorite projects involve building modern, scalable websites and full-featured <span className="text-blue-400 font-semibold">e-commerce platforms</span> that deliver smooth performance.
            </p>
          </div>
        </motion.div>

        {/* 4. Hobbies & Personality Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="relative overflow-hidden rounded-[2.5rem] border border-blue-500/20 bg-white/5 backdrop-blur-2xl p-6 md:p-8 shadow-[0_8px_32px_rgba(0,0,0,0.35)]"
        >
          <div className="absolute -top-20 -right-20 w-48 h-48 rounded-full bg-cyan-500/10 blur-[100px]" />
          <div className="relative z-10">
            <div className="w-14 h-14 rounded-2xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center mb-6 shadow-[0_0_20px_rgba(59,130,246,0.3)]">
              <FiActivity className="w-7 h-7 text-blue-400" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">
              Hobbies & Interests
            </h3>
            <p className="text-gray-300 leading-8">
              When I’m not coding or pushing commits, you can find me <span className="text-blue-400 font-semibold">playing or watching football</span> or going out for a refreshing <span className="text-blue-400 font-semibold">cycling</span> session. I bring that same focus and teamwork into my development work!
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default About;