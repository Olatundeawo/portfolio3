import FadeInSection from "./fadeinsection";

function About() {
  return (
    <FadeInSection direction="left">

    
    <section id="about" className="max-w-4xl mx-auto py-20 px-6">
      <div className="bg-gray-900 rounded-lg shadow-lg overflow-hidden">
        <div className="flex space-x-3 bg-gray-800 p-3">
          <span className="w-3 h-3 bg-red-500 rounded-full"></span>
          <span className="w-3 h-3 bg-yellow-500 rounded-full"></span>
          <span className="w-3 h-3 bg-green-500 rounded-full"></span>
        </div>
        <div className="p-6">
          <p className="text-green-400">{"// about.js"}</p>
          <p>
            <span className="text-purple-400">const</span>{" "}
            <span className="text-blue-400">aboutMe</span> = {"{"}
          </p>
          <p className="ml-6">
            name: <span className="text-yellow-400">"Awotimilehin"</span>,
          </p>
          <p className="ml-6">
            role: <span className="text-yellow-400">"Software Engineer"</span>,
          </p>
          <p className="ml-6">
            skills: [<span className="text-yellow-400">"React"</span>,{" "}
            <span className="text-yellow-400">"Node.js"</span>,{" "}
            <span className="text-yellow-400">"Python"</span>,{" "}
            <span className="text-yellow-400">"MYSQL"</span>,{" "}
            <span className="text-yellow-400">""Tailwindcss</span>, ],
          </p>
          <p>{"};"}</p>
        </div>
      </div>
    </section>
    </FadeInSection>
  );
}

export default About;
