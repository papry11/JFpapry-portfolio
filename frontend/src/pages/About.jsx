import React, { useEffect, useState } from "react";

export default function AboutUs() {
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

  // <p className="py-4 text-gray-500 text-center">© {new Date().getFullYear()} Jannatul Ferdous papry </p>

  return (
    <div className="max-w-6xl mx-auto px-6 md:px-10 pt-35 space-y-16 text-gray-900">
      {/* Hero */}
      <div className="grid gap-8 md:grid-cols-2 items-center">
        <div className="space-y-5">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
            We build products people trust
          </h1>
          <p className="text-gray-600 text-base md:text-lg leading-relaxed">
            Our mission is to simplify healthcare through elegant software and
            human-centered design. We combine data, empathy, and engineering to
            deliver reliable solutions at scale.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center justify-center px-5 py-3 rounded-xl bg-slate-900 text-white text-sm md:text-base font-medium hover:opacity-90 hover:scale-[1.02] transition-transform duration-200 shadow-sm"
          >
            Contact us
          </a>
        </div>
        <div className="rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
          <img
            src="https://images.unsplash.com/photo-1522199710521-72d69614c702?&w=1200&q=60"
            alt="Team collaborating"
            className="w-full h-64 md:h-80 object-cover"
          />
        </div>
      </div>

      {/* Mission & Values */}
      <div className="grid gap-6 md:gap-8 md:grid-cols-3">
        <article className="p-6 bg-white rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow duration-200">
          <h3 className="font-semibold text-lg md:text-xl mb-2">Our Mission</h3>
          <p className="text-gray-600 text-sm md:text-base leading-relaxed">
            Make healthcare more accessible by building trustworthy,
            easy-to-use digital products.
          </p>
        </article>

        <article className="p-6 rounded-2xl bg-gradient-to-br from-slate-50 to-white border border-slate-100 hover:shadow-md transition duration-200">
          <h3 className="font-semibold text-lg md:text-xl mb-2">Vision</h3>
          <p className="text-gray-600 text-sm md:text-base leading-relaxed">
            A world where quality care is available to everyone regardless of
            location.
          </p>
        </article>

        <article className="p-6 bg-white rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow duration-200">
          <h3 className="font-semibold text-lg md:text-xl mb-2">Core Values</h3>
          <ul className="text-gray-600 text-sm md:text-base space-y-1.5 list-disc list-inside">
            <li>Human-centered design</li>
            <li>Data-informed decisions</li>
            <li>Operational excellence</li>
          </ul>
        </article>
      </div>

      {/* Stats */}
      <div className="bg-slate-50 rounded-2xl p-10 flex flex-col md:flex-row items-center justify-between gap-8 shadow-sm">
        <div>
          <h4 className="text-slate-800 font-semibold text-2xl md:text-3xl">
            By the numbers
          </h4>
          <p className="text-gray-500 text-sm mt-1">
            A quick look at what we’ve accomplished.
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
              Years Experience
            </div>
          </div>
        </div>
      </div>

      {/* Contact */}
      <div
        id="contact"
        className="bg-gradient-to-r from-white to-slate-50 p-8 md:p-10 rounded-2xl border border-slate-100 shadow-sm"
      >
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-xl font-semibold mb-1">
              Want to work with us?
            </h3>
            <p className="text-gray-600 text-sm md:text-base">
              Drop a line — we respond within minutes.
            </p>
          </div>
          <form className="flex gap-3 w-full md:w-auto">
            <input
              id="email"
              type="email"
              placeholder="you@yourcompany.com"
              className="px-4 py-2.5 rounded-lg border border-slate-200 text-sm md:text-base flex-1 focus:outline-none focus:ring-2 focus:ring-slate-300"
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
