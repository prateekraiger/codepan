import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { Menu, X, Code, Layers } from "lucide-react";
import Logo from "../comman/Logo";

const Header = ({ showSidebarTrigger = false }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const navItems = [
    {
      to: "/components",
      label: "Components",
      icon: <Layers className="w-4 h-4" />,
    },
    {
      to: "/backgrounds",
      label: "Backgrounds",
      icon: (
        <div className="w-4 h-4 bg-gradient-to-br from-blue-400 to-purple-500 rounded opacity-70"></div>
      ),
    },
  ];

  return (
    <>
      <header className="w-full fixed top-0 left-0 z-50 bg-gray-900/95 backdrop-blur-md border-b border-gray-800/50 shadow-lg h-16 flex items-center px-4 sm:px-6 justify-between">
        <div className="flex items-center gap-3">
          {/* Sidebar trigger for larger screens */}
          {showSidebarTrigger && (
            <SidebarTrigger className="hidden md:flex mr-2 text-blue-400 hover:text-blue-200 focus:outline-none text-xl transition-colors" />
          )}

          {/* Mobile menu button */}
          <button
            onClick={toggleMobileMenu}
            className="md:hidden p-2 text-blue-400 hover:text-blue-200 focus:outline-none transition-colors"
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>

          <Link
            to="/"
            className="hover:scale-105 transition-transform duration-200"
          >
            <Logo />
          </Link>

          <div className="hidden sm:block">
            <span className="text-sm text-gray-400 font-medium ml-2">
              React JSX Component Library
            </span>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-4">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `flex items-center gap-2 text-base font-semibold px-5 py-2 rounded-xl transition-all duration-200 border-2 ${
                  isActive
                    ? "text-blue-300 bg-gray-800/90 border-blue-400 shadow-lg"
                    : "text-slate-200 border-transparent hover:bg-gray-800/60 hover:text-blue-200 hover:border-blue-400 hover:shadow"
                }`
              }
            >
              {item.icon}
              {item.label}
            </NavLink>
          ))}
        </nav>

        {/* Mobile Sidebar trigger for mobile screens */}
        {showSidebarTrigger && (
          <SidebarTrigger className="md:hidden text-blue-400 hover:text-blue-200 focus:outline-none transition-colors" />
        )}
      </header>

      {/* Mobile Navigation Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 md:hidden">
          <div
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={toggleMobileMenu}
          ></div>
          <nav className="absolute top-16 left-0 right-0 bg-gray-900/98 backdrop-blur-md border-b border-gray-800/50 shadow-2xl">
            <div className="px-4 py-4 space-y-2">
              {navItems.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  onClick={toggleMobileMenu}
                  className={({ isActive }) =>
                    `flex items-center gap-3 text-base font-medium px-4 py-3 rounded-lg transition-all duration-200 ${
                      isActive
                        ? "text-blue-300 bg-gray-800/80 shadow-md"
                        : "text-slate-300 hover:bg-gray-800/60 hover:text-blue-200"
                    }`
                  }
                >
                  {item.icon}
                  {item.label}
                </NavLink>
              ))}
              <div className="pt-4 mt-4 border-t border-gray-800/50">
                <div className="px-4 py-2">
                  <span className="text-xs text-gray-500 font-medium">
                    React JSX Component Library
                  </span>
                </div>
              </div>
            </div>
          </nav>
        </div>
      )}
    </>
  );
};

export default Header;
