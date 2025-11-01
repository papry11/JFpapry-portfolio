import express from "express";
import upload from "../middlewares/multer.js";
import {
  addProject,
  getRecentProjects,
  loginAdmin,
  getAllProjects,
  deleteProject,
} from "../controllers/adminController.js";
import { authAdmin } from "../middlewares/authAdmin.js";

const adminRouter = express.Router();

// Admin Authentication Routes
adminRouter.post("/login", loginAdmin);

// Project Routes
adminRouter.post("/add-project", authAdmin, upload.single("image"), addProject);
adminRouter.get("/recent-projects", authAdmin, getRecentProjects);

// ✅ New routes for all projects
adminRouter.get("/all-projects", authAdmin, getAllProjects);
adminRouter.delete("/delete-project/:id", authAdmin, deleteProject);

export default adminRouter;
