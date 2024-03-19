import { EmailTemplate } from '../../../components/email-template';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
  const { email,firstname,amount,formData } = await request.json();
  try {
    const data = await resend.emails.send({
      from: 'hello@ascendio.sset.co.in',
      to: [email],
      subject: 'Ascendio 6.0',
      react: EmailTemplate({ firstname, amount }),
    });

    return Response.json(data);
  } catch (error) {
    return Response.json({ error });
  }
}