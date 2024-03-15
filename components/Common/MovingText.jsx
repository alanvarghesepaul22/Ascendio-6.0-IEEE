"use client";
import React from "react";
import { InfiniteMovingCards } from "../ui/infinite-moving-cards";

const MovingText = () => {
  return (
    <div className="w-full flex flex-col antialiased items-center justify-center relative cursor-crosshair bg-neutral-950">
      <InfiniteMovingCards
        items={data}
        direction="right"
        speed="fast"
        className="text-yellow-400 text-6xl font-bold "
        mode="text"
      />
      <InfiniteMovingCards
        items={data}
        direction="left"
        speed="fast"
        className="text-orange-400 text-6xl font-bold z-30"
        mode="text"
      />
    </div>
  );
};

export default MovingText;

const data = [
  {
    data: "ASCENDIO 6.0",
  },
  {
    data: "2024",
  },
  {
    data: "APRIL 4-5",
  },
];
