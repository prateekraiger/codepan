import React from "react";
import { Link } from "react-router-dom";
import CommonBackground from "../comman/CommonBackground";
import Header from "../layout/Header";
import Footer from "../layout/Footer";
import { motion } from "framer-motion";

const AnimatedButton = ({ children, gradient, ...props }) => {
  const [hovered, setHovered] = React.useState(false);
  return (
    <button
      className={`cursor-pointer ${gradient} shadow-[0px_4px_32px_0_rgba(99,102,241,.30)] px-8 py-4 rounded-xl border border-slate-600 text-white font-bold text-lg group relative overflow-hidden transition-transform duration-200 hover:scale-[1.04]`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      {...props}
      style={{ minWidth: 180 }}
    >
      <div className="relative overflow-hidden" style={{ height: 28 }}>
        <motion.p
          className="m-0 w-full text-center"
          style={{ position: "relative" }}
          animate={{ y: hovered ? -28 : 0 }}
          transition={{ duration: 1.125, ease: [0.19, 1, 0.22, 1] }}
        >
          {children}
        </motion.p>
        <motion.p
          className="absolute left-0 w-full m-0 text-center"
          style={{ top: 28 }}
          animate={{ top: hovered ? 0 : 28 }}
          transition={{ duration: 1.125, ease: [0.19, 1, 0.22, 1] }}
        >
          {children}
        </motion.p>
      </div>
    </button>
  );
};

const Landing = () => (
  <div className="flex flex-col min-h-screen relative bg-gradient-to-br from-neutral-950 via-gray-950 to-slate-900 overflow-x-hidden">
    <CommonBackground />
    <Header />
    <main className="flex-1 flex items-center justify-center px-2 sm:px-4 pt-28 pb-20 relative z-10">
      <div className="relative w-full max-w-2xl mx-auto flex flex-col items-center justify-center">
        {/* Animated gradient border ring */}
        <div className="absolute -inset-2 rounded-[2.5rem] bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-70 blur-lg animate-pulse z-0" />
        {/* Card with glassmorphism */}
        <div className="relative bg-neutral-900/95 dark:bg-black/80 backdrop-blur-2xl rounded-[2rem] shadow-2xl p-6 sm:p-12 md:p-16 border border-neutral-800/60 dark:border-neutral-700/80 ring-1 ring-white/10 z-10 flex flex-col items-center">
          {/* Soft glow behind card */}
          <div className="absolute -inset-6 rounded-[2rem] bg-gradient-to-br from-blue-700/40 via-purple-700/30 to-pink-700/30 blur-2xl opacity-50 -z-10" />
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold mb-6 tracking-tight text-slate-100 drop-shadow-2xl text-center leading-tight">
            Build. <span className="text-blue-400">Design.</span>{" "}
            <span className="text-pink-400">Inspire.</span>
          </h1>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-8 text-slate-100 dark:text-slate-100 drop-shadow-sm text-center">
            The Ultimate React + Tailwind Component Library
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-slate-300 dark:text-slate-200 mb-12 max-w-2xl mx-auto font-medium text-center">
            Discover a beautiful, easy-to-use collection of React JSX components
            powered by Tailwind CSS and shadcn.
            <br className="hidden md:inline" />
            Build faster, design better, and launch with confidence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center w-full">
            <Link to="/components" className="flex-1">
              <AnimatedButton
                gradient="bg-gradient-to-br from-slate-700 via-slate-900 to-zinc-800"
                className="w-full text-lg py-4"
              >
                Browse Components
              </AnimatedButton>
            </Link>
            <Link to="/backgrounds" className="flex-1">
              <AnimatedButton
                gradient="bg-gradient-to-br from-slate-700 via-slate-900 to-zinc-800"
                className="w-full text-lg py-4"
              >
                Tailwind Backgrounds
              </AnimatedButton>
            </Link>
          </div>
        </div>
      </div>
    </main>
    <Footer />
  </div>
);

export default Landing;
