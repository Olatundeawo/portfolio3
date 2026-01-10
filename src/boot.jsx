import { motion } from "framer-motion";
import windowbackground from './assets/windowbackground.jpg'
import babatunde from './assets/babatunde.jpg'

export default function BootScreen({ onEnter }) {
  return (
    <div className="fixed inset-0 overflow-hidden h-100">
      
      <img
        src={windowbackground}
        alt="Windows background"
        className="absolute inset-0 h-full w-full object-cover"
      />

      <div className="absolute inset-0 bg-black/30" />

      {/* Center Content */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 flex h-full flex-col items-center justify-center space-y-6 text-white"
      >
        
        <motion.img
          src={babatunde}
          alt="Profile"
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.6 }}
          className="h-40 w-40 rounded-full object-cover shadow-lg"
        />

        
        <h1 className="text-lg md:text-xl lg:text-2xl font-medium tracking-wide">
          Babatunde Awotimilehin
        </h1>

        <button
          onClick={onEnter}
          className="mt-4 rounded-md bg-white/10 px-5 py-2 text-sm sm:text-lg backdrop-blur hover:bg-white/20 transition"
        >
          Enter
        </button>
      </motion.div>
    </div>
  );
}
