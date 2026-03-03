import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const projects = [
  {
    title: "MERN Chat Application",
    description:
      "Real-time chat application with authentication, socket.io integration and modern UI.",
    tech: ["React", "Node", "MongoDB", "Socket.io"],
    github: "#",
    live: "#",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c",
  },
  {
    title: "Portfolio Website",
    description:
      "Personal portfolio with animations, dark mode and responsive modern layout.",
    tech: ["React", "Tailwind", "Framer Motion"],
    github: "#",
    live: "#",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
  },
];

const Projects = () => {
  return (
    <section className="relative py-28 bg-gradient-to-b from-black via-gray-900 to-black text-white">
      <div className="max-w-6xl mx-auto px-6">

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-6xl font-extrabold text-center mb-20 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent"
        >
          My Projects
        </motion.h2>

        {/* Project Grid */}
        <div className="grid md:grid-cols-2 gap-12">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="group relative rounded-3xl overflow-hidden bg-white/5 backdrop-blur-lg border border-white/10 shadow-xl"
            >
              {/* Image */}
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-80"></div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                <h3 className="text-2xl font-bold text-purple-400">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm">
                  {project.description}
                </p>

                {/* Tech Badges */}
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-xs bg-purple-600/20 border border-purple-500/30 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="flex gap-4 pt-4">
                  <a
                    href={project.github}
                    className="flex items-center gap-2 text-sm px-4 py-2 bg-purple-600 hover:bg-purple-700 rounded-lg transition"
                  >
                    <FaGithub /> Code
                  </a>
                  <a
                    href={project.live}
                    className="flex items-center gap-2 text-sm px-4 py-2 border border-purple-500 hover:bg-purple-500 hover:text-black rounded-lg transition"
                  >
                    <FaExternalLinkAlt /> Live
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;