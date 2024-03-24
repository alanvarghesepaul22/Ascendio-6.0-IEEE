import React from "react";
import { queryContactEmail } from "../../../utils/data";

const page = () => {
  return (
    <div className="w-full bg-black   bg-grid-small-white/[0.2]  relative flex items-center justify-center p-40">
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      <div className="container mx-auto px-4 py-8 z-50">
        <h1 className="text-3xl font-bold mb-4">Privacy Policy</h1>
        <p className="mb-4">
          At Ascendio, we take your privacy seriously. This Privacy Policy
          outlines the types of personal information we collect from our website
          users, how we collect and use this information, and the measures we
          take to keep it safe. By using our website, you agree to the terms of
          this Privacy Policy.
        </p>

        <div className="mb-4">
          <h2 className="text-2xl font-semibold mb-2">
            Information We Collect
          </h2>
          <ul className="list-disc pl-8">
            <li>Name</li>
            <li>Email address</li>
            <li>Phone number</li>
            <li>IEEE ID (if applicable)</li>
          </ul>
        </div>

        <div className="mb-4">
          <h2 className="text-2xl font-semibold mb-2">
            How We Collect Information
          </h2>
          <p>
            We may collect personal information directly from you when you
            provide it to us through forms on our website.
          </p>
        </div>

        <div className="mb-4">
          <h2 className="text-2xl font-semibold mb-2">
            How We Use Collected Information
          </h2>
          <ul className="list-disc pl-8">
            <li>
              To provide you with access to our services, including event
              photos, current event details, speakers, workshops, etc.
            </li>
            <li>
              To communicate with you regarding your participation in events or
              other relevant information.
            </li>
            <li>To personalize and improve your experience on our website.</li>
            <li>To comply with legal obligations.</li>
          </ul>
        </div>

        <div className="mb-4">
          <h2 className="text-2xl font-semibold mb-2">
            How We Keep Information Safe
          </h2>
          <p>
            We implement a variety of security measures to maintain the safety
            of your personal information when you access our website. We have
            strict internal policies in place to safeguard against unauthorized
            access, disclosure, alteration, or destruction of your personal
            information.
          </p>
        </div>

        <div className="mb-4">
          <h2 className="text-2xl font-semibold mb-2">
            Information Sharing with Third Parties
          </h2>
          <ul className="list-disc pl-8">
            <li>
              We do not sell, trade, or otherwise transfer your personal
              information to third parties without your consent, except in the
              following circumstances:
            </li>
            <li>
              We may share your information with trusted third-party service
              providers who assist us in operating our website or conducting our
              business, provided that such parties agree to keep this
              information confidential.
            </li>
            <li>
              We may disclose your information in response to lawful requests by
              public authorities, including to meet national security or law
              enforcement requirements.
            </li>
          </ul>
        </div>

        <div className="mb-4">
          <h2 className="text-2xl font-semibold mb-2">
            Changes to this Privacy Policy
          </h2>
          <p>
            We reserve the right to modify this Privacy Policy at any time, so
            please review it frequently. If we make material changes to this
            policy, we will notify you here, by email, or by means of a notice
            on our website prior to the change becoming effective.
          </p>
        </div>

        <div className="mb-4">
          <h2 className="text-2xl font-semibold mb-2">Contact Us</h2>
          <p>
            If you have any questions or concerns about this Privacy Policy,
            please contact us at {queryContactEmail}.
          </p>
        </div>

        <p className="mt-4">Last Updated: 24 March 2024</p>

        <p className="mt-4">
          By using our website, you acknowledge that you have read and
          understood this Privacy Policy and agree to its terms and conditions.
        </p>
      </div>
    </div>
  );
};

export default page;
