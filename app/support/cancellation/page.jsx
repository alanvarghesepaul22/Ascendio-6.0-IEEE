import React from "react";
import { queryContactEmail } from "../../../utils/data";

const page = () => {
  return (
    <div className="w-full bg-black   bg-grid-small-white/[0.2]  relative flex items-center justify-center p-40">
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      <div className="container mx-auto px-4 py-8 z-50">
        <h1 className="text-3xl font-bold mb-4">
          Cancellation and Refund Policy
        </h1>
        <p className="mb-4">
          At Ascendio, we strive to provide our customers with the best possible
          experience. However, due to the nature of our services, we do
          not offer cancellations or refunds.
        </p>

        <p className="mt-4">
          By using our website or purchasing our services, you
          acknowledge that you have read and understood this cancellation and
          refund policy and agree to abide by it.
        </p>
        <p>Last Updated: 24 March 2024</p>
      </div>
    </div>
  );
};

export default page;
