import { Router } from "express";

const router = Router();

// Simple login endpoint for demo
router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  // Simple validation for demo purposes
  if (email === "admin@khamsanoon.com" && password === "admin123") {
    const user = {
      id: 1,
      email: "admin@khamsanoon.com",
      name: "المدير",
      role: "admin",
    };

    // Set session cookie
    req.session = req.session || {};
    req.session.user = user;

    res.json({
      success: true,
      user,
    });
  } else {
    res.status(401).json({
      success: false,
      message: "البريد الإلكتروني أو كلمة المرور غير صحيحة",
    });
  }
});

// Logout endpoint
router.post("/logout", (req, res) => {
  req.session = null;
  res.json({ success: true });
});

// Get current user
router.get("/me", (req, res) => {
  if (req.session?.user) {
    res.json({
      success: true,
      user: req.session.user,
    });
  } else {
    res.status(401).json({
      success: false,
      message: "غير مسجل الدخول",
    });
  }
});

export default router;
