import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

const WorkshopCard = ({ imageUrl, name, designation }) => {
  return (
    <motion.div
      whileHover={{ y: -10 }}
      transition={{ type: "spring", stiffness: 300 }}
      className="border border-neutral-500/[0.2] flex flex-col items-start max-w-sm mx-auto p-4 relative h-fit bg-neutral-950 shadow-md shadow-neutral-900/75"
    >
      <div className="w-72 h-64 sm:w-80 sm:h-[350px]">
        <Image
          src={imageUrl}
          alt=""
          height={500}
          width={500}
          className="h-full w-full rounded-t-lg"
        />
      </div>
      <div className="w-full flex flex-col justify-start p-4">
        <h1 className="text-xl font-semibold text-neutral-300">{name}</h1>
        <p className="text-neutral-400">{designation}</p>
      </div>
    </motion.div>
  );
};

export default WorkshopCard;
