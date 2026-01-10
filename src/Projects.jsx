
import { Github, ExternalLink } from "lucide-react";

const PROJECTS = [
  {
    name: "HollartKiddies",
    modified: "24/11/2024 17:43",
    type: "Web Application",
    size: "6.8 MB",
    github: "https://github.com/Olatundeawo/hollarkiddies_backend",
    demo: "https://hollartkiddies.onrender.com/",
  },
  {
    name: "Personal Blog",
    modified: "16/10/2023 21:43",
    type: "Flask Website",
    size: "3.2 MB",
    github: "https://github.com/Olatundeawo/blog_website",
    demo: "https://olatundeawo1.pythonanywhere.com/",
  },
  {
    name: "Quiz App",
    modified: "09/09/2025 10:01",
    type: "React / Django App",
    size: "5.1 MB",
    github: "https://github.com/Olatundeawo/testApp",
  },
  {
    name: "SwiftPay",
    modified: "24/10/2025 19:22",
    type: "Fintech Web App",
    size: "7.4 MB",
    github: "https://github.com/Olatundeawo/SwiftPay",
    demo: "https://app-swiftpay.onrender.com/",
  },
  {
    name: "Ordora",
    modified: "10/12/2025 16:50",
    type: "Mobile app",
    size: "6.7 MB",
    github: "https://github.com/Olatundeawo/ordora",
    demo: "https://expo.dev/preview/update?message=fix+carts&updateRuntimeVersion=exposdk%3A54.0.0&createdAt=2025-12-11T20%3A41%3A21.036Z&slug=exp&projectId=bea9bc36-8775-441d-9350-569a283a38c0&group=ff45dee6-6d71-4d2a-8ef4-dca6b10ff349"
  },
  {
    name: "ImprovTrend",
    modified: "08/01/2026 20:12",
    type: "mobile, web app",
    size: "8.4 MB",
    github: "https://github.com/Olatundeawo/improvtrend",
    demo: "https://improvtrend--4w0aas555x.expo.app/"
  }
];

export default function ProjectsExplorer() {
  return (
    <div className="w-full h-full text-sm bg-[#1e1e1e] border border-white/10 rounded-md overflow-hidden">
      {/* SCROLL CONTAINER */}
      <div className="overflow-x-auto">
        <div className="min-w-[720px]">
          {/* HEADER */}
          <div className="grid grid-cols-[1.5fr_180px_160px_100px_140px] px-3 py-2 border-b border-white/10 text-gray-400 font-semibold sticky top-0 bg-[#1e1e1e] z-10">
            <div>Name</div>
            <div>Date modified</div>
            <div>Type</div>
            <div>Size</div>
            <div>Actions</div>
          </div>

          {/* ROWS */}
          {PROJECTS.map((p) => (
            <div
              key={p.name}
              className="grid grid-cols-[1.5fr_180px_160px_100px_140px] px-3 py-2 items-center border-b border-white/5 hover:bg-white/5 transition group"
            >
              {/* NAME */}
              <div className="flex items-center gap-3 truncate">
                <span>📁</span>
                <span className="font-medium truncate">{p.name}</span>
              </div>

              <div className="text-gray-400 whitespace-nowrap">
                {p.modified}
              </div>

              <div className="text-gray-400 truncate">{p.type}</div>

              <div className="text-gray-400 whitespace-nowrap">
                {p.size}
              </div>

              {/* ACTIONS */}
              <div className="flex gap-3">
                <a
                  href={p.github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-1 text-xs text-blue-400 hover:underline"
                >
                  <Github size={14} />
                  GitHub
                </a>

                {p.demo && (
                  <a
                    href={p.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-1 text-xs text-blue-400 hover:underline"
                  >
                    <ExternalLink size={14} />
                    Live
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
