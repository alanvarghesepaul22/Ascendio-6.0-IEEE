import React from "react";
import TeamCard from "../Common/TeamCard";
import { TeamData } from "../../utils/data";

const TeamSection = () => {
  return (
    // <div className="flex justify-center items-center gap-16 mt-14 flex-wrap">
    <div className="grid grid-cols-2 md:grid-cols-3 gap-10 md:gap-16 mt-14">
      {TeamData.map((item, index) => (
        <TeamCard
          key={index}
          imageUrl={item.imageUrl}
          name={item.name}
          role={item.role}
        />
      ))}
    </div>
  );
};

export default TeamSection;
