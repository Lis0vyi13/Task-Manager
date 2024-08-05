import express from "express";
import { isAdminRoute, protectRoute } from "../middlewares/authMiddleware.js";
import {
  changeUserPassword,
  deleteUserProfile,
  getNotificationsList,
  getTeamList,
  getUser,
  getUserById,
  loginUser,
  logoutUser,
  markNotificationRead,
  registerUser,
  sendNotification,
  updateUserProfile,
} from "../controllers/userController.js";

const router = express.Router();

router.get("/get-team", protectRoute, getTeamList);
router.get("/notifications", protectRoute, getNotificationsList);
router.get("/profile", protectRoute, getUser);

router.post("/register", registerUser);
router.post("/login", loginUser);
router.post("/logout", logoutUser);
router.post("/send-notification", sendNotification);

router.put("/read-notification", protectRoute, markNotificationRead);
router.put("/change-password", protectRoute, changeUserPassword);

router.patch("/profile", protectRoute, updateUserProfile);

// FOR ADMIN ONLY - ADMIN ROUTES
router.route("/:id").get(getUserById).delete(protectRoute, isAdminRoute, deleteUserProfile);

export default router;
