import React from "react";
import { motion } from "framer-motion";

const BackgroundAnimation = () => {
  return (
    <>
    <div className={`min-h-screen transition-all duration-300 ${
      darkMode 
        ? 'bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white' 
        : 'bg-gradient-to-br from-blue-50 to-indigo-100 text-gray-900'
    }`}></div>
    </>
  );
};

export default BackgroundAnimation;
