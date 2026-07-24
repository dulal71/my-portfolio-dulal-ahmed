"use client";

import { motion } from "framer-motion";
import {
  FiUser,
  FiCode,
  FiTarget,
  FiTrendingUp,
} from "react-icons/fi";

const features = [
  {
    icon: <FiCode className="w-6 h-6 text-blue-400" />,
    title: "Clean Code",
    description:
      "I focus on writing clean, maintainable, and scalable code by following modern development best practices.",
  },
  {
    icon: <FiTarget className="w-6 h-6 text-cyan-400" />,
    title: "Problem Solving",
    description:
      "I enjoy turning ideas and real-world challenges into practical, user-friendly web applications.",
  },
  {
    icon: <FiTrendingUp className="w-6 h-6 text-sky-400" />,
    title: "Continuous Growth",
    description:
      "I'm always learning new technologies and improving my skills through real-world projects and hands-on experience.",
  },
];

const About = () => {
  return (
    <section
      id="about"
      className="max-w-7xl mx-auto  md:px-10 py-24"
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

      {/* Content */}
      <div className="grid lg:grid-cols-2 gap-10 items-center">
        {/* Left */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative overflow-hidden rounded-[2.5rem] border border-blue-500/20 bg-white/5 backdrop-blur-2xl p-5 md:p-10 shadow-[0_8px_32px_rgba(0,0,0,0.35)]"
        >
          {/* Background Glow */}
          <div className="absolute -top-28 -right-24 w-64 h-64 rounded-full bg-blue-500/20 blur-[120px]" />
          <div className="absolute -bottom-24 -left-20 w-64 h-64 rounded-full bg-cyan-500/10 blur-[120px]" />

          <div className="relative z-10">
            <div className="w-16 h-16 rounded-2xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center mb-8 shadow-[0_0_30px_rgba(59,130,246,0.35)]">
              <FiUser className="w-8 h-8 text-blue-400" />
            </div>

            <h3 className="text-3xl font-bold text-white mb-6">
              Hello, I'm Dulal Ahmed
            </h3>

            <div className="space-y-6 text-gray-300 leading-8">
              <p>
                I'm a{" "}
                <span className="text-blue-400 font-semibold">
                  Full Stack Developer
                </span>{" "}
                who enjoys building modern web applications that solve
                real-world problems. I believe great software combines clean
                code, performance, and an intuitive user experience.
              </p>

              <p>
                I love transforming ideas into production-ready applications,
                continuously improving my development skills, and exploring new
                technologies through hands-on projects.
              </p>

              <p>
                My goal is to contribute to impactful products, collaborate with
                talented teams, and grow into a skilled software engineer while
                creating applications that make a difference.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Right Cards */}
        <div className="space-y-6">
          {features.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
              }}
              whileHover={{
                y: -8,
                scale: 1.02,
              }}
              className="relative overflow-hidden rounded-[2rem] border border-blue-500/20 bg-white/5 backdrop-blur-2xl p-7 shadow-[0_8px_32px_rgba(0,0,0,0.35)] hover:border-blue-400/40 hover:shadow-[0_0_40px_rgba(59,130,246,0.25)] transition-all duration-500"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-cyan-500/5 opacity-0 hover:opacity-100 transition-opacity duration-500" />

              <div className="relative z-10 flex gap-5">
                <div className="w-14 h-14 rounded-2xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center flex-shrink-0">
                  {item.icon}
                </div>

                <div>
                  <h4 className="text-xl font-semibold text-white mb-3">
                    {item.title}
                  </h4>

                  <p className="text-gray-400 leading-7">
                    {item.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;