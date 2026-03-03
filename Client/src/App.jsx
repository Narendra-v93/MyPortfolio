import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Home from "./pages/Home";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Project from "./pages/Project";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";


const particlesInit = async (main) => {
  await loadFull(main);
};

const App = () => {
  const [darkMode, setDarkMode] = useState(true);
  const [activeSection, setActiveSection] = useState("hero");

  // Active section detection
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["hero", "about", "skills", "projects", "contact"];
      const scrollPosition = window.scrollY + 150;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;

          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={`min-h-screen ${darkMode ? "bg-gray-900 text-white" : "bg-gray-50 text-black"}`}>

      {/* Particles Background */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          background: { color: "transparent" },
          particles: {
            number: { value: 60 },
            color: { value: darkMode ? "#3b82f6" : "#8b5cf6" },
            links: {
              enable: true,
              color: darkMode ? "#3b82f6" : "#8b5cf6",
              opacity: 0.4,
            },
            move: { enable: true, speed: 1.5 },
            size: { value: 3 },
          },
          detectRetina: true,
        }}
        className="fixed inset-0 -z-10"
      />

      {/* Navbar */}
      <Header
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        activeSection={activeSection}
      />

      {/* Main Sections */}
      <main>

        <section id="hero" className="pt-28 min-h-screen">
          <Home darkMode={darkMode} />
        </section>

        <section id="about" className="pt-28 min-h-screen">
          <About darkMode={darkMode} />
        </section>

        <section id="skills" className="pt-28 min-h-screen">
          <Skills />
        </section>

        <section id="projects" className="pt-28 min-h-screen">
          <Project />
        </section>

        <section id="contact" className="pt-28 min-h-screen">
          <Contact />
        </section>

      </main>

      <Footer />
    </div>
  );
};

export default App;