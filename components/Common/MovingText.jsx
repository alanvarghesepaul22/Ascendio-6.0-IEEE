"use client";
import React from "react";
import { InfiniteMovingCards } from "../ui/infinite-moving-cards";
import { MovingTextData } from "../../utils/data";

const MovingText = () => {
  return (
    <div className="w-full flex flex-col antialiased items-center justify-center relative cursor-crosshair bg-neutral-950">
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
    </div>
  );
};

export default MovingText;
