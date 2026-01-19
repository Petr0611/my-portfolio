const express = require("express");
const cors = require("cors");
const { error } = require("node:console");
const nodemailer = require("nodemailer");

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

app.post("/api/contact", async (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: "All fields are required" });
  }
  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: { user: "ciolacpp@gmail.com", pass: "vosh rxal rehi xpiz" },
    });
    await transporter.sendMail({
      from: `"Portfolio Contact" <ciolacpp@gmail.com>`,
      to: "ciolacpp@gmail.com",
      subject: `New message from ${name}`,
      html: ` <h2>New Contact Message</h2>
       <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
         <p><strong>Message:</strong></p>
          <p>${message}</p> `,
    });
    return res.status(200).json({ success: true, message: "Email sent" });
  } catch (error) {
    console.error("Email error:", error);
    return res.status(500).json({ error: "Failed to send email" });
  }
});

app.get("/", (req, res) => {
  res.send("Backend is running");
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
