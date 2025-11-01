import React, { useContext, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { AdminContext } from "../context/AdminContext";

const AddProject = () => {
  const { backendUrl, aToken } = useContext(AdminContext);

  const [formData, setFormData] = useState({
    title: "",
    category: "",
    highlight: "",
    description: "",
    techStack: "",
    liveUrl: "",
    sourceUrl: "",
  });
  const [image, setImage] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const data = new FormData();
      Object.keys(formData).forEach((key) => data.append(key, formData[key]));
      data.append("image", image);

      const res = await axios.post(`${backendUrl}/api/admin/add-project`, data, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${aToken}`, 
        },
      });

      if (res.data.success) {
        toast.success("Project added successfully!");
        setFormData({
          title: "",
          category: "",
          highlight: "",
          description: "",
          techStack: "",
          liveUrl: "",
          sourceUrl: "",
        });
        setImage(null);
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      toast.error(error.response?.data?.message || "Something went wrong");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <form
        onSubmit={handleSubmit}
        className="bg-white w-full max-w-2xl p-8 rounded-2xl shadow-xl border border-gray-100"
      >
        <h2 className="text-3xl font-semibold mb-6 text-center text-gray-800 tracking-tight">
          Add New Project
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <input
            type="text"
            name="title"
            placeholder="Project Title"
            value={formData.title}
            onChange={handleChange}
            className="border border-gray-300 rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-gray-700 transition"
            required
          />
          <input
            type="text"
            name="category"
            placeholder="Category"
            value={formData.category}
            onChange={handleChange}
            className="border border-gray-300 rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-gray-700 transition"
            required
          />
          <input
            type="text"
            name="highlight"
            placeholder="Highlight"
            value={formData.highlight}
            onChange={handleChange}
            className="border border-gray-300 rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-gray-700 transition"
            required
          />
          <input
            type="text"
            name="techStack"
            placeholder="Tech Stack (comma separated)"
            value={formData.techStack}
            onChange={handleChange}
            className="border border-gray-300 rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-gray-700 transition"
            required
          />
        </div>

        <textarea
          name="description"
          placeholder="Project Description"
          value={formData.description}
          onChange={handleChange}
          className="border border-gray-300 rounded-lg px-4 py-2.5 w-full mt-5 focus:outline-none focus:ring-2 focus:ring-gray-700 transition"
          rows="4"
          required
        ></textarea>

        <div className="mt-5 flex flex-col md:flex-row gap-5">
          <input
            type="text"
            name="liveUrl"
            placeholder="Live URL"
            value={formData.liveUrl}
            onChange={handleChange}
            className="border border-gray-300 rounded-lg px-4 py-2.5 w-full focus:outline-none focus:ring-2 focus:ring-gray-700 transition"
            required
          />
          <input
            type="text"
            name="sourceUrl"
            placeholder="Source Code URL"
            value={formData.sourceUrl}
            onChange={handleChange}
            className="border border-gray-300 rounded-lg px-4 py-2.5 w-full focus:outline-none focus:ring-2 focus:ring-gray-700 transition"
          />
        </div>

        <div className="mt-5">
          <input
            type="file"
            accept="image/*"
            onChange={(e) => setImage(e.target.files[0])}
            className="border border-gray-300 w-full px-4 py-2.5 rounded-lg cursor-pointer focus:outline-none focus:ring-2 focus:ring-gray-700 transition"
            required
          />
        </div>

        <button
          type="submit"
          className="mt-7 w-full bg-gray-800 text-white py-2.5 rounded-xl font-semibold hover:bg-gray-900 transition-transform transform hover:scale-[1.02] duration-200"
        >
          Add Project
        </button>
      </form>
    </div>
  );
};

export default AddProject;
