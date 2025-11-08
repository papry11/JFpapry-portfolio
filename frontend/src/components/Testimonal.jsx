import React from "react";
import { motion } from "framer-motion";

const Testimonial = () => {
  const testimonials = [
    {
      name: "Emma Carter",
      role: "Creative Director @ Designify",
      feedback:
        "The website redesign exceeded expectations. Communication and execution were flawless.",
      gradient: "from-pink-200 via-pink-300 to-pink-400",
    },
    {
      name: "Noah Williams",
      role: "Founder @ TechFlow",
      feedback:
        "Every detail handled with precision. Creative and professional work throughout.",
      gradient: "from-green-200 via-green-300 to-green-400",
    },
    {
      name: "Olivia Martinez",
      role: "Marketing Lead @ VisionEdge",
      feedback:
        "User-friendly and elegant design. Transparent workflow. Highly professional!",
      gradient: "from-blue-200 via-blue-300 to-blue-400",
    },
    {
      name: "Ethan Johnson",
      role: "Software Engineer @ DevCore",
      feedback:
        "Pixel-perfect execution and strong UI/UX. Delivered ahead of schedule.",
      gradient: "from-purple-200 via-purple-300 to-purple-400",
    },
    {
      name: "Mia Thompson",
      role: "Brand Strategist @ Creativex",
      feedback:
        "Smooth collaboration. UI/UX was clean, engaging, and elegant.",
      gradient: "from-yellow-200 via-yellow-300 to-yellow-400",
    },
  ];

  return (
    <div className="relative py-5 overflow-hidden">
      <div className="relative z-10 text-center px-6 max-w-6xl mx-auto">
        {/* Header */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 tracking-tight">
          What Clients Say About Us
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto text-lg mb-24 px-8">
          Hear honest feedback from our clients worldwide. Minimal design, maximum impact.
        </p>

        {/* Floating testimonial cards */}
        <div className="relative w-full flex flex-wrap justify-center gap-10">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity:1, y: 50, rotate: i % 2 === 0 ? -3 : 3 }}
              animate={{
                opacity:1,
                y: [0, -15, 0], // continuous floating
                rotate: [i % 2 === 0 ? -3 : 3, 0, i % 2 === 0 ? -3 : 3],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.5,
              }}
              whileHover={{
                scale: 1.05,
                rotateX: 3,
                rotateY: i % 2 === 0 ? 3 : -3,
                transition: { duration: 0.8 },
              }}
              className="max-w-xs w-full p-6 rounded-3xl bg-gradient-to-tr from-white/90 via-white/80 to-white/90 
              backdrop-blur-lg border border-gray-300/40 shadow-xl relative z-20"
              style={{ zIndex: testimonials.length - i }}
            >
              {/* Avatar & Name */}
              <div className="flex items-center gap-3 mb-4">
                <div
                  className={`w-12 h-12 rounded-full bg-gradient-to-tr ${t.gradient} flex items-center justify-center text-white font-bold text-lg`}
                >
                  {t.name.charAt(0)}
                </div>
                <div className="text-left">
                  <p className="font-semibold text-gray-900">{t.name}</p>
                  <p className="text-sm text-gray-500">{t.role}</p>
                </div>
              </div>

              {/* Feedback */}
              <p className="text-gray-700 text-sm leading-relaxed">{t.feedback}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Animation classes */}
      <style>
        {`
          @keyframes float {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-15px); }
          }
          .animate-float {
            animation: float 6s ease-in-out infinite;
          }
          .animate-float-reverse {
            animation: float 6s ease-in-out infinite reverse;
          }
        `}
      </style>
    </div>
  );
};

export default Testimonial;
