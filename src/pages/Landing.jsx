import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Code,
  Layers,
  Sparkles,
  ArrowRight,
  Zap,
  Palette,
  Download,
} from "lucide-react";
import Logo from "../comman/Logo";

const FloatingParticle = ({ delay = 0, duration = 20 }) => (
  <div
    className="absolute w-1 h-1 bg-blue-400/30 rounded-full animate-pulse"
    style={{
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      animationDelay: `${delay}s`,
      animationDuration: `${duration}s`,
    }}
  />
);

const AnimatedBackground = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      {/* Dynamic gradient that follows mouse */}
      <div
        className="absolute w-96 h-96 rounded-full blur-3xl opacity-20 transition-all duration-1000 ease-out"
        style={{
          background: "radial-gradient(circle, #3b82f6, #8b5cf6, #ec4899)",
          left: `${mousePosition.x}%`,
          top: `${mousePosition.y}%`,
          transform: "translate(-50%, -50%)",
        }}
      />

      {/* Floating particles */}
      {Array.from({ length: 20 }).map((_, i) => (
        <FloatingParticle
          key={i}
          delay={i * 0.5}
          duration={15 + Math.random() * 10}
        />
      ))}

      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `
            linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: "50px 50px",
        }}
      />
    </div>
  );
};

const AnimatedButton = ({
  children,
  variant = "primary",
  icon: Icon,
  className = "",
  ...props
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const variants = {
    primary:
      "bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 hover:from-blue-500 hover:via-purple-500 hover:to-pink-500 text-white shadow-2xl shadow-purple-500/25",
    secondary:
      "bg-gray-800/80 hover:bg-gray-700/80 text-white border border-gray-600/50 hover:border-gray-500/50 backdrop-blur-sm",
    accent:
      "bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-white shadow-2xl shadow-emerald-500/25",
  };

  return (
    <button
      className={`group relative px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 active:scale-95 ${variants[variant]} ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      {...props}
    >
      <div className="relative flex items-center justify-center gap-2 overflow-hidden">
        {Icon && (
          <Icon
            className={`w-5 h-5 transition-transform duration-300 ${
              isHovered ? "rotate-12 scale-110" : ""
            }`}
          />
        )}
        <span className="relative">{children}</span>
        <ArrowRight
          className={`w-5 h-5 transition-all duration-300 ${
            isHovered ? "translate-x-1 opacity-100" : "translate-x-0 opacity-0"
          }`}
        />
      </div>

      {/* Animated border */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur-sm" />
    </button>
  );
};

const FeatureCard = ({
  icon: Icon,
  title,
  description,
  gradient,
  delay = 0,
}) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <div
      className={`group relative p-6 rounded-3xl bg-gray-900/50 backdrop-blur-xl border border-gray-700/50 hover:border-gray-600/50 transition-all duration-500 hover:scale-105 hover:-translate-y-2 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
    >
      <div
        className={`w-16 h-16 rounded-2xl ${gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
      >
        <Icon className="w-8 h-8 text-white" />
      </div>
      <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
      <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
        {description}
      </p>

      {/* Hover glow */}
      <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur-xl" />
    </div>
  );
};

const StatsCounter = ({ value, label, suffix = "" }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const duration = 2000;
    const steps = 60;
    const increment = value / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [value]);

  return (
    <div className="text-center">
      <div className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
        {count}
        {suffix}
      </div>
      <div className="text-gray-400 text-sm font-medium">{label}</div>
    </div>
  );
};

const Landing = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-black relative overflow-hidden">
      <AnimatedBackground />

      {/* Hero Section */}
      <section className="relative z-10 min-h-screen flex items-center justify-center px-4">
        <div className="max-w-6xl mx-auto text-center">
          {/* Logo/Brand */}
          <div
            className={`mb-8 transition-all duration-1000 ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <div className="inline-flex items-center gap-3 mb-4">
              <div className="scale-[2] md:scale-[2.5]">
                <Logo />
              </div>
            </div>
          </div>

          {/* Main Headline */}
          <div
            className={`mb-8 transition-all duration-1000 delay-200 ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <h2 className="text-6xl md:text-8xl font-black mb-6 leading-tight">
              <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Build.
              </span>{" "}
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Design.
              </span>{" "}
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Inspire.
              </span>
            </h2>
          </div>

          {/* CTA Buttons */}
          <div
            className={`mb-16 transition-all duration-1000 delay-400 ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-2xl mx-auto">
              <Link to="/components" className="w-full sm:w-auto">
                <AnimatedButton
                  variant="primary"
                  icon={Sparkles}
                  className="w-full sm:w-auto"
                >
                  Explore Components
                </AnimatedButton>
              </Link>
              <Link to="/backgrounds" className="w-full sm:w-auto">
                <AnimatedButton
                  variant="secondary"
                  icon={Palette}
                  className="w-full sm:w-auto"
                >
                  View Backgrounds
                </AnimatedButton>
              </Link>
            </div>
          </div>

          {/* Stats */}
          <div
            className={`grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto mb-20 transition-all duration-1000 delay-600 ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <StatsCounter value={100} label="Components" suffix="+" />
            <StatsCounter value={50} label="Backgrounds" suffix="+" />
            <StatsCounter value={10} label="Categories" suffix="+" />
            <StatsCounter value={99} label="Satisfaction" suffix="%" />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="relative z-10 py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Why Choose <span className="text-blue-400">Codepan</span>?
            </h3>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Everything you need to build stunning, modern web applications
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <FeatureCard
              icon={Zap}
              title="Lightning Fast"
              description="Optimized components that load instantly and perform flawlessly across all devices"
              gradient="bg-gradient-to-br from-yellow-500 to-orange-500"
              delay={100}
            />
            <FeatureCard
              icon={Palette}
              title="Beautiful Design"
              description="Carefully crafted components with modern aesthetics and smooth animations"
              gradient="bg-gradient-to-br from-pink-500 to-purple-500"
              delay={200}
            />
            <FeatureCard
              icon={Code}
              title="Developer Friendly"
              description="Clean, readable code with TypeScript support and comprehensive documentation"
              gradient="bg-gradient-to-br from-blue-500 to-cyan-500"
              delay={300}
            />
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="relative z-10 py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="relative p-12 rounded-4xl bg-gradient-to-r from-gray-900/80 to-gray-800/80 backdrop-blur-xl border border-gray-700/50">
            <div className="absolute inset-0 rounded-4xl bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 blur-xl" />
            <div className="relative">
              <h4 className="text-4xl font-bold text-white mb-4">
                Ready to Build Something Amazing?
              </h4>
              <p className="text-xl text-gray-300 mb-8">
                Join thousands of developers who trust Codepan for their
                projects
              </p>
              <Link to="/components">
                <AnimatedButton
                  variant="accent"
                  icon={Download}
                  className="text-xl px-12 py-5"
                >
                  Get Started Free
                </AnimatedButton>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Landing;
