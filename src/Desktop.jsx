import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import windowbg from "./assets/windowbg.jpg";
import win11 from "./assets/win11.mp3";
import folder from "./assets/folder.png";
import recycle from "./assets/recycle.png";
import pdf from './assets/pdf.png'
import file from "./assets/file.png";
import Window from "./Window";
import Taskbar from "./Taskbar";
import ProjectsExplorer from "./Projects";
import AboutTxt from "./About";
import Resume from "./assets/babatunde.pdf";

const APPS = [
  { id: "about", label: "About Me", icon: file },
  { id: "projects", label: "Projects", icon: folder },
  { id: "resume", label: "Resume", icon: pdf },
  { id: "recycle", label: "Recycle Bin", icon: recycle },
];

export default function Desktop() {
  const [openWindows, setOpenWindows] = useState([]);
  const [active, setActive] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const audio = new Audio(win11);
    audio.volume = 0.5;
    audio.play().catch(() => {});
  }, []);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  function openApp(id) {
    setOpenWindows((prev) => {
      const exists = prev.find((w) => w.id === id);
      if (!exists) return [...prev, { id, minimized: false }];
      return prev.map((w) =>
        w.id === id ? { ...w, minimized: false } : w
      );
    });
    setActive(id);
  }

  function closeApp(id) {
    setOpenWindows((prev) => prev.filter((w) => w.id !== id));
    if (active === id) setActive(null);
  }

  function minimizeApp(id) {
    setOpenWindows((prev) =>
      prev.map((w) =>
        w.id === id ? { ...w, minimized: true } : w
      )
    );
    if (active === id) setActive(null);
  }

  return (
    <div className="fixed inset-0 text-white overflow-hidden">
      {/* WALLPAPER */}
      <img
        src={windowbg}
        className="absolute inset-0 w-full h-full object-cover"
        alt="Desktop"
      />

      {/* DESKTOP ICONS */}
      <div className="relative z-10 p-6 grid gap-6 w-24">
        {APPS.map((app) => (
          <DesktopIcon
            key={app.id}
            label={app.label}
            icon={app.icon}
            onOpen={() => openApp(app.id)}
            mobile={isMobile}
          />
        ))}
      </div>

      {/* WINDOWS */}
      {openWindows
        .filter((w) => !w.minimized)
        .map((w, index) => (
          <Window
            key={w.id}
            title={w.id}
            zIndex={300 + index}
            active={active === w.id}
            isMobile={isMobile}
            onFocus={() => setActive(w.id)}
            onClose={() => closeApp(w.id)}
            onMinimize={() => minimizeApp(w.id)}
          >
            <WindowContent id={w.id} />
          </Window>
        ))}

      {/* TASKBAR */}
      <Taskbar
        openApps={openWindows}
        activeApp={active}
        onFocus={openApp}
      />
    </div>
  );
}

function DesktopIcon({ label, icon, onOpen, mobile }) {
  return (
    <motion.div
      onClick={mobile ? onOpen : undefined}
      onDoubleClick={!mobile ? onOpen : undefined}
      whileHover={{ scale: 1.05 }}
      className="flex flex-col items-center gap-2 cursor-pointer select-none"
    >
      <img src={icon} className="w-12 h-12" />
      <span className="text-xs text-center leading-tight">{label}</span>
    </motion.div>
  );
}

function WindowContent({ id }) {
  switch (id) {
    case "about":
      return <AboutTxt />;
    case "projects":
      return <ProjectsExplorer />;
    case "resume":
      return <p><a
            href={Resume}
            target="_blank"
            className="bg-blue-500 hover:bg-blue-600 px-6 py-3 rounded-lg shadow-lg text-white font-medium transition transform hover:scale-105"
          >
            View Resume
          </a></p>;
    default:
      return <p>Empty</p>;
  }
}
