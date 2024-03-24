"use client";
import React from "react";
import { BackgroundBeams } from "../ui/background-beams";
import { IconBrandWhatsapp } from "@tabler/icons-react";
import { motion } from "framer-motion";
import Link from "next/link";
import { QueryData, queryContactEmail } from "../../utils/data";

const QueriesSection = () => {
  return (
    <div className="h-screen w-full rounded-md bg-neutral-950 relative flex flex-col items-center justify-center antialiased">
      <motion.div
        initial={{ opacity: 0.0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="max-w-2xl mx-auto p-4 space-y-5"
      >
        <h1 className="relative z-10 text-3xl md:text-6xl  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-sans font-bold">
          Have Queries?
        </h1>
        <p></p>
        <p className="text-neutral-500 max-w-lg mx-auto my-2 text-lg text-center relative z-10">
          Have queries regarding our event? Leave us a mail at
          <Link
            href={`mailto:${queryContactEmail}`}
            className="text-neutral-300 mx-2 hover:text-neutral-200"
          >
            {queryContactEmail}
          </Link>
          or give us a call on the following numbers.
        </p>
        <div className="w-full flex gap-5 justify-center items-center mt-7 relative z-10 flex-wrap md:flex-nowrap">
          {QueryData.map((item) => (
            <Link href={item.whatsappUrl} target="_blank" key={item.id}>
              <div className="QueriesWtspBtn">
                <IconBrandWhatsapp stroke={2} /> {item.name}
              </div>
            </Link>
          ))}
        </div>
      </motion.div>
      <BackgroundBeams />
    </div>
  );
};

export default QueriesSection;
