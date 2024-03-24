"use client";
import React from "react";
import MagicTitle from "../Common/MagicTitle";
import { motion } from "framer-motion";
import { IconArrowNarrowRight } from "@tabler/icons-react";
import Link from "next/link";
import {MoreInfoData} from "../../utils/data";

const SupportSection = () => {
  return (
    <>
      <MagicTitle className="text-2xl md:text-4xl lg:-mt-40">
        More Information
      </MagicTitle>
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{
          scale: 1,
          opacity: 1,
          transition: {
            duration: 1,
            ease: "easeIn",
            type: "spring",
            stiffness: 150,
          },
        }}
        className="w-full grid md:grid-cols-2 lg:grid-cols-3 gap-3 mt-10"
      >
        {MoreInfoData.map((item) => (
          <motion.div
            whileHover={{ y: -5 }}
            transition={{ type: "spring", stiffness: 300 }}
            key={item.id}
            className="hover:bg-neutral-900/75 bg-neutral-900 rounded-lg"
          >
            <Link
              href={item.url}
              className="w-full p-6 sm:p-8 text-neutral-300  flex justify-between items-center gap-4"
            >
              {item.title}
              <IconArrowNarrowRight stroke={2} />
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </>
  );
};

export default SupportSection;
