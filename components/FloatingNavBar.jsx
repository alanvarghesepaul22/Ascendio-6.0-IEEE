"use client";
import React from "react";
import { FloatingNav } from "./ui/floating-navbar";
function FloatingNavBar() {
  const navItems = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "Speakers",
      link: "/speakers",
    },
    {
      name: "Workshop",
      link: "/workshop",
    },
    {
      name: "Buy Tickets",
      link: "/buy",
    },
  ];
  return (
    <div className="relative  w-full">
      <FloatingNav navItems={navItems} />
    </div>
  );
}

export default FloatingNavBar;
