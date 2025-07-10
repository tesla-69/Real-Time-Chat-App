import express from "express";
import { protectRoute } from "../middleware/auth.middleware.js";
import {
  getMessages,
  getUsersForSidebar,
  sendMessage,
  deleteMessage,
} from "../controllers/message.controller.js";

const router = express.Router();

// Get all users (for sidebar)
router.get("/users", protectRoute, getUsersForSidebar);

// Get messages between logged-in user and another user
router.get("/:id", protectRoute, getMessages);

// Send message to a user
router.post("/send/:id", protectRoute, sendMessage);

// Delete a message (new route)
router.delete("/:id", protectRoute, deleteMessage);

export default router;
