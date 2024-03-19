"use client";
import React, { useState } from "react";
import { Meteors } from "../ui/meteors";
import { motion } from "framer-motion";
import axios from "axios";
import Link from "next/link";

const PriceCard = ({ amount }) => {
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
      <div className=" w-full relative max-w-xs">
        <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-yellow-400 to-yellow-800 transform scale-[0.70] bg-orange-200 rounded-full blur-3xl" />
        <div className="relative shadow-xl bg-neutral-950/90 border border-neutral-800  px-4 py-8 h-full overflow-hidden rounded-2xl flex flex-col justify-end items-start">
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

          <h1 className="font-bold text-xl text-white mb-4 relative z-50">
            Meteors because they&apos;re cool
          </h1>

          <p className="font-normal text-base text-neutral-400 mb-4 relative z-50">
            I don&apos;t know what to write so I&apos;ll just paste something
            cool here. One more sentence because lorem ipsum is just
            unacceptable. Won&apos;t ChatGPT the shit out of this.
          </p>

          <div className="flex justify-between items-center w-full">
            
            {/* <button onClick={makePayment} className="border px-4 py-1 rounded-lg  border-neutral-500 text-neutral-200">
              BUY
            </button> */}
          <Link href={`/buy/submit-form?amount=${amount}`}>BUY</Link>
           <div className=" font-medium text-xl">{"₹" + amount}</div>
          </div>

          {/* Meaty part - Meteor effect */}
          <Meteors number={20} />
        </div>
      </div>
    </motion.div>
  );
};

export default PriceCard;
