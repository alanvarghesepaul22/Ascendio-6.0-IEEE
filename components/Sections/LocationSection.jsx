"use client"
import { IconArrowLeftRight } from "@tabler/icons-react";
import Link from "next/link";
import React from "react";
import GradientBtn from "../Buttons/GradientBtn";
import { motion } from "framer-motion";

const LocationSection = () => {
  return (
    <div className="lg:h-screen w-full bg-grid-white/[0.1] relative flex items-center justify-center py-20">
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-neutral-950 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      <motion.div
        initial={{ opacity: 0.0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="w-4/5 flex justify-center items-center gap-20 flex-wrap-reverse lg:flex-nowrap"
      >
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3925.9014939042413!2d76.39771117451146!3d10.269520468340104!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b08011a49506827%3A0x7f47e0e624b0bd22!2sSCMS%20School%20of%20Engineering%20%26%20Technology%20%2C%20Karukutty!5e0!3m2!1sen!2sin!4v1711306865670!5m2!1sen!2sin"
          width="600"
          height="450"
          style={{ border: 0 }}
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
          className="rounded-lg"
        ></iframe>
        <div>
          <h1 className="relative z-10 text-3xl md:text-6xl  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-sans font-bold">
            How to reach us?
          </h1>
          <div className="w-full flex justify-center my-10">
            <Link
              target="blank"
              href={"https://maps.app.goo.gl/7aNASWm3f299A4hH7"}
              className="w-fit flex "
            >
              <GradientBtn>
                Get Directions
                <IconArrowLeftRight stroke={2} className="" />
              </GradientBtn>
            </Link>
          </div>

          <div>
            <p className="text-lg md:text-2xl text-center">
              SCMS School of Engineering and Technology
              <br />
              Vidya Nagar, Palissery, Karukutty
              <br /> Ernakulam, Kerala, India. 683576
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default LocationSection;
