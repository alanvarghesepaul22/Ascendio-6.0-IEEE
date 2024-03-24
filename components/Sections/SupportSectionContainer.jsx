import React from "react";
import { cn } from "../../utils/cn";

const SupportSectionContainer = ({ children, className }) => {
  return (
    <div
      className={cn(
        className,
        "w-full bg-grid-small-white/[0.2]  relative flex items-center justify-center"
      )}
    >
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-neutral-950 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      <div className="w-5/6 md:w-4/5 container px-4 z-0 mt-40 mb-20 text-neutral-300">
        {children}
      </div>
    </div>
  );
};

export default SupportSectionContainer;
