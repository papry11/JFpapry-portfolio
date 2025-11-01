import mongoose from "mongoose";

const projectSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    category: { type: String, required: true },
    highlight: { type: String, required: true },
    description: { type: String, required: true },
    image: { type: String, required: true },
    techStack: [{ type: String, required: true }],
    liveUrl: { type: String, required: true },
    sourceUrl: { type: String },
  },
  { timestamps: true }
);

const projectModel = mongoose.models.project || mongoose.model("project", projectSchema);

export default projectModel;
