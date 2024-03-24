"use client";
import React from "react";
import {HoverBorderGradient} from "../ui/hover-border-gradient";

const GradientBtn = ({ children }) => {
  return (
    <div className="w-full flex justify-center text-center">
      <HoverBorderGradient
        containerClassName="rounded-full"
        as="button"
        className="dark:bg-black bg-white text-black dark:text-white flex items-center gap-4"
      >
        {children}
      </HoverBorderGradient>
    </div>
  );
};

export default GradientBtn;
