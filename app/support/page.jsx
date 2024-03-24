import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div className="h-[50rem] w-full bg-black   bg-grid-small-white/[0.2]  relative flex items-center justify-center">
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      <div className=" p-4">
        <h1 className="text-xl font-bold mb-4">Navigation</h1>
        <ul className="space-y-2">
          <li>
            <Link
              href="support/privacy-policy"
              className="text-blue-600 hover:underline"
            >
              Privacy Policy
            </Link>
          </li>
          <li>
            <Link
              href="support/terms-conditions"
              className="text-blue-600 hover:underline"
            >
              Terms and Conditions
            </Link>
          </li>
          <li>
            <Link
              href="support/cancellation"
              className="text-blue-600 hover:underline"
            >
              Cancellation and Refund Policy
            </Link>
          </li>
          <li>
            <Link href="support/delivery" className="text-blue-600 hover:underline">
              Ticket Booking Policy
            </Link>
          </li>
          <li>
            <Link href="support/contact" className="text-blue-600 hover:underline">
              Contact Us
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default page;
