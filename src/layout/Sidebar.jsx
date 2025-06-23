import React, { useState } from "react";

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

const Sidebar = ({ selected, onSelect }) => {
  const [openSections, setOpenSections] = useState({ "button-section": true });

  const toggleSection = (key) => {
    setOpenSections((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <aside
      className="bg-[linear-gradient(180deg,#18181b_0%,#23272f_100%)] border-r border-gray-800 w-64 min-h-screen p-4 fixed md:static z-20 md:z-auto top-16 left-0 transition-transform md:translate-x-0 -translate-x-full md:block md:w-64  h-full md:h-auto mt-0 shadow-xl shadow-black/30 backdrop-blur-md bg-opacity-90"
      id="sidebar"
      style={{ boxShadow: "0 4px 32px 0 #0004, 0 1.5px 0 0 #23272f inset" }}
    >
      <h2 className="text-xl font-bold mb-6 text-gray-100 border-b border-gray-800 pb-2">
        Components
      </h2>
      <ul>
        {components.map((section) => (
          <li key={section.key}>
            <button
              className="w-full text-left px-3 py-2 rounded mb-1 font-bold bg-gray-900/80 hover:bg-gray-900/90 hover:text-blue-400 text-gray-200 transition-colors flex justify-between items-center border border-transparent hover:border-gray-700"
              onClick={() => toggleSection(section.key)}
              type="button"
            >
              {section.name}
              <span>{openSections[section.key] ? "▾" : "▸"}</span>
            </button>
            {openSections[section.key] && section.children && (
              <ul className="ml-4 mt-1">
                {section.children.map((comp) => (
                  <li key={comp.key}>
                    <button
                      className={`w-full text-left px-3 py-2 rounded mb-1 transition-colors text-gray-200 hover:bg-gray-800/60 hover:text-blue-400 border border-transparent hover:border-gray-700 ${
                        selected === comp.key
                          ? "bg-gray-900/80 text-blue-400 font-semibold border-blue-900"
                          : ""
                      }`}
                      onClick={() => onSelect(comp.key)}
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
  );
};

export default Sidebar;
