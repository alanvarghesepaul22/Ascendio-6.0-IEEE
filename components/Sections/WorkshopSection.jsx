"use client";
import React from "react";
import WorkshopCard from "../Common/WorkshopCard";
import { WorkshopData } from "../../utils/data";

const WorkshopSection = () => {
  return (
    // <div className="lg:w-3/5 mt-10 flex items-center justify-center flex-wrap gap-5 pb-16 ">
    <div className="grid md:grid-cols-2 mt-10 p gap-8 pb-16 ">
      {WorkshopData.map((item) => (
        <WorkshopCard
          key={item.id}
          id={item.id}
          imageUrl={item.imageUrl}
          name={item.name}
          designation={item.designation}
          description={item.description}
        />
      ))}
    </div>
  );
};

export default WorkshopSection;
