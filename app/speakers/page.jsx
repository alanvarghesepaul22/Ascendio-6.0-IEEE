import React from "react";
import SpeakerSection from "../../components/Sections/SpeakerSection";
export const metadata = {
  title: "Speakers - Ascendio 6.0",
  description: "IEEE SSET Ascendio 6.0",
};

const page = () => {
  return (
    <div className="flex w-full flex-col">
      <SpeakerSection />
    </div>
  );
};

export default page;
