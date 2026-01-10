import { useEffect, useState } from "react";
import {
  LayoutGrid,
  Wifi,
  Volume2,
  BatteryFull,
} from "lucide-react";
import X from "./assets/X.png";
import github from "./assets/github.png";
import linkedin from "./assets/Linkedin.png";
import tiktok from './assets/tiktok.png'
import WindowsFolderIcon from "./folder";

export default function Taskbar({ openApps, activeApp, onFocus }) {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const i = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(i);
  }, []);

  return (
    <div className="fixed bottom-0 left-0 w-full h-14 z-50">
      {/* Glass */}
      <div className="absolute inset-0 bg-black/40 backdrop-blur-xl" />

      <div className="relative h-full flex items-center px-2 sm:px-4 text-white">
        {/* LEFT SPACER (desktop only) */}
        <div className="hidden lg:block w-40" />

        {/* CENTER ICONS */}
        <div
          className="
            flex-1 flex items-center justify-center gap-2 sm:gap-3
            overflow-x-auto scrollbar-none
          "
        >
          <IconButton>
            <LayoutGrid size={22} />
          </IconButton>

          <IconButton>
            <WindowsFolderIcon />
          </IconButton>

          <IconButton>
            <a href="https://x.com/bokinsin/" target="_blank">
            <img src={X} className="w-7 h-7" />
            </a>
          </IconButton>

          <IconButton>
            <a href="https://github.com/Olatundeawo/" target="_blank">
            <img src={github} className="w-7 h-7" />
            </a>
          </IconButton>

          <IconButton>
            <a href="https://www.linkedin.com/in/babatunde-awotimilehin-072ba83a1/" target="_blank">
            <img src={linkedin} className="w-7 h-7" />
            </a>
          </IconButton>

          <IconButton>
            <a href="https://www.tiktok.com/@thecodingradiographer/" target="_blank">
            <img src={tiktok} className="w-7 h-7" />
            </a>
          </IconButton>

          {/* OPEN WINDOWS */}
          {openApps.map((w) => (
            <button
              key={w.id}
              onClick={() => onFocus(w.id)}
              className={`relative h-10 w-10 rounded-md flex items-center justify-center
                ${
                  activeApp === w.id
                    ? "bg-white/30"
                    : "hover:bg-white/20"
                }`}
            >
              <span className="h-1 w-4 rounded-full bg-white absolute bottom-1" />
            </button>
          ))}
        </div>

        {/* SYSTEM TRAY */}
        <div className="flex items-center gap-2 sm:gap-3 text-xs ml-2">
          {/* Hide language on mobile */}
          <span className="hidden sm:block opacity-90">ENG</span>

          <Wifi size={16} className="hidden sm:block" />
          <Volume2 size={16} className="hidden sm:block" />
          <BatteryFull size={16} className="hidden sm:block" />

          {/* Time always visible */}
          <div className="leading-tight text-right ml-1 sm:ml-2">
            <div className="text-xs sm:text-sm">
              {time.toLocaleTimeString([], {
                hour: "2-digit",
                minute: "2-digit",
              })}
            </div>
            <div className="hidden sm:block opacity-80 text-[10px]">
              {time.toLocaleDateString()}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function IconButton({ children }) {
  return (
    <button
      className="
        h-10 w-10 rounded-md
        hover:bg-white/20
        flex items-center justify-center
        transition
        shrink-0
      "
    >
      {children}
    </button>
  );
}
