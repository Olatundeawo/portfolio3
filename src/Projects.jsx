import { motion } from "framer-motion";
import Blog from './assets/Blog.png';
import Hollart from './assets/Hollar.png'

const Projects = () => {
    return (
        <motion.div
        initial={{ y: "-100%", opacity: 0 }} // Start off-screen at the top
        whileInView={{ y: 0, opacity: 1 }} // Slide down into view
        viewport={{ once: true, amount: 0.2 }} // Trigger when 20% of the element is visible
        transition={{ duration: 1.5, ease: "easeOut" }} // Smooth transition
        >
        <div className="pl-8">
             <section className="flex items-center space-x-2">
                
                <h3 className="font-mono subpixel-antialiased font-black text-2xl "> Projects</h3>
                <hr className="flex-1 border-t border-white"></hr>
            </section>
            <div className="flex flex-wrap justify-center gap-4 p-4">
                <div className="image relative overflow-hidden group">
                    <img src={Blog} alt="blog" className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-110 group-hover:translate-x-2 group-hover:translate-y-2" />
                    <div className="info font-serif absolute inset-0 flex flex-col items-center justify-center bg-black/70 text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                        <h2 className="font-gloock font-bold text-amber-500 uppercase lg:text-4xl mb-12"> Blog Website</h2>
                        <p className="font-sue md:text-2xl"> Is a fullstack project.It was developed using flask. it has admin panel</p>
                    </div>
                </div>
                <div className="image relative overflow-hidden group">
                    <img src={Hollart} alt="hollart" className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-110 group-hover:translate-x-2 group-hover:translate-y-2" />
                    <div className="info font-serif absolute inset-0 flex flex-col items-center justify-center bg-black/70 text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                        <h2 className="font-gloock font-bold text-amber-500 uppercase lg:text-4xl mb-12 "> Site for Displaying clothings</h2>
                        <p className="font-sue md:text-2xl"> It was developed using react, node js, it has a session based and authentication.</p>
                    </div>
                </div>
            </div>
        </div>
    </motion.div>
    )
};

export default Projects;