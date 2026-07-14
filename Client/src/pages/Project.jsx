import React from "react";
import { motion } from "framer-motion";
import {
  FaGithub,
  FaExternalLinkAlt,
  FaStar,
} from "react-icons/fa";

const projects = [
  {
    title: "MERN Chat Application",
    featured: true,
    description:
      "Real-time chat application with JWT authentication, Socket.io, online users, image sharing, typing indicators and responsive UI.",
    tech: ["React", "Node.js", "Express", "MongoDB", "Socket.io"],
    github: "https://github.com/Narendra-v93",
    live: "#",
    image: "/projects/chat.png",
    color: "from-cyan-500 to-blue-600",
  },
  {
    title: "Portfolio Website",
    featured: true,
    description:
      "Modern developer portfolio with React, Tailwind CSS, Framer Motion, dark mode, downloadable resume and responsive UI.",
    tech: ["React", "Tailwind CSS", "Framer Motion"],
    github: "https://github.com/Narendra-v93",
    live: "https://narendra-portfo.vercel.app",
    image: "/projects/portfolio.png",
    color: "from-purple-500 to-pink-500",
  },
  {
    title: "Password Manager",
    featured: false,
    description:
      "Secure password manager with add, edit, delete, copy, search, show/hide password and local storage.",
    tech: ["React", "JavaScript", "Tailwind CSS"],
    github: "https://github.com/Narendra-v93",
    live: "#",
    image: "/projects/password.png",
    color: "from-green-500 to-emerald-600",
  },
  {
    title: "Currency Converter",
    featured: false,
    description:
      "Live currency converter using Exchange Rate API with swap feature and responsive UI.",
    tech: ["React", "REST API", "JavaScript"],
    github: "https://github.com/Narendra-v93",
    live: "#",
    image: "/projects/currency.png",
    color: "from-yellow-500 to-orange-600",
  },
  {
    title: "Foodzy",
    featured: true,
    description:
      "Food ordering web application with menu, cart, checkout and authentication.",
    tech: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "Tailwind CSS",
    ],
    github: "https://github.com/Narendra-v93",
    live: "#",
    image: "/projects/foodzy.png",
    color: "from-red-500 to-orange-500",
  },
  {
    title: "Rentify",
    featured: true,
    description:
      "House rental platform with search, filters, property details and responsive UI.",
    tech: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
    ],
    github: "https://github.com/Narendra-v93",
    live: "#",
    image: "/projects/rentify.png",
    color: "from-indigo-500 to-violet-600",
  },
  {
    title: "VoltPath",
    featured: true,
    description:
      "Electric Vehicle route planning system with charging station locator and battery optimization.",
    tech: [
      "React",
      "Node.js",
      "MongoDB",
      "Leaflet",
    ],
    github: "https://github.com/Narendra-v93",
    live: "#",
    image: "/projects/voltpath.png",
    color: "from-lime-500 to-green-600",
  },
];
const Projects = () => {
  return (
    <section className="relative py-28 bg-gradient-to-b from-black via-gray-950 to-black text-white overflow-hidden">

      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-cyan-500/20 blur-[120px] rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/20 blur-[120px] rounded-full"></div>

      <div className="relative max-w-7xl mx-auto px-6">

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center text-5xl md:text-6xl font-extrabold mb-20 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-500 bg-clip-text text-transparent"
        >
          My Projects
        </motion.h2>

        {/* Grid */}
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-10">

          {projects.map((project, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
              }}
              whileHover={{
                y: -12,
                scale: 1.02,
              }}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl shadow-2xl hover:shadow-cyan-500/30 transition-all duration-500"
            >

              {/* Image */}
              <div className="relative overflow-hidden">

                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover transition-all duration-700 group-hover:scale-110 group-hover:rotate-1"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>

                {/* Featured Badge */}
                {project.featured && (
                  <div className="absolute top-4 left-4">
                    <span className="flex items-center gap-2 px-3 py-1 rounded-full bg-gradient-to-r from-yellow-400 to-orange-500 text-black text-xs font-bold shadow-lg">
                      <FaStar />
                      Featured
                    </span>
                  </div>
                )}

              </div>

              {/* Content */}
              <div className="p-6 flex flex-col h-[310px]">

                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-cyan-400 transition">
                  {project.title}
                </h3>

                <p className="text-gray-400 text-sm leading-7 flex-1">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mt-5">

                  {project.tech.map((tech, i) => (

                    <span
                      key={i}
                      className="px-3 py-1 rounded-full text-xs bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 hover:bg-cyan-500 hover:text-white transition"
                    >
                      {tech}
                    </span>

                  ))}

                </div>

                {/* Gradient Glow */}
                <div
                  className={`absolute inset-0 rounded-3xl bg-gradient-to-r ${project.color} opacity-0 group-hover:opacity-20 blur-3xl transition duration-500`}
                ></div>

                {/* Buttons */}
                <div className="flex gap-3 mt-auto pt-6">
                                    {/* GitHub Button */}
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 transition-all duration-300 shadow-lg"
                  >
                    <FaGithub />
                    Code
                  </motion.a>

                  {/* Live Demo Button */}
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl border border-cyan-400 text-cyan-300 hover:bg-cyan-400 hover:text-black transition-all duration-300"
                  >
                    <FaExternalLinkAlt />
                    Live Demo
                  </motion.a>

                </div>
              </div>
            </motion.div>

          ))}

        </div>

        {/* Bottom Text */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-20 text-center"
        >
          <p className="text-gray-400 text-lg">
            🚀 More exciting projects are currently in development...
          </p>
        </motion.div>

      </div>
    </section>
  );
};

export default Projects;

               
                