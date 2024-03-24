import SupportSectionContainer from "../../components/Sections/SupportSectionContainer";
import React from "react";
import SupportSection from "../../components/Sections/SupportSection";

export const metadata = {
  title: "Support - Ascendio 6.0",
  description: "IEEE SSET Ascendio 6.0",
};

const page = () => {
  return (
    <SupportSectionContainer className={"lg:h-screen"}>
      <SupportSection />
    </SupportSectionContainer>
  );
};

export default page;
