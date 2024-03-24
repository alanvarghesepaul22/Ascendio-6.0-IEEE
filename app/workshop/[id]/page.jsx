import React from "react";
import MagicTitle from "../../../components/Common/MagicTitle";
import AboutWorkshop from "../../../components/Common/AboutWorkshop";
import DividerLine from "../../../components/Common/DividerLine";
import { WorkshopData } from "../../../utils/data";
import NotFound from "../../not-found";

export const metadata = {
  title: "About Workshop  - Ascendio 6.0",
  description: "IEEE SSET Ascendio 6.0",
};

const page = ({ params }) => {
  if (params.id > WorkshopData.length) {
    return (
      <>
        <NotFound />
      </>
    );
  }
  return (
    <div className="h-full lg:h-screen w-full bg-neutral-950 bg-grid-small-white/[0.2] relative flex flex-col items-center justify-center pt-36 lg:pt-0 pb-16">
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-neutral-950 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      <div>
        <MagicTitle className={"text-3xl md:text-4xl"}>
          About the workshop
        </MagicTitle>
        <DividerLine />
      </div>
      <AboutWorkshop id={params.id} />
    </div>
  );
};

export default page;
