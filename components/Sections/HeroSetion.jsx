"use client";
import React from "react";
import { Boxes } from "../ui/background-boxes";
import HeroLogo from "/public/HeroLogo.png";
import Image from "next/image";
import MovingBorderBtn from "../Buttons/MovingBorderBtn";
import { CardContainer } from "../ui/3d-card";
import useScreenSize from "../../hooks/useScreenSize";
import { SparklesCore } from "../ui/sparkles";

const HeroSetion = () => {
  const isMobile = useScreenSize();
  return (
    <div className="h-screen relative w-full overflow-hidden  flex flex-col items-center justify-center">
      <div className="absolute inset-0 w-full h-full  pointer-events-none" />
      {isMobile ? (
        <div className="w-full absolute inset-0 h-screen">
          <SparklesCore
            id="tsparticlesfullpage"
            background="transparent"
            minSize={0.6}
            maxSize={1.4}
            particleDensity={100}
            className="w-full h-full"
            particleColor="#f9ab02"
          />
        </div>
      ) : (
        <>
         <div className="w-full absolute inset-0 h-screen">
          <SparklesCore
            id="tsparticlesfullpage"
            background="transparent"
            minSize={0.6}
            maxSize={1.4}
            particleDensity={100}
            className="w-full h-full"
            particleColor="#202120"
          />
        </div>
        <Boxes />
        </>
       
      )}

      <div className="relative z-20 mt-10">
        <CardContainer className="inter-var">
          <Image
            src={HeroLogo}
            alt="Hero Logo Image"
            width={500}
            height={500}
            className="w-[370px] h-[370px] md:w-[600px] md:h-[600px]"
          />
        </CardContainer>
        <div className="absolute -mt-44 ml-48 sm:-mt-44 sm:ml-56 md:-mt-56 md:ml-96">
          <MovingBorderBtn />
        </div>
      </div>
    </div>
  );
};

export default HeroSetion;
