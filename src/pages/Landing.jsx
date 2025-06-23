import React from "react";
import Header from "../layout/Header";
import Footer from "../layout/Footer";
import { Link } from "react-router-dom";
import CommonBackground from "../comman/CommonBackground";
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
  <div className="flex flex-col min-h-screen relative">
    <CommonBackground />
    {/* Floating blurred orb for depth */}
    <div className="absolute left-1/2 top-1/3 -translate-x-1/2 -z-10 w-[600px] h-[400px] bg-gradient-to-tr from-blue-700 via-purple-600 to-pink-500 opacity-30 blur-3xl rounded-full pointer-events-none" />
    <Header />
    <main className="flex-1 flex flex-col items-center justify-center text-center px-4 pt-24 pb-12 relative z-10">
      <div className="relative max-w-3xl w-full mx-auto">
        {/* Animated gradient border ring */}
        <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-60 blur-lg animate-pulse z-0" />
        {/* Card with glassmorphism */}
        <div className="relative bg-neutral-900/80 dark:bg-black/70 backdrop-blur-2xl rounded-3xl shadow-2xl p-8 md:p-14 border border-neutral-800/60 dark:border-neutral-700/80 ring-1 ring-white/10 z-10">
          {/* Soft glow behind card */}
          <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-blue-700/30 via-purple-700/20 to-pink-700/20 blur-2xl opacity-40 -z-10" />
          <h1 className="text-6xl md:text-7xl font-extrabold mb-4 tracking-tight text-slate-100 drop-shadow-xl">
            Build. Design. Inspire.
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-slate-100 dark:text-slate-100 drop-shadow-sm">
            The Ultimate React + Tailwind Component Library
          </h2>
          <p className="text-lg md:text-xl text-slate-300 dark:text-slate-200 mb-10 max-w-2xl mx-auto font-medium">
            Discover a beautiful, easy-to-use collection of React JSX components
            powered by Tailwind CSS and shadcn.{" "}
            <br className="hidden md:inline" />
            Build faster, design better, and launch with confidence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-4">
            <Link to="/components">
              <AnimatedButton gradient="bg-gradient-to-br from-slate-700 via-slate-900 to-zinc-800">
                Browse Components
              </AnimatedButton>
            </Link>
            <Link to="/backgrounds">
              <AnimatedButton gradient="bg-gradient-to-br from-slate-700 via-slate-900 to-zinc-800">
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
