import * as React from "react";

export const EmailTemplate = ({ firstname, amount }) => (
  <div>
    <h1>Welcome, {firstname}!</h1>
    <h1>Your payment of Rs {amount} was successfull</h1>
  </div>
);
