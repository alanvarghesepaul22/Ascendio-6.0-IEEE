import React from "react";
import PriceCard from "../Common/PriceCard";
import { IeeeBenefits, NonIeeeBenefits } from "../../utils/data";

const BuySection = () => {
  return (
    <div className="h-full w-full flex justify-center items-center gap-8 flex-wrap mt-7">
      <PriceCard
        amount={1500}
        title={"IEEE Members"}
        description={
          "All IEEE Members with currently active membership can buy this ticket."
        }
        benefits={IeeeBenefits}
      />
      <div>
        <PriceCard
          amount={1650}
          title={"Non-IEEE Members"}
          description={
            "All Non-IEEE Members with currently active membership can buy this ticket."
          }
          benefits={NonIeeeBenefits}
        />
      </div>
    </div>
  );
};

export default BuySection;
