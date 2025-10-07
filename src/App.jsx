import { useState } from "react";
import About from "./About";
import Projects from "./Projects";
import Contact from "./Contact";
import { Typewriter } from "react-simple-typewriter";
import Resume from "./assets/Resume.pdf";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="bg-gray-950 text-gray-200 min-h-screen font-mono">
      {/* ✅ Navbar */}
      <nav className="fixed w-full top-0 left-0 z-50 bg-gray-950/90 backdrop-blur-sm border-b border-gray-800">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
          {/* Logo / Name */}
          <a href="#home" className="text-xl sm:text-2xl font-bold text-blue-400">
            Babatunde.dev
          </a>

          {/* Desktop Menu */}
          <ul className="hidden md:flex space-x-8 text-gray-300">
            <li>
              <a href="#home" className="hover:text-blue-400 transition">Home</a>
            </li>
            <li>
              <a href="#projects" className="hover:text-blue-400 transition">Projects</a>
            </li>
            <li>
              <a href="#contact" className="hover:text-blue-400 transition">Contact</a>
            </li>
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
              <li>
                <a
                  href="#home"
                  className="hover:text-blue-400 transition"
                  onClick={() => setMenuOpen(false)}
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className="hover:text-blue-400 transition"
                  onClick={() => setMenuOpen(false)}
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="hover:text-blue-400 transition"
                  onClick={() => setMenuOpen(false)}
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        )}
      </nav>

      {/* Header */}
      <section id="home" className="h-screen flex flex-col justify-center items-center text-center px-6">
        <h1 className="font-gloock text-4xl sm:text-6xl font-bold text-white mb-4">
          Hi, I’m <span className="text-blue-400">Awotimilehin Babatunde</span>
        </h1>
        <h2 className="font-roboto text-xl sm:text-2xl text-gray-400 mb-6">
          <Typewriter
            words={[
              "Software Engineer 💻",
              "Full-Stack Developer ⚡",
              "Problem Solver 🚀",
              "Bringing ideas into live",
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
            className="bg-blue-500 hover:bg-blue-600 px-6 py-2 rounded-lg shadow-md transition"
          >
            View Resume
          </a>
          <a
            href="#contact"
            className="border border-blue-500 hover:bg-blue-600 hover:text-white px-6 py-2 rounded-lg transition"
          >
            Contact Me
          </a>
        </div>
      </section>

      {/* Main Content */}
      <section id="about"><About /></section>
      <section id="projects"><Projects /></section>
      <section id="contact"><Contact /></section>

      <footer className="py-6 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} Awotimilehin Babatunde. All rights reserved.
      </footer>
    </div>
  );
}

export default App;
