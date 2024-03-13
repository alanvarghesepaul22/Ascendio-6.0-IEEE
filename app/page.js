'use client'
import React from "react";
import { WavyBackground } from "../components/ui/wavy-background";


export default function SpotlightPreview() {
  return (
    <div>
    <div className="flex justify-center h-screen items-center flex-col gap-5">
      <div className="text-4xl md:w-4/5 text-wrap text-center font-medium">
        GEAR YOURSELVES UP TO WITNESS THE NEW WORLD OF ASCENDIO 6.0{" "}
      </div>
      <div className="text-9xl text-wrap text-center font-bold">
        THE FUTURE <br /> IS NOW{" "}
      </div>
    </div>
    <WavyBackground className="max-w-4xl mx-auto pb-40">
      <p className="text-2xl md:text-4xl lg:text-7xl text-white font-bold inter-var text-center">
        Hero waves are cool
      </p>
      <p className="text-base md:text-lg mt-4 text-white font-normal inter-var text-center">
        Leverage the power of canvas to create a beautiful hero section
      </p>
    </WavyBackground>
    </div>
  );
}
