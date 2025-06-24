import React from "react";

const components = [
  {
    name: "Button",
    key: "button-section",
    children: [
      { name: "Default Button", key: "button" },
      { name: "Thanos Button", key: "thanos" },
    ],
  },
  // Add more sections here
];

const Sidebar = ({ open, onClose, selected, onSelect }) => {
  // Mobile Sheet/Drawer
  return (
    <>
      {/* Overlay for mobile */}
      <div
        className={`fixed inset-0 z-40 bg-black/40 backdrop-blur-sm transition-opacity duration-300 md:hidden ${
          open
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        onClick={onClose}
        aria-hidden="true"
      />
      {/* Sheet/Drawer for mobile */}
      <aside
        className={`fixed top-0 left-0 z-50 h-full w-64 bg-gradient-to-b from-blue-950 via-slate-900 to-blue-900 border-r border-blue-900 shadow-2xl transition-transform duration-300 md:static md:translate-x-0 md:block
        ${
          open ? "translate-x-0" : "-translate-x-full"
        } md:opacity-100 md:pointer-events-auto`}
        style={{ boxShadow: "0 4px 32px 0 #0004, 0 1.5px 0 0 #23272f inset" }}
        id="sidebar"
        aria-label="Sidebar"
      >
        {/* Close button for mobile */}
        <button
          className="absolute top-4 right-4 md:hidden text-blue-300 hover:text-blue-100 text-2xl font-bold focus:outline-none"
          onClick={onClose}
          aria-label="Close sidebar"
        >
          ×
        </button>
        <h2 className="text-xl font-bold mb-6 text-blue-200 border-b border-blue-900 pb-2 px-4 pt-6 md:pt-0">
          Components
        </h2>
        <ul className="px-2">
          {components.map((section) => (
            <li key={section.key}>
              <button
                className="w-full text-left px-3 py-2 rounded mb-1 font-bold bg-blue-900/80 hover:bg-blue-900/90 hover:text-blue-400 text-blue-100 transition-colors flex justify-between items-center border border-transparent hover:border-blue-700"
                onClick={() => {}}
                type="button"
              >
                {section.name}
                <span>▾</span>
              </button>
              {section.children && (
                <ul className="ml-4 mt-1">
                  {section.children.map((comp) => (
                    <li key={comp.key}>
                      <button
                        className={`w-full text-left px-3 py-2 rounded mb-1 transition-colors text-blue-100 hover:bg-blue-800/60 hover:text-blue-400 border border-transparent hover:border-blue-700 ${
                          selected === comp.key
                            ? "bg-blue-900/80 text-blue-400 font-semibold border-blue-900"
                            : ""
                        }`}
                        onClick={() => {
                          onSelect(comp.key);
                          if (onClose) onClose();
                        }}
                      >
                        {comp.name}
                      </button>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </aside>
    </>
  );
};

export default Sidebar;
