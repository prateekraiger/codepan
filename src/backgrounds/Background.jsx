import React from "react";

const Background = ({ children }) => (
  <div className="relative h-full w-full">
    <div className="absolute inset-0 -z-10 h-full w-full bg-black bg-[linear-gradient(to_right,#232323_1px,transparent_1px),linear-gradient(to_bottom,#232323_1px,transparent_1px)] bg-[size:6rem_4rem]"></div>
    {children}
  </div>
);

export default Background;
