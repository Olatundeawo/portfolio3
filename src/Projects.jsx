import { motion } from "framer-motion";
import Blog from "./assets/Blog.png";
import Hollart from "./assets/Hollar.png";

const Projects = () => {
  return (
    <section id="projects" className="max-w-6xl mx-auto py-20 px-6">
      <h2 className="text-3xl font-bold text-white mb-10 text-center">
        My Projects
      </h2>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {[
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
              "An interactive quiz application with face detection using React, Face-API.js, and Django backend for validation. Not live yet",
            github: "https://github.com/Olatundeawo/testApp",
            demo: "https://quiz-app-demo.com",
            image: "/images/quizapp.png",
          },
        ].map((project, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            className="bg-gray-900 rounded-lg shadow-lg p-6"
          >
            {/* Project Image */}
            <img
              src={project.image}
              alt={project.title}
              className="h-40 w-full object-cover rounded mb-4"
            />

            {/* Project Info */}
            <h3 className="text-xl font-semibold text-white">
              {project.title}
            </h3>
            <p className="text-gray-400 mt-2">{project.description}</p>

            <div className="flex space-x-4 mt-4">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:underline"
              >
                GitHub
              </a>
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:underline"
              >
                Live Demo
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
