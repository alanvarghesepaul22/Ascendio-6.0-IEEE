import React from "react";
import { queryContactEmail } from "../../utils/data";

const TermsSection = () => {
  return (
    <>
      <h1 className="text-xl md:text-3xl font-bold mb-4">
        Terms and Conditions
      </h1>
      <p className="mb-4 text-justify">
        Welcome toAscendio. These terms and conditions govern your use of our
        website. By accessing or using our website, you agree to comply with
        these terms and conditions. Please read them carefully.
      </p>

      <div className="mb-4">
        <h2 className="text-lg md:text-2xl font-semibold mb-2">
          Contact Information
        </h2>
        <p className="text-justify">
          If you have any questions or concerns about these terms and
          conditions, please contact us at {queryContactEmail}.
        </p>
      </div>

      <div className="mb-4">
        <h2 className="text-lg md:text-2xl font-semibold mb-2">
          Effective Date
        </h2>
        <p>These terms and conditions are effective as of 24 March 2024.</p>
      </div>

      <div className="mb-4 text-justify">
        <h2 className="text-lg md:text-2xl font-semibold mb-2">
          Limitation of Liability and Disclaimer of Warranties
        </h2>
        <p className="mb-2">
          <strong>Limitation of Liability:</strong> Ascendio and its affiliates,
          directors, officers, employees, agents, and licensors shall not be
          liable for any indirect, incidental, special, consequential, or
          punitive damages, including without limitation, loss of profits, data,
          use, goodwill, or other intangible losses, resulting from (i) your
          access to or use of, or inability to access or use, our website; (ii)
          any conduct or content of any third party on our website; or (iii)
          unauthorized access, use, or alteration of your transmissions or
          content, whether based on warranty, contract, tort (including
          negligence), or any other legal theory, whether or not we have been
          informed of the possibility of such damage, and even if a remedy set
          forth herein is found to have failed of its essential purpose.
        </p>
        <p className="mb-2">
          <strong>Disclaimer of Warranties:</strong> Our website is provided "as
          is" and "as available" without warranties of any kind, either express
          or implied, including, but not limited to, implied warranties of
          merchantability, fitness for a particular purpose, or
          non-infringement. We make no warranty that (i) our website will meet
          your requirements; (ii) our website will be uninterrupted, timely,
          secure, or error-free; (iii) the results that may be obtained from the
          use of our website will be accurate or reliable; or (iv) the quality
          of any products, services, information, or other material purchased or
          obtained by you through our website will meet your expectations.
        </p>
      </div>

      <div className="mb-4">
        <h2 className="text-lg md:text-2xl font-semibold mb-2">
          Rules of Conduct
        </h2>
        <ul className="list-disc pl-8 text-justify">
          <li>Violate any applicable laws or regulations;</li>
          <li>Infringe upon the rights of others;</li>
          <li>Interfere with or disrupt our website or servers;</li>
          <li>Transmit any viruses, worms, or other harmful software;</li>
          <li>
            Engage in any conduct that is offensive, threatening, or harmful to
            others; or
          </li>
          <li>
            Attempt to gain unauthorized access to any portion of our website.
          </li>
        </ul>
      </div>

      <div className="mb-4">
        <h2 className="text-lg md:text-2xl font-semibold mb-2">
          User Restrictions
        </h2>
        <p className="text-justify">
          We reserve the right to suspend or terminate your access to our
          website if you violate these terms and conditions.
        </p>
      </div>

      <div className="mb-4">
        <h2 className="text-lg md:text-2xl font-semibold mb-2">
          Changes to Terms and Conditions
        </h2>
        <p className="text-justify">
          We reserve the right to modify these terms and conditions at any time,
          so please review them frequently. If we make material changes to these
          terms and conditions, we will notify you here, by email, or by means
          of a notice on our website prior to the change becoming effective.
        </p>
      </div>

      <p className="mt-4 text-justify">
        By using our website, you acknowledge that you have read and understood
        these terms and conditions and agree to abide by them.
      </p>
      <p>Last Updated: 24 March 2024</p>
    </>
  );
};

export default TermsSection;
