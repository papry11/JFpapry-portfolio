import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { portfolioAssets } from "../assets/assets";

export default function AboutUs() {
  const navigate = useNavigate();

  // Animated counter logic
  const [counts, setCounts] = useState({
    projects: 0,
    clients: 0,
    years: 0,
  });

  useEffect(() => {
    const targets = { projects: 100, clients: 50, years: 3 };
    const duration = 2000; // animation duration in ms
    const steps = 60; // smoother animation
    let step = 0;

    const interval = setInterval(() => {
      step++;
      setCounts({
        projects: Math.min(
          Math.floor((targets.projects / steps) * step),
          targets.projects
        ),
        clients: Math.min(
          Math.floor((targets.clients / steps) * step),
          targets.clients
        ),
        years: Math.min(
          Math.floor((targets.years / steps) * step),
          targets.years
        ),
      });
      if (step === steps) clearInterval(interval);
    }, duration / steps);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="max-w-6xl mx-auto px-6 md:px-10 pt-35 space-y-16 text-gray-900">
      {/* Hero Section */}
      <div className="grid gap-8 md:grid-cols-2 items-center">
        <div className="space-y-5 p-5">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
            Building Scalable & Impactful Digital Solutions
          </h1>

          <p className="text-gray-600 text-base md:text-base leading-relaxed space-y-4">
            Hello, I’m{" "}
            <span className="font-semibold text-gray-800">
              Jannatul Ferdous Papry
            </span>{" "}
            — a passionate{" "}
            <span className="font-medium text-gray-700">
              Full Stack Web Developer
            </span>{" "}
            dedicated to building clean, efficient, and impactful digital
            experiences.
            <br />
            <br />
            I specialize in modern technologies such as{" "}
            <span className="font-medium text-gray-700">
              React, Node.js, Express.js, MongoDB, and Tailwind CSS
            </span>
            , allowing me to deliver scalable and high-performance web
            applications tailored to diverse business needs.
            <br />
            <br />
            My work philosophy revolves around writing maintainable, modular,
            and optimized code while ensuring seamless user experiences and
            intuitive design. I approach every project with precision,
            creativity, and a deep commitment to delivering solutions that
            combine both functionality and aesthetics.
            <br />
            <br />
            Beyond coding, I value collaboration, continuous learning, and
            professional integrity — striving to bring meaningful innovation to
            every project I take on.
          </p>

          <a
            onClick={() => {
              navigate("/contact");
              scrollTo(0, 0);
            }}
            href="#contact"
            className="inline-flex items-center justify-center px-5 py-3 rounded-xl bg-slate-900 text-white text-sm md:text-base font-medium hover:opacity-90 hover:scale-[1.02] transition-transform duration-200 shadow-sm"
          >
            Contact Me
          </a>
        </div>

        <div className="rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
          <img
            src={portfolioAssets.papry}
            alt="Developer workspace"
            className="w-full  object-cover"
          />
        </div>
      </div>

      {/* Mission, Vision & Values */}
      <div className="grid gap-6 md:gap-8 md:grid-cols-3">
        <article className="p-6 bg-white rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow duration-200">
          <h3 className="font-semibold text-lg md:text-xl mb-2">My Mission</h3>
          <p className="text-gray-600 text-sm md:text-base leading-relaxed">
            To craft robust, scalable, and user-centric digital solutions that
            empower businesses and individuals to thrive in an ever-evolving
            digital landscape. I aim to transform complex challenges into
            seamless, efficient, and visually compelling web experiences.
          </p>
        </article>

        <article className="p-6 rounded-2xl bg-gradient-to-br from-slate-50 to-white border border-slate-100 hover:shadow-md transition duration-200">
          <h3 className="font-semibold text-lg md:text-xl mb-2">My Vision</h3>
          <p className="text-gray-600 text-sm md:text-base leading-relaxed">
            To be recognized as a trusted Full Stack Developer who bridges
            creativity with technology — driving innovation, fostering growth,
            and delivering digital solutions that create lasting global impact.
          </p>
        </article>

        <article className="p-6 bg-white rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow duration-200">
          <h3 className="font-semibold text-lg md:text-xl mb-2">Core Values</h3>
          <ul className="text-gray-600 text-sm md:text-base space-y-1.5 list-disc list-inside">
            <li>
              <span className="font-medium text-gray-800">Integrity:</span> I
              maintain honesty, transparency, and responsibility in every
              professional interaction.
            </li>
            <li>
              <span className="font-medium text-gray-800">Excellence:</span>{" "}
              Every line of code is written with precision, scalability, and
              long-term value in mind.
            </li>
            <li>
              <span className="font-medium text-gray-800">Innovation:</span> I
              embrace emerging technologies to create forward-thinking and
              future-ready web solutions.
            </li>
            <li>
              <span className="font-medium text-gray-800">User Focus:</span> I
              build every product with the end user in mind — intuitive, fast,
              and accessible.
            </li>
            <li>
              <span className="font-medium text-gray-800">Collaboration:</span>{" "}
              I believe great results come from teamwork, communication, and
              shared goals.
            </li>
          </ul>
        </article>
      </div>

      {/* Stats Section */}
      <div className="bg-slate-50 rounded-2xl p-10 flex flex-col md:flex-row items-center justify-between gap-8 shadow-sm">
        <div>
          <h4 className="text-slate-800 font-semibold text-2xl md:text-3xl">
            By the Numbers
          </h4>
          <p className="text-gray-500 text-sm mt-1">
            A quick overview of my professional milestones.
          </p>
        </div>
        <div className="flex gap-10 md:gap-16 text-center">
          <div>
            <div className="text-3xl md:text-4xl font-bold text-slate-900">
              {counts.projects}+
            </div>
            <div className="text-sm md:text-base text-gray-600">
              Projects Completed
            </div>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-bold text-slate-900">
              {counts.clients}+
            </div>
            <div className="text-sm md:text-base text-gray-600">
              Happy Clients
            </div>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-bold text-slate-900">
              {counts.years}+
            </div>
            <div className="text-sm md:text-base text-gray-600">
              Years of Experience
            </div>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div
        id="contact"
        className="bg-gradient-to-r from-white to-slate-50 p-8 md:p-10 rounded-2xl border border-slate-100 shadow-sm"
      >
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-xl font-semibold mb-1">
              Interested in collaborating?
            </h3>
            <p className="text-gray-600 text-sm md:text-base">
              Let’s discuss your next project — I usually respond within a few
              minutes.
            </p>
          </div>
          <form className="flex gap-3 w-full md:w-auto">
            <input
              id="email"
              type="email"
              placeholder="Your email"
              className="px-4 py-2.5 rounded-lg text-gray-400 border border-slate-200 text-sm md:text-base flex-1 focus:outline-none focus:ring-2 focus:ring-slate-300"
            />
            <button
              type="submit"
              className="px-5 py-2.5 rounded-lg bg-slate-900 text-white text-sm md:text-base font-medium hover:opacity-90 hover:scale-[1.02] transition-transform duration-200"
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
