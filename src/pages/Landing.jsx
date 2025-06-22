import React from "react";
import Header from "../layout/Header";
import Footer from "../layout/Footer";
import { Link } from "react-router-dom";

const Landing = () => (
  <div className="flex flex-col min-h-screen bg-gradient-to-br from-blue-100 via-white to-purple-100">
    <Header />
    <main className="flex-1 flex flex-col items-center justify-center text-center px-4 pt-24 pb-12">
      <h1 className="text-5xl md:text-6xl font-extrabold text-blue-700 mb-4 drop-shadow-lg">
        Welcome to Codepan
      </h1>
      <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-2xl">
        A beautiful, easy-to-use React JSX component library powered by Tailwind
        CSS. Build faster, design better.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Link
          to="/components"
          className="inline-block px-8 py-3 bg-blue-600 text-white rounded-lg text-lg font-semibold shadow hover:bg-blue-700 transition"
        >
          Browse Components
        </Link>
        <Link
          to="/backgrounds"
          className="inline-block px-8 py-3 bg-purple-600 text-white rounded-lg text-lg font-semibold shadow hover:bg-purple-700 transition"
        >
          Tailwind Backgrounds
        </Link>
      </div>
    </main>
    <Footer />
  </div>
);

export default Landing;
