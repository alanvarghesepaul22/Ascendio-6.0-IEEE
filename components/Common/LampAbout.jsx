"use client";
import React from "react";
import { motion } from "framer-motion";

import { AboutText } from "../../utils/data";
import { Bai_Jamjuree } from "next/font/google";
import { TextGenerateEffect } from "../ui/text-generate-effect";

const fontStyle = Bai_Jamjuree({
  subsets: ["latin"],
  weight: "400",
});

const LampAbout = () => {
  return (
    <>
      <motion.h1
        initial={{ opacity: 0.3, y: 200 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="h-screen flex items-center text-justify w-full px-3 md:w-4/5 break-words mt-8 text-neutral-300/75 font-light text-2xl md:text-3xl"
      >
        <span className={`${fontStyle.className}`}>
          <TextGenerateEffect words={AboutText} />
        </span>
      </motion.h1>
    </>
  );
};

export default LampAbout;
