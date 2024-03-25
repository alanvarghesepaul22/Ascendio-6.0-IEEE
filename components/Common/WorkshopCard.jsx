import { IconExternalLink } from "@tabler/icons-react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const WorkshopCard = ({id, imageUrl, name, designation, description }) => {
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
      className="border w-80 h-auto border-neutral-500/[0.2] flex flex-col items-start mx-auto rounded-lg relative bg-neutral-950"
    >
      <div className="w-full h-full relative">
        <Image
          src={imageUrl}
          alt=""
          height={500}
          width={500}
          className="h-full w-full rounded"
        />
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 0, height: "100%" }}
          whileHover={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="absolute bottom-0 left-0 w-full bg-neutral-950/50"
        >
          <div className="w-full h-full flex ">
            <Link
              href={`/workshop/${id}`}
              className="w-full h-full flex justify-center items-center gap-4 text-neutral-200 hover:underline hover:text-neutral-400"
            >
              <p>Explore More</p>
              <IconExternalLink stroke={2} />
            </Link>
          </div>
        </motion.div>
      </div>
      <div className="w-full h-full flex flex-col justify-start p-4">
        <h1 className="text-lg font-medium text-neutral-300">{name}</h1>
        <p className="w-full text-neutral-400 text-sm">{designation}</p>
      </div>
    </motion.div>
  );
};

export default WorkshopCard;
