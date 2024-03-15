import React from "react";

const MagicTitle = ({ children }) => {
  return (
    <h1 className="text-2xl md:text-5xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 bg-opacity-50">
      {children.split("").map((child, idx) => (
        <span className="hoverText" key={idx}>
          {child}
        </span>
      ))}
    </h1>
  );
};

export default MagicTitle;
