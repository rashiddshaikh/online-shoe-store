import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

async function sendEmail() {
  // Async function enables allows handling of promises with await

  // First, define send settings by creating a new transporter:
  let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com", // SMTP server address (usually mail.your-domain.com)
    port: 465, // Port for SMTP (usually 465)
    secure: true, // Usually true if connecting to port 465
    auth: {
      user: process.env.SUPER_EMAIL, // Your email address
      pass: process.env.SUPER_PWD, // Password (for gmail, your app password)
      // ⚠️ For better security, use environment variables set on the server for these values when deploying
    },
  });

  // Define and send message inside transporter.sendEmail() and await info about send from promise:
  let info = await transporter.sendMail({
    from: process.env.SUPER_EMAIL,
    to: "alsudaisansari@gmail.com",
    subject: "Testing, testing, 123",
    html: `
        <h1>Your product is ordered succesfully</h1>
        <p>Thank you for shopping, visit again</p>
        `,
  });

  console.log(info.messageId); // Random ID generated after successful send (optional)
}

export default sendEmail;
