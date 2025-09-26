import { useEffect } from "react";
import About from "./About";
import Projects from "./Projects";
import Contact from "./Contact";
import { Typewriter } from "react-simple-typewriter";
import Resume from "./assets/Resume.pdf";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <div className="bg-gray-950 text-gray-200 min-h-screen font-mono">
      {/* Header */}
      <section className="h-screen flex flex-col justify-center items-center text-center px-6">
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
      <About />
      <Projects />
      <Contact />

      <footer className="py-6 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} Awotimilehin Babatunde. All rights
        reserved.
      </footer>
    </div>
  );
}

export default App;
