import projectModel from "../models/projectModel.js";


export const getAllProjectsPublic = async (req, res) => {
  try {
    const projects = await projectModel.find({});
    res.json({ success: true, projects });
  } catch (error) {
    console.error("Error fetching public projects:", error.message);
    res.status(500).json({ success: false, message: "Server error" });
  }
};
