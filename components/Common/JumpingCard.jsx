import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const JumpingCard = ({ imageUrl, name, designation,description }) => {
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
      <div className="w-72 h-64 sm:w-80 sm:h-[350px] relative">
        <Image
          src={imageUrl}
          alt=""
          height={500}
          width={500}
          className="h-full w-full rounded-t-lg"
        />
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 0, height: "100%" }}
          whileHover={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="absolute bottom-0 left-0 w-full bg-neutral-950/50 p-4"
        >
          <div className="w-fit">
           <p className="text-xl font-medium">About the speaker</p>
          <div className="w-full h-px rounded-lg bg-neutral-300"></div> 
          </div>
          
          <p className="text-neutral-50 mt-3">
            {description}
          </p>
        </motion.div>
      </div>
      <div className="w-72 h-full flex flex-col justify-start p-4">
        <h1 className="text-xl font-medium text-neutral-200">{name}</h1>
        <p className="w-full text-neutral-400">{designation}</p>
      </div>
    </motion.div>
  );
};

export default JumpingCard;
