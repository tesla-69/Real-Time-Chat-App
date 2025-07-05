import express from "express";
import { checkAuth, login, logout, signup, updateProfile } from "../controllers/auth.controller.js";
import { protectRoute } from "../middleware/auth.middleware.js";
import passport from "../lib/passport.js";

const router = express.Router();


router.post("/signup", signup);
router.post("/login", login);
router.post("/logout", logout);

router.put("/update-profile", protectRoute, updateProfile);

router.get("/check", protectRoute, checkAuth);
router.get("/google", passport.authenticate("google", { scope: ["profile", "email"] }));

router.get(
  "/google/callback",
  passport.authenticate("google", { failureRedirect: "/login", session: false }),
  async (req, res) => {
    const { generateToken } = await import("../lib/utils.js");
    generateToken(req.user._id, res);
    res.redirect(process.env.CLIENT_URL || "http://localhost:5173");
  }
);


export default router;
