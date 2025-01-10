import { useState } from "react";

function Experience () {
    const [skill, setSkill] = useState(null);

    const experiences = [ 
        {
            id: 1,
            title: "Fondational project ALX Software Engineering (2023)",
            details: "In conjection with two college, we built a quiz app using django and vanilla CSS"
        },

        {
            id: 2,
            title: "Personal Project (2023)",
            details: "Developed a blog website using flask, javaScript"
        },
        {
            id: 3,
            title: "Mini E-commerce website(2024)",
            details: "Created a clothing website where cilent can showcase goods, using node js and react"
        }
    ]

    const handleClick = (id) => {
        setSkill(skill === id ? null : id)
    }
    return (
    <div className="pl-8">
        
        <section className="flex items-center space-x-2">
                
                <h3 className="font-mono subpixel-antialiased font-black text-2xl "> Experience</h3>
                <hr className="flex-1 border-t border-white"></hr>
        </section>
        <div>
        <ul className="flex flex-wrap justify-center gap-6 p-4 max-w-6xl mx-auto">
    {experiences.map((experience) => (
      <li
        key={experience.id}
        className="bg-white shadow-md rounded-lg p-4 w-full sm:w-5/12 lg:w-1/4 transition-transform transform hover:scale-105"
      >
        <div
          onClick={() => handleClick(experience.id)}
          className="font-playfair text-lg font-semibold text-gray-700 cursor-pointer hover:text-blue-600"
        >
          {experience.title}
        </div>
        {skill === experience.id && (
          <p className="font-Playwriteus mt-3 text-sm text-gray-600">{experience.details}</p>
        )}
      </li>
    ))}
  </ul>
        </div>
    </div>

    )
}


export default Experience;