import FadeInSection from "./fadeinsection";
import { FaReact, FaNodeJs, FaPython, FaDatabase, FaDocker, FaGitAlt } from "react-icons/fa";

function About() {
  const techStack = [
    {
      title: "Frontend",
      icon: <FaReact className="text-indigo-400 w-6 h-6" />,
      items: ["React", "React Native", "Expo"],
    },
    {
      title: "Backend",
      icon: <FaNodeJs className="text-green-400 w-6 h-6" />,
      items: ["Node.js / Express", "Django", "Prisma"],
    },
    {
      title: "Databases",
      icon: <FaDatabase className="text-yellow-400 w-6 h-6" />,
      items: ["PostgreSQL", "MySQL", "MongoDB"],
    },
    {
      title: "Dev Tools",
      icon: <FaGitAlt className="text-orange-400 w-6 h-6" />,
      items: ["Git & GitHub", "Postman"],
    },
  ];

  return (
    <FadeInSection direction="left">
      <section
        id="about"
        className="max-w-6xl mx-auto py-24 px-6 text-gray-200"
      >
        {/* Heading */}
        <h2 className="text-4xl font-bold mb-8 text-white border-b-4 border-indigo-500 inline-block pb-2">
          About Me
        </h2>

        {/* Intro Paragraph */}
        <p className="mb-6 text-lg leading-relaxed text-gray-300">
          I’m <span className="font-semibold text-indigo-400">Awotimilehin Babatunde</span>, 
          a Software Engineer passionate about building reliable backend systems 
          and intuitive, elegant frontends. I specialize in <span className="font-medium text-indigo-300">
          Django, Node.js/Express, React, React Native, and Prisma </span> 
           to deliver end-to-end solutions that are fast, scalable, and production-ready.
        </p>

        {/* Experience Paragraph */}
        <p className="mb-6 text-lg leading-relaxed text-gray-300">
          I’ve built APIs, authentication systems, payment integrations, dashboards, 
          mobile app features, and real-time applications. I enjoy designing data models, 
          optimizing API workflows, and translating technical requirements into functional, polished products.
        </p>

        {/* Projects Section */}
        <h3 className="text-2xl font-semibold mt-12 mb-4 text-white">Projects I’ve Worked On</h3>
        <ul className="list-disc list-inside mb-6 space-y-2 text-gray-300">
          <li>Client media-upload platform (images & videos)</li>
          <li>E-Commerce Platform</li>
          <li>Full CRUD platforms, dashboards, and REST API backends</li>
          <li>Fintech-style mobile UI with smooth transitions & animations</li>
          <li>Personal Blog Website</li>
        </ul>

        {/* Tech Stack Section */}
        <h3 className="text-2xl font-semibold mt-12 mb-6 text-white">Tech Stack</h3>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {techStack.map((section) => (
            <div
              key={section.title}
              className="bg-gray-900 p-5 rounded-xl shadow-lg hover:shadow-indigo-500/50 transition-shadow duration-300"
            >
              <div className="flex items-center mb-3">
                {section.icon}
                <h4 className="ml-3 font-semibold text-lg text-white">{section.title}</h4>
              </div>
              <ul className="list-disc list-inside space-y-1 text-gray-300">
                {section.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Closing Paragraph */}
        <p className="mt-12 text-lg font-medium leading-relaxed text-gray-300">
          I’m seeking opportunities to contribute to real-world software systems, improve architecture, 
          and collaborate with teams delivering impactful products.
        </p>
      </section>
    </FadeInSection>
  );
}

export default About;
