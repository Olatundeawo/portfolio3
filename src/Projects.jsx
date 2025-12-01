import { motion } from "framer-motion";
import { Github } from "lucide-react";
import Blog from "./assets/Blog.png";
import Hollart from "./assets/Hollar.png";
import Swiftpay from "./assets/swiftpay.png";
import FadeInSection from "./fadeinsection";

const projects = [
  {
    title: "HollartKiddies – E-Commerce Platform",
    description:
      "A modern, responsive e-commerce app for kids’ fashion. Built with React, Tailwind, Node.js, Express, Cloudinary, and JWT authentication.",
    github: "https://github.com/Olatundeawo/hollarkiddies_backend",
    demo: "https://hollartkiddies.onrender.com/",
    image: Hollart,
  },
  {
    title: "Personal Blog Website",
    description:
      "A clean and responsive personal blog built with Python (Flask), featuring easy navigation, blog posts, and deployed on PythonAnywhere.",
    github: "https://github.com/Olatundeawo/blog_website",
    demo: "https://olatundeawo1.pythonanywhere.com/",
    image: Blog,
  },
  {
    title: "Quiz App",
    description:
      "Interactive quiz app with face detection using React, Face-API.js, and Django backend for validation. Not live yet.",
    github: "https://github.com/Olatundeawo/testApp",
    demo: "#",
    image: "/images/quizapp.png",
  },
  {
    title: "SwiftPay – Secure Fintech Payment App",
    description:
      "A modern fintech web app for seamless money transfers, QR payments, and wallet management. Built with React, Express js, Tailwind CSS, Prisma, PostgreSQL with real-time auth and sleek UI.",
    github: "https://github.com/Olatundeawo/SwiftPay",
    demo: "https://app-swiftpay.onrender.com/",
    image: Swiftpay,
  },
];

const Projects = () => {
  return (
    <section id="projects" className="max-w-6xl mx-auto py-24 px-6">
      <FadeInSection direction="left">
        <h2 className="text-4xl font-bold text-white mb-12 text-center border-b-4 border-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 inline-block pb-2">
          My Projects
        </h2>
      </FadeInSection>

      <FadeInSection direction="right">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="relative group bg-gray-900 rounded-xl shadow-2xl overflow-hidden transition-all duration-300"
            >
              {/* Project Image */}
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-64 object-cover rounded-xl"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center text-center px-4">
                <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <div className="flex space-x-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-800 hover:bg-gray-700 px-4 py-2 rounded-lg flex items-center space-x-2 text-white font-medium transition transform hover:scale-105"
                  >
                    <Github className="w-5 h-5" />
                    <span>GitHub</span>
                  </a>
                  {project.demo && project.demo !== "#" && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-lg text-white font-medium transition transform hover:scale-105"
                    >
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </FadeInSection>
    </section>
  );
};

export default Projects;
