import React from "react";
import { queryContactEmail } from "../../../utils/data";

const page = () => {
  return (
    <div className="w-full bg-black   bg-grid-small-white/[0.2]  relative flex items-center justify-center p-40">
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      <div className="container mx-auto px-4 py-8 z-50">
        <h1 className="text-3xl font-bold mb-4">Ticket Booking Policy</h1>
        <p className="mb-4">
          At Ascendio, we aim to make your ticket booking experience as smooth
          and convenient as possible. Please review our ticket booking policy
          outlined below:
        </p>

        <div className="mb-4">
          <h2 className="text-2xl font-semibold mb-2">Order Processing Time</h2>
          <p>
            Upon completing your ticket booking, you will receive a confirmation
            email containing your ticket details. Please allow up to 24 hours
            for order processing.
          </p>
        </div>

        <div className="mb-4">
          <h2 className="text-2xl font-semibold mb-2">Ticket Delivery</h2>
          <p>
            <strong>Electronic Tickets (E-Tickets):</strong> Your ticket(s) will
            be delivered electronically to the email address provided during
            booking. You can either print the ticket(s) or display them on your
            mobile device for entry.
          </p>
        </div>

        <div className="mb-4">
          <h2 className="text-2xl font-semibold mb-2">Shipping Costs</h2>
          <p>
            As ticket delivery is electronic, there are no
            shipping costs associated with ticket bookings.
          </p>
        </div>


        <div className="mb-4">
          <h2 className="text-2xl font-semibold mb-2">
            Changes to this Policy
          </h2>
          <p>
            We reserve the right to modify this ticket booking policy at any
            time. Any changes will be effective immediately upon posting the
            updated policy on our website.
          </p>
        </div>

        <p className="mt-4">
          By booking tickets through our website, you acknowledge that you
          have read and understood this ticket booking policy and agree to abide
          by it.
        </p>

        <div className="mb-4">
          <h2 className="text-2xl font-semibold mb-2">Contact Us</h2>
          <p>
            If you have any questions or concerns about our ticket booking
            policy, please contact us at {queryContactEmail}.
          </p>
        </div>

        <p>Last Updated: 24 March 2024</p>
      </div>
    </div>
  );
};

export default page;
