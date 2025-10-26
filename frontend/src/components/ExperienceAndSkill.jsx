import React from "react";
import { motion } from "framer-motion";
import { Briefcase, Code } from "lucide-react";
import { FaReact, FaJsSquare, FaNodeJs } from "react-icons/fa";
import { SiMongodb, SiExpress, SiTailwindcss } from "react-icons/si";

export default function ExperienceAndSkills() {
  const experiences = [
    {
      title: "Full Stack Developer",
      company: "CreativeTech Studio",
      duration: "2022 — Present",
      description:
        "Developed and deployed scalable MERN applications with high-performing REST APIs, optimized front-end architecture, and automated CI/CD pipelines.",
    },
    {
      title: "Frontend Developer",
      company: "PixelCraft Agency",
      duration: "2020 — 2022",
      description:
        "Delivered sleek, responsive interfaces using React and Tailwind CSS. Enhanced UX with animations and accessibility best practices.",
    },
  ];

  const skills = [
    {
      id: 1,
      title: "React.js",
      icon: <FaReact className="w-10 h-10 text-sky-600" />,
      bg: "from-sky-50 via-white to-sky-100",
    },
    {
      id: 2,
      title: "Node.js",
      icon: <FaNodeJs className="w-10 h-10 text-green-600" />,
      bg: "from-green-50 via-white to-green-100",
    },
    {
      id: 3,
      title: "Express.js",
      icon: <SiExpress className="w-10 h-10 text-gray-700" />,
      bg: "from-pink-50 via-white to-pink-100",
    },
    {
      id: 4,
      title: "JavaScript (ES6+)",
      icon: <FaJsSquare className="w-10 h-10 text-yellow-500" />,
      bg: "from-yellow-50 via-white to-yellow-50",
    },
    {
      id: 5,
      title: "MongoDB",
      icon: <SiMongodb className="w-10 h-10 text-emerald-600" />,
      bg: "from-emerald-50 via-white to-emerald-100",
    },
    {
      id: 6,
      title: "Tailwind CSS",
      icon: <SiTailwindcss className="w-10 h-10 text-cyan-500" />,
      bg: "from-sky-50 via-white to-sky-100",
    },
  ];

  return (
    <div
      className="w-full text-gray-900 py-20 mb-24 bg-white"
      id="experience"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-10">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold tracking-tight mb-3 bg-gradient-to-r from-black to-gray-700 bg-clip-text text-transparent"
          >
            Experience & Skills
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-gray-600 max-w-2xl mx-auto text-base md:text-lg"
          >
            A creative blend of professional experience and a continuously
            growing technical skillset — crafted for modern digital innovation.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Experience Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-10"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 bg-black text-white rounded-xl shadow-md">
                <Briefcase size={20} />
              </div>
              <h3 className="text-2xl font-semibold">
                Professional Experience
              </h3>
            </div>

            <div className="relative border-l border-gray-300 pl-6">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  className="relative bg-gradient-to-br from-gray-50 via-white to-gray-100 rounded-xl p-6 shadow-md hover:shadow-xl transition-all mb-8 group"
                >
                  <span className="absolute -left-[10px] top-6 w-4 h-4 bg-black rounded-full border-4 border-white group-hover:scale-110 transition-transform" />
                  <h4 className="text-lg font-bold text-black">{exp.title}</h4>
                  <p className="text-sm text-gray-700 mt-1 font-medium">
                    {exp.company}
                  </p>
                  <p className="text-sm text-gray-500 mb-3">{exp.duration}</p>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    {exp.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Skills Section */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-10"
          >
            {/* Skills Header */}
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 bg-black text-white rounded-xl shadow-md">
                <Code size={20} />
              </div>
              <h3 className="text-2xl font-semibold">Skills</h3>
            </div>

            {/* Skills Cards */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 sm:gap-8">
              {skills.map((s, index) => (
                <motion.article
                  key={s.id}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  viewport={{ once: true }}
                  className={`flex flex-col items-center text-center bg-gradient-to-br ${s.bg} rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 p-6 sm:p-8 ring-1 ring-gray-100`}
                >
                  <div className="flex items-center justify-center w-16 h-16 bg-white/60 rounded-full shadow-inner mb-4 backdrop-blur-sm">
                    {s.icon}
                  </div>
                  <h3 className="text-sm sm:text-base font-semibold text-gray-900 mt-2">
                    {s.title}
                  </h3>
                </motion.article>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
