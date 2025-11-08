

import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaJsSquare } from "react-icons/fa";
import { SiMongodb, SiExpress, SiTailwindcss } from "react-icons/si";

export default function ExperienceAndSkills() {
  const [stopScroll, setStopScroll] = useState(false);

  const experiences = [
    {
      title: "Full Stack Developer",
      company: "CreativeTech Studio",
      duration: "2023 — Present",
      description:
        "Building scalable web applications using the MERN stack. Focused on performance optimization, clean architecture, and modern UX/UI design.",
    },
    {
      title: "Backend Developer",
      company: "CreativeTech Studio",
      duration: "2022 — 2023",
      description:
        "Building scalable web applications using the MERN stack. Focused on performance optimization, clean architecture, and modern UX/UI design.",
    },
    {
      title: "Frontend Developer",
      company: "PixelCraft Agency",
      duration: "2020 — 2022",
      description:
        "Developed and maintained responsive user interfaces. Collaborated closely with designers to translate concepts into pixel-perfect experiences.",
    },
  ];

  const skills = [
    { title: "React.js", icon: <FaReact className="w-12 h-12 text-sky-600" /> },
    { title: "Node.js", icon: <FaNodeJs className="w-12 h-12 text-green-600" /> },
    { title: "JavaScript", icon: <FaJsSquare className="w-12 h-12 text-yellow-500" /> },
    { title: "MongoDB", icon: <SiMongodb className="w-12 h-12 text-emerald-600" /> },
    { title: "Express.js", icon: <SiExpress className="w-12 h-12 text-gray-700" /> },
    { title: "Tailwind CSS", icon: <SiTailwindcss className="w-12 h-12 text-cyan-500" /> },
  ];

  return (
    <div
      id="experience"
      className="relative py-24 bg-gradient-to-b from-white via-gray-50 to-gray-100 rounded-2xl text-gray-900 overflow-hidden"
    >
      {/* subtle glowing gradients */}
      <div className="absolute top-20 left-10 w-40 h-40 bg-sky-100 blur-3xl opacity-40" />
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-emerald-50 blur-3xl opacity-30" />

      <div className="max-w-5xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-semibold"
          >
            Experience & Skills
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-gray-600 mt-4 text-lg max-w-2xl mx-auto"
          >
            A journey of learning, building, and mastering technologies that
            shape impactful digital products.
          </motion.p>
        </div>

        {/* Experience Timeline */}
        <div className="relative space-y-12 mb-24">
          <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-sky-400 to-emerald-400 opacity-50" />
          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className={`relative w-full lg:w-[60%] ${
                i % 2 === 0 ? "ml-auto" : "mr-auto"
              } bg-white/70 backdrop-blur-sm border border-gray-100 rounded-2xl shadow-lg p-8`}
            >
              <span
                className={`absolute top-10 ${
                  i % 2 === 0 ? "-left-[11px]" : "-right-[11px]"
                } w-6 h-6 rounded-full bg-gradient-to-r from-sky-500 to-emerald-500 border-4 border-white shadow-md`}
              />
              <h3 className="text-xl font-semibold text-gray-900">
                {exp.title}
              </h3>
              <p className="text-sm text-gray-700 mt-1">{exp.company}</p>
              <p className="text-xs text-gray-500 mb-1">{exp.duration}</p>
              <p className="text-gray-600 text-sm leading-relaxed">{exp.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Skills Marquee */}
        <div className="relative w-full overflow-hidden py-2">
          {/* Fade gradients */}
          <div className="absolute left-0 top-0 h-full w-20 z-10 pointer-events-none bg-gradient-to-r from-white/70 to-transparent" />
          <div className="absolute right-0 top-0 h-full w-20 md:w-40 z-10 pointer-events-none bg-gradient-to-l from-white/70 to-transparent" />

          <div
            className="flex w-fit animate-marquee"
            onMouseEnter={() => setStopScroll(true)}
            onMouseLeave={() => setStopScroll(false)}
            style={{
              animationPlayState: stopScroll ? "paused" : "running",
              animationDuration: skills.length * 2500 + "ms",
            }}
          >
            {[...skills, ...skills].map((skill, index) => (
              <div
                key={index}
                className="flex flex-col items-center justify-center w-44 h-44 mx-4 bg-white/70 backdrop-blur-sm rounded-xl shadow-lg group hover:scale-95 transition-transform duration-300"
              >
                <div>{skill.icon}</div>
                <p className="mt-3 text-gray-900 font-semibold text-center">{skill.title}</p>
              </div>
            ))}
          </div>

          <style>{`
            @keyframes marqueeScroll {
              0% { transform: translateX(0%); }
              100% { transform: translateX(-50%); }
            }
            .animate-marquee {
              animation-name: marqueeScroll;
              animation-timing-function: linear;
              animation-iteration-count: infinite;
            }
          `}</style>
        </div>
      </div>
    </div>
  );
}
