import { useEffect, useState } from "react";

const Loader1 = ({ text = "loading", color = "indigo" }) => {
  // Available colors (Tailwind classes)
  const colorVariants = {
    indigo: {
      text: "text-indigo-400",
      primary: "bg-indigo-500",
      secondary: "bg-indigo-300",
    },
    purple: {
      text: "text-purple-400",
      primary: "bg-purple-500",
      secondary: "bg-purple-300",
    },
    blue: {
      text: "text-blue-400",
      primary: "bg-blue-500",
      secondary: "bg-blue-300",
    },
  };

  // Selected color scheme
  const colors = colorVariants[color] || colorVariants.indigo;

  // For additional effects
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => setLoaded(true), 100);
  }, []);

  return (
    <div
      className={`relative w-20 h-12 transition-opacity duration-200 ${
        loaded ? "opacity-100" : "opacity-0"
      }`}
    >
      {/* Text */}
      <span
        className={`absolute top-0 text-xs uppercase tracking-wide font-medium ${colors.text} animate-slide`}
      >
        {text}
      </span>

      {/* Loader bar */}
      <span
        className={`absolute bottom-0 h-4 rounded-full ${colors.primary} animate-expand`}
      ></span>

      {/* Inner loader effect */}
      <span
        className={`absolute bottom-0 h-4 rounded-full ${colors.secondary} animate-inner-expand`}
      ></span>

      {/* Custom animations */}
      <style>{`
        @keyframes slide {
          0% {
            letter-spacing: 1px;
            transform: translateX(0px);
          }
          40% {
            letter-spacing: 2px;
            transform: translateX(26px);
          }
          80% {
            letter-spacing: 1px;
            transform: translateX(32px);
          }
          90% {
            letter-spacing: 2px;
            transform: translateX(0px);
          }
          100% {
            letter-spacing: 1px;
            transform: translateX(0px);
          }
        }
        @keyframes expand {
          0% {
            width: 1rem;
            transform: translateX(0px);
          }
          40% {
            width: 100%;
            transform: translateX(0px);
          }
          80% {
            width: 1rem;
            transform: translateX(4rem);
          }
          90% {
            width: 100%;
            transform: translateX(0px);
          }
          100% {
            width: 1rem;
            transform: translateX(0px);
          }
        }
        @keyframes inner-expand {
          0% {
            transform: translateX(0px);
            width: 1rem;
          }
          40% {
            transform: translateX(0%);
            width: 80%;
          }
          80% {
            width: 100%;
            transform: translateX(0px);
          }
          90% {
            width: 80%;
            transform: translateX(15px);
          }
          100% {
            transform: translateX(0px);
            width: 1rem;
          }
        }
        .animate-slide {
          animation: slide 3.5s ease infinite both;
        }
        .animate-expand {
          animation: expand 3.5s ease infinite both;
        }
        .animate-inner-expand {
          animation: inner-expand 3.5s ease infinite both;
        }
      `}</style>
    </div>
  );
};

export default Loader1;
