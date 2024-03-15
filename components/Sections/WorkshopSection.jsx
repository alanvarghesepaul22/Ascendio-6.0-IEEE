'use client'
import React from "react";
// import Link from "next/link";
import WS1 from "/public/ws1.jpg";
import WS2 from "/public/ws2.jpg";
import WS3 from "/public/ws3.jpeg";
import WS4 from "/public/ws4.jpg";
import WorkshopCard from "../Common/WorkshopCard";

const WorkshopSection = () => {
  return (
    <div className="lg:w-3/5 mt-10 flex items-center justify-center flex-wrap gap-5 pb-16 ">
      {data.map((item, index) => (
        <WorkshopCard
          key={index}
          imageUrl={item.imageUrl}
          name={item.name}
          designation={item.designation}
        />
      ))}
    </div>
  );
};

export default WorkshopSection;

const data = [
  {
    imageUrl: WS1,
    name: "Workshop 1",
    designation: "300 RS",
  },
  {
    imageUrl: WS2,
    name: "Workshop 2",
    designation: "400 RS",
  },
  {
    imageUrl: WS3,
    name: "Workshop 3",
    designation: "100 RS",
  },
  {
    imageUrl: WS4,
    name: "Workshop 4",
    designation: "30 RS",
  },
];
