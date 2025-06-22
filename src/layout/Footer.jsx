import React from "react";

const Footer = () => (
  <footer className="w-full bg-white border-t shadow-inner py-3 px-6 text-center text-sm text-gray-500 mt-auto">
    © {new Date().getFullYear()} Codepan — The easiest React JSX component
    library. Built with ❤️ and Tailwind CSS.
  </footer>
);

export default Footer;
