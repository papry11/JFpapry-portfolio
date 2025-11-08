import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddBlog = () => {
  const navigate = useNavigate();
  const backendUrl = import.meta.env.VITE_BACKEND_URL;

  const [title, setTitle] = useState("");
  const [subTitle, setSubTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [newCategory, setNewCategory] = useState("");
  const [categories, setCategories] = useState([]);
  const [image, setImage] = useState(null);
  const [isPublished, setIsPublished] = useState(true);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await axios.get(`${backendUrl}/api/categories`);
        setCategories(res.data);
      } catch (err) {
        console.error("Failed to fetch categories:", err);
      }
    };
    fetchCategories();
  }, [backendUrl]);

  const handleImageChange = (e) => setImage(e.target.files[0]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");
    setLoading(true);

    try {
      const formData = new FormData();
      formData.append("title", title);
      formData.append("subTitle", subTitle);
      formData.append("description", description);
      formData.append("category", category);
      formData.append("newCategory", newCategory);
      formData.append("isPublished", isPublished);
      if (image) formData.append("image", image);

      const res = await axios.post(`${backendUrl}/api/blogs`, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      if (res.data.success) {
        setSuccess("✅ Blog added successfully!");
        setTitle("");
        setSubTitle("");
        setDescription("");
        setCategory("");
        setNewCategory("");
        setImage(null);
        setIsPublished(true);
        setTimeout(() => navigate("/admin/add-blog"), 1000);
      }
    } catch (err) {
      console.error("Blog add failed:", err);
      setError("Failed to add blog. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-sm w-full mx-auto mt-6 p-4 bg-white rounded-lg shadow-md border border-gray-100">
      <h2 className="text-xl font-semibold text-center mb-4 text-gray-900">Add New Blog</h2>

      {error && (
        <div className="bg-red-50 text-red-700 px-2 py-1 rounded mb-3 text-center text-xs">
          {error}
        </div>
      )}
      {success && (
        <div className="bg-green-50 text-green-700 px-2 py-1 rounded mb-3 text-center text-xs">
          {success}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-3 text-sm">
        <div>
          <label className="block mb-1 font-medium">Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Blog title"
            required
            className="w-full border border-gray-300 px-2 py-1.5 rounded-md focus:ring-1 focus:ring-indigo-500 outline-none text-sm"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Sub Title</label>
          <input
            type="text"
            value={subTitle}
            onChange={(e) => setSubTitle(e.target.value)}
            placeholder="Optional subtitle"
            className="w-full border border-gray-300 px-2 py-1.5 rounded-md focus:ring-1 focus:ring-indigo-500 outline-none text-sm"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Description</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Write blog content..."
            required
            className="w-full border border-gray-300 px-2 py-1.5 rounded-md h-20 resize-none focus:ring-1 focus:ring-indigo-500 outline-none text-sm"
          />
        </div>

        <div className="flex gap-2">
          <div className="flex-1">
            <label className="block mb-1 font-medium">Category</label>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              disabled={newCategory.trim() !== ""}
              className="w-full border border-gray-300 px-2 py-1.5 rounded-md focus:ring-1 focus:ring-indigo-500 outline-none text-sm disabled:bg-gray-100"
            >
              <option value="">-- Choose --</option>
              {categories.map((cat) => (
                <option key={cat._id} value={cat.name}>
                  {cat.name}
                </option>
              ))}
            </select>
          </div>

          <div className="flex-1">
            <label className="block mb-1 font-medium">New Category</label>
            <input
              type="text"
              value={newCategory}
              onChange={(e) => setNewCategory(e.target.value)}
              placeholder="Add new"
              className="w-full border border-gray-300 px-2 py-1.5 rounded-md focus:ring-1 focus:ring-indigo-500 outline-none text-sm"
            />
          </div>
        </div>

        <div>
          <label className="block mb-1 font-medium">Upload Image</label>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="w-full text-xs"
          />
          {image && <p className="text-xs text-gray-500 mt-1">{image.name}</p>}
        </div>

        <div className="flex items-center gap-2">
          <input
            type="checkbox"
            checked={isPublished}
            onChange={(e) => setIsPublished(e.target.checked)}
            className="w-4 h-4 accent-indigo-500"
          />
          <label className="text-gray-700 font-medium">Publish immediately</label>
        </div>

        <button
          type="submit"
          disabled={loading}
          className={`w-full py-1.5 rounded-md text-white font-medium text-sm transition ${
            loading ? "bg-gray-400 cursor-not-allowed" : "bg-gray-700 hover:bg-gray-800"
          }`}
        >
          {loading ? "Adding..." : "Add Blog"}
        </button>
      </form>
    </div>
  );
};

export default AddBlog;
