"use client";
import React from "react";
import { InfiniteMovingCards } from "../ui/infinite-moving-cards";
import { MovingTextData } from "../../utils/data";
import { motion } from "framer-motion";

const MovingText = () => {
  return (
    <motion.div
      initial={{ opacity: 0.0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        delay: 0.3,
        duration: 0.8,
        ease: "easeInOut",
      }}
      className="w-full flex flex-col antialiased items-center justify-center relative cursor-crosshair"
    >
      <InfiniteMovingCards
        items={MovingTextData}
        direction="right"
        speed="fast"
        className="text-yellow-400 text-5xl md:text-6xl font-bold "
        mode="text"
      />
      <InfiniteMovingCards
        items={MovingTextData}
        direction="left"
        speed="fast"
        className="text-orange-400 text-5xl md:text-6xl font-bold z-30"
        mode="text"
      />
    </motion.div>
  );
};

export default MovingText;
