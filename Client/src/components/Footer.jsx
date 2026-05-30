import React from "react";
import { FaInstagram, FaTwitter, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      {/* Footer */}
      <footer className="py-10 px-6 border-t border-white/10 backdrop-blur-sm">
        
        <div className="max-w-6xl mx-auto flex items-center justify-between flex-col md:flex-row gap-6">
          
          {/* Left Text */}
          <p className="text-gray-400 text-center md:text-left">
  &copy; {new Date().getFullYear()} Narendra Vishwakarma • Building fast & scalable web experiences ⚡
</p>

          {/* Right Social */}
          <div className="flex gap-10">

            {/* Instagram */}
            <a
              href="https://www.instagram.com/narendrav_/"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center text-gray-400 transition duration-300"
            >
              <div className="p-3 rounded-full bg-white/5 group-hover:bg-pink-500/20 group-hover:shadow-lg group-hover:shadow-pink-500/40 transition duration-300">
                <FaInstagram className="text-2xl group-hover:text-pink-500" />
              </div>
              <span className="text-sm mt-2 group-hover:text-pink-400">
                Instagram
              </span>
            </a>

            {/* Twitter */}
            <a
              href="https://x.com/home"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center text-gray-400 transition duration-300"
            >
              <div className="p-3 rounded-full bg-white/5 group-hover:bg-blue-500/20 group-hover:shadow-lg group-hover:shadow-blue-500/40 transition duration-300">
                <FaTwitter className="text-2xl group-hover:text-blue-400" />
              </div>
              <span className="text-sm mt-2 group-hover:text-blue-300">
                Twitter
              </span>
            </a>

            {/* WhatsApp */}
            <a
              href="https://wa.me/919301603847"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center text-gray-400 transition duration-300"
            >
              <div className="p-3 rounded-full bg-white/5 group-hover:bg-green-500/20 group-hover:shadow-lg group-hover:shadow-green-500/40 transition duration-300">
                <FaWhatsapp className="text-2xl group-hover:text-green-500" />
              </div>
              <span className="text-sm mt-2 group-hover:text-green-400">
                WhatsApp
              </span>
            </a>

          </div>

        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/919301603847"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 group"
      >
        <div className="bg-green-500 p-4 rounded-full shadow-lg 
          hover:scale-110 transition duration-300 
          group-hover:shadow-green-500/50 animate-bounce">

          <FaWhatsapp className="text-white text-3xl" />
        </div>
      </a>
    </>
  );
};

export default Footer;