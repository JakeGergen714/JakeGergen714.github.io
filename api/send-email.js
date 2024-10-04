// api/send-email.js
import emailjs from 'emailjs-com';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { email } = req.body;

    try {
      const response = await emailjs.send(
        process.env.EMAILJS_SERVICE_ID, // Your EmailJS service ID
        process.env.EMAILJS_TEMPLATE_ID, // Your EmailJS template ID
        { user_email: email }, // Data to be sent in the email
        process.env.EMAILJS_PRIVATE_KEY // Use the private key for sending
      );

      res.status(200).json({ message: 'Email sent successfully' });
    } catch (error) {
      console.error('Email send error:', error);
      res.status(500).json({ error: 'Failed to send email' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
