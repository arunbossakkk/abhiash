import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// ✅ Connect MongoDB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("✅ MongoDB connected"))
.catch(err => console.error("❌ MongoDB error:", err));

// ✅ Contact Route
app.post("/api/contact", async (req, res) => {
  try {
    const { name, email, mobile, message } = req.body;

    if (!name || !email || !mobile || !message) {
      return res.status(400).json({ error: "All fields are required" });
    }

    console.log("📩 New contact message:", { name, email, mobile, message });

    // Optionally save to DB here
    res.status(200).json({ success: true, message: "Message received!" });
  } catch (err) {
    console.error("❌ Error in contact route:", err);
    res.status(500).json({ error: "Server error" });
  }
});

// ✅ Root route (for testing)
app.get("/", (req, res) => {
  res.send("✅ FinAX backend is running!");
});

const PORT = process.env.PORT || 10000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
