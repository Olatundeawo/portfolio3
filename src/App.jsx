import  { useState,  } from "react";
import About from "./About";
import Skills from "./Skills";
import Experience from "./Experience";
import Projects from "./Projects";
import Contact from "./Contact";
import { Link } from "react-router-dom";


function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    
    <div
      className="flex flex-col relative min-h-screen text-white bg-emerald-950">
      {/* Header */}
      <header className="font-mono">
        <div className="flex justify-between items-center px-8 py-4">
          {/* Logo or Header Text */}
          <div className="text-2xl font-extrabold cursor-pointer bg-gradient-to-r from-blue-500 to-green-500 text-transparent bg-clip-text">
  Babatunde Awotimilehin
</div>


          {/* Navigation Menu */}
          <nav>
            <ul className="hidden md:flex flex-row gap-6 text-sm uppercase tracking-wide">
            <li className="cursor-pointer hover:text-emerald-300">About</li>
              <li className="cursor-pointer hover:text-emerald-300">Experience</li>
              <li className="cursor-pointer hover:text-emerald-300">Projects</li>
              <li className="cursor-pointer hover:text-emerald-300">Contact</li>
            </ul>
          </nav>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <button onClick={toggleMobileMenu} className="text-xl">
              {isMobileMenuOpen ? "✖" : "☰"}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="flex flex-col bg-emerald-900 text-center text-sm md:hidden">
            <ul className="space-y-4 py-4">
            <li className="cursor-pointer hover:text-emerald-300">About</li>
              <li className="cursor-pointer hover:text-emerald-300">Experience</li>
              <li className="cursor-pointer hover:text-emerald-300">Projects</li>
              <li className="cursor-pointer hover:text-emerald-300">Contact</li>
            </ul>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="flex flex-1 overflow-y-auto">
        <div className="flex-grow">
          <About />
          <Skills />
          <Experience />
          <Projects />
          <Contact />
        </div>
      </main>
    </div>

  );
}

export default App;
