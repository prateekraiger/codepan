import React from "react";

const components = [
  { name: "Button", key: "button" },
  // Add more components here
];

const Sidebar = ({ selected, onSelect }) => (
  <aside
    className="bg-gray-100 border-r w-64 min-h-screen p-4 fixed md:static z-20 md:z-auto top-16 left-0 transition-transform md:translate-x-0 -translate-x-full md:block md:w-64 w-3/4 h-full md:h-auto mt-0"
    id="sidebar"
  >
    <h2 className="text-xl font-bold mb-6">Components</h2>
    <ul>
      {components.map((comp) => (
        <li key={comp.key}>
          <button
            className={`w-full text-left px-3 py-2 rounded mb-2 hover:bg-blue-100 transition-colors ${
              selected === comp.key ? "bg-blue-200 font-semibold" : ""
            }`}
            onClick={() => onSelect(comp.key)}
          >
            {comp.name}
          </button>
        </li>
      ))}
    </ul>
  </aside>
);

export default Sidebar;
