import React from "react";
import BuySection from "../../components/Sections/BuySection";
import MagicTitle from "../../components/Common/MagicTitle";

const page = () => {
  return (
    <div className="h-full lg:h-screen w-full flex flex-col justify-center items-center gap-3 pt-32 md:pt-40 pb-24 md:pb-44  bg-grid-small-white/[0.2]  relative">
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-neutral-950  [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      <MagicTitle> Get your tickets</MagicTitle>
      <BuySection />
    </div>
  );
};

export default page;
