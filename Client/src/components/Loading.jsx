import React from "react";
import { motion } from "framer-motion";

const Loading = ({ darkMode = true }) => {
  return (
    <div
      className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center transition-all duration-500 ${
        darkMode
          ? "bg-gray-900"
          : "bg-gradient-to-br from-blue-50 to-indigo-100"
      }`}
    >
      {/* Animated Logo/Text */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="mb-8"
      >
        <h1
          className={`text-4xl font-extrabold bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent ${
            darkMode ? "text-white" : "text-gray-900"
          }`}
        >
          Portfolio
    
        </h1>
      </motion.div>

      {/* Animated Spinner */}
      <div className="relative">
        {/* Outer Ring */}
        <motion.div
          className="w-16 h-16 rounded-full border-4 border-transparent"
          style={{
            borderTopColor: "#06b6d4", // cyan-400
            borderRightColor: "#8b5cf6", // purple-500
          }}
          animate={{ rotate: 360 }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "linear",
          }}
        />

        {/* Middle Ring */}
        <motion.div
          className="absolute top-1 left-1 w-14 h-14 rounded-full border-4 border-transparent"
          style={{
            borderTopColor: "#8b5cf6", // purple-500
            borderRightColor: "#ec4899", // pink-500
          }}
          animate={{ rotate: -360 }}
          transition={{
            duration: 1.2,
            repeat: Infinity,
            ease: "linear",
          }}
        />

        {/* Inner Ring */}
        <motion.div
          className="absolute top-2 left-2 w-12 h-12 rounded-full border-4 border-transparent"
          style={{
            borderTopColor: "#ec4899", // pink-500
            borderRightColor: "#06b6d4", // cyan-400
          }}
          animate={{ rotate: 360 }}
          transition={{
            duration: 0.9,
            repeat: Infinity,
            ease: "linear",
          }}
        />

        {/* Center Dot */}
        <motion.div
          className="absolute top-1/2 left-1/2 w-3 h-3 -mt-1.5 -ml-1.5 rounded-full bg-gradient-to-r from-cyan-400 to-pink-500"
          animate={{
            scale: [1, 1.5, 1],
            opacity: [1, 0.5, 1],
          }}
          transition={{
            duration: 1,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      {/* Loading Text */}
      <motion.p
        className={`mt-8 text-sm font-medium ${
          darkMode ? "text-gray-400" : "text-gray-600"
        }`}
        initial={{ opacity: 0 }}
        animate={{ opacity: [0.5, 1, 0.5] }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        Loading...
      </motion.p>

      {/* Progress Bar */}
      <div className="mt-4 w-48 h-1 bg-gray-700 rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500"
          initial={{ width: "0%" }}
          animate={{ width: ["0%", "100%", "0%"] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>
    </div>
  );
};

export default Loading;
