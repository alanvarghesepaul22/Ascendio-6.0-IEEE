import React, { Suspense } from "react";
import { Form } from "../../../components/Common/Form";

const page = () => {
  return (
    <div className="h-full w-full flex flex-col justify-center items-center gap-3 mt-28 md:mt-24 pb-10  bg-grid-small-white/[0.2]  relative">
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-black  [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      <Suspense>
        <Form />
      </Suspense>
    </div>
  );
};

export default page;
