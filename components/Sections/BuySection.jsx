import React from "react";
import PriceCard from "../../components/Common/PriceCard";

const BuySection = () => {
  return (
    <div className="h-full w-full flex justify-center items-center gap-8 flex-wrap mt-10">
      <PriceCard />
      <div className="lg:scale-110">
        <PriceCard />
      </div>
      <PriceCard />
    </div>
  );
};

export default BuySection;
