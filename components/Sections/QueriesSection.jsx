"use client";
import React from "react";
import { BackgroundBeams } from "../ui/background-beams";
import { IconBrandWhatsapp } from "@tabler/icons-react";
import Link from "next/link";

const QueriesSection = () => {
  return (
    <div className="h-screen w-full rounded-md bg-neutral-950 relative flex flex-col items-center justify-center antialiased">
      <div className="max-w-2xl mx-auto p-4 space-y-5">
        <h1 className="relative z-10 text-lg md:text-7xl  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-sans font-bold">
          Have Queries?
        </h1>
        <p></p>
        <p className="text-neutral-500 max-w-lg mx-auto my-2 text-lg text-center relative z-10">
          Have queries regarding our event? Leave us a mail at
          <Link
            href={"mailto:reachtascendio24@gmail.com"}
            className="text-neutral-300 mx-2 hover:text-neutral-200"
          >
            reachtascendio24@gmail.com
          </Link>
          or give us a call on the following numbers.
        </p>
        <div className="w-full flex gap-5 justify-center items-center mt-7 relative z-10 flex-wrap md:flex-nowrap">
          <Link href="https://wa.me/+919745923317" target="_blank">
            <div className="QueriesWtspBtn">
              <IconBrandWhatsapp stroke={2} /> Alan Varghese
            </div>
          </Link>
          <Link href="https://wa.me/+919745923317" target="_blank">
            <div className="QueriesWtspBtn">
              <IconBrandWhatsapp stroke={2} /> Ashwin Sivasankaran
            </div>
          </Link>
          <Link href="https://wa.me/+919745923317" target="_blank">
            <div className="QueriesWtspBtn">
              <IconBrandWhatsapp stroke={2} /> Gokul Unni
            </div>
          </Link>
        </div>
      </div>
      <BackgroundBeams />
    </div>
  );
};

export default QueriesSection;
