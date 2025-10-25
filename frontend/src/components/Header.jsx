import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Github, Instagram, Linkedin, Mail } from "lucide-react"; // lucide-react icons

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const smallFade = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const Header = () => {
  const navigate = useNavigate();

  return (
    <header className="flex flex-col items-center justify-center px-6 sm:px-10 md:px-16 lg:px-20 py-16 mt-20 md:mt-28 rounded-3xl text-center bg-primary-dull/40 shadow-inner border border-gray-200 relative">
      
      {/* Desktop: right-middle social icons */}
      <div className="hidden md:flex absolute right-8 top-1/2 -translate-y-1/2 flex-col gap-4">
        <a
          href="https://github.com/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-800 hover:text-gray-600 transition-colors transform hover:scale-110"
        >
          <Github size={28} />
        </a>
        <a
          href="https://linkedin.com/in/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-800 hover:text-blue-500 transition-colors transform hover:scale-110"
        >
          <Linkedin size={28} />
        </a>
      </div>

      {/* Desktop: left-middle mail icon */}
      <div className="hidden md:flex absolute left-8 top-1/2 -translate-y-1/2 flex-col gap-4">
        <a
          href="mailto:youremail@gmail.com"
          className="text-gray-800 hover:text-red-500 transition-colors transform hover:scale-110"
        >
          <Mail size={28} />
        </a>
         <a
          href="https://linkedin.com/in/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-800 hover:text-blue-500 transition-colors transform hover:scale-110"
        >
          <Instagram size={28} />
        </a>
      </div>

      {/* Mobile: bottom-right corner all icons together */}
      <div className="flex md:hidden fixed right-4 top-30  flex-col gap-3 z-50">
        <a
          href="https://github.com/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-800 hover:text-gray-600 transition-colors transform hover:scale-110"
        >
          <Github size={24} />
        </a>
        <a
          href="https://linkedin.com/in/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-800 hover:text-blue-500 transition-colors transform hover:scale-110"
        >
          <Linkedin size={24} />
        </a>
        <a
          href="mailto:youremail@gmail.com"
          className="text-gray-800 hover:text-red-500 transition-colors transform hover:scale-110"
        >
          <Mail size={24} />
        </a>
      </div>

      {/* Main content */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="space-y-3 z-10 max-w-2xl"
      >
        <motion.h1
          variants={fadeUp}
          className="text-2xl sm:text-4xl md:text-4xl font-semibold leading-tight text-gray-800"
        >
          Hello, I’m <span className="text-gray-900 font-bold">Papry</span>
        </motion.h1>

        <motion.div variants={fadeUp}>
          <motion.h2
            variants={smallFade}
            className="text-3xl sm:text-4xl md:text-5xl font-semibold text-gray-800"
          >
            Full Stack Web Developer
          </motion.h2>

          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "270px" }}
            transition={{ duration: 3, ease: "easeOut", delay: 0.45 }}
            className="h-0.5 bg-gradient-to-r from-[#ff8ab8] to-[#8b5cff] rounded mt-3 mx-auto"
          />
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "160px" }}
            transition={{ duration: 3, ease: "easeOut", delay: 0.45 }}
            className="h-0.5 bg-gradient-to-r from-[#ff8ab8] to-[#8b5cff] rounded mt-3 mx-auto"
          />
        </motion.div>

        <motion.p
          variants={smallFade}
          className="text-gray-700 max-w-xl text-sm sm:text-base leading-relaxed mx-auto"
        >
          I build high-performance, responsive web experiences that balance
          elegant design with robust functionality — clean, minimal, and
          user-focused.
        </motion.p>

        <motion.div
          variants={smallFade}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4"
        >
          <motion.button
            whileHover={{
              scale: 1.08,
              boxShadow: "0px 0px 25px rgba(255,100,180,0.35)",
            }}
            whileTap={{ scale: 0.96 }}
            onClick={() => {
              navigate("/project");
              scrollTo(0, 0);
            }}
            className="px-6 py-2.5 rounded-full bg-gray-800 text-white font-medium border border-gray-400 transition-all"
          >
            See Projects
          </motion.button>

          <motion.button
            whileHover={{
              scale: 1.05,
              backgroundColor: "rgba(0,0,0,0.05)",
            }}
            whileTap={{ scale: 0.97 }}
            onClick={() => {
              navigate("/contact");
              scrollTo(0, 0);
            }}
            className="px-6 py-2.5 rounded-full text-gray-800 font-medium border border-gray-400 transition-all"
          >
            Contact
          </motion.button>
        </motion.div>
      </motion.div>
    </header>
  );
};

export default Header;

