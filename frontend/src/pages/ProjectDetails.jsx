import React, { useContext, useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import { ExternalLink, Github, ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";

const ProjectDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { projectsData } = useContext(AppContext);
  const [projectInfo, setProjectInfo] = useState(null);

  useEffect(() => {
    if (Array.isArray(projectsData) && projectsData.length) {
      const project = projectsData.find((p) => String(p._id) === String(id));
      setProjectInfo(project);
    }
  }, [projectsData, id]);

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
      className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-16 px-4 md:px-10 flex flex-col items-center"
    >
      {/* Card container */}
      <motion.div
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-6xl w-full bg-white rounded-3xl border border-gray-100 shadow-xl overflow-hidden flex flex-col md:flex-row-reverse md:items-center"
      >
        {/* Left side image (reversed visually) */}
        <div className="md:w-1/2 w-full h-72 md:h-[520px] overflow-hidden relative">
          <img
            src={projectInfo.image}
            alt={projectInfo.title}
            className="w-full h-full object-contain bg-gray-50 p-4 md:p-6"
          />
        </div>

        {/* Right side content */}
        <div className="md:w-1/2 w-full p-8 md:p-12 flex flex-col justify-center text-left">
          {projectInfo.category && (
            <span className="inline-block mb-3 text-center text-xs font-semibold uppercase tracking-wide text-indigo-700  py-1 rounded-full">
              {projectInfo.category}
            </span>
          )}

          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight mb-5">
            {projectInfo.title}
          </h2>

          <p className="text-gray-600 text-base leading-relaxed mb-6">
            {projectInfo.description}
          </p>

          {projectInfo.highlight && (
            <p className="text-indigo-500 font-medium mb-6">
              ✨ {projectInfo.highlight}
            </p>
          )}

          {/* Tech Stack */}
          <div className="flex justify-center flex-wrap gap-2 mb-6">
            {(Array.isArray(projectInfo.techStack)
              ? projectInfo.techStack
              : projectInfo.techStack?.split(",") || []
            ).map((tech, index) => (
              <span
                key={index}
                className="px-3 py-1.5 bg-gray-100 text-gray-700 rounded-full text-sm font-medium border border-gray-200 hover:bg-gray-200 transition"
              >
                {tech.trim()}
              </span>
            ))}
          </div>

          {/* Buttons */}
          <div className="flex flex-wrap items-center gap-4">
            {projectInfo.liveUrl && (
              <a
                href={projectInfo.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-2.5 bg-indigo-600 text-white rounded-full text-sm font-medium hover:bg-indigo-700 shadow-md hover:shadow-lg transition-all duration-300"
              >
                <ExternalLink size={16} /> Live Demo
              </a>
            )}
            {projectInfo.sourceUrl && (
              <a
                href={projectInfo.sourceUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-2.5 bg-gray-800 text-white rounded-full text-sm font-medium hover:bg-gray-900 shadow-md hover:shadow-lg transition-all duration-300"
              >
                <Github size={16} /> Source Code
              </a>
            )}
          </div>
        </div>
      </motion.div>

      {/* Back button */}
      <motion.button
        whileHover={{ x: -5 }}
        onClick={() => navigate("/project")}
        className="flex items-center gap-2 mt-10 text-sm font-medium text-gray-600 hover:text-indigo-600 transition-colors"
      >
        <ArrowLeft size={18} /> Back to Projects
      </motion.button>
    </motion.div>
  );
};

export default ProjectDetails;
