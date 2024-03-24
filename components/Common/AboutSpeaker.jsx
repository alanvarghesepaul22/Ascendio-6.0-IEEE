"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { SpeakerData } from "../../utils/data";
import Link from "next/link";
import { IconBrandInstagram, IconBrandLinkedin } from "@tabler/icons-react";

const AboutSpeaker = ({ id }) => {
  const [imageUrl, setImageUrl] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [designation, setDesignation] = useState("");
  const [linkedIn, setLinkedIn] = useState("");

  useEffect(() => {
    SpeakerData.map((item) => {
      if (item.id == id) {
        setImageUrl(item.imageUrl);
        setName(item.name);
        setDescription(item.description);
        setDesignation(item.designation);
        setLinkedIn(item.linkedinUrl);
      }
    });
  }, []);

  return (
    <motion.div
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{
        scale: 1,
        opacity: 1,
        transition: {
          duration: 0.5,
          ease: "easeIn",
          type: "spring",
          stiffness: 150,
          delay: 0.1,
        },
      }}
      className="w-4/5 flex flex-col md:flex-row gap-8 justify-center items-center mt-5 md:mt-16 lg:mt-0 z-50"
    >
      <div className="w-fit flex flex-col gap-5 justify-center items-center">
        <div className="w-56 h-56 border-4 border-yellow-700 rounded-full overflow-hidden">
          <Image
            src={imageUrl}
            alt="Team Photo"
            height={150}
            width={150}
            className="w-full h-auto"
          />
        </div>
        {linkedIn.includes("instagram") ? (
          <Link
            href={linkedIn}
            target="blank"
            className="text-rose-400 hover:text-rose-600 flex gap-3"
          >
            Instagram <IconBrandInstagram stroke={2} />
          </Link>
        ) : (
          <Link
            href={linkedIn}
            target="blank"
            className="text-blue-400 hover:text-blue-600 flex gap-3"
          >
            Linkedin <IconBrandLinkedin stroke={2} />
          </Link>
        )}
      </div>
      <div className="flex flex-col gap-4">
        <div className="text-center flex flex-col justify-center items-center md:items-start">
          <p className="text-2xl md:text-3xl">{name} </p>
          <p className="text-yellow-700 text-lg">{designation}</p>
        </div>
        <p className="md:text-lg font-light text-justify text-neutral-400">{description}</p>
      </div>
    </motion.div>
  );
};

export default AboutSpeaker;
