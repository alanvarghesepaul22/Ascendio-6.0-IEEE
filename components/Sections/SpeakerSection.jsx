"use client";
import React from "react";
import Sepaker1 from "/public/speaker1.jpeg";
import Sepaker2 from "/public/speaker2.jpeg";
import Sepaker3 from "/public/speaker3.jpeg";
import JumpingCard from "../Common/JumpingCard";
import { Spotlight } from "../ui/Spotlight";
import MagicTitle from "../Common/MagicTitle";

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
          <JumpingCard
            imageUrl={Sepaker1}
            name="Alia Bhat"
            designation="Actor"
          />
          <JumpingCard
            imageUrl={Sepaker2}
            name="Ashwin Sivasankaran"
            designation="Public Speaker"
          />
          <JumpingCard
            imageUrl={Sepaker3}
            name="Gokul Unni"
            designation="Secretary"
          />
        </div>
      </div>
    </div>
  );
};

export default SpeakerSection;
