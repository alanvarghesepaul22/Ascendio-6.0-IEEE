import { NextResponse } from "next/server";
import razorpay from 'razorpay';

const razorpayClient = new razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_KEY_SECRET,
});

export async function GET() {
  try {
    return NextResponse.json("server running", { status: 200 });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error sending message' });
  }
}

export async function POST(request) {
  const { amount } = await request.json();
  try {
    const order = await razorpayClient.orders.create({
      amount: amount * 100, // Razorpay amount is in paisa, not rupees
      currency: 'INR',
    });
    return NextResponse.json({ order }, { status: 200 });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error sending message' });
  }
}
