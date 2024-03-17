"use client";
import React, { useState } from "react";
import { Meteors } from "../ui/meteors";
import { motion } from "framer-motion";
import axios from "axios";

const PriceCard = ({ amount }) => {
  const razorpayKEY = process.env.NEXT_PUBLIC_RAZORPAY_KEY;
  const [username,setUsername] = useState('')
  const [email,setEmail] = useState('')
  const [contact,setContact] = useState('')

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
      amount
    });
    const data = response.data.order;
    // setOrderID(data.id)

    var options = {
      key: razorpayKEY, // Enter the Key ID generated from the Dashboard
      name: "Ascendio",
      currency: data.currency,
      amount: data.amount,
      order_id: data.id,
      description: "Thank you",
      // image: "https://manuarora.in/logo.png",
      handler: function (response) {
        try{
            const res  = axios.post(`/api/verifyOrder`, {
            total: amount*100,
            razorpay_payment_id: response.razorpay_payment_id,
            razorpay_order_id: response.razorpay_order_id,
          }).then(res => {
            if(res.status === 200){
              console.log("res mssg",res.data.message);
              if (res.data.message === "Payment successful" && res.data.payment) {
                // Redirect to the /ticket page
                window.location.href = "/ticket";
            }
            }
          })

        }catch(err){
          console.log("error",err);
        }
        
      },
      prefill: {
        name:username,
        email,
        contact,
      },
      modal: {
        ondismiss: function() {
          console.log("closed");
        },
      },
    };

    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  };



  return (
    <motion.div
      initial={{ scale: 0.8 }}
      animate={{
        scale: 1,
        transition: {
          duration: 1,
          ease: "easeIn",
          type: "spring",
          stiffness: 150,
        },
      }}
      whileHover={{ scale: 1.05 }}
    >
      <div className=" w-full relative max-w-xs">
        <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-yellow-400 to-yellow-800 transform scale-[0.70] bg-orange-200 rounded-full blur-3xl" />
        <div className="relative shadow-xl bg-neutral-950/90 border border-neutral-800  px-4 py-8 h-full overflow-hidden rounded-2xl flex flex-col justify-end items-start">
          <div className="h-5 w-5 rounded-full border flex items-center justify-center mb-4 border-neutral-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="h-2 w-2 text-neutral-300"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.5 4.5l15 15m0 0V8.25m0 11.25H8.25"
              />
            </svg>
          </div>

          <h1 className="font-bold text-xl text-white mb-4 relative z-50">
            Meteors because they&apos;re cool
          </h1>

          <p className="font-normal text-base text-neutral-400 mb-4 relative z-50">
            I don&apos;t know what to write so I&apos;ll just paste something
            cool here. One more sentence because lorem ipsum is just
            unacceptable. Won&apos;t ChatGPT the shit out of this.
          </p>

          <div className="flex justify-between items-center w-full">
            
            <button onClick={makePayment} className="border px-4 py-1 rounded-lg  border-neutral-500 text-neutral-200">
              BUY
            </button>
           <div className=" font-medium text-xl">{"₹" + amount}</div>
          </div>

          {/* Meaty part - Meteor effect */}
          <Meteors number={20} />
        </div>
      </div>
    </motion.div>
  );
};

export default PriceCard;
