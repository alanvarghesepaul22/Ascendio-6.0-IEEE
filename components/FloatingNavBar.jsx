"use client";
import React from "react";
import { FloatingNav } from "./ui/floating-navbar";
import { navItems } from "../utils/data";

function FloatingNavBar() {
  return (
    <div className="relative  w-full">
      <FloatingNav navItems={navItems} />
    </div>
  );
}

export default FloatingNavBar;
