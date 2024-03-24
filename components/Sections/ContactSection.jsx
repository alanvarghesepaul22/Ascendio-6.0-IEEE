"use client";
import React from "react";
import {
  IconArrowsSplit,
  IconClock24,
  IconHomeLink,
  IconMail,
  IconPhoneCall,
} from "@tabler/icons-react";
import { motion } from "framer-motion";
import Link from "next/link";
import { queryContactEmail } from "../../utils/data";


const ContactSection = () => {
  return (
    <div className="w-full flex flex-col lg:flex-row items-start justify-between gap-10">
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
        className="w-full lg:w-2/5"
      >
        <h1 className="text-3xl font-bold mb-6 text-center lg:text-left lg:ml-9">
          Contact Us
        </h1>
        <div className="flex flex-col gap-5 text-neutral-400">
          <div className="flex gap-3 items-center justify-center">
            <IconArrowsSplit stroke={2} className="h-14 w-14" />
            <p className="text-justify">
              Thank you for reaching out to us. We value your feedback and
              inquiries. Please find our contact information below.
            </p>
          </div>

          <div className="flex gap-3 items-center justify-center">
            <IconArrowsSplit stroke={2} className="h-14 w-14" />
            <p className="text-justify">
              Feel free to reach out to us via email or phone during our
              operating hours. We look forward to assisting you.
            </p>
          </div>

          <div className="flex gap-3 items-center justify-center">
            <IconArrowsSplit stroke={2} className="h-14 w-14" />
            <p className="text-justify">
              If you have any specific inquiries or require assistance, please
              don't hesitate to contact us using the provided information.
            </p>
          </div>
        </div>
      </motion.div>
      <div className="w-full md:w-fit">
        <div className="w-full grid md:grid-cols-2 gap-3">
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
            whileHover={{ scale: 1.03 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="bg-neutral-900/75 p-5 rounded-md border border-neutral-800 hover:border-neutral-700"
          >
            <IconMail stroke={2} className="text-neutral-500 mb-2" />
            <h2 className="text-lg font-semibold mb-2">Email Address</h2>
            <ul>
              <li className="flex flex-col text-neutral-400">
                General Inquiries & Customer Support:
                <Link
                  href={`mailto:${queryContactEmail}`}
                  className="text-neutral-200 hover:text-yellow-200 "
                >
                  {queryContactEmail}
                </Link>
              </li>
            </ul>
          </motion.div>

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
            whileHover={{ scale: 1.03 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="bg-neutral-900/75 p-5 rounded-md border border-neutral-800 hover:border-neutral-700"
          >
            <IconHomeLink stroke={2} className="text-neutral-500 mb-2" />
            <h2 className="text-lg font-semibold mb-2">Operating Address:</h2>
            <p className="text-neutral-400">
              Ascendio
              <br />
              Vidya Nagar, Palissery, Palissery, Karukutty,
              <br />
              Ernakulam, Kerala, India. 683576
            </p>
          </motion.div>

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
            whileHover={{ scale: 1.03 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="bg-neutral-900/75 p-5 rounded-md border border-neutral-800 hover:border-neutral-700"
          >
            <IconPhoneCall stroke={2} className="text-neutral-500 mb-2" />
            <h2 className="text-lg font-semibold mb-2">Mobile Number:</h2>
            <p className="text-neutral-400"> +91 9383451802</p>
          </motion.div>

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
            whileHover={{ scale: 1.03 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="bg-neutral-900/75 p-5 rounded-md border border-neutral-800 hover:border-neutral-700"
          >
            <IconClock24 stroke={2} className="text-neutral-500 mb-2" />
            <h2 className="text-lg font-semibold mb-2">Operating Hours:</h2>
            <p className="text-neutral-400"> 9:00 AM - 4:00 PM </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
