// import express from "express";
// import multer from "multer";
// import { addBlog, getBlogs, deleteBlog } from "../controllers/blogController.js";

// const router = express.Router();

// // Use memory storage instead of disk storage
// const storage = multer.memoryStorage();
// const upload = multer({ storage });

// // POST blog (with image)
// router.post("/", upload.single("image"), addBlog);

// // GET all blogs
// router.get("/", getBlogs);

// // DELETE blog by ID (admin)
// router.delete("/:id", deleteBlog);

// export default router;


// upore thik ase

import express from "express";
import multer from "multer";
import { addBlog, getBlogs, deleteBlog } from "../controllers/blogController.js";

const router = express.Router();

// ✅ Use memory storage (no disk writes)
const storage = multer.memoryStorage();
const upload = multer({ storage });

// POST a new blog with optional image
router.post("/", upload.single("image"), addBlog);

// GET all blogs (populate category)
router.get("/", getBlogs);

// DELETE a blog by ID
router.delete("/:id", deleteBlog);

export default router;
