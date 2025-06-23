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
      className="bg-gray-100 border-r w-64 min-h-screen p-4 fixed md:static z-20 md:z-auto top-16 left-0 transition-transform md:translate-x-0 -translate-x-full md:block md:w-64 w-3/4 h-full md:h-auto mt-0"
      id="sidebar"
    >
      <h2 className="text-xl font-bold mb-6">Components</h2>
      <ul>
        {components.map((section) => (
          <li key={section.key}>
            <button
              className="w-full text-left px-3 py-2 rounded mb-1 font-bold hover:bg-blue-100 transition-colors flex justify-between items-center"
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
                      className={`w-full text-left px-3 py-2 rounded mb-1 hover:bg-blue-100 transition-colors ${
                        selected === comp.key ? "bg-blue-200 font-semibold" : ""
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
