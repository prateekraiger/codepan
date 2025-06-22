import React from "react";

const WhiteGridBg = ({ fullPage = false }) => {
  return (
    <div
      className={
        fullPage
          ? "fixed inset-0 w-full h-full z-10"
          : "w-full h-32 rounded-lg overflow-hidden"
      }
    >
      <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]"></div>
    </div>
  );
};

export default WhiteGridBg;
