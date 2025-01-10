import mongodb from './assets/mongodb.svg'
import react from './assets/react.svg'
import javaScript from './assets/javaScript.svg'
import css from './assets/css.svg'
import git from './assets/git.svg'
import node from './assets/node js.svg'
import sql from './assets/sql.svg'
import tailwind from './assets/tailwind.svg'
import python from './assets/python.jpeg'


const Skills = () => {
    return (
        <div className="pl-8">
            <section className="flex items-center space-x-2">
                
                <h3 className="font-mono subpixel-antialiased font-black text-2xl "> Skills</h3>
                <hr className="flex-1 border-t border-white"></hr>
            </section>
            <div className="flex flex-wrap justify-center gap-4 p-4">
                <img src={mongodb} alt="MongoDB" className="h-12 w-12 laptop: h-40 w-40 object-contain" />
                <img src={react} alt="React" className="h-12 w-12 laptop: h-40 w-40 object-contain" />
                <img src={javaScript} alt="JavaScript" className="h-12 w-12 laptop: h-40 w-40 object-contain" />
                <img src={css} alt="CSS" className="h-12 w-12 laptop: h-40 w-40 object-contain" />
                <img src={git} alt="Git" className="h-12 w-12 laptop: h-40 w-40 object-contain" />
                <img src={node} alt="Node.js" className="h-12 w-12 laptop: h-40 w-40 object-contain" />
                <img src={sql} alt="SQL" className="h-12 w-12 laptop: h-40 w-40 object-contain" />
                <img src={tailwind} alt="Tailwind CSS" className="h-12 w-12 laptop: h-40 w-40 object-contain" />
                <img src={python} alt="python" className="h-12 w-12 laptop: h-40 w-40 object-contain" />
            </div>

        </div>

    )
}

export default Skills