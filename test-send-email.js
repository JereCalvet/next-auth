const nodemailer = require("nodemailer");

// Create a transporter
const transporter = nodemailer.createTransport({
  //host: "localhost",
  //port: 1025,
  //secure: false,
  //tls: {
  //  rejectUnauthorized: false,
  //},
});

// Define the email options
const mailOptions = {
  from: "onboarding@resend.dev",
  to: "jere_calvet@hotmail.com",
  subject: "Hello from Nodemailer",
  text: "This is a test email sent using Nodemailer",
};

// Send the email
async function sendMail(mailOptions) {
  try {
    const info = await transporter.sendMail(mailOptions);
    console.log("Email sent:", info.response);
  } catch (error) {
    console.log("Error:", error);
  }
}

sendMail(mailOptions);
