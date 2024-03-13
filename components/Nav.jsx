"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Nav = () => {
  const pathname = usePathname();

  return (
    <div className="fixed top-10 z-20">
      <div className="border border-white px-20 py-3 rounded-full flex gap-10 bg-black font-bold items-center justify-center">
        <Link
          href="/"
          className={`px-2 py-1 rounded-full cursor-pointer ${
            pathname === "/" ? "bg-white text-black" : "text-white"
          } transition-all`}
        >
          Ascendio
        </Link>
        <Link
          href="/"
          className={`px-2 py-1 rounded-full cursor-pointer ${
            pathname === "/" ? "bg-white text-black" : "text-white"
          } transition-all`}
        >
          Home
        </Link>
        <Link
          href="/speakers"
          className={`px-2 py-1 rounded-full cursor-pointer ${
            pathname === "/speakers" ? "bg-white text-black" : "text-white"
          } transition-all`}
        >
          Speakers
        </Link>
        <Link
          href="/workshop"
          className={`px-2 py-1 rounded-full cursor-pointer ${
            pathname === "/workshop" ? "bg-white text-black" : "text-white"
          } transition-all`}
        >
          Workshop{" "}
        </Link>
        <Link
          href="/buy"
          className={`px-2 py-1 rounded-full cursor-pointer ${
            pathname === "/buy" ? "bg-white text-black" : "text-white"
          } transition-all`}
        >
          Buy Tickets
        </Link>
      </div>
    </div>
  );
};

export default Nav;
