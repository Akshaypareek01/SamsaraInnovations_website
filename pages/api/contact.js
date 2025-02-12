import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "akshay96102@gmail.com", // Your Gmail address
    pass: "omno ouxe crch hora",   // Your Gmail password
  },
});

export default async (req, res) => {
  const { name, email, number, subject, text } = req.body;

  const data = {
    to: "Info.samsarainnovations@gmail.com", // Recipient's email address
    from: email, // Sender's email (from the form submission)
    subject: subject, // Subject of the email
    text: text, // Plain text message
    html: `
        <b>From:</b> ${name} <br /> 
        <b>Number:</b> ${number} <br /> 
        <b>Subject:</b> ${subject} <br /> 
        <b>Message:</b> ${text} 
    `, // HTML message
  };

  try {
    const response = await transporter.sendMail(data);
    console.log(response);
    res.status(200).send("Email sent successfully");
  } catch (error) {
    console.log(error);
    res.status(500).send("Error processing charge");
  }
};
