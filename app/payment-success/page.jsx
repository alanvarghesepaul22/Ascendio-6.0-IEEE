import { Suspense } from "react";
import PaymentSuccess from "../../components/Common/PaymentSuccess";
export const metadata = {
  title: "Payment Success - Ascendio 6.0",
  description: "IEEE SSET Ascendio 6.0",
};

const page = () => {
  return (
    <Suspense>
      <PaymentSuccess />
    </Suspense>
  );
};

export default page;