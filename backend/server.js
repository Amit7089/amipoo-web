
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import inquiryRoutes from "./routes/inquiryRoutes.js";
import adminRoutes from "./routes/adminRoutes.js";

dotenv.config();

const app = express();

// Middleware
app.use(cors({
  origin: "http://localhost:5173",
}));
app.use(express.json());

// Database connection
connectDB();

// Health check
app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "AMIPOO Web API is running!",
  });
});

// Inquiry API
app.use("/api/inquiries", inquiryRoutes);

app.use("/api/admin", adminRoutes);

// Server
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
