"use client";
import React from "react";
import { motion } from "framer-motion";

const DividerLine = () => {
  return (
    <motion.div
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{
        scale: 1,
        opacity: 1,
        transition: {
          duration: 0.5,
          ease: "easeIn",
          type: "spring",
          stiffness: 150,
          delay: 0.1,
        },
      }}
      className="bg-gradient-to-r from-transparent via-neutral-700 to-transparent my-6 h-[1px] w-full"
    />
  );
};

export default DividerLine;
