import React from "react";
import PriceCard from "../Common/PriceCard";
import SoldPriceCard from "../Common/SoldPriceCard";

const BuySection = () => {
  return (
    <div className="h-full w-full flex justify-center items-center gap-8 flex-wrap mt-10">
      <PriceCard
        amount={1500}
        title={"IEEE Members"}
        description={
          "All IEEE Members with currently active membership can buy this ticket."
        }
      />
      <div className="lg:scale-110">
        <PriceCard
          amount={1600}
          title={"Non-IEEE Members"}
          description={
            "All Non-IEEE Members with currently active membership can buy this ticket."
          }
        />
      </div>
      {false ? (
        <SoldPriceCard
          amount={1300}
          title={"Early Birds"}
          description={"Book your tickets"}
        />
      ) : (
        <PriceCard
          amount={1300}
          title={"Early Birds"}
          description={"Book your tickets"}
        />
      )}
    </div>
  );
};

export default BuySection;
