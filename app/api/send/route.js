import {EmailTemplate} from '../../../components/email-template';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
  const { amount, formData, ticketId, email } = await request.json();
  try {
    console.log("mail",email);
    const data = await resend.emails.send({
      from: 'hello@ascendio.sset.co.in',
      to: [formData.email],
      subject: 'Confirmation: IEEE Ascendio 6.0 Ticket Purchase',
      react: EmailTemplate({ formData, amount, ticketId }),
    });
    console.log(data);
    return Response.json(data);
  } catch (error) {
    console.log(error);
    return Response.json({ error });
  }
}