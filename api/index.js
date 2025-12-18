// index.js
import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import authRoutes from "./routes/auth.js";
import cors from "cors";

// โหลด .env ก่อน
dotenv.config();

// เชื่อม MongoDB
connectDB();

// สร้าง express app
const app = express();

// CORS ต้องมาก่อน routes
app.use(cors({
  origin: "http://localhost:3000",
  credentials: true,
}));

// ให้ express อ่าน JSON
app.use(express.json());

// Routes
app.use("/api/auth", authRoutes);

// Start server
app.listen(5000, () => console.log("Server running on port 5000"));
