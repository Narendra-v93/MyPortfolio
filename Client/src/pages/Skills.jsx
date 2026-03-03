import React from "react";
import { motion } from "framer-motion";
import { 
  FaHtml5, FaCss3Alt, FaJs, FaReact, 
  FaNodeJs, FaGithub 
} from "react-icons/fa";

import { 
  SiNextdotjs, SiTypescript, SiTailwindcss,
  SiPostgresql, SiMysql, SiMongodb, SiExpress
} from "react-icons/si";

const skills = [
  { name: "HTML", icon: <FaHtml5 /> },
  { name: "CSS", icon: <FaCss3Alt /> },
  { name: "JavaScript", icon: <FaJs /> },
  { name: "React", icon: <FaReact /> },
  { name: "Next.js", icon: <SiNextdotjs /> },
  { name: "TypeScript", icon: <SiTypescript /> },
  { name: "Tailwind", icon: <SiTailwindcss /> },
  { name: "Node.js", icon: <FaNodeJs /> },
  { name: "Express", icon: <SiExpress /> },
  { name: "PostgreSQL", icon: <SiPostgresql /> },
  { name: "MySQL", icon: <SiMysql /> },
  { name: "MongoDB", icon: <SiMongodb /> },
  { name: "GitHub", icon: <FaGithub /> },
];

const containerVariant = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const Skills = () => {
  return (
    <section className="relative py-28 bg-black text-white overflow-hidden">

      {/* Animated Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-blue-600 to-pink-600 
                      opacity-20 blur-3xl animate-pulse"></div>

      <div className="relative max-w-6xl mx-auto px-4">

        <h2 className="text-5xl font-bold text-center mb-6">
          Full Stack Developer
        </h2>

        <p className="text-center text-gray-400 mb-16">
          Problem Solver | Open Source Enthusiast
        </p>

        <motion.div
          variants={containerVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8"
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              variants={cardVariant}
              whileHover={{ scale: 1.1 }}
              className="backdrop-blur-xl bg-white/5 border border-white/10
                         rounded-2xl p-6 flex flex-col items-center
                         transition duration-300 cursor-pointer"
            >
              <div className="text-5xl text-cyan-400 mb-4 
                              hover:rotate-12 transition duration-300">
                {skill.icon}
              </div>
              <h4 className="text-sm font-medium text-gray-300">
                {skill.name}
              </h4>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default Skills;