// import Blog from "../models/blogModel.js";
// import Category from "../models/categoryModel.js";
// import { v2 as cloudinary } from "cloudinary";

// // ✅ Add new blog
// export const addBlog = async (req, res) => {
//   try {
//     const { title, subTitle, description, category, newCategory, isPublished } = req.body;
//     const imageFile = req.file;

//     // 🟡 Determine category ID
//     let categoryId;
//     if (newCategory) {
//       const existing = await Category.findOne({ name: newCategory });
//       if (existing) categoryId = existing._id;
//       else {
//         const newCat = new Category({ name: newCategory });
//         await newCat.save();
//         categoryId = newCat._id;
//       }
//     } else if (category) {
//       const existingCat = await Category.findOne({ name: category });
//       if (!existingCat) {
//         return res.status(400).json({ success: false, message: "Invalid category" });
//       }
//       categoryId = existingCat._id;
//     } else {
//       return res.status(400).json({ success: false, message: "Category required" });
//     }

//     // 🟡 Upload image (optional)
//     let imageUrl = "";
//     if (imageFile) {
//       const uploaded = await cloudinary.uploader.upload(imageFile.path, {
//         resource_type: "image",
//       });
//       imageUrl = uploaded.secure_url;
//     }

//     // ✅ Create blog
//     const newBlog = new Blog({
//       title,
//       subTitle,
//       description,
//       category: categoryId,
//       image: imageUrl,
//       isPublished,
//     });

//     await newBlog.save();

//     res.status(201).json({ success: true, message: "Blog added", data: newBlog });
//   } catch (err) {
//     console.error("Error adding blog:", err);
//     res.status(500).json({ success: false, message: "Server error" });
//   }
// };

// // ✅ Get all blogs (populate category)
// export const getBlogs = async (req, res) => {
//   try {
//     const blogs = await Blog.find().populate("category");
//     res.json({ success: true, data: blogs });
//   } catch (err) {
//     console.error("Error fetching blogs:", err);
//     res.status(500).json({ success: false, message: "Server error" });
//   }
// };

// // ✅ Delete a blog (admin)
// export const deleteBlog = async (req, res) => {
//   try {
//     const { id } = req.params;

//     const blog = await Blog.findById(id);
//     if (!blog) {
//       return res.status(404).json({ success: false, message: "Blog not found" });
//     }

//     // 🧹 Delete image from Cloudinary if available
//     if (blog.image) {
//       // Try to extract public_id from the image URL
//       const parts = blog.image.split("/");
//       const filename = parts[parts.length - 1];
//       const publicId = filename.split(".")[0];
//       try {
//         await cloudinary.uploader.destroy(publicId);
//       } catch (err) {
//         console.warn("Cloudinary delete failed:", err.message);
//       }
//     }

//     await Blog.findByIdAndDelete(id);

//     res.json({ success: true, message: "Blog deleted successfully" });
//   } catch (err) {
//     console.error("Error deleting blog:", err);
//     res.status(500).json({ success: false, message: "Server error" });
//   }
// };

// upore thik ase


import Blog from "../models/blogModel.js";
import Category from "../models/categoryModel.js";
import { v2 as cloudinary } from "cloudinary";
import streamifier from "streamifier";

// ✅ Add new blog
export const addBlog = async (req, res) => {
  try {
    const { title, subTitle, description, category, newCategory, isPublished } = req.body;
    const imageFile = req.file;

    // 🟡 Determine category ID
    let categoryId;
    if (newCategory) {
      const existing = await Category.findOne({ name: newCategory });
      if (existing) categoryId = existing._id;
      else {
        const newCat = new Category({ name: newCategory });
        await newCat.save();
        categoryId = newCat._id;
      }
    } else if (category) {
      const existingCat = await Category.findOne({ name: category });
      if (!existingCat) {
        return res.status(400).json({ success: false, message: "Invalid category" });
      }
      categoryId = existingCat._id;
    } else {
      return res.status(400).json({ success: false, message: "Category required" });
    }

    // 🟡 Upload image to Cloudinary (memory buffer)
    let imageUrl = "";
    if (imageFile) {
      const streamUpload = (fileBuffer) => {
        return new Promise((resolve, reject) => {
          const stream = cloudinary.uploader.upload_stream(
            { resource_type: "image" },
            (error, result) => {
              if (result) resolve(result);
              else reject(error);
            }
          );
          streamifier.createReadStream(fileBuffer).pipe(stream);
        });
        
      };

      const result = await streamUpload(imageFile.buffer);
      imageUrl = result.secure_url;
    }

    // ✅ Create blog
    const newBlog = new Blog({
      title,
      subTitle,
      description,
      category: categoryId,
      image: imageUrl,
      isPublished,
    });

    await newBlog.save();
    res.status(201).json({ success: true, message: "Blog added", data: newBlog });
  } catch (err) {
    console.error("Error adding blog:", err);
    res.status(500).json({ success: false, message: "Server error" });
  }
};

// ✅ Get all blogs (populate category)
export const getBlogs = async (req, res) => {
  try {
    const blogs = await Blog.find().populate("category");
    res.json({ success: true, data: blogs });
  } catch (err) {
    console.error("Error fetching blogs:", err);
    res.status(500).json({ success: false, message: "Server error" });
  }
};

// ✅ Delete a blog (admin)
export const deleteBlog = async (req, res) => {
  try {
    const { id } = req.params;

    const blog = await Blog.findById(id);
    if (!blog) return res.status(404).json({ success: false, message: "Blog not found" });

    // 🧹 Delete image from Cloudinary if exists
    if (blog.image) {
      const parts = blog.image.split("/");
      const filename = parts[parts.length - 1];
      const publicId = filename.split(".")[0];

      try {
        await cloudinary.uploader.destroy(publicId);
      } catch (err) {
        console.warn("Cloudinary delete failed:", err.message);
      }
    }

    await Blog.findByIdAndDelete(id);
    res.json({ success: true, message: "Blog deleted successfully" });
  } catch (err) {
    console.error("Error deleting blog:", err);
    res.status(500).json({ success: false, message: "Server error" });
  }
};

