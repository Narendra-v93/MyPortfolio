import React from "react";
import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaDatabase, FaDocker } from "react-icons/fa";
import { SiMongodb, SiPostgresql } from "react-icons/si";
import photo from "../assets/Nare.jpg";

const About = () => {
  return (
    <section
      id="about"
      className="relative py-28 px-6 bg-gradient-to-b from-black via-gray-900 to-black text-white"
    >
      <div className="max-w-6xl mx-auto">

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-6xl font-extrabold text-center mb-20 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent"
        >
          About Me
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-16 items-center">

          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="space-y-6"
          >
            <p className="text-lg text-gray-300 leading-relaxed">
              I'm a passionate <span className="text-purple-400 font-semibold">Full Stack Developer</span> with experience building modern web apps.
            </p>

            <p className="text-lg text-gray-400 leading-relaxed">
              I create fast, scalable and user-friendly applications using MERN stack and modern tools.
            </p>

            {/* Icons */}
            <div className="flex flex-wrap gap-6 pt-6 text-3xl text-gray-400">
              <FaReact className="hover:text-blue-400 hover:scale-125 transition duration-300" />
              <FaNodeJs className="hover:text-green-400 hover:scale-125 transition duration-300" />
              <SiMongodb className="hover:text-green-500 hover:scale-125 transition duration-300" />
              <SiPostgresql className="hover:text-blue-500 hover:scale-125 transition duration-300" />
              <FaDocker className="hover:text-blue-300 hover:scale-125 transition duration-300" />
              <FaDatabase className="hover:text-purple-400 hover:scale-125 transition duration-300" />
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6 pt-10 border-t border-white/10">
              <div>
                <h3 className="text-3xl font-bold text-purple-400">1+</h3>
                <p className="text-gray-400">Years Experience</p>
              </div>
              <div>
                <h3 className="text-3xl font-bold text-blue-400">10+</h3>
                <p className="text-gray-400">Projects Completed</p>
              </div>
            </div>
          </motion.div>

          {/* RIGHT IMAGE (3D TILT) */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="flex justify-center"
          >
            <div className="relative group perspective-[1000px]">

              {/* Glow */}
              <div className="absolute -inset-2 bg-gradient-to-r from-purple-600 to-blue-600 rounded-3xl blur-xl opacity-30 group-hover:opacity-60 transition duration-500"></div>

              {/* 3D Card */}
              <motion.div
                className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-4 shadow-2xl transition-transform duration-300"
                style={{ transformStyle: "preserve-3d" }}
                onMouseMove={(e) => {
                  const rect = e.currentTarget.getBoundingClientRect();
                  const x = e.clientX - rect.left;
                  const y = e.clientY - rect.top;

                  const centerX = rect.width / 2;
                  const centerY = rect.height / 2;

                  const rotateX = -(y - centerY) / 15;
                  const rotateY = (x - centerX) / 15;

                  e.currentTarget.style.transform =
                    `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform =
                    "rotateX(0deg) rotateY(0deg) scale(1)";
                }}
              >
                <img
                  src={photo}
                  alt="Narendra"
                  className="w-80 h-96 object-cover rounded-2xl"
                />
              </motion.div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;