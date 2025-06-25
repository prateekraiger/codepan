import React from "react";

const Loader2 = () => {
  return (
    <div className="relative w-16 h-16 flex justify-center items-center">
      {/* Spinner */}
      <div className="relative w-full h-full rounded-full">
        {[...Array(8)].map((_, index) => (
          <span
            key={index}
            className={`absolute top-1/2 w-9 h-1 bg-white shadow-md animate-dominos`}
            style={{
              left: `${80 - index * 10}%`,
              animationDelay: `${index * 0.125}s`,
            }}
          ></span>
        ))}
      </div>

      {/* Custom animations */}
      <style>{`
        @keyframes dominos {
          50% {
            opacity: 0.7;
          }
          75% {
            transform: rotate(90deg);
          }
          80% {
            opacity: 1;
          }
        }
        .animate-dominos {
          animation: dominos 1s ease infinite;
        }
      `}</style>
    </div>
  );
};

export default Loader2;
