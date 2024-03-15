import React from "react";
import MovingVideo from "../Common/MovingVideo";

const VideoSection = () => {
  return (
    <div
      className="h-screen relative w-full overflow-hidden  flex flex-col items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: `url('./videoBgBig.png')` }}
    >
      <MovingVideo />
    </div>
  );
};

export default VideoSection;
