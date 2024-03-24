"use client";
import React, { useState } from "react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { cn } from "../../utils/cn";
const razorpayKEY = process.env.NEXT_PUBLIC_RAZORPAY_KEY;
import { useSearchParams } from "next/navigation";
import axios from "axios";
import RadioBtn, { RadioBtnContainer } from "../Buttons/RadioBtn";
import { useRouter } from "next/navigation";
import DropdownContainer from "../Buttons/Dropdown";
import { Preference } from "../../utils/data";

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
  const [loading, setLoading] = useState(false);
  const [redirectLoading, setRedirectLoading] = useState(false);

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
    setLoading(true);
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
        } finally {
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
    setRedirectLoading(true);
    setLoading(false);
  };
  //

  return (
    <div>
      {!redirectLoading ? (
        <div className="max-w-xl w-full mx-auto rounded-none md:rounded-2xl px-8 md:p-8 shadow-input">
          <h2 className="font-bold text-2xl text-neutral-200 text-center">
            Book your Tickets
          </h2>
          <p className=" text-sm  mt-2 text-neutral-300 text-center">
            Please fill this form so that we can confirm your tickets.
          </p>

          <form
            className="my-8"
            onSubmit={handleSubmit}
            onChange={handleChange}
          >
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
                  required
                />
              </LabelInputContainer>
              <LabelInputContainer>
                <Label htmlFor="lastname">Last name</Label>
                <Input
                  name="lastname"
                  id="lastname"
                  type="text"
                  placeholder="Your last name here"
                  required
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
                required
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
                required
              />
            </LabelInputContainer>
            <LabelInputContainer className={amount == 1500 ? "mb-4" : "mb-0"}>
              <Label htmlFor="clgname">College name</Label>
              <Input
                name="clgname"
                id="clgname"
                type="text"
                placeholder="Your college name here"
                required
              />
            </LabelInputContainer>
            <LabelInputContainer className="mb-4">
              {amount == 1500 && <Label htmlFor="ieeeid">IEEE ID</Label>}
              <Input
                name="ieeeid"
                id="ieeeid"
                type={amount == "1500" ? "number" : "hidden"}
                placeholder="Your IEEE Id here"
                required
              />
            </LabelInputContainer>
            {/* <LabelInputContainer className="mb-4">
              <Label htmlFor="wrksp1">Workshop Preference</Label>

              <RadioBtnContainer className={"sm:grid-cols-2"}>
                <RadioBtn Label={"Workshop 1"} htmlFor={"wrksp1"}>
                  <input
                    name="wrksp"
                    id="wrksp1"
                    type="radio"
                    value={"Workshop 1"}
                    className={RadionInput}
                    required
                  />
                </RadioBtn>
                <RadioBtn Label={"Workshop 2"} htmlFor={"wrksp2"}>
                  <input
                    name="wrksp"
                    id="wrksp2"
                    type="radio"
                    value={"Workshop 2"}
                    className={RadionInput}
                    required
                  />
                </RadioBtn>
              </RadioBtnContainer>
            </LabelInputContainer> */}

            <LabelInputContainer className="mb-4">
              <Label htmlFor="wrksp1">Workshop Preference</Label>

              <RadioBtnContainer className={"sm:grid-cols-2"}>
                <DropdownContainer>
                  <select class="block appearance-none w-full bg-zinc-800 text-white text-sm px-4 py-2 pr-8 rounded-md shadow-sm focus:outline-none transition duration-300 ease-in-out">
                    <option value="" selected disabled hidden>
                      Preference 1
                    </option>
                    {Preference.map((item) => (
                      <option key={item.id} value={item.title}>
                        {item.title}
                      </option>
                    ))}
                  </select>
                </DropdownContainer>
                <DropdownContainer>
                  <select class="block appearance-none w-full bg-zinc-800 text-white text-sm px-4 py-2 pr-8 rounded-md shadow-sm focus:outline-none transition duration-300 ease-in-out">
                    <option value="" selected disabled hidden>
                      Preference 2
                    </option>
                    {Preference.map((item) => (
                      <option key={item.id} value={item.title}>
                        {item.title}
                      </option>
                    ))}
                  </select>
                </DropdownContainer>
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
                    required
                  />
                </RadioBtn>
                <RadioBtn Label={"Non-veg"} htmlFor={"food2"}>
                  <input
                    name="food"
                    id="food2"
                    type="radio"
                    value={"Non-veg"}
                    className={RadionInput}
                    required
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
                    required
                  />
                </RadioBtn>
                <RadioBtn Label={"M"} htmlFor={"tsize2"}>
                  <input
                    name="tshirt"
                    id="tsize2"
                    type="radio"
                    value={"M"}
                    className={RadionInput}
                    required
                  />
                </RadioBtn>
                <RadioBtn Label={"L"} htmlFor={"tsize3"}>
                  <input
                    name="tshirt"
                    id="tsize3"
                    type="radio"
                    value={"L"}
                    className={RadionInput}
                    required
                  />
                </RadioBtn>
                <RadioBtn Label={"XL"} htmlFor={"tsize4"}>
                  <input
                    name="tshirt"
                    id="tsize4"
                    type="radio"
                    value={"XL"}
                    className={RadionInput}
                    required
                  />
                </RadioBtn>
                <RadioBtn Label={"XXL"} htmlFor={"tsize5"}>
                  <input
                    name="tshirt"
                    id="tsize5"
                    type="radio"
                    value={"XXL"}
                    className={RadionInput}
                    required
                  />
                </RadioBtn>
              </RadioBtnContainer>
            </LabelInputContainer>

            <button
              disabled={loading}
              className="flex justify-center items-center gap-5 mt-8 bg-gradient-to-br relative group/btn from-zinc-900 to-zinc-900  w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset] cursor-pointer disabled:cursor-auto disabled:animate-pulse"
              type="submit"
            >
              {loading ? (
                <>
                  <p>Please Wait...</p>
                  <div className="h-4 w-4 border-2 border-y-yellow-400 border-zinc-600 animate-spin rounded-full"></div>
                </>
              ) : (
                "Continue"
              )}
              <BottomGradient />
            </button>
          </form>
        </div>
      ) : (
        <main className="w-full h-full flex  justify-center items-center px-6 lg:px-8 py-40">
          <div className="flex flex-col justify-center items-center ">
            <div className="h-14 w-14 border-2 border-y-yellow-500 border-zinc-600 animate-spin rounded-full"></div>

            <h1 className="text-center mt-4 text-xl tracking-tight text-neutral-500 sm:text-xl">
              Please wait while your payment is processing......
            </h1>
          </div>
        </main>
      )}
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
