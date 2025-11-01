import React, { useContext } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import { ExternalLink, Github, Code2 } from "lucide-react";

const ProjectCard = () => {
  const navigate = useNavigate();
  const { projectsData, loading, error } = useContext(AppContext);

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  if (loading) return <p className="text-center mt-10">Loading projects...</p>;
  if (error) return <p className="text-center mt-10 text-red-500">{error}</p>;

  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.1 }}
      className="flex flex-col items-center gap-8 my-24 px-4 md:px-10"
    >
      {/* Header */}
      <motion.h1 variants={fadeUp} className="text-4xl font-semibold text-gray-900 text-center">
        My Recent Works
      </motion.h1>

      <motion.p
        variants={fadeUp}
        className="sm:w-2/3 md:w-2/3 text-center text-gray-600 leading-relaxed"
      >
        A showcase of my latest projects built with modern frameworks, efficient architecture,
        and a focus on performance, scalability, and user experience.
      </motion.p>

      {/* Grid */}
      <motion.div
        variants={fadeUp}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-7xl justify-items-center"
      >
        {projectsData?.slice(0, 6).map((item, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.03 }}
            transition={{ type: "spring", stiffness: 200, damping: 15 }}
            className="group relative bg-white border border-gray-200 hover:border-indigo-400 shadow-sm hover:shadow-lg rounded-2xl overflow-hidden w-full max-w-sm cursor-pointer transition-all duration-500"
            onClick={() => navigate(`/project/${item._id}`)}
          >
            {/* Image */}
            <div className="relative h-52 overflow-hidden">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute top-3 left-3 bg-indigo-600 text-white text-xs px-3 py-1 rounded-full shadow-md">
                {item.category || "Full Stack"}
              </div>
            </div>

            {/* Content */}
            <div className="p-5 flex flex-col justify-between min-h-[190px]">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 line-clamp-2 mb-1">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-600 line-clamp-2 mb-3">{item.description}</p>
                {item.highlight && (
                  <p className="text-sm text-indigo-500 font-medium mb-2">✨ {item.highlight}</p>
                )}

                <div className="flex flex-wrap gap-2">
                  {item.techStack?.map((tech, i) => (
                    <span key={i} className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Buttons */}
              <div className="flex items-center gap-3 mt-4">
                {item.liveUrl && (
                  <a
                    href={item.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="flex items-center gap-1 text-sm text-indigo-600 hover:text-indigo-700 font-medium transition"
                  >
                    <ExternalLink size={16} /> Live
                  </a>
                )}
                {item.sourceUrl && (
                  <a
                    href={item.sourceUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="flex items-center gap-1 text-sm text-gray-700 hover:text-gray-900 font-medium transition"
                  >
                    <Github size={16} /> Code
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* More Projects Button */}
      <div className="pt-10">
        <motion.button
          whileHover={{ scale: 1.08, boxShadow: "0 0 25px rgba(99,102,241,0.3)" }}
          whileTap={{ scale: 0.96 }}
          onClick={() => {
            navigate("/project");
            scrollTo(0, 0);
          }}
          className="flex items-center gap-2 px-8 py-2.5 bg-gray-800 text-white rounded-full font-medium transition hover:bg-gray-900"
        >
          More Projects <Code2 size={16} />
        </motion.button>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
