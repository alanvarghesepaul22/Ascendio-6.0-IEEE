"use client";
import React from "react";
import { IconBrandWhatsapp, IconCircleCheckFilled } from "@tabler/icons-react";
import Link from "next/link";
import { queryContactEmail } from "../../utils/data";
import { useSearchParams } from "next/navigation";
import NotFound from "../../app/not-found";

const PaymentSuccess = () => {
  const searchParams = useSearchParams();
  const email = searchParams.get("email");
  const ticketId = searchParams.get("ticketId");
  if (!email || !ticketId) {
    return (
      <>
        <NotFound />
      </>
    );
  }
  return (
    <main className="w-full h-screen flex  justify-center items-center px-6 lg:px-8">
      <div className="flex flex-col justify-center items-center ">
        <div className="text-green-600">
          <IconCircleCheckFilled className="h-28 w-28" />
        </div>
        <h1 className="text-center mt-4 text-3xl font-bold tracking-tight text-neutral-100 sm:text-5xl">
          Your Payment is successfull!
        </h1>
        <p className="text-center mt-6 text-base leading-7 text-neutral-500">
          Ticket ID: <span className="font-bold">{ticketId}.</span> A mail has
          been sent to <span className="font-bold">{email}</span>. It might take
          some time to deliver the email, please wait.
        </p>
        <Link
          href="https://chat.whatsapp.com/Hn2lPo0l80HDvP1v17kV9e"
          target="blank"
          className="flex gap-3 justify-center items-center rounded-md bg-green-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-green-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-600 mt-6 transition-all"
        >
          Join whatsapp group
          <IconBrandWhatsapp stroke={2} />
        </Link>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <Link
            href="/buy"
            className="rounded-md bg-neutral-900 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-neutral-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-600"
          >
            Buy Again
          </Link>
          <Link
            href={`mailto:${queryContactEmail}`}
            className="text-sm font-semibold text-neutral-200 hover:text-neutral-300"
          >
            Contact support <span aria-hidden="true">&rarr;</span>
          </Link>
        </div>
      </div>
    </main>
  );
};

export default PaymentSuccess;
