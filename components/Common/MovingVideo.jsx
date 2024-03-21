"use client";
import React from "react";
import { InfiniteMovingCards } from "../ui/infinite-moving-cards";
import { VideoDataScroll1,VideoDataScroll2 } from "../../utils/data";

const MovingVideo = () => {
  return (
    <div className="w-full flex flex-col antialiased items-center justify-center relative gap-2">
      <InfiniteMovingCards
        items={VideoDataScroll1}
        direction="right"
        speed="slow"
        className=""
        mode="video"
      />
      <InfiniteMovingCards
        items={VideoDataScroll2}
        direction="left"
        speed="slow"
        className=""
        mode="video"
      />
    </div>
  );
};

export default MovingVideo;
