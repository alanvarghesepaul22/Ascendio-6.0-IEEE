"use client";
import React from "react";
import { motion } from "framer-motion";
import { cn } from "../../utils/cn";

const MagicTitle = ({ children,className }) => {
  return (
    <motion.h1
      initial={{ scale: 0.8 }}
      animate={{
        scale: 1,
        transition: {
          duration: 1,
          ease: "easeIn",
          type: "spring",
          stiffness: 150,
        },
      }}
      className={cn("z-30 text-2xl md:text-5xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 bg-opacity-50",className)}
    >
      {children.split("").map((child, idx) => (
        <span className="hoverText" key={idx}>
          {child}
        </span>
      ))}
    </motion.h1>
  );
};

export default MagicTitle;
