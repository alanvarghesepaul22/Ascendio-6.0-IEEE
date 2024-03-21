"use client";
import Image from "next/image";
import React from "react";
import ieeelogo from "/public/ieee-logo.png";
import ssetlogo from "/public/sset-logo.png";
import Link from "next/link";
import { motion } from "framer-motion";
import { FooterItems } from "../utils/data";

const Footer = () => {
  return (
    <div className="w-full bg-neutral-900/75 rounded-t-lg">
      <motion.div
        initial={{ opacity: 0.3, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="w-full flex flex-col md:flex-row justify-between items-center md:items-start px-10 py-5 mt-5"
      >
        <div className="w-full flex flex-col justify-center items-center gap-5">
          <div className="w-full flex justify-center md:justify-start">
            <Image
              src={ieeelogo}
              alt="IEEE Logo"
              width={500}
              height={500}
              className="w-[133px] h-[33px] md:w-[177px] md:h-[44px] opacity-70"
            />
          </div>
          <div className="w-3/4 md:w-full flex justify-center md:justify-start gap-4 items-center">
            <Image
              src={ssetlogo}
              alt="SSET Logo"
              width={100}
              height={100}
              className="w-[62px] h-[62px]"
            />
            <div className="flex flex-col w-fit">
              <h1 className="text-xl font-semibold">SCMS</h1>
              <p className="text-sm text-neutral-400 ">
                School of Engineering & Technology, Ernakulam
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-3 md:gap-10 md:mr-14 text-neutral-600 text-lg mt-9 md:mt-0">
          <div className="grid grid-cols-3 text-nowrap gap-x-10 gap-y-3">
            {FooterItems.map((item, index) => (
              <Link
                key={index}
                href={item.link}
                className="hover:text-neutral-200 transition-all text-sm"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0.3, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="flex flex-col justify-center items-center"
      >
        <p className="text-neutral-500">© All rights reserved.</p>
        <div className="h-9 md:h-20">
          <h1 className="text-5xl md:text-9xl font-extrabold text-neutral-600 cursor-copy">
            {"ASCENDIO".split("").map((child, idx) => (
              <span className="hoverText" key={idx}>
                {child}
              </span>
            ))}
          </h1>
        </div>
      </motion.div>
    </div>
  );
};

export default Footer;
