import React from "react";
import TeamSection from "../../components/Sections/TeamSection";
import MagicTitle from "../../components/Common/MagicTitle";

const page = () => {
  return (
    <div className="h-full w-full flex flex-col justify-center items-center gap-3 mt-32 pb-24 md:pb-44  bg-grid-small-white/[0.2]  relative">
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      <MagicTitle>The Team</MagicTitle>
      <TeamSection />
    </div>
  );
};

export default page;
