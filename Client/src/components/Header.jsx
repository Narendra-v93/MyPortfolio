import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { HiMenu, HiX } from "react-icons/hi";

const Header = ({ darkMode, setDarkMode }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navLinks = [
    { name: "Home", id: "hero" },
    { name: "About", id: "about" },
    { name: "Skills", id: "skills" },
    { name: "Projects", id: "projects" },
    { name: "Contact", id: "contact" },
  ];

  // Scroll shadow effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Smooth scroll function
  const handleScrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
      setMenuOpen(false);
    }
  };

  return (
    <header className="fixed w-full z-50 flex justify-center top-5">
      <nav
        className={`w-[95%] max-w-6xl px-6 py-3 rounded-2xl backdrop-blur-xl transition-all duration-300 flex justify-between items-center ${
          scrolled
            ? darkMode
              ? "bg-black/80 shadow-lg shadow-purple-500/20"
              : "bg-white/90 shadow-lg"
            : darkMode
            ? "bg-white/10 border border-white/20"
            : "bg-white/70 border border-gray-200"
        }`}
      >
        {/* Logo */}
        <motion.h1
          whileHover={{ scale: 1.1 }}
          onClick={() => handleScrollToSection("hero")}
          className="text-2xl font-extrabold bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent cursor-pointer"
        >
          Portfolio
        </motion.h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => handleScrollToSection(link.id)}
              className={`relative group text-sm font-medium ${
                darkMode ? "text-gray-300" : "text-gray-700"
              }`}
            >
              {link.name}
              <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-gradient-to-r from-cyan-400 to-purple-500 transition-all duration-300 group-hover:w-full"></span>
            </button>
          ))}

          {/* Dark Mode Toggle */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className={`p-2 rounded-full transition ${
              darkMode
                ? "bg-white/20 hover:bg-white/30"
                : "bg-gray-200 hover:bg-gray-300"
            }`}
          >
            {darkMode ? "☀️" : "🌙"}
          </button>
        </div>

        {/* Mobile Menu */}
        <div className="md:hidden flex items-center gap-4">
          <button
            onClick={() => setDarkMode(!darkMode)}
            className={`p-2 rounded-full ${
              darkMode ? "bg-white/20" : "bg-gray-200"
            }`}
          >
            {darkMode ? "☀️" : "🌙"}
          </button>

          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <HiX size={26} /> : <HiMenu size={26} />}
          </button>
        </div>
      </nav>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className={`absolute top-20 w-[90%] rounded-2xl backdrop-blur-xl p-6 flex flex-col gap-6 md:hidden ${
            darkMode
              ? "bg-black/90 border border-white/20"
              : "bg-white border border-gray-200"
          }`}
        >
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => handleScrollToSection(link.id)}
              className={`text-center ${
                darkMode ? "text-gray-300" : "text-gray-700"
              }`}
            >
              {link.name}
            </button>
          ))}
        </motion.div>
      )}
    </header>
  );
};

export default Header;