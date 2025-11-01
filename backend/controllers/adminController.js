import projectModel from "../models/projectModel.js";
import { v2 as cloudinary } from 'cloudinary'
import jwt from 'jsonwebtoken'



// API for add project-----------

export const addProject = async (req, res) => {

  try {

    const { title, category, highlight, description, techStack, liveUrl, sourceUrl } = req.body;
    const imageFile = req.file; // multer gives the uploaded file here

    //  Validation
    if (!title || !category || !highlight || !description || !imageFile || !techStack || !liveUrl || !sourceUrl) {
      return res.status(400).json({ success: false, message: "All fields are required" });
    }

   //  Upload image to Cloudinary
        const uploadedImage = await cloudinary.uploader.upload(imageFile.path, {
            resource_type: "image"
        });
        const imageUrl = uploadedImage.secure_url;

    //  Create new project
    const newProject = new projectModel({
      title,
      category,
      highlight,
      description,
      image: imageUrl,
      techStack: Array.isArray(techStack) ? techStack : techStack.split(","), 
      liveUrl,
      sourceUrl,
    });

    await newProject.save();

    return res.status(201).json({
      success: true,
      message: "Project added successfully",
      data: newProject,
    });
  } catch (error) {
    console.error("Error adding project:", error);
    return res.status(500).json({
      success: false,
      message: "Server error, please try again later",
    });
  }
};




// ✅ Admin Login API
export const loginAdmin = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Basic validation
    if (!email || !password) {
      return res.json({ success: false, message: "Email and password are required" });
    }

    // Check credentials
    if (
      email === process.env.ADMIN_EMAIL &&
      password === process.env.ADMIN_PASSWORD
    ) {
      // ✅ Better token payload format
      const token = jwt.sign(
        { email, role: "admin" },
        process.env.JWT_SECRET,
        { expiresIn: "7d" } // optional expiration time
      );

      return res.json({
        success: true,
        message: "Login successful",
        token,
      });
    } else {
      return res.json({
        success: false,
        message: "Invalid credentials",
      });
    }
  } catch (error) {
    console.error("Admin login error:", error);
    return res.json({
      success: false,
      message: "Server error, please try again later",
    });
  }
};

// API for recent project 
export const getRecentProjects = async (req, res) => {
  try {
    const projects = await projectModel.find().sort({ createdAt: -1 }).limit(5);
    res.status(200).json({ success: true, data: projects });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Server error" });
  }
};


// ✅ Get All Projects (for admin dashboard)
export const getAllProjects = async (req, res) => {
  try {
    const projects = await projectModel.find().sort({ createdAt: -1 });
    res.status(200).json({
      success: true,
      message: "All projects fetched successfully",
      data: projects,
    });
  } catch (error) {
    console.error("Error fetching all projects:", error);
    res.status(500).json({
      success: false,
      message: "Server error while fetching projects",
    });
  }
};

// ✅ Delete Project (by ID)
export const deleteProject = async (req, res) => {
  try {
    const { id } = req.params;

    // Check project exists
    const project = await projectModel.findById(id);
    if (!project) {
      return res.status(404).json({ success: false, message: "Project not found" });
    }

    // Optional: delete image from Cloudinary (if you stored public_id)
    // await cloudinary.uploader.destroy(project.imagePublicId);

    await projectModel.findByIdAndDelete(id);

    res.status(200).json({
      success: true,
      message: "Project deleted successfully",
    });
  } catch (error) {
    console.error("Error deleting project:", error);
    res.status(500).json({
      success: false,
      message: "Server error while deleting project",
    });
  }
};
