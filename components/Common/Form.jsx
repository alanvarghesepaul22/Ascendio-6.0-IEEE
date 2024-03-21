"use client";
import React, { useState } from "react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { cn } from "../../utils/cn";
const razorpayKEY = process.env.NEXT_PUBLIC_RAZORPAY_KEY;
import { redirect, useSearchParams } from "next/navigation";
import axios from "axios";
import RadioBtn, { RadioBtnContainer } from "../Buttons/RadioBtn";
import { useRouter } from "next/navigation";

const RadionInput =
  "before:content[''] peer relative h-4 w-4 cursor-pointer appearance-none rounded-full border border-zinc-700  p-0  transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-gray-100 checked:before:bg-gray-100 hover:before:opacity-0";

function generateTicketId(length) {
  const charset =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let ticketId = "";

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * charset.length);
    ticketId += charset[randomIndex];
  }

  return ticketId;
}

export function Form() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const amount = parseInt(searchParams.get("amount"));

  const [firstname, setFirstname] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    mobnum: "",
    clgname: "",
    ieeeid: "",
    wrksp: "",
    food: "",
    tshirt: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    makePayment();
  };

  const initializeRazorpay = () => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/checkout.js";

      script.onload = () => {
        resolve(true);
      };
      script.onerror = () => {
        resolve(false);
      };

      document.body.appendChild(script);
    });
  };

  const makePayment = async () => {
    const res = await initializeRazorpay();
    if (!res) {
      alert("Razorpay SDK Failed to load");
      return;
    }
    // Amount is in currency subunits. Hence, multiply by 100 to get the actual amount
    // Make API call to the serverless API
    console.log("amount", amount);
    const response = await axios.post(`/api/createOrder`, {
      amount,
    });
    const data = response.data.order;
    // setOrderID(data.id)

    let options = {
      key: razorpayKEY, // Enter the Key ID generated from the Dashboard
      name: "Ascendio",
      currency: data.currency,
      amount: data.amount,
      order_id: data.id,
      description: `Thank you`,
      // image: "https://manuarora.in/logo.png",
      handler: function (response) {
        try {
          const res = axios
            .post(`/api/verifyOrder`, {
              total: amount * 100,
              razorpay_payment_id: response.razorpay_payment_id,
              razorpay_order_id: response.razorpay_order_id,
            })
            .then((res) => {
              if (
                res.status == 200 &&
                res.data.message == "Payment successful"
              ) {
                console.log("Payment successful");
                const ticketId = generateTicketId(8);
                console.log("Ticket ID: ", ticketId);
                axios
                  .post("/api/send", { amount, formData, ticketId, email })
                  .then((res) => console.log("Email Sent"));
                axios
                  .post("/api/submit", { formData, ticketId })
                  .then((res) => console.log("Detials added"));
                router.push(
                  `/payment-success?email=${email}&ticketId=${ticketId}`
                );
              }
            });
        } catch (err) {
          console.log("error", err);
        }
      },
      prefill: {
        name: firstname,
        email,
        contact: phone,
      },
      modal: {
        ondismiss: function () {
          console.log("closed");
        },
      },
    };

    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  };

  return (
    <div className="max-w-xl w-full mx-auto rounded-none md:rounded-2xl px-8 md:p-8 shadow-input">
      <h2 className="font-bold text-2xl text-neutral-800 dark:text-neutral-200 text-center">
        Book your Tickets
      </h2>
      <p className="text-neutral-600 text-sm  mt-2 dark:text-neutral-300 text-center">
        Please fill this form so that we can confirm your tickets.
      </p>
      {/* <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-3 h-[1px] w-full" /> */}

      <form className="my-8" onSubmit={handleSubmit} onChange={handleChange}>
        <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
          <LabelInputContainer>
            <Label htmlFor="firstname">First name</Label>
            <Input
              name="firstname"
              value={firstname}
              onChange={(e) => setFirstname(e.target.value)}
              id="firstname"
              type="text"
              placeholder="Your first name here"
            />
          </LabelInputContainer>
          <LabelInputContainer>
            <Label htmlFor="lastname">Last name</Label>
            <Input
              name="lastname"
              id="lastname"
              type="text"
              placeholder="Your last name here"
            />
          </LabelInputContainer>
        </div>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="email">Email Address</Label>
          <Input
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            id="email"
            placeholder="Your email here"
            type="email"
          />
        </LabelInputContainer>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="mobnum">Mobile No. (Preferebly Whatsapp) </Label>
          <Input
            name="mobnum"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            id="mobnum"
            type="text"
            placeholder="Your mobile number here"
          />
        </LabelInputContainer>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="clgname">College name</Label>
          <Input
            name="clgname"
            id="clgname"
            type="text"
            placeholder="Your college name here"
          />
        </LabelInputContainer>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="ieeeid">IEEE ID</Label>
          <Input
            name="ieeeid"
            id="ieeeid"
            type="number"
            placeholder="Your IEEE Id here"
          />
        </LabelInputContainer>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="wrksp1">Workshop Preference</Label>

          <RadioBtnContainer className={"sm:grid-cols-2"}>
            <RadioBtn Label={"Workshop 1"} htmlFor={"wrksp1"}>
              <input
                name="wrksp"
                id="wrksp1"
                type="radio"
                value={"Workshop 1"}
                className={RadionInput}
              />
            </RadioBtn>
            <RadioBtn Label={"Workshop 2"} htmlFor={"wrksp2"}>
              <input
                name="wrksp"
                id="wrksp2"
                type="radio"
                value={"Workshop 2"}
                className={RadionInput}
              />
            </RadioBtn>
          </RadioBtnContainer>
        </LabelInputContainer>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="food">Food Preference</Label>
          <RadioBtnContainer className={"grid-cols-2"}>
            <RadioBtn Label={"Veg"} htmlFor={"food1"}>
              <input
                name="food"
                id="food1"
                type="radio"
                value={"Veg"}
                className={RadionInput}
              />
            </RadioBtn>
            <RadioBtn Label={"Non-veg"} htmlFor={"food2"}>
              <input
                name="food"
                id="food2"
                type="radio"
                value={"Non-veg"}
                className={RadionInput}
              />
            </RadioBtn>
          </RadioBtnContainer>
        </LabelInputContainer>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="tshirt">T-Shirt Size</Label>
          <RadioBtnContainer className={"grid-cols-3"}>
            <RadioBtn Label={"S"} htmlFor={"tsize1"}>
              <input
                name="tshirt"
                id="tsize1"
                type="radio"
                value={"S"}
                className={RadionInput}
              />
            </RadioBtn>
            <RadioBtn Label={"M"} htmlFor={"tsize2"}>
              <input
                name="tshirt"
                id="tsize2"
                type="radio"
                value={"M"}
                className={RadionInput}
              />
            </RadioBtn>
            <RadioBtn Label={"L"} htmlFor={"tsize3"}>
              <input
                name="tshirt"
                id="tsize3"
                type="radio"
                value={"L"}
                className={RadionInput}
              />
            </RadioBtn>
            <RadioBtn Label={"XL"} htmlFor={"tsize4"}>
              <input
                name="tshirt"
                id="tsize4"
                type="radio"
                value={"XL"}
                className={RadionInput}
              />
            </RadioBtn>
            <RadioBtn Label={"XXL"} htmlFor={"tsize5"}>
              <input
                name="tshirt"
                id="tsize5"
                type="radio"
                value={"XXL"}
                className={RadionInput}
              />
            </RadioBtn>
          </RadioBtnContainer>
        </LabelInputContainer>

        <button
          className="mt-8 bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
          type="submit"
        >
          Continue &rarr;
          <BottomGradient />
        </button>
      </form>
    </div>
  );
}

const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-yellow-500 to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-orange-500 to-transparent" />
    </>
  );
};

const LabelInputContainer = ({ children, className }) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};
