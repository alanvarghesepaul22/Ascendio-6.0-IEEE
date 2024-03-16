"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const TeamCard = ({ imageUrl, name, role }) => {
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
      className="flex flex-col gap-4"
    >
      <motion.div
        whileHover={{ scale: 1.1 }}
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        className="w-36 h-36 bg-neutral-900 border-4 border-yellow-700 rounded-full flex items-center justify-center cursor-pointer overflow-hidden"
      >
        <Image
          src={imageUrl}
          alt="Team Photo"
          height={150}
          width={150}
          className="w-full h-auto"
        />
      </motion.div>
      <div className="flex flex-col justify-center items-center">
        <p>{name}</p>
        <p className="text-yellow-700">{role}</p>
      </div>
    </motion.div>
  );
};

export default TeamCard;
