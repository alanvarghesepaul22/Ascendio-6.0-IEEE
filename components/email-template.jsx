import * as React from "react";

export const EmailTemplate = ({ formData, ticketId, amount }) => (
  <div>
    <p>Dear {formData.firstname},</p>
    <p>Thank you for securing your ticket to IEEE Ascendio 6.0! We're absolutely delighted to have you on board for this exhilarating event.</p>
    
    <p>Here are the details you provided:</p>
    <ul>
      <li>Name: {formData.firstname} {formData.lastname}</li>
      <li>Email: {formData.email ? formData.email : "not provided"}</li>
      <li>Mobile Number: {formData.mobnum ? formData.mobnum : "not provided"}</li>
      <li>College Name: {formData.clgname ? formData.clgname : "not provided"}</li>
      <li>IEEE ID: {formData.ieeeid ? formData.ieeeid : "not provided"}</li>
      <li>Workshop Preference: {formData.wrksp ? formData.wrksp : "not provided"}</li>
      <li>Food Preference: {formData.food ? formData.food : "not provided"}</li>
      <li>T-shirt Size: {formData.tshirt ? formData.tshirt : "not provided"}</li>
    </ul>
    
    <p>Your ticket ID is: {ticketId}</p>
    
    <p>Please keep this email for your records.</p>
    
    <p>If you have any questions or require further assistance, feel free to reach out to us at ascendio6.0@gmail.com.</p>
    
    <p>We look forward to welcoming you to IEEE Ascendio 6.0 and hope you have a fantastic experience!</p>
    
    <p>Best regards,</p>
    <p>Team Ascendio</p>

  </div>
);


