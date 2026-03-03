// backend/server.js

const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");

const app = express();

// middlewares
app.use(cors());
app.use(express.json()); // JSON body read करण्यासाठी

// POST API - /send-mail
app.post("/send-mail", async (req, res) => {
  const { name, email, message } = req.body;

  try {
    // Gmail transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "bhoslevaibhav58@gmail.com",      // इथे तुझं Gmail टाक
        pass: "cfpp cmlc vsrw bjwm" // इथे App Password टाक
      },
    });

    // mail details
    const mailOptions = {
      from: email,                        // form मधून येणारा email
      to: "YOUR_GMAIL@gmail.com",         // ज्या mail वर receive करायचा
      subject: "New contact form message",
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
    };

    // mail पाठवणे
    await transporter.sendMail(mailOptions);

    res.json({ success: true, msg: "Mail sent successfully" });
  } catch (error) {
    console.error("Error sending mail:", error);
    res.status(500).json({ success: false, msg: "Mail failed" });
  }
});

// server run
app.listen(5000, () => {
  console.log("Backend server running on http://localhost:5000");
});
