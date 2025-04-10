
import { NextResponse } from 'next/server';
import EmailTemplate from './../../components/emailTemplate/EmailTemplate';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);


export async function POST(request: Request) {
  if (!process.env.EMAIL_USER) {
    throw new Error('EMAIL_USER environment variable is not set');
  }

  if (request.method !== 'POST') {
    return NextResponse.json(
      { error: 'Method not allowed' },
      { status: 405 }
    );
  }

  try {
    const formData = await request.json();
    const { data, error } = await resend.emails.send({
      from: 'Acme <onboarding@resend.dev>',
      to: [process.env.EMAIL_USER],
      subject: formData.subject || 'New Letter!',
      react: EmailTemplate({
        sendersName: formData.sendersName || '',
        sendersMail: formData.sendersMail || '',
        sendersText: formData.sendersText || '',

      }),
    });

    if (error) {
      throw error;
    }

    return Response.json(data);
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}



