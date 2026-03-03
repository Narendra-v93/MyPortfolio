import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { PDFDownloadLink } from "@react-pdf/renderer";
import ResumePDF from "../components/ResumePDF"; // Yeh file wahi path me rakho jahan ResumePDF.js hai
import devimg from "../assets/dev.webp";

const Home = () => {
  const [text] = useTypewriter({
    words: [
      "Full Stack Developer",
      "MERN Stack Engineer",
      "UI/UX Focused Coder",
      "Backend Architecture Lover",
    ],
    loop: true,
    typeSpeed: 70,
    deleteSpeed: 40,
    delaySpeed: 1500,
  });

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black text-white">

      {/* Animated Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-900 via-black to-blue-900 animate-gradient opacity-40"></div>

      {/* Floating Blur Lights */}
      <div className="absolute w-96 h-96 bg-purple-600 rounded-full blur-3xl opacity-20 top-10 left-10 animate-pulse"></div>
      <div className="absolute w-96 h-96 bg-blue-600 rounded-full blur-3xl opacity-20 bottom-10 right-10 animate-pulse"></div>

      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between relative z-10 gap-10">

        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="flex-1 text-center md:text-left"
        >
          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight">
            Hi, I'm{" "}
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Narendra
            </span>
          </h1>

          <h2 className="text-2xl md:text-3xl mt-6 text-purple-400 font-semibold">
            {text}
            <Cursor cursorStyle="|" />
          </h2>

          <p className="mt-6 text-gray-400 max-w-xl">
            I design and build high-performance web applications with modern UI
            and scalable backend systems.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mt-10 justify-center md:justify-start">

            {/* GitHub */}
            <a
              href="https://github.com/Narendra-v93"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 hover:scale-110 transition duration-300 shadow-lg shadow-purple-500/30 flex items-center justify-center gap-2"
            >
              <FaGithub />
              GitHub
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/narendra-vishwakarma-857016342/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 rounded-xl border border-purple-400 hover:bg-purple-500 hover:text-black transition duration-300 flex items-center justify-center gap-2"
            >
              <FaLinkedin />
              LinkedIn
            </a>

            {/* Download Resume */}
            <PDFDownloadLink document={<ResumePDF />} fileName="Narendra_Resume.pdf">
              {({ loading }) =>
                loading ? (
                  <button className="px-6 py-3 rounded-xl bg-gray-500 text-white cursor-not-allowed">
                    Loading...
                  </button>
                ) : (
                  <button className="px-6 py-3 rounded-xl bg-green-500 hover:bg-green-600 text-white transition duration-300">
                    Download Resume
                  </button>
                )
              }
            </PDFDownloadLink>

          </div>
        </motion.div>

        {/* Right Image with 3D Hover */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="flex-1 flex justify-center"
        >
          <div className="relative group perspective">
            <img
              src={devimg}
              alt="Narendra Developer"
              className="w-80 md:w-96 rounded-3xl shadow-2xl transform group-hover:rotate-y-6 group-hover:scale-105 transition duration-500"
            />
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-t from-black/40 to-transparent"></div>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-purple-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-purple-400 rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
};

export default Home;