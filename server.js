const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");
require("dotenv").config(); // Load environment variables from .env file

const app = express();
const PORT = process.env.PORT || 3001; // Use Render's PORT environment variable

// Middleware for CORS - Adjust as needed for production
app.use(cors({
    origin: 'https://vinuthnanuthakki18.github.io',  // Allow only your frontend domain
    methods: 'GET,POST',                             // Allowed methods
    allowedHeaders: 'Content-Type',                  // Allowed headers
}));
app.options("/send-message", cors());

app.use(express.json()); // Built-in JSON parser for Express

// Route to handle form submission
app.post("/send-message", async (req, res) => {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
        return res.status(400).json({ success: false, message: "All fields are required." });
    }

    try {
        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.EMAIL_USER, 
                pass: process.env.EMAIL_PASS,
            },
        });

        await transporter.sendMail({
            from: `"${name}" <${email}>`,
            to: process.env.EMAIL_USER,
            subject: `New Contact Form Submission from ${name}`,
            text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
        });

        res.status(200).json({ success: true, message: "Message sent successfully!" });
    } catch (error) {
        console.error("Error sending email:", error);
        res.status(500).json({ success: false, message: "Failed to send the message." });
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Backend server is running at http://localhost:${PORT}`);
});
