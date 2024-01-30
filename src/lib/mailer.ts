import { createTransport, type TransportOptions } from "nodemailer";
import { EMAIL_SENDER } from "@/src/lib/constants";

const smtpConfig = process.env.NODE_ENV !== "production" ? {
  host: process.env.SMTP_HOST,
  port: process.env.SMTP_PORT,
  secure: false,
    tls: {
      rejectUnauthorized: false,
    },
} : {
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    secure: true,
    auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD,
    },
};

const transporter = createTransport(smtpConfig as TransportOptions);

export type MessageInfo = {
  from?: string;
  to: string;
  subject: string;
  text?: string; // Email Text body (fallback for email clients that don't render HTML)
  body: string;
};

export const sendMail = async (message: MessageInfo) => {
  const { from, to, subject, text, body } = message;
  const mailOptions = {
    from: from ?? EMAIL_SENDER,
    to,
    subject,
    text: text,
    html: body,
  };
  return transporter.sendMail(mailOptions);
};


/* TODO: trycatch logger
ej 1:
const result = await transport.sendMail({
    to: identifier,
    from: provider.from,
    subject: `Sign in to ${host}`,
    text: text({ url, host }),
    html: signInEmailHtml,
  })
  const failed = result.rejected.concat(result.pending).filter(Boolean)
  if (failed.length) {
    throw new Error(`Email(s) (${failed.join(", ")}) could not be sent`)
  }
-----
ej 2:
async function sendMail(mailOptions) {
  try {
    const info = await transporter.sendMail(mailOptions);
    console.log("Email sent:", info.response);
  } catch (error) {
    console.log("Error:", error);
  }
}

sendMail(mailOptions);
*/