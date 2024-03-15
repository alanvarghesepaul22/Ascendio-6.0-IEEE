"use client";
import React from "react";
import { InfiniteMovingCards } from "../ui/infinite-moving-cards";

const MovingVideo = () => {
  return (
    <div className="w-full flex flex-col antialiased items-center justify-center relative">
      <InfiniteMovingCards
        items={data}
        direction="right"
        speed="slow"
        className=""
        mode="video"
      />
      <InfiniteMovingCards
        items={data}
        direction="left"
        speed="slow"
        className=""
        mode="video"
      />
    </div>
  );
};

export default MovingVideo;

const data = [
  {
    data: "./video.mp4",
  },
  {
    data: "./video.mp4",
  },
  {
    data: "./video.mp4",
  },
];
