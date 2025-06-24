import React from "react";

const Background = ({ children }) => (
  <div className="relative h-full w-full">
    <div className="absolute inset-0 -z-10 h-full w-full bg-gray-950 bg-[linear-gradient(to_right,#3a3a3a_1px,transparent_1px),linear-gradient(to_bottom,#3a3a3a_1px,transparent_1px)] bg-[size:6rem_4rem]"></div>
    {children}
  </div>
);

export default Background;
