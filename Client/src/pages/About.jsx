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

        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-6xl font-extrabold text-center mb-20 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent"
        >
          About Me
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-16 items-center">

          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="space-y-6"
          >
            <p className="text-lg text-gray-300 leading-relaxed">
              I'm a passionate <span className="text-purple-400 font-semibold">Full Stack Developer</span> with hands-on experience building fast, scalable, and responsive web applications using the MERN stack and relational databases.
            </p>

            <p className="text-lg text-gray-400 leading-relaxed">
              I specialize in creating secure RESTful APIs, modern frontend interfaces, and managing complete deployment pipelines using tools like Docker and Git. I love solving real-world problems with efficient and user-centered solutions.
            </p>

            {/* Skills Icons */}
            <div className="flex flex-wrap gap-6 pt-6 text-3xl text-gray-400">
              <FaReact className="hover:text-blue-400 hover:scale-125 transition duration-300" />
              <FaNodeJs className="hover:text-green-400 hover:scale-125 transition duration-300" />
              <SiMongodb className="hover:text-green-500 hover:scale-125 transition duration-300" />
              <SiPostgresql className="hover:text-blue-500 hover:scale-125 transition duration-300" />
              <FaDocker className="hover:text-blue-300 hover:scale-125 transition duration-300" />
              <FaDatabase className="hover:text-purple-400 hover:scale-125 transition duration-300" />
            </div>

            {/* Status */}
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

          {/* Right Image Card */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="flex justify-center"
          >
            <div className="relative group">
              
              {/* Glow Effect */}
              <div className="absolute -inset-2 bg-gradient-to-r from-purple-600 to-blue-600 rounded-3xl blur-xl opacity-30 group-hover:opacity-50 transition duration-500"></div>

              {/* Glass Card */}
              <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6 shadow-2xl">
                <img
                  src={photo}
                  alt="Narendra"
                  className="w-80 h-96 object-cover rounded-2xl group-hover:scale-105 transition duration-500"
                />
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;