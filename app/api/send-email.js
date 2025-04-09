import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { data, error } = await resend.emails.send({
      from: 'sapool@bk.ru',
      to: 'sapool@bk.ru',
      subject: `New message from ${req.body.name}`,
      text: `
        From: ${req.body.name}
        Email: ${req.body.details}
        
        Message:
        ${req.body.message}
      `,
    });

    if (error) throw error;

    return res.status(200).json({ message: 'Email sent successfully' });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}