import { IconSquareRoundedX } from "@tabler/icons-react";
import Link from "next/link";
import React from "react";

const BuyTicketRedirect = () => {
  return (
    <div className="w-full  flex justify-center items-center py-24">
      <div className="w-3/4 lg:w-2/4 flex flex-col items-center gap-4 text-center">
        <IconSquareRoundedX stroke={2} className="w-36 h-36 text-red-600" />
        <p className="text-neutral-500 text-2xl md:text-4xl">
          Sorry! Temporary Suspension of Ticket Bookings.
        </p>
        <p className="text-neutral-500">
          We regret to inform you that at the moment, ticket bookings are
          temporarily unavailable due to pending approval of our payment gateway
          <Link
            href="/"
            className="ml-2 text-yellow-400 hover:text-yellow-600 font-normal underline decoration-dashed underline-offset-8"
          >
            Return to home page
          </Link>
        </p>
      </div>
    </div>
  );
};

export default BuyTicketRedirect;
