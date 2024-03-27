"use client";
import React from "react";
import JumpingCard from "../Common/JumpingCard";
import { Spotlight } from "../ui/Spotlight";
import MagicTitle from "../Common/MagicTitle";
import { SpeakerData } from "../../utils/data";
import { motion } from "framer-motion";
import DividerLine from "../Common/DividerLine";

const SpeakerSection = () => {
  return (
    <div className="w-full h-full flex items-center justify-center bg-neutral-950 antialiased bg-grid-white/[0.02]">
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
      <div className="w-full pt-20 mt-10 sm:mt-20 md:mt-10 flex flex-col items-center">
        <div className="w-fit">
          <MagicTitle>Meet our Speakers</MagicTitle>
          <DividerLine />
        </div>

        <div className="w-fit flex flex-col items-center mt-3 md:mt-7">
          <motion.p
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{
              scale: 1,
              opacity: 1,
              transition: {
                duration: 1,
                ease: "easeIn",
                type: "spring",
                stiffness: 150,
                delay: 0.1,
              },
            }}
            className="w-full text-center lg:text-left text-xl md:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 bg-opacity-50 mb-3"
          >
            Talks
          </motion.p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-7 mt-5 pb-10">
            {SpeakerData.map((item) => {
              if (item.section === "Talk") {
                return (
                  <>
                    <JumpingCard
                      key={item.id}
                      id={item.id}
                      imageUrl={item.imageUrl}
                      name={item.name}
                      designation={item.designation}
                      description={item.description}
                      linkedinUrl={item.linkedinUrl}
                    />
                  </>
                );
              }
            })}
          </div>
        </div>

        <div className="w-fit flex flex-col items-center mt-3 md:mt-7">
          <motion.p
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{
              scale: 1,
              opacity: 1,
              transition: {
                duration: 1,
                ease: "easeIn",
                type: "spring",
                stiffness: 150,
                delay: 0.1,
              },
            }}
            className="w-full text-center lg:text-left text-xl md:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 bg-opacity-50 mb-3"
          >
            Workshop
          </motion.p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-7 mt-5 pb-10">
            {SpeakerData.map((item) => {
              if (item.section === "Workshop") {
                return (
                  <JumpingCard
                    key={item.id}
                    id={item.id}
                    imageUrl={item.imageUrl}
                    name={item.name}
                    designation={item.designation}
                    description={item.description}
                    linkedinUrl={item.linkedinUrl}
                  />
                );
              }
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpeakerSection;
