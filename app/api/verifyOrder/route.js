import { NextResponse } from "next/server";
import razorpay from "razorpay";

const razorpayClient = new razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_KEY_SECRET,
});

export async function GET() {
  try {
    return NextResponse.json("server running", { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json("Error sending message", { status: 500 });
  }
}

export async function POST(request) {
  const { total, razorpay_payment_id, razorpay_order_id } = await request.json();
  try {
    // Fetch payment details from Razorpay
    const payment = await razorpayClient.payments.fetch(razorpay_payment_id);
    const { status, amount, currency, order_id } = payment;

    // Verify payment details
    const result =
      status === "captured" &&
      amount == total &&
      currency === "INR" &&
      order_id === razorpay_order_id;

    if (result) {
        return NextResponse.json({ message: "Payment successful", payment: true }, { status: 200 });
    } else {
        return NextResponse.json({ message: "Invalid payment", payment: false }, { status: 400 });
    }
   
  } catch (error) {
    console.error(error);
    return NextResponse.json("Error sending message", { status: 500 });
  }
}
