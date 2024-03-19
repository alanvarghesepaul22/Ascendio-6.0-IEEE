"use client";
import React, { useState } from "react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { cn } from "../../utils/cn";
const razorpayKEY = process.env.NEXT_PUBLIC_RAZORPAY_KEY;
import { useSearchParams } from 'next/navigation'
import axios from "axios";


export function Form() {


  const searchParams = useSearchParams()
 
  const amount = searchParams.get('amount')

  const [firstname,setFirstname] = useState('')
  const [email,setEmail] = useState('')
  const [phone,setPhone] = useState('')
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    mobnum: '',
    clgname: '',
    ieeeid: '',
    wrksp: '',
    food: '',
    tshirt: '',
  }); 


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    makePayment()
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
              axios.post('/api/send',{ email,firstname,amount,formData })
            }
          })

        }catch(err){
          console.log("error",err);
        }
        
      },
      prefill: {
        name:firstname,
        email,
        contact:phone,
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
    <div className="max-w-xl w-full mx-auto rounded-none md:rounded-2xl mt-24  md:p-8 shadow-input bg-white dark:bg-black">
      <h2 className="font-bold text-xl text-neutral-800 dark:text-neutral-200 text-center">
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
            <Input name="firstname" value={firstname} onChange={(e)=>setFirstname(e.target.value)} id="firstname" type="text" />
          </LabelInputContainer>
          <LabelInputContainer>
            <Label htmlFor="lastname">Last name</Label>
            <Input name="lastname" id="lastname" type="text" />
          </LabelInputContainer>
        </div>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="email">Email Address</Label>
          <Input name="email" value={email} onChange={(e)=>setEmail(e.target.value)}  id="email" placeholder="ticketascendio@gmail.com" type="email" />
        </LabelInputContainer>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="mobnum">Mobile No. (Preferebly Whatsapp) </Label>
          <Input name="mobnum" value={phone} onChange={(e)=>setPhone(e.target.value)}  id="mobnum" type="text" />
        </LabelInputContainer>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="clgname">College name</Label>
          <Input name="clgname" id="clgname" type="text" />
        </LabelInputContainer>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="ieeeid">IEEE ID</Label>
          <Input name="ieeeid" id="ieeeid" type="number" />
        </LabelInputContainer>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="wrksp">Workshop Preference</Label>
          <Input name="wrksp" id="wrksp" placeholder="dropdown 2 item" type="text" />
        </LabelInputContainer>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="food">Food Preference</Label>
          <Input name="food" id="food" type="text" placeholder="dropdown 2 item vegnonveg"/>
        </LabelInputContainer>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="tshirt">T-Shirt Size</Label>
          <Input name="tshirt" id="tshirt" type="text" placeholder="dropdown 4 item sm md lg xl xxl" />
        </LabelInputContainer>

        <button
          className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
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
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
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
