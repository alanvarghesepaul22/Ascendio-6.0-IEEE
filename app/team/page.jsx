import React from "react";
import TeamSection from "../../components/Sections/TeamSection";
import MagicTitle from "../../components/Common/MagicTitle";
export const metadata = {
  title: "Team - Ascendio 6.0",
  description: "IEEE SSET Ascendio 6.0",
};

const page = () => {
  return (
    <div className="h-full w-full flex flex-col justify-center items-center gap-3 pt-32 pb-24 md:pb-44  bg-grid-small-white/[0.2]  relative">
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-neutral-950 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      <MagicTitle className={"text-xl md:text-2xl"}>
        Web Development Team
      </MagicTitle>
      <TeamSection />
    </div>
  );
};

export default page;
