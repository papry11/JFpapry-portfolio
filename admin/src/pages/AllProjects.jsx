import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import { AdminContext } from "../context/AdminContext";
import { toast } from "react-toastify";
import { motion } from "framer-motion";
import { Trash2 } from "lucide-react";

const AllProjects = () => {
  const { aToken, backendUrl } = useContext(AdminContext);
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  // ✅ Fetch all projects
  const fetchAllProjects = async () => {
    try {
      const { data } = await axios.get(`${backendUrl}/api/admin/all-projects`, {
        headers: { Authorization: `Bearer ${aToken}` },
      });
      if (data.success) {
        setProjects(data.data);
      }
    } catch (err) {
      console.error("All projects fetch error:", err.response?.data || err);
      toast.error("Failed to load projects");
    } finally {
      setLoading(false);
    }
  };

  // ✅ Delete project
  const handleDelete = async (id) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this project?");
    if (!confirmDelete) return;

    try {
      const { data } = await axios.delete(
        `${backendUrl}/api/admin/delete-project/${id}`,
        {
          headers: { Authorization: `Bearer ${aToken}` },
        }
      );

      if (data.success) {
        toast.success("Project deleted successfully");
        setProjects(projects.filter((p) => p._id !== id));
      } else {
        toast.error(data.message || "Failed to delete project");
      }
    } catch (error) {
      console.error("Delete error:", error);
      toast.error("Error deleting project");
    }
  };

  useEffect(() => {
    if (aToken) {
      fetchAllProjects();
    }
  }, [aToken]);

  if (!aToken)
    return (
      <p className="p-8 text-red-500 text-center">
        Please log in as admin to see all projects.
      </p>
    );

  if (loading)
    return (
      <p className="p-8 text-gray-600 text-center animate-pulse">
        Loading projects...
      </p>
    );

  return (
    <div className="p-8 min-h-screen bg-gray-50">
      <h2 className="text-3xl font-semibold text-gray-800 mb-8 border-b border-gray-300 pb-3">
        All Projects
      </h2>

      {projects.length ? (
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, index) => (
            <motion.div
              key={p._id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05, duration: 0.4 }}
              className="relative bg-white rounded-2xl shadow-md hover:shadow-lg overflow-hidden group transition-all"
            >
              <img
                src={p.image}
                alt={p.title}
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="p-4">
                <h3 className="font-bold text-lg text-gray-800 mb-1">
                  {p.title}
                </h3>
                <p className="text-sm text-gray-500 mb-2">{p.category}</p>
                <p className="text-gray-600 text-sm line-clamp-2 mb-3">
                  {p.highlight}
                </p>

                <div className="flex flex-wrap gap-2 mb-3">
                  {p.techStack?.map((tech, i) => (
                    <span
                      key={i}
                      className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex justify-between items-center">
                  <a
                    href={p.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-blue-600 hover:underline"
                  >
                    Live Demo
                  </a>
                  {p.sourceUrl && (
                    <a
                      href={p.sourceUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-gray-500 hover:underline"
                    >
                      Source
                    </a>
                  )}
                </div>
              </div>

              {/* Delete button */}
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => handleDelete(p._id)}
                className="absolute top-3 right-3 bg-red-500 hover:bg-red-600 text-white p-2 rounded-full shadow-md transition"
              >
                <Trash2 size={16} />
              </motion.button>
            </motion.div>
          ))}
        </div>
      ) : (
        <p className="text-gray-400 text-center py-20 text-lg">
          No projects found.
        </p>
      )}
    </div>
  );
};

export default AllProjects;
