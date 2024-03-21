"use client";
import React from "react";
import { Meteors } from "../ui/meteors";
import { motion } from "framer-motion";

const SoldPriceCard = ({ amount, title, description }) => {
  return (
    <motion.div
      initial={{ scale: 0.8 }}
      animate={{
        scale: 1,
        transition: {
          duration: 1,
          ease: "easeIn",
          type: "spring",
          stiffness: 150,
        },
      }}
      whileHover={{ scale: 1.05 }}
    >
      <div className="w-[350px] h-[260px] relative">
        <div className="absolute right-0 left-0 top-1/2 h-20 bg-yellow-900/50 z-50 flex justify-center items-center text-neutral-300 font-semibold uppercase text-3xl">Sold Out</div>
        <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-yellow-400 to-yellow-800 transform scale-[0.70] bg-orange-200 rounded-full blur-3xl" />
        <div className="relative shadow-xl bg-neutral-950 border border-neutral-800  px-4 py-8 h-full overflow-hidden rounded-2xl flex flex-col justify-end items-start">
          <div className="h-5 w-5 rounded-full border flex items-center justify-center mb-4 border-neutral-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="h-2 w-2 text-neutral-300"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.5 4.5l15 15m0 0V8.25m0 11.25H8.25"
              />
            </svg>
          </div>

          <h1 className="font-bold text-xl text-neutral-700 mb-4 relative z-40">
            {title}
          </h1>

          <p className="font-normal text-base text-neutral-700 mb-4 relative z-40">
            {description}
          </p>

          <div className="flex justify-between items-center w-full">
            <div className="border px-4 py-1 rounded-md font-semibold border-neutral-700 text-neutral-700 hover:bg-neutral-950 hover:scale-95 transition-all">
              BUY TICKET
            </div>
            <div className=" font-medium text-xl text-neutral-700">
              {"₹" + amount}
            </div>
          </div>

          {/* Meaty part - Meteor effect */}
          <Meteors number={20} />
        </div>
      </div>
    </motion.div>
  );
};

export default SoldPriceCard;
