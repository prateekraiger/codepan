import React from "react";
import Header from "../layout/Header";
import Footer from "../layout/Footer";
import { Link } from "react-router-dom";
import CommonBackground from "../comman/CommonBackground";
import { Button } from "@/components/ui/button";

const Landing = () => (
  <div className="flex flex-col min-h-screen relative">
    <CommonBackground />
    <Header />
    <main className="flex-1 flex flex-col items-center justify-center text-center px-4 pt-24 pb-12 relative z-10">
      <div className="max-w-3xl w-full mx-auto bg-white/30 dark:bg-neutral-900/40 backdrop-blur-md rounded-3xl shadow-xl p-8 md:p-14 border border-white/30 dark:border-neutral-800/60">
        <h1 className="text-6xl md:text-7xl font-extrabold mb-4 tracking-tight bg-gradient-to-r from-blue-600 via-purple-500 to-indigo-600 bg-clip-text text-transparent drop-shadow-xl">
          Build. Design. Inspire.
        </h1>
        <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-slate-700 dark:text-slate-200 drop-shadow-sm">
          The Ultimate React + Tailwind Component Library
        </h2>
        <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 mb-10 max-w-2xl mx-auto font-medium">
          Discover a beautiful, easy-to-use collection of React JSX components
          powered by Tailwind CSS and shadcn.{" "}
          <br className="hidden md:inline" />
          Build faster, design better, and launch with confidence.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-4">
          <Link to="/components">
            <Button
              size="lg"
              className="rounded-xl text-lg px-8 py-4 font-bold shadow-lg bg-gradient-to-r from-blue-600 to-indigo-600 text-white border-0 hover:scale-105 hover:shadow-xl transition-all duration-200"
            >
              Browse Components
            </Button>
          </Link>
          <Link to="/backgrounds">
            <Button
              size="lg"
              variant="secondary"
              className="rounded-xl text-lg px-8 py-4 font-bold shadow-lg bg-gradient-to-r from-purple-600 to-pink-500 text-white border-0 hover:scale-105 hover:shadow-xl transition-all duration-200"
            >
              Tailwind Backgrounds
            </Button>
          </Link>
        </div>
      </div>
    </main>
    <Footer />
  </div>
);

export default Landing;
