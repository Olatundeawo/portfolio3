import { motion } from "framer-motion";
import { X, Minus, Square, ChevronRight, Search } from "lucide-react";
import { useRef } from "react";

export default function Window({
  title,
  children,
  onClose,
  onFocus,
  onMinimize,
  zIndex,
  active,
  isMobile,
}) {
  const constraintsRef = useRef(null);

  return (
    <div
      ref={constraintsRef}
      className="fixed inset-0 pointer-events-none z-[200]"
    >
      <motion.div
        drag={!isMobile}
        dragMomentum={false}
        dragConstraints={constraintsRef}
        onMouseDown={onFocus}
        initial={{
          opacity: 0,
          scale: 0.96,
          ...(isMobile ? {} : { x: "-50%", y: "-50%" }),
        }}
        animate={{
          opacity: 1,
          scale: 1,
          ...(isMobile ? {} : { x: "-50%", y: "-50%" }),
        }}
        transition={{ duration: 0.2 }}
        style={{
          zIndex,
          ...(isMobile
            ? { left: 0, top: 0 }
            : { left: "50%", top: "46%" }),
        }}
        className={`
          pointer-events-auto absolute
          ${isMobile
            ? "w-full h-full rounded-none"
            : "rounded-xl"}
          w-[min(96vw,1100px)]
          h-[min(92vh,720px)]
          bg-[#1f1f1f]/95 backdrop-blur-xl
          border border-white/10
          shadow-2xl
          text-gray-200
          flex flex-col
          ${active ? "ring-1 ring-blue-500/40" : ""}
        `}
      >

        {/* TITLE BAR */}
        <div className="h-11 flex items-center justify-between px-4 bg-[#202020]/80 border-b border-white/10 select-none">
          <span className="text-sm font-medium capitalize">{title}</span>
          <div className="flex">
            <WinButton onClick={onMinimize}>
              <Minus size={14} />
            </WinButton>
            <WinButton>
              <Square size={12} />
            </WinButton>
            <WinButton danger onClick={onClose}>
              <X size={14} />
            </WinButton>
          </div>
        </div>

        {/* COMMAND BAR */}
        <div className="h-12 flex items-center justify-between px-4 bg-[#1b1b1b] border-b border-white/10 text-sm">
          <div className="flex gap-4 text-gray-300">
            <button className="hover:text-white">New</button>
            <button className="hover:text-white">Sort</button>
            <button className="hover:text-white">View</button>
          </div>

          <div className="relative w-56">
            <Search
              size={14}
              className="absolute left-2 top-1/2 -translate-y-1/2 text-gray-400"
            />
            <input
              placeholder="Search"
              className="w-full bg-[#2a2a2a] pl-8 pr-2 py-1 rounded-md text-xs outline-none border border-white/10 focus:border-blue-500/50"
            />
          </div>
        </div>

        {/* BODY */}
        <div className="flex flex-1 min-h-0">
          {/* SIDEBAR */}
          {!isMobile && (
            <aside className="w-60 bg-[#181818]/80 border-r border-white/10 p-3 text-sm overflow-auto">
              <NavSection title="Quick access">
                {["Desktop", "Documents", "Downloads", "Pictures"].map(
                  (item) => (
                    <NavItem key={item}>{item}</NavItem>
                  )
                )}
              </NavSection>

              <NavSection title="This PC">
                <NavItem>250GB SSD</NavItem>
                <NavItem>1TB SSD</NavItem>
              </NavSection>
            </aside>
          )}

          {/* CONTENT */}
          <main className="flex-1 bg-[#1e1e1e] overflow-auto text-sm p-3">
            {children}
          </main>
        </div>

        {/* STATUS BAR */}
        <div className="h-7 px-3 flex items-center text-xs text-gray-400 bg-[#1b1b1b] border-t border-white/10">
          Ready
        </div>
      </motion.div>
    </div>
  );
}

function WinButton({ children, onClick, danger }) {
  return (
    <button
      onClick={onClick}
      className={`w-12 h-11 flex items-center justify-center ${
        danger ? "hover:bg-red-600" : "hover:bg-white/10"
      }`}
    >
      {children}
    </button>
  );
}

function NavSection({ title, children }) {
  return (
    <div className="mb-3">
      <div className="text-gray-400 text-xs font-semibold mb-1">
        {title}
      </div>
      <div className="space-y-1">{children}</div>
    </div>
  );
}

function NavItem({ children }) {
  return (
    <div className="flex items-center gap-2 px-2 py-1 rounded hover:bg-white/10 cursor-pointer">
      <ChevronRight size={12} className="text-gray-500" />
      {children}
    </div>
  );
}
