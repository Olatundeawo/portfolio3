import { Folder } from "lucide-react";

export default function WindowsFolderIcon() {
  return (
    <div className="relative w-7 h-6">
      {/* Folder tab */}
      <div
        className="
          absolute top-0 left-1
          w-3 h-1.5
          bg-yellow-300
          rounded-t-sm
          shadow-sm
        "
      />

      {/* Folder body */}
      <div
        className="
          absolute bottom-0
          w-full h-5
          bg-gradient-to-b
          from-yellow-300
          to-yellow-500
          rounded-md
          shadow-md
          border border-yellow-600/40
        "
      />

      {/* Icon outline */}
      <Folder
        size={22}
        className="
          absolute inset-0 m-auto
          text-yellow-700
          opacity-70
        "
      />
    </div>
  );
}
