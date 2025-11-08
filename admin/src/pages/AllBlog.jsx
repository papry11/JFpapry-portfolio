import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import { Loader2, Trash2 } from "lucide-react";
import { AdminContext } from "../context/AdminContext";
import { toast } from "react-toastify";
import { motion } from "framer-motion";

const AllBlog = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [deletingId, setDeletingId] = useState(null);
  const { backendUrl, aToken } = useContext(AdminContext);

  // Fetch all blogs
  const fetchBlogs = async () => {
    try {
      setLoading(true);
      const res = await axios.get(`${backendUrl}/api/blogs`, {
        headers: { Authorization: `Bearer ${aToken}` },
      });
      if (res.data.success) setBlogs(res.data.data);
    } catch (err) {
      console.error("Error fetching blogs:", err);
      toast.error("Failed to load blogs");
    } finally {
      setLoading(false);
    }
  };

  // Delete blog
  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this blog?")) return;
    try {
      setDeletingId(id);
      const res = await axios.delete(`${backendUrl}/api/blogs/${id}`, {
        headers: { Authorization: `Bearer ${aToken}` },
      });
      if (res.data.success) {
        setBlogs((prev) => prev.filter((b) => b._id !== id));
        toast.success("Blog deleted successfully!");
      }
    } catch (err) {
      console.error("Error deleting blog:", err);
      toast.error("Delete failed");
    } finally {
      setDeletingId(null);
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center py-32 text-gray-500">
        <Loader2 className="w-6 h-6 animate-spin mr-2" />
        Loading blogs...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-semibold text-gray-800">
          📝 All Blogs
        </h1>
        <p className="text-gray-500 text-sm">
          {blogs.length} blog{blogs.length !== 1 ? "s" : ""} total
        </p>
      </div>

      {blogs.length === 0 ? (
        <p className="text-center text-gray-500 mt-32">No blogs found.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {blogs.map((blog) => (
            <motion.div
              key={blog._id}
              whileHover={{ y: -4 }}
              transition={{ duration: 0.2 }}
              className="bg-white/80 backdrop-blur-lg rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300 flex flex-col overflow-hidden"
            >
              {/* Blog Image */}
              <div className="relative h-48 bg-gray-100">
                {blog.image ? (
                  <img
                    src={blog.image}
                    alt="blog"
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="flex justify-center items-center h-full text-gray-400">
                    No image
                  </div>
                )}
              </div>

              {/* Blog Info */}
              <div className="flex flex-col flex-grow p-5 justify-between">
                <div>
                  <h2 className="text-lg font-semibold text-gray-800 line-clamp-2">
                    {blog.title}
                  </h2>
                  <p className="text-sm text-gray-600 mt-1 line-clamp-2">
                    {blog.subTitle || blog.description?.slice(0, 60) + "..."}
                  </p>
                </div>

                <div className="flex justify-between items-center mt-4">
                  <div className="flex flex-col">
                    <span className="text-xs font-medium text-gray-500">
                      {blog.category?.name || "Uncategorized"}
                    </span>
                    <span className="text-xs text-gray-400">
                      {new Date(blog.createdAt).toLocaleDateString()}
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    <span
                      className={`px-2.5 py-1 text-xs rounded-full font-semibold ${
                        blog.isPublished
                          ? "bg-green-100 text-green-700"
                          : "bg-yellow-100 text-yellow-700"
                      }`}
                    >
                      {blog.isPublished ? "Published" : "Draft"}
                    </span>

                    <button
                      onClick={() => handleDelete(blog._id)}
                      disabled={deletingId === blog._id}
                      className="p-2 rounded-full hover:bg-red-50 text-red-600 transition"
                    >
                      {deletingId === blog._id ? (
                        <Loader2 className="w-4 h-4 animate-spin" />
                      ) : (
                        <Trash2 className="w-4 h-4" />
                      )}
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AllBlog;
