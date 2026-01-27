const express = require("express");
const cors = require("cors");
const Nodemailer = require("nodemailer");
const { MailtrapTransport } = require("mailtrap");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "https://my-portfolio-2-2wqp.onrender.com",
    ],
    methods: ["GET", "POST", "OPTIONS"],
    credentials: true,
  }),
);

app.options("*", cors());
app.use(express.json());

app.post("/api/contact", async (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: "All fields are required" });
  }

  try {
    const transporter = Nodemailer.createTransport(
      MailtrapTransport({
        token: process.env.MAILTRAP_TOKEN,
      }),
    );

    await transporter.sendMail({
      from: {
        address: "hello@demomailtrap.co",
        name: "Portfolio Contact",
      },
      to: process.env.EMAIL_TO,
      subject: `New message from ${name}`,
      html: `
        <h2>New Contact Message</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    });

    console.log("Email sent successfully");
    return res.status(200).json({ success: true, message: "Email sent" });
  } catch (error) {
    console.error("Email error:", error.message);
    console.error("Full error:", JSON.stringify(error, null, 2));
    return res.status(500).json({ error: "Failed to send email" });
  }
});

app.get("/", (req, res) => {
  res.send("Backend is running");
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
