import React from "react";

const SampleCard = ({
  title = "Hover Me : )",
  gradientColors = ["from-blue-500", "to-cyan-400"],
}) => {
  return (
    <div className="relative w-48 h-64 group cursor-pointer transition-all duration-500 hover:-translate-y-5">
      {/* Gradient Background with Blur Effect */}
      <div
        className={`absolute inset-0 bg-gradient-to-br ${gradientColors[0]} ${gradientColors[1]} rounded-2xl`}
      ></div>
      <div
        className={`absolute inset-0 bg-gradient-to-br ${gradientColors[0]} ${gradientColors[1]} rounded-2xl opacity-80 blur-xl group-hover:opacity-100 transition-opacity duration-300`}
      ></div>

      {/* Inner Card with Semi-Transparent Background */}
      <div className="absolute inset-1.5 bg-black/60 rounded-xl z-10 overflow-hidden">
        {/* Animated Left Highlight */}
        <div className="absolute inset-y-0 left-0 w-1/2 bg-white/10 backdrop-blur-sm transition-all duration-300 group-hover:w-2/3"></div>

        {/* Content */}
        <div className="relative h-full w-full z-20 flex items-center justify-center p-4">
          <div className="text-white text-xl font-bold tracking-wide group-hover:scale-110 transition-transform duration-300">
            {title}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SampleCard;
