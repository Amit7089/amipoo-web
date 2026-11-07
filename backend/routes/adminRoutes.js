
import express from "express";

import {
  adminLogin,
  getDashboardStats,
  getAllInquiries,
  updateInquiryStatus,
  deleteInquiry,
} from "../controllers/adminController.js";

import { protectAdmin } from "../middleware/authMiddleware.js";

const router = express.Router();

// Public login route
router.post("/login", adminLogin);

// Protected admin routes
router.get("/dashboard", protectAdmin, getDashboardStats);
router.get("/inquiries", protectAdmin, getAllInquiries);
router.patch("/inquiries/:id", protectAdmin, updateInquiryStatus);
router.delete("/inquiries/:id", protectAdmin, deleteInquiry);

export default router;
