import React from "react";
import SupportSectionContainer from "../../../components/Sections/SupportSectionContainer";
import DeliverySection from "../../../components/Sections/DeliverySection";
export const metadata = {
  title: "Ticket Booking Policy  - Ascendio 6.0",
  description: "IEEE SSET Ascendio 6.0",
};
const page = () => {
  return (
    <SupportSectionContainer>
      <DeliverySection />
    </SupportSectionContainer>
  );
};

export default page;
