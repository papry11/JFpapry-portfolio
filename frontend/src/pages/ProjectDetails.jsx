import React, { useContext, useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import { ExternalLink, Github, ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";

const ProjectDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { ProjectsData } = useContext(AppContext);
  const [projectInfo, setProjectInfo] = useState(null);

  useEffect(() => {
    if (ProjectsData?.length) {
      const project = ProjectsData.find(
        (p) => String(p._id) === String(id)
      );
      setProjectInfo(project);
    }
  }, [ProjectsData, id]);

  if (!projectInfo)
    return (
      <div className="min-h-screen flex items-center justify-center text-gray-500 text-lg">
        Project not found.
      </div>
    );

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-20 px-6 flex flex-col items-center"
    >
      {/* Main Container */}
      <motion.div
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-6xl w-full bg-white rounded-3xl border border-gray-200 shadow-lg overflow-hidden flex flex-col md:flex-row hover:shadow-xl transition-shadow duration-300"
      >
        {/* Image Section */}
        <div className="md:w-1/2 relative group overflow-hidden">
          <img
            src={projectInfo.image}
            alt={projectInfo.title}
            className="w-full h-80 md:h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
        </div>

        {/* Info Section */}
        <div className="md:w-1/2 p-10 flex flex-col justify-center">
          {projectInfo.category && (
            <span className="self-start bg-indigo-100 text-indigo-700 text-xs px-4 py-1.5 rounded-full font-medium mb-4 uppercase tracking-wide">
              {projectInfo.category}
            </span>
          )}

          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-indigo-600 to-purple-500 bg-clip-text text-transparent mb-5 leading-tight">
            {projectInfo.title}
          </h2>

          <p className="text-gray-600 text-sm leading-relaxed mb-6">
            {projectInfo.description}
          </p>

          {projectInfo.highlight && (
            <p className="text-indigo-500 font-medium mb-6">
              ✨ {projectInfo.highlight}
            </p>
          )}

          {/* Tech Stack */}
          <div className="flex flex-wrap gap-2 mb-6">
            {(Array.isArray(projectInfo.techStack)
              ? projectInfo.techStack
              : projectInfo.techStack.split(",")
            ).map((tech, index) => (
              <span
                key={index}
                className="px-3 py-1.5 bg-gray-100 text-gray-700 rounded-full text-sm font-medium border border-gray-200 hover:bg-gray-200 transition"
              >
                {tech.trim()}
              </span>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-4 mt-2">
            {projectInfo.liveUrl && (
              <a
                href={projectInfo.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-2.5 bg-indigo-600 text-white rounded-full text-sm font-medium hover:bg-indigo-700 shadow-md hover:shadow-lg transition-all duration-300"
              >
                <ExternalLink size={16} />
                Live Demo
              </a>
            )}

            {projectInfo.sourceUrl && (
              <a
                href={projectInfo.sourceUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-2.5 bg-gray-800 text-white rounded-full text-sm font-medium hover:bg-gray-900 shadow-md hover:shadow-lg transition-all duration-300"
              >
                <Github size={16} />
                Source Code
              </a>
            )}
          </div>
        </div>
      </motion.div>

      {/* Back Button */}
      <motion.button
        whileHover={{ x: -5 }}
        onClick={() => navigate("/project")}
        className="flex items-center gap-2 mt-12 text-sm font-medium text-gray-600 hover:text-indigo-600 transition-colors"
      >
        <ArrowLeft size={18} />
        Back to Projects
      </motion.button>
    </motion.div>
  );
};

export default ProjectDetails;
