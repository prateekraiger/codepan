import React from "react";

const BlueGridBg = ({ fullPage = false }) => {
  return (
    <div
      className={
        fullPage
          ? "fixed inset-0 w-full h-full z-10"
          : "w-full h-32 rounded-lg overflow-hidden"
      }
    >
      <div className="relative h-full w-full bg-slate-950">
        <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px]"></div>
      </div>
    </div>
  );
};

export default BlueGridBg;
