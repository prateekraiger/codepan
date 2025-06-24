import React from "react";

const Logo = () => {
  return (
    <div className="flex items-center gap-2">
      <div className="relative w-8 h-8">
        <div className="absolute inset-0 bg-gradient-to-br from-black to-black/80 rounded-lg transform rotate-45"></div>
        <div className="absolute inset-0 flex items-center justify-center text-white font-bold text-lg transform -rotate-45">
          CP
        </div>
      </div>
      <span className="text-xl font-bold text-white">CodePan</span>
    </div>
  );
};

export default Logo;
