import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();

const app = express();

// ✅ Allow frontend access (important for Vercel)
app.use(
  cors({
    origin: [
      "http://localhost:5173", // local frontend
      "https://your-vercel-app.vercel.app" // <-- replace with your actual Vercel URL
    ],
    methods: ["GET", "POST"],
  })
);

app.use(express.json());

// ✅ Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB connected"))
  .catch((err) => console.error("❌ MongoDB error:", err));

// ✅ Schema & Model
const contactSchema = new mongoose.Schema(
  { name: String, email: String, mobile: String, message: String },
  { timestamps: true }
);
const Contact = mongoose.model("Contact", contactSchema);

// ✅ POST API
app.post("/api/contact", async (req, res) => {
  try {
    const { name, email, mobile, message } = req.body;
    const newMessage = new Contact({ name, email, mobile, message });
    await newMessage.save();
    console.log("✅ Message saved:", newMessage);
    res.status(200).json({ success: true, message: "Message sent successfully!" });
  } catch (err) {
    console.error("❌ Server error:", err);
    res.status(500).json({ error: "Server error" });
  }
});

// ✅ Root route for Render health check
app.get("/", (req, res) => {
  res.send("✅ FinAX backend is running!");
});

const PORT = process.env.PORT || 10000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
