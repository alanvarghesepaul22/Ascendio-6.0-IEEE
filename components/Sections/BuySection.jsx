import React from "react";
import PriceCard from "../Common/PriceCard";

const BuySection = () => {
  return (
    <div className="h-full w-full flex justify-center items-center gap-8 flex-wrap mt-10">
      <PriceCard amount={100}/>
      <div className="lg:scale-110">
        <PriceCard amount={150}/>
      </div>
      <PriceCard amount={200}/>
    </div>
  );
};

export default BuySection;
