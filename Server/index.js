// server.js (or index.js)
import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();

const app = express();

// Allow frontend origin(s)
app.use(cors({
  origin: ["http://localhost:8080", "http://10.222.203.217:8080"], // add other origins if needed
  methods: ["GET", "POST"],
  allowedHeaders: ["Content-Type"],
}));
app.use(express.json());

// MongoDB connect
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB connected"))
  .catch(err => console.error("❌ MongoDB connection error:", err));

// Log which DB we're using
mongoose.connection.on("open", () => {
  console.log("📘 Using database:", mongoose.connection.name);
});

// Schema & Model
const contactSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  mobile: { type: String },
  message: { type: String, required: true },
}, { timestamps: true });

const Contact = mongoose.model("Contact", contactSchema);

// Simple root route
app.get("/", (req, res) => {
  res.send("Backend server is running ✅");
});

// POST /api/contact route (fixed)
app.post("/api/contact", async (req, res) => {
  try {
    console.log("📩 Received request:", req.body);

    const { name, email, mobile, message } = req.body;
    if (!name || !email || !message) {
      return res.status(400).json({ error: "Name, Email, and Message are required" });
    }

    console.log("💾 Attempting to save to MongoDB...");
    // create the document instance
    const newMessage = new Contact({ name, email, mobile, message });

    // save and capture the result
    const savedMessage = await newMessage.save();

    // log the saved document returned by MongoDB
    console.log("✅ Message saved successfully:", savedMessage);

    // respond to client
    res.status(200).json({ success: true, message: "Message sent successfully!", data: savedMessage });
  } catch (err) {
    console.error("❌ Error while saving message:", err);
    res.status(500).json({ error: "Server error", details: err.message });
  }
});

// Start server (use a port that is free on your machine)
const PORT = process.env.PORT || 5050;
app.listen(PORT, () => console.log(`🚀 Server running on http://localhost:${PORT}`));
