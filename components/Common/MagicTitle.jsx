"use client";
import React from "react";
import { motion } from "framer-motion";
import { cn } from "../../utils/cn";

const MagicTitle = ({ children, className }) => {
  return (
    <motion.p
      initial={{ scale: 0.8,opacity: 0  }}
      animate={{
        scale: 1,
        opacity: 1 ,
        transition: {
          duration: 1,
          ease: "easeIn",
          type: "spring",
          stiffness: 150,
          delay:0.1
        },
      }}
      className={cn(
        className,
        "z-30 text-2xl md:text-3xl lg:text-5xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 bg-opacity-50"
      )}
    >
      {children.split("").map((child, idx) => (
        <span className={cn(className, "hoverText")} key={idx}>
          {child}
        </span>
      ))}
    </motion.p>
  );
};

export default MagicTitle;
