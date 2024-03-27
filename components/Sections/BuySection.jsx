import React from "react";
import PriceCard from "../Common/PriceCard";
import { IeeeBenefits, NonIeeeBenefits } from "../../utils/data";

const BuySection = () => {
  return (
    <div className="h-full w-full flex justify-center items-center gap-8 flex-wrap mt-7">
      <PriceCard
        amount={1100}
        title={"IEEE Members"}
        description={
          ""
        }
        benefits={IeeeBenefits}
      />
      <div>
        <PriceCard
          amount={1250}
          title={"Non-IEEE Members"}
          description={
            ""
          }
          benefits={NonIeeeBenefits}
        />
      </div>
    </div>
  );
};

export default BuySection;
