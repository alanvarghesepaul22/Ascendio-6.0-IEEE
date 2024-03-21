import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { IconBrandLinkedin } from "@tabler/icons-react";
import Link from "next/link";

const JumpingCard = ({
  imageUrl,
  name,
  designation,
  description,
  linkedinUrl,
}) => {
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
      className="bg-neutral-900/50 w-80 h-auto flex flex-col justify-center items-center rounded-lg"
    >
      <div className="relative">
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
          <div className="w-fit text-neutral-200">
            <p className="text-lg font-medium">About the speaker</p>
            <div className="w-full h-px rounded-lg bg-neutral-300"></div>
          </div>

          <p className=" mt-3 font-light text-base">{description}</p>
        </motion.div>
      </div>
      <div className="w-full h-full flex items-end justify-between gap-4 p-4">
        <div>
          <h1 className="text-lg font-medium text-neutral-200">{name}</h1>
          <p className="w-full text-neutral-400 text-sm">{designation}</p>
        </div>
        {linkedinUrl ? (
          <Link href={linkedinUrl}>
            <IconBrandLinkedin
              stroke={1.5}
              className="text-neutral-400 h-8 w-8 hover:text-neutral-500"
            />
          </Link>
        ) : null}
      </div>
    </motion.div>
  );
};

export default JumpingCard;
