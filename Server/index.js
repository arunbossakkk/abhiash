import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();

const app = express();

// ✅ Allow frontend access (important for Vercel)


// Allow only your frontend domain (Vercel)
const allowedOrigins = [
  "https://finaxx.vercel.app", // your live frontend URL
  "http://localhost:5173",     // for local testing (optional)
];

app.use(
  cors({
    origin: function (origin, callback) {
      // allow requests with no origin (like mobile apps or curl)
      if (!origin) return callback(null, true);
      if (allowedOrigins.includes(origin)) {
        return callback(null, true);
      } else {
        return callback(new Error("Not allowed by CORS"));
      }
    },
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
