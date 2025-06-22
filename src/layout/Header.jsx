import React from "react";
import { Link, NavLink } from "react-router-dom";

const Header = () => (
  <header className="w-full fixed top-0 left-0 z-30 bg-white border-b shadow-sm h-16 flex items-center px-6 justify-between">
    <div className="flex items-center gap-2">
      <Link
        to="/"
        className="text-2xl font-bold text-blue-600 hover:text-blue-800 transition-colors"
      >
        Codepan
      </Link>
      <span className="text-sm text-gray-500 font-medium hidden sm:inline">
        A React JSX Component Library
      </span>
    </div>
    <nav className="flex gap-4">
      <NavLink
        to="/components"
        className={({ isActive }) =>
          `text-base font-medium px-3 py-1 rounded hover:bg-blue-100 transition ${
            isActive ? "text-blue-700 bg-blue-50" : "text-gray-700"
          }`
        }
      >
        Components
      </NavLink>
      <NavLink
        to="/backgrounds"
        className={({ isActive }) =>
          `text-base font-medium px-3 py-1 rounded hover:bg-blue-100 transition ${
            isActive ? "text-blue-700 bg-blue-50" : "text-gray-700"
          }`
        }
      >
        Backgrounds
      </NavLink>
    </nav>
  </header>
);

export default Header;
