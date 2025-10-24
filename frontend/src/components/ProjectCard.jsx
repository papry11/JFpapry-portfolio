import React, { useContext } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";

const ProjectCard = () => {
    const navigate = useNavigate();
    const {ProjectsData} = useContext(AppContext)

  // Small fade animation variant
  const smallFade = {
    hidden: { opacity: 0, y: 30 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      className="flex flex-col items-center gap-6 my-16  md:mx-10"
    >
      {/* Header */}
      <motion.h1
        variants={smallFade}
        className="text-4xl font-semibold text-center"
      >
        My Recent Works
      </motion.h1>

      <motion.p
        variants={smallFade}
        className="sm:w-1/2 text-center  text-gray-600"
      >
        Stay ahead of the curve with fresh projects built using React, Node.js,
        and modern web tech.
      </motion.p>

      {/* Card Container */}
      <motion.div
        variants={smallFade}
        className="flex flex-wrap items-center justify-center gap-10 pt-10"
      >
        {ProjectsData.slice(0, 10).map((item, index) => (
          <motion.div onClick={()=>navigate(`/project/${item._id}`)}
            key={index}
            variants={smallFade}
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 200, damping: 15 }}
            className="group relative bg-white/10 backdrop-blur-lg border border-white/10 hover:border-indigo-400/40 shadow-lg hover:shadow-indigo-400/30 rounded-2xl overflow-hidden max-w-[18rem] w-full p-4 transition-all duration-500 cursor-pointer"
          >
            {/* Image */}
            <div className="relative overflow-hidden rounded-xl">
              <img
                className="w-full object-cover rounded-xl group-hover:scale-110 transition-transform duration-700"
                src={item.image}
                alt={item.title}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-xl"></div>
            </div>

            {/* Content */}
            <div className="mt-4 space-y-1">
              <h3 className="text-lg font-semibold text-primary/80  duration-300 line-clamp-2">
                {item.title}
              </h3>

              <p className="text-sm text-gray-400 line-clamp-2">
                {item.description}
              </p>

              <p className="text-xs text-indigo-400 font-medium mt-2">
                {Array.isArray(item.techStack)
                  ? item.techStack.join(" • ")
                  : item.techStack}
              </p>

              {item.liveUrl && (
                <a 
                  href={item.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-3 text-sm font-medium text-gray-700 hover:text-blue-500 transition-colors duration-300"
                >
                  Visit Project →
                </a>
              )}
            </div>

            {/* Glow effect */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-15 blur-2xl transition-opacity duration-700"></div>
          </motion.div>
        ))}
      </motion.div>

      {/* Buttons Section */}
      <motion.div
        variants={smallFade}
        className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8"
      >
        <motion.button
          whileHover={{
            scale: 1.08,
            boxShadow: "0px 0px 25px rgba(99,102,241,0.4)",
          }}
          whileTap={{ scale: 0.96 }}
          onClick={() => {
            navigate("/project");
            scrollTo(0, 0);
          }}
          className="px-6 py-2.5 rounded-full bg-gray-800 text-white font-medium backdrop-blur-sm transition-all"
        >
            More Projects →
        </motion.button>
      </motion.div>
    </motion.div>
  );
};

export default ProjectCard;
