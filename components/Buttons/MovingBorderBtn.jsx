"use client";
import React from "react";
import { Button } from "../ui/moving-border";
import Link from "next/link";

const MovingBorderBtn = () => {
  return (
    <div>
      <Link href={"/buy"}>
        <Button
          borderRadius="1.75rem"
          className="bg-gradient-to-r from-yellow-700 to-orange-700 text-white"
        >
          Buy Tickets
        </Button>
      </Link>
    </div>
  );
};

export default MovingBorderBtn;
