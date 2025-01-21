const express = require("express");
const nodemailer = require("nodemailer");
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv").config(); // Load environment variables from .env file

const app = express();
const PORT = 3001; // Backend server port

// Middleware for CORS - Allow all origins for local development (flexible setup)
app.use(cors({
    origin: '*',  // Allow all origins (for local development purposes)
    methods: 'GET,POST', // Allow GET and POST methods
    allowedHeaders: 'Content-Type', // Allow Content-Type header in requests
}));

app.use(bodyParser.json()); // Parse incoming JSON requests

// Route to handle form submission
app.post("/send-message", async (req, res) => {
    const { name, email, message } = req.body;

    // Check if all required fields are provided
    if (!name || !email || !message) {
        return res.status(400).json({ success: false, message: "All fields are required." });
    }

    try {
        // Configure Nodemailer transporter using Gmail
        const transporter = nodemailer.createTransport({
            service: "gmail", // Using Gmail for email service
            auth: {
                user: process.env.EMAIL_USER, // Your Gmail address (from .env)
                pass: process.env.EMAIL_PASS, // Your Gmail app password (from .env)
            },
        });

        // Compose and send the email
        await transporter.sendMail({
            from: `"${name}" <${email}>`, // Sender's email
            to: process.env.EMAIL_USER,   // The recipient (your email address)
            subject: `New Contact Form Submission from ${name}`,
            text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
        });

        // If the email is sent successfully, respond with a success message
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
