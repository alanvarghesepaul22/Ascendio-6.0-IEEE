"use client";
import React from "react";
import MovingVideo from "../Common/MovingVideo";
import { AuroraBackground } from "../ui/aurora-background";
import { motion } from "framer-motion";

const VideoSection = () => {
  return (
    <AuroraBackground>
      <motion.div
        initial={{ opacity: 0.0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="h-screen w-full flex justify-center items-center my-24 "
      >
        <MovingVideo />
      </motion.div>
    </AuroraBackground>
  );
};

export default VideoSection;
