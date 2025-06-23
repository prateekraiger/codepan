import React from "react";

const Footer = () => (
  <footer className="w-full bg-gray-950 border-t border-t-gray-800 shadow-inner shadow-black/10 py-3 px-6 text-center text-sm text-gray-400 mt-auto">
    © {new Date().getFullYear()} Codepan — The easiest React JSX component
    library. Built with ❤️ and Tailwind CSS.
  </footer>
);

export default Footer;
