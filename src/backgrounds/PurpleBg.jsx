import React from "react";

const PurpleBg = ({ fullPage = false }) => {
  return (
    <div
      className={
        fullPage
          ? "fixed inset-0 w-full h-full z-10"
          : "w-full h-32 rounded-lg overflow-hidden"
      }
    >
      <div className="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"></div>
    </div>
  );
};

export default PurpleBg;
