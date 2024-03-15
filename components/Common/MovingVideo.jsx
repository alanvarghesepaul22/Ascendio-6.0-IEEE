"use client";
import React from "react";
import { InfiniteMovingCards } from "../ui/infinite-moving-cards";
import { VideoData } from "../../utils/data";

const MovingVideo = () => {
  return (
    <div className="w-full flex flex-col antialiased items-center justify-center relative">
      <InfiniteMovingCards
        items={VideoData}
        direction="right"
        speed="slow"
        className=""
        mode="video"
      />
      <InfiniteMovingCards
        items={VideoData}
        direction="left"
        speed="slow"
        className=""
        mode="video"
      />
    </div>
  );
};

export default MovingVideo;
