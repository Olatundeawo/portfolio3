import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import About from "./About";
import Projects from "./Projects";
import Contact from "./Contact";
import { Typewriter } from "react-simple-typewriter";
import Resume from "./assets/Resume.pdf";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activePage, setActivePage] = useState("home");

  const pageTransition = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
    transition: { duration: 0.5 },
  };

  const pages = {
    home: (
      <motion.section
        key="home"
        className="h-screen flex flex-col justify-center items-center text-center px-6 bg-gradient-to-b from-gray-900 via-gray-950 to-gray-900"
        initial="initial"
        animate="animate"
        exit="exit"
        variants={pageTransition}
      >
        <h1 className="text-5xl sm:text-6xl font-bold text-white mb-4">
          Hi, I’m <span className="text-blue-400">Awotimilehin Babatunde</span>
        </h1>
        <h2 className="text-xl sm:text-2xl text-gray-400 mb-6">
          <Typewriter
            words={[
              "Software Engineer 💻",
              "Full-Stack Developer ⚡",
              "Problem Solver 🚀",
              "Turning ideas into reality",
            ]}
            loop
            cursor
            cursorStyle="_"
            typeSpeed={60}
            deleteSpeed={40}
            delaySpeed={1500}
          />
        </h2>
        <div className="flex space-x-4">
          <a
            href={Resume}
            target="_blank"
            className="bg-blue-500 hover:bg-blue-600 px-6 py-3 rounded-lg shadow-lg text-white font-medium transition transform hover:scale-105"
          >
            View Resume
          </a>
          <button
            onClick={() => setActivePage("contact")}
            className="border border-blue-500 hover:bg-blue-600 hover:text-white px-6 py-3 rounded-lg font-medium transition transform hover:scale-105"
          >
            Contact Me
          </button>
        </div>
      </motion.section>
    ),
    about: (
      <motion.section
        key="about"
        initial="initial"
        animate="animate"
        exit="exit"
        variants={pageTransition}
      >
        <About />
      </motion.section>
    ),
    projects: (
      <motion.section
        key="projects"
        initial="initial"
        animate="animate"
        exit="exit"
        variants={pageTransition}
      >
        <Projects />
      </motion.section>
    ),
    contact: (
      <motion.section
        key="contact"
        initial="initial"
        animate="animate"
        exit="exit"
        variants={pageTransition}
      >
        <Contact />
      </motion.section>
    ),
  };

  return (
    <div className="bg-gray-950 text-gray-200 min-h-screen font-sans">
      {/* Navbar */}
      <nav className="fixed w-full top-0 left-0 z-50 bg-gray-950/95 backdrop-blur-md border-b border-gray-800">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
          <button
            onClick={() => setActivePage("home")}
            className="text-xl sm:text-2xl font-bold text-blue-400 cursor-pointer hover:text-blue-500 transition"
          >
            Babatunde
          </button>

          {/* Desktop Menu */}
          <ul className="hidden md:flex space-x-8 text-gray-300">
            {["home", "projects", "about", "contact"].map((page) => (
              <li key={page}>
                <button
                  onClick={() => setActivePage(page)}
                  className={`font-medium relative px-1 py-1 transition group ${
                    activePage === page ? "text-blue-400" : "text-gray-300"
                  }`}
                >
                  {page.charAt(0).toUpperCase() + page.slice(1)}
                  {/* Gradient underline for active */}
                  <span
                    className={`absolute left-0 -bottom-1 h-0.5 w-full rounded-full transition-all duration-300 ${
                      activePage === page
                        ? "bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"
                        : "bg-transparent"
                    }`}
                  ></span>
                </button>
              </li>
            ))}
          </ul>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-300 hover:text-blue-400 focus:outline-none"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        {menuOpen && (
          <div className="md:hidden bg-gray-900 border-t border-gray-800">
            <ul className="flex flex-col space-y-4 px-6 py-4 text-gray-300">
              {["home", "projects", "about", "contact"].map((page) => (
                <li key={page}>
                  <button
                    onClick={() => {
                      setActivePage(page);
                      setMenuOpen(false);
                    }}
                    className={`hover:text-blue-400 transition font-medium w-full text-left ${
                      activePage === page ? "text-blue-400" : ""
                    }`}
                  >
                    {page.charAt(0).toUpperCase() + page.slice(1)}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}
      </nav>

      {/* Page Content */}
      <main className="pt-20">
        <AnimatePresence exitBeforeEnter>{pages[activePage]}</AnimatePresence>
      </main>

      <footer className="py-6 text-center text-gray-500 text-sm border-t border-gray-800 mt-12">
        © {new Date().getFullYear()} Awotimilehin Babatunde. All rights reserved.
      </footer>
    </div>
  );
}

export default App;
