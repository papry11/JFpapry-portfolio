import mongoose from "mongoose";

const blogSchema = new mongoose.Schema({
  title: { type: String, required: true },
  subTitle: String,
  description: String,
  category: { type: mongoose.Schema.Types.ObjectId, ref: "Category", required: true },
  image: String,
  isPublished: { type: Boolean, default: false },
}, { timestamps: true });

export default mongoose.model("Blog", blogSchema);
