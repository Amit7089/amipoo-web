
import Inquiry from "../models/Inquiry.js";

export const createInquiry = async (req, res) => {
  try {
    const { name, email, phone, service, budget, message } = req.body;

    if (!name || !email || !phone || !service || !message) {
      return res.status(400).json({
        success: false,
        message: "Please fill all required fields.",
      });
    }

    const inquiry = await Inquiry.create({
      name,
      email,
      phone,
      service,
      budget,
      message,
    });

    return res.status(201).json({
      success: true,
      message: "Your inquiry has been submitted successfully!",
      inquiry,
    });
  } catch (error) {
    console.error("Inquiry Error:", error.message);

    return res.status(500).json({
      success: false,
      message: "Something went wrong. Please try again.",
    });
  }
};
