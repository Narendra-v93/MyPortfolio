import { useState } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import toast from "react-hot-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const toastId = toast.loading("Sending message...");

    try {
      const res = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        toast.success("Message sent successfully ✅", { id: toastId });
        setFormData({ name: "", email: "", message: "" });
      } else {
        toast.error("Something went wrong ❌", { id: toastId });
      }
    } catch {
      toast.error("Server error ❌", { id: toastId });
    }

    setLoading(false);
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-black flex items-center justify-center px-6 py-16 text-white">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-6xl w-full grid md:grid-cols-2 gap-12"
      >

        {/* Left Side */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
          className="space-y-6"
        >
          <h2 className="text-4xl font-bold">
            Let’s Build Something Amazing 🚀
          </h2>

          <p className="text-gray-300">
            Full Stack Developer | Problem Solver | Open Source Enthusiast  
            Specialized in React, Node.js & Modern Web Technologies.
          </p>

          {/* Info */}
          <div className="space-y-2">
            <p>📍 Bhopal, India</p>
            <p>📧 nvish5979@gmail.com</p>
          </div>

          {/* Social Icons */}
          <div className="flex space-x-6 text-2xl mt-6">
            <a href="#" className="hover:text-blue-400 transition">
              <FaGithub />
            </a>
            <a href="#" className="hover:text-blue-500 transition">
              <FaLinkedin />
            </a>
            <a href="#" className="hover:text-red-400 transition">
              <FaEnvelope />
            </a>
          </div>
        </motion.div>

        {/* Right Side Form */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5 }}
          className="backdrop-blur-lg bg-white/10 border border-white/20 p-8 rounded-2xl shadow-xl"
        >
          <form onSubmit={handleSubmit} className="space-y-5">

            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full p-3 rounded-lg bg-white/20 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full p-3 rounded-lg bg-white/20 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />

            <textarea
              name="message"
              rows="5"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full p-3 rounded-lg bg-white/20 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            ></textarea>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-indigo-600 hover:bg-indigo-700 transition p-3 rounded-lg font-semibold"
            >
              {loading ? "Sending..." : "Send Message"}
            </button>

          </form>
        </motion.div>

      </motion.div>
    </section>
  );
};

export default Contact;