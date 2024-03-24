import React from "react";
import PolicySection from "../../../components/Sections/PolicySection";
import SupportSectionContainer from "../../../components/Sections/SupportSectionContainer";
export const metadata = {
  title: "Privacy Policy  - Ascendio 6.0",
  description: "IEEE SSET Ascendio 6.0",
};
const page = () => {
  return (
    <SupportSectionContainer>
      <PolicySection />
    </SupportSectionContainer>
  );
};

export default page;
