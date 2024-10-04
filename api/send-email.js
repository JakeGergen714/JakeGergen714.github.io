import emailjs from 'emailjs-com';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    console.log(req.body);
    const { email, phone, full_name, message } = req.body;

    try {
      const response = await emailjs.send(
        process.env.EMAILJS_SERVICE_ID,
        process.env.EMAILJS_TEMPLATE_ID,
        {
          user_email: email,
          user_phone: phone,
          user_name: full_name,
          user_message: message,
        },
        process.env.EMAILJS_PRIVATE_KEY
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
