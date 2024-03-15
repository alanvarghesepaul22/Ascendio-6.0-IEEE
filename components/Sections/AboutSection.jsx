import React from "react";
import MovingText from "../Common/MovingText";
import LampAbout from "../Common/LampAbout";
import ShiftingCountdown from "../Common/ShiftingCountdown";

const AboutSection = () => {
  return (
    <div className="h-screen relative w-full overflow-hidden  flex flex-col items-center justify-center">
      <MovingText />
      <LampAbout />
      <ShiftingCountdown />
    </div>
  );
};

export default AboutSection;
