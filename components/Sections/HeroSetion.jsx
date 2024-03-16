"use client";
import React from "react";
import { Boxes } from "../ui/background-boxes";
import HeroLogo from "/public/HeroLogo.png";
import Image from "next/image";
import MovingBorderBtn from "../Buttons/MovingBorderBtn";
import { CardContainer } from "../ui/3d-card";
import useScreenSize from "../../hooks/useScreenSize.js";
import { SparklesCore } from "../ui/sparkles";
import { motion } from "framer-motion";

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
              particleColor="#f9ab02"
            />
          </div>
          <Boxes />
        </>
      )}

      <div className="relative z-20 mt-10">
        <CardContainer className="inter-var">
          <motion.div
            initial={{ x: "-100%", opacity: 0 }}
            animate={{
              x: [-5, 10, -5],
              y: [-5, 7, -5],
              rotateY: [10, 18, 10],
              rotateX: [5, 12, 5],
              opacity: [0, 1],
              transition: {
                duration: 1.5,
                ease: "easeInOut",
              },
            }}
          >
            <motion.div
              animate={{
                x: [-5, 10, -5],
                y: [-5, 7, -5],
                rotateY: [10, 18, 10],
                rotateX: [5, 12, 5],
                transition: {
                  duration: 5,
                  repeat: Infinity,
                  repeatType: "reverse",
                  ease: "linear",
                },
              }}
            >
              <Image
                src={HeroLogo}
                alt="Hero Logo Image"
                width={500}
                height={500}
                className="w-[370px] h-[370px] md:w-[600px] md:h-[600px]"
                priority
              />
            </motion.div>
          </motion.div>
        </CardContainer>
        <motion.div
          className="absolute -mt-44 ml-48 sm:-mt-44 sm:ml-56 md:-mt-56 md:ml-96"
          initial={{ x: "-100%", opacity: 0 }}
          animate={{
            x: [-5, 10, -5],
            opacity: [0, 1],
            transition: {
              duration: 1.5,
              ease: "easeInOut",
            },
          }}
        >
          <MovingBorderBtn />
        </motion.div>
      </div>
    </div>
  );
};

export default HeroSetion;
