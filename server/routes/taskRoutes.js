import express from "express";
import {
  createSubTask,
  createTask,
  dashboardStatistics,
  deleteRestoreTask,
  getTask,
  getTasks,
  getTrashedTasks,
  markSubtaskDone,
  postTaskActivity,
  trashTask,
  updateSubTask,
  updateTask,
  updateTaskStage,
} from "../controllers/taskController.js";
import { isAdminRoute, protectRoute } from "../middlewares/authMiddleware.js";

const router = express.Router();

router.get("/dashboard", protectRoute, dashboardStatistics);
router.get("/", protectRoute, getTasks);
router.get("/trash-tasks", protectRoute, getTrashedTasks);
router.get("/:id", protectRoute, getTask);

router.post("/create", protectRoute, createTask);
router.post("/activity/:id", protectRoute, postTaskActivity);

router.put("/create-subtask/:id", protectRoute, isAdminRoute, createSubTask);
router.put("/update/:id", protectRoute, isAdminRoute, updateTask);
router.put("/:id/stage", updateTaskStage);
router.put("/update-subtask/:id", protectRoute, updateSubTask);

router.patch("/subtask/done", protectRoute, markSubtaskDone);
router.patch("/:id", protectRoute, isAdminRoute, trashTask); // *

router.delete("/delete-restore/:id?", protectRoute, deleteRestoreTask); // *

export default router;
