import Image from "next/image";
import React from "react";
import ieeelogo from "/public/ieee-logo.png";
import ssetlogo from "/public/sset-logo.png";
import Link from "next/link";
import { FooterItems } from "../utils/data";

const Footer = () => {
  return (
    <div className="w-full bg-neutral-900/75 rounded-t-lg">
      <div className="w-full flex flex-col md:flex-row justify-between items-center md:items-start px-10 py-5 mt-5">
        <div className="w-full flex flex-col justify-center items-center gap-5">
          <div className="w-full flex justify-center md:justify-start">
            <Image
              src={ieeelogo}
              alt="IEEE Logo"
              width={500}
              height={500}
              className="w-36 h-16"
            />
          </div>
          <div className="w-3/4 md:w-full flex justify-center md:justify-start gap-4 items-center">
            <Image
              src={ssetlogo}
              alt="SSET Logo"
              width={100}
              height={100}
              className="w-16"
            />
            <div className="flex flex-col w-fit">
              <h1 className="text-xl font-semibold">SCMS</h1>
              <p className="text-sm text-neutral-400 ">
                School of Engineering & Technology, Ernakulam
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-3 md:gap-10 md:mr-14 text-neutral-500 text-lg mt-9 md:mt-0">
          <div className="grid grid-cols-3 md:grid-cols-2 text-nowrap gap-x-10 gap-y-3">
            {FooterItems.map((item, index) => (
              <Link
                key={index}
                href={item.link}
                className="hover:text-neutral-200 transition-all"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </div>

      <div className="flex flex-col justify-center items-center">
        <p className="text-neutral-600">© All rights reserved.</p>
        <div className="h-9 md:h-20">
          <h1 className="text-5xl md:text-9xl font-extrabold text-neutral-800 cursor-none">
            ASCENDIO
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Footer;
