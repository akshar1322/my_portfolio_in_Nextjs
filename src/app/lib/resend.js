
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);
const fromEmail = process.env.FROM_EMAIL;

export async function sendEmail({ email, subject, message }) {
  const htmlContent = `
    <html>
      <body>
        <h1>${subject}</h1>
        <p>Thank you for contacting us!</p>
        <p>New message submitted:</p>
        <p>${message}</p>
      </body>
    </html>
  `;

  const data = await resend.emails.send({
    from: fromEmail,
    to: [fromEmail, email],
    subject: subject,
    html: htmlContent,
  });

  return data;
}
