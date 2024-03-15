"use client";
import React from "react";
import JumpingCard from "../Common/JumpingCard";
import { Spotlight } from "../ui/Spotlight";
import MagicTitle from "../Common/MagicTitle";
import { SpeakerData } from "../../utils/data";

const SpeakerSection = () => {
  return (
    <div className="w-full lg:h-screen flex items-center justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02]">
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
      <div className="w-full pt-20 mt-10 sm:mt-20 md:mt-10">
        <MagicTitle>Meet our Speakers</MagicTitle>

        <div className="flex gap-5 justify-center items-center mt-10 flex-wrap pb-10">
          {SpeakerData.map((item, index) => (
            <JumpingCard
              key={index}
              imageUrl={item.imageUrl}
              name={item.name}
              designation={item.designation}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SpeakerSection;
