import React from "react";
import { Link, NavLink } from "react-router-dom";
import { SidebarTrigger } from "@/components/ui/sidebar";

const Header = ({ showSidebarTrigger = false }) => (
  <header className="w-full fixed top-0 left-0 z-30 bg-gray-900 border-b border-gray-800 shadow-sm shadow-black/10 h-16 flex items-center px-6 justify-between">
    <div className="flex items-center gap-2">
      {/* Hamburger menu for mobile using shadcn SidebarTrigger */}
      {showSidebarTrigger && (
        <SidebarTrigger className="md:hidden mr-2 text-blue-400 hover:text-blue-200 focus:outline-none text-2xl" />
      )}
      <Link
        to="/"
        className="text-2xl font-bold text-blue-400 hover:text-blue-300 transition-colors"
      >
        Codepan
      </Link>
      <span className="text-sm text-gray-400 font-medium hidden sm:inline">
        A React JSX Component Library
      </span>
    </div>
    <nav className="flex gap-4">
      <NavLink
        to="/components"
        className={({ isActive }) =>
          `text-base font-medium px-3 py-1 rounded transition-colors duration-150 ${
            isActive
              ? "text-blue-300 bg-gray-800"
              : "text-slate-300 hover:bg-gray-800 hover:text-blue-200"
          }`
        }
      >
        Components
      </NavLink>
      <NavLink
        to="/backgrounds"
        className={({ isActive }) =>
          `text-base font-medium px-3 py-1 rounded transition-colors duration-150 ${
            isActive
              ? "text-blue-300 bg-gray-800"
              : "text-slate-300 hover:bg-gray-800 hover:text-blue-200"
          }`
        }
      >
        Backgrounds
      </NavLink>
    </nav>
  </header>
);

export default Header;
