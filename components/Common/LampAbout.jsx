"use client";
import React from "react";
import { motion } from "framer-motion";
import { LampContainer } from "../ui/lamp";
import { AboutText } from "../../utils/data";

const LampAbout = () => {
  return (
    <LampContainer>
      <motion.h1
        initial={{ opacity: 0.5, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="w-4/5 break-words mt-8 text-neutral-300 font-light text-center text-2xl md:text-3xl"
      >
        {AboutText.split("").map((child, idx) => (
          <span className="hoverText" key={idx}>
            {child}
          </span>
        ))}
      </motion.h1>
    </LampContainer>
  );
};

export default LampAbout;
