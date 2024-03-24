import React from "react";
import { queryContactEmail } from "../../../utils/data";

const page = () => {
  return (
    <div className="w-full bg-black   bg-grid-small-white/[0.2]  relative flex items-center justify-center p-40">
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      <div className="container mx-auto px-4 py-8 z-50">
        <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
        <p className="mb-4">
          Thank you for reaching out to us. We value your feedback and
          inquiries. Please find our contact information below:
        </p>

        <div className="mb-4">
          <h2 className="text-xl font-semibold mb-2">Email Address:</h2>
          <ul>
            <li>
              General Inquiries:{" "}
              <a href={`mailto:${queryContactEmail}`} className="text-blue-500">
                {queryContactEmail}
              </a>
            </li>
            <li>
              Customer Support:{" "}
              <a href={`mailto:${queryContactEmail}`} className="text-blue-500">
                {queryContactEmail}
              </a>
            </li>
          </ul>
        </div>

        <div className="mb-4">
          <h2 className="text-xl font-semibold mb-2">Mobile Number:</h2>
          <p> +91 9383451802</p>
        </div>

        <div className="mb-4">
          <h2 className="text-xl font-semibold mb-2">Operating Address:</h2>
          <p>
            Ascendio
            <br />
            Vidya Nagar, Palissery, Palissery, Karukutty,
            <br />
            Ernakulam, Kerala 683576
            <br />
            India
          </p>
        </div>

        <div className="mb-4">
          <h2 className="text-xl font-semibold mb-2">Operating Hours:</h2>
          <p>9:00 AM - 4:00 PM </p>
        </div>

        <p className="mb-4">
          Feel free to reach out to us via email or phone during our operating
          hours. We look forward to assisting you.
        </p>

        <p className="mb-4">
          If you have any specific inquiries or require assistance, please don't
          hesitate to contact us using the provided information.
        </p>

        <p>
          Warm regards,
          <br />
          Ascendio Team
        </p>
      </div>
    </div>
  );
};

export default page;
