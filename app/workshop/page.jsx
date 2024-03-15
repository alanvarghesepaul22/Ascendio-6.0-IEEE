import React from "react";
import WorkshopEsction from "../../components/Sections/WorkshopSection";
import MagicTitle from "../../components/Common/MagicTitle";

export default function EvervaultCardDemo() {
  return (
    <div className="h-full w-full dark:bg-black bg-white  dark:bg-dot-white/[0.2] bg-dot-black/[0.2] relative flex flex-col items-center justify-center">
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      <div className="mt-28">
        <MagicTitle>Our Workshops</MagicTitle>
      </div>
      <WorkshopEsction />
    </div>
  );
}
