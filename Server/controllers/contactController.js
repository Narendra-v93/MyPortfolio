import nodemailer from "nodemailer";
import Contact from "../models/contactModels.js";

export const sendContactEmail = async (req, res) => {
  const { name, email, message } = req.body;

  try {
    // 1️⃣ Save to MongoDB
    const newContact = new Contact({ name, email, message });
    await newContact.save();

    // 2️⃣ Send Email
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: email,
      to: process.env.EMAIL_USER,
      subject: `Portfolio Contact from ${name}`,
      text: `
Name: ${name}
Email: ${email}

Message:
${message}
      `,
    });

    res.status(200).json({ message: "Message saved & Email sent" });

  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Something went wrong" });
  }
};