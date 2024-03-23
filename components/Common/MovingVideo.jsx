"use client";
import React from "react";
import { InfiniteMovingCards } from "../ui/infinite-moving-cards";
import { DriveImages1, DriveImages2, DriveImages3 } from "../../utils/data";

const MovingVideo = () => {
  return (
    <div className="w-full flex flex-col antialiased items-center justify-center relative gap-2">
      <InfiniteMovingCards
        items={DriveImages1}
        direction="right"
        speed="slow"
        className=""
        mode="image"
      />
      <InfiniteMovingCards
        items={DriveImages2}
        direction="left"
        speed="slow"
        className=""
        mode="image"
      />
      <InfiniteMovingCards
        items={DriveImages3}
        direction="right"
        speed="slow"
        className=""
        mode="image"
      />
    </div>
  );
};

export default MovingVideo;
