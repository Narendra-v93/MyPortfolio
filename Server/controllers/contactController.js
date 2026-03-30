import nodemailer from "nodemailer";
import Contact from "../models/contactModels.js";

export const sendContactEmail = async (req, res) => {
  const { name, email, message } = req.body;

  try {
    // 1️⃣ Save to MongoDB
    const newContact = new Contact({ name, email, message });
    await newContact.save();

    // ⚡ 2️⃣ Instant Response (FAST)
    res.status(200).json({ message: "Message sent successfully" });

    // 📨 3️⃣ Send Email in Background (no await)
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    transporter.sendMail({
      from: email,
      to: process.env.EMAIL_USER,
      subject: `Portfolio Contact from ${name}`,
      text: `
Name: ${name}
Email: ${email}

Message:
${message}
      `,
    }).then(() => {
      console.log("Email sent");
    }).catch((err) => {
      console.log("Email error:", err);
    });

  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Something went wrong" });
  }
};