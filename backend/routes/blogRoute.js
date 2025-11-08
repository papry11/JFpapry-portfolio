import express from "express";
import multer from "multer";
import { addBlog, getBlogs, deleteBlog } from "../controllers/blogController.js";

const router = express.Router();
const upload = multer({ dest: "uploads/" });

// POST blog (with image)
router.post("/", upload.single("image"), addBlog);

// GET all blogs
router.get("/", getBlogs);

// DELETE blog by ID (admin)
router.delete("/:id", deleteBlog);

export default router;
