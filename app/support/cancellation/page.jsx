import React from "react";
import SupportSectionContainer from "../../../components/Sections/SupportSectionContainer";
import CancellationSection from "../../../components/Sections/CancellationSection";
export const metadata = {
  title: "Cancellation and Refund Policy  - Ascendio 6.0",
  description: "IEEE SSET Ascendio 6.0",
};

const page = () => {
  return (
    <SupportSectionContainer className={"lg:h-screen"}>
      <CancellationSection />
    </SupportSectionContainer>
  );
};

export default page;
