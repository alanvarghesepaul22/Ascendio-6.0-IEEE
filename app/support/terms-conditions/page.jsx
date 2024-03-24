import React from "react";
import SupportSectionContainer from "../../../components/Sections/SupportSectionContainer";
import TermsSection from "../../../components/Sections/TermsSection";
export const metadata = {
  title: "Terms & Conditions  - Ascendio 6.0",
  description: "IEEE SSET Ascendio 6.0",
};
const page = () => {
  return (
    <SupportSectionContainer>
      <TermsSection />
    </SupportSectionContainer>
  );
};

export default page;
