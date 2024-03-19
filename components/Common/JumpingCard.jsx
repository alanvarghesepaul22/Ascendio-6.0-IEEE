import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const JumpingCard = ({ imageUrl, name, designation }) => {
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
      whileHover={{ y: -10 }}
      transition={{ type: "spring", stiffness: 300 }}
      className="bg-neutral-900/50 w-fit flex flex-col justify-center items-center rounded-lg"
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
        <h1 className="text-xl font-semibold text-neutral-200">{name}</h1>
        <p className="text-neutral-400">{designation}</p>
      </div>
    </motion.div>
  );
};

export default JumpingCard;
