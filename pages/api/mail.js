import sendgrid from '@sendgrid/mail';

sendgrid.setApiKey(process.env.SENDGRID_API_KEY);

export default async function handler(req, res) {
  const { name, email, message } = req.body;

  try {
    await sendgrid.send({
      to: 'cesarcorregiari@gmail.com',
      from: email,
      subject: `Nova mensagem de ${name}`,
      text: message,
    });

    return res.status(200).json({ msg: 'Message sent successfully.' });
  } catch (error) {
    return res.status(error.statusCode || 500).json({ error: error.message });
  }
}
