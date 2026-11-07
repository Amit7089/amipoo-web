
import Admin from "../models/Admin.js";
import Inquiry from "../models/Inquiry.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import mongoose from "mongoose";

// Admin Login
export const adminLogin = async (req, res) => {
  try {
    const { username, password } = req.body;

    if (!username || !password) {
      return res.status(400).json({
        success: false,
        message: "Username and password are required.",
      });
    }

    const admin = await Admin.findOne({ username });

    if (!admin) {
      return res.status(401).json({
        success: false,
        message: "Invalid username or password.",
      });
    }

    const isMatch = await bcrypt.compare(password, admin.password);

    if (!isMatch) {
      return res.status(401).json({
        success: false,
        message: "Invalid username or password.",
      });
    }

    const token = jwt.sign(
      { id: admin._id, role: "admin" },
      process.env.JWT_SECRET,
      { expiresIn: "1d" }
    );

    return res.json({
      success: true,
      message: "Login successful.",
      token,
      admin: {
        id: admin._id,
        username: admin.username,
      },
    });
  } catch (error) {
    console.error("Admin login error:", error.message);

    return res.status(500).json({
      success: false,
      message: "Server error during login.",
    });
  }
};

// Get Dashboard Statistics
export const getDashboardStats = async (req, res) => {
  try {
    const [total, newInquiries, contacted, completed] =
      await Promise.all([
        Inquiry.countDocuments(),
        Inquiry.countDocuments({ status: "New" }),
        Inquiry.countDocuments({ status: "Contacted" }),
        Inquiry.countDocuments({ status: "Completed" }),
      ]);

    return res.json({
      success: true,
      stats: {
        total,
        new: newInquiries,
        contacted,
        completed,
      },
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Unable to fetch dashboard statistics.",
    });
  }
};

// Get All Inquiries
export const getAllInquiries = async (req, res) => {
  try {
    const { status } = req.query;

    const filter = {};

    if (status && ["New", "Contacted", "Completed"].includes(status)) {
      filter.status = status;
    }

    const inquiries = await Inquiry.find(filter)
      .sort({ createdAt: -1 })
      .lean();

    return res.json({
      success: true,
      count: inquiries.length,
      inquiries,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Unable to fetch inquiries.",
    });
  }
};

// Update Inquiry Status
export const updateInquiryStatus = async (req, res) => {
  try {
    const { status } = req.body;
    const { id } = req.params;

    if (!mongoose.isValidObjectId(id)) {
      return res.status(400).json({
        success: false,
        message: "Invalid inquiry ID.",
      });
    }

    if (!["New", "Contacted", "Completed"].includes(status)) {
      return res.status(400).json({
        success: false,
        message: "Invalid inquiry status.",
      });
    }

    const inquiry = await Inquiry.findByIdAndUpdate(
      id,
      { status },
      { new: true, runValidators: true }
    );

    if (!inquiry) {
      return res.status(404).json({
        success: false,
        message: "Inquiry not found.",
      });
    }

    return res.json({
      success: true,
      message: "Inquiry status updated successfully.",
      inquiry,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Unable to update inquiry.",
    });
  }
};

// Delete Inquiry
export const deleteInquiry = async (req, res) => {
  try {
    const { id } = req.params;

    if (!mongoose.isValidObjectId(id)) {
      return res.status(400).json({
        success: false,
        message: "Invalid inquiry ID.",
      });
    }

    const inquiry = await Inquiry.findByIdAndDelete(id);

    if (!inquiry) {
      return res.status(404).json({
        success: false,
        message: "Inquiry not found.",
      });
    }

    return res.json({
      success: true,
      message: "Inquiry deleted successfully.",
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Unable to delete inquiry.",
    });
  }
};
