import React from "react";
import SupportSectionContainer from "../../../components/Sections/SupportSectionContainer";
import ContactSection from "../../../components/Sections/ContactSection";
export const metadata = {
  title: "Contact Us  - Ascendio 6.0",
  description: "IEEE SSET Ascendio 6.0",
};
const page = () => {
  return (
    <SupportSectionContainer className={"lg:h-screen"}>
      <ContactSection />
    </SupportSectionContainer>
  );
};

export default page;
