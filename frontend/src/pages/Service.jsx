import React from "react";
import { motion } from "framer-motion";
import { Code, Server, Database, Cloud, Layers, ArrowRight } from "lucide-react";

const services = [
  {
    id: 1,
    title: "Frontend Development",
    desc: "Responsive, accessible UIs using React, Next.js, and modern tooling.",
    icon: <Code className="w-6 h-6" />,
  },
  {
    id: 2,
    title: "Backend Development",
    desc: "Robust server-side systems with Node.js, Express, or NestJS.",
    icon: <Server className="w-6 h-6" />,
  },
  {
    id: 3,
    title: "API Design & Integration",
    desc: "REST & GraphQL design, third-party integrations, and versioning.",
    icon: <Layers className="w-6 h-6" />,
  },
  {
    id: 4,
    title: "DevOps & CI/CD",
    desc: "Docker, Kubernetes, GitHub Actions and automated deployments.",
    icon: <Cloud className="w-6 h-6" />,
  },
  {
    id: 5,
    title: "Database Design & Optimization",
    desc: "Relational and NoSQL modeling, indexing and query tuning.",
    icon: <Database className="w-6 h-6" />,
  },
  {
    id: 6,
    title: "End-to-end Project Delivery",
    desc: "From spec to production: testing, monitoring and handoff.",
    icon: <ArrowRight className="w-6 h-6 rotate-180" />,
  },
];

export default function FullStackServicesSection() {
  return (
    <div className="py-30 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-12">
          <p className="text-sm text-emerald-600 font-semibold uppercase tracking-wide">
            Features & Services
          </p>
          <h2 className="mt-2 text-4xl font-bold text-gray-900">
            What I Offer
          </h2>
          <p className="mt-3 text-gray-500 max-w-2xl mx-auto">
            End-to-end services covering frontend, backend, infrastructure, and delivery.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, index) => (
            <motion.article
              key={s.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              viewport={{ once: true }}
              className="relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8 pt-12 ring-1 ring-gray-100"
            >
              {/* Icon bubble */}
              <motion.div
                whileHover={{ rotate: 10, scale: 1.1 }}
                className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-white p-4 rounded-full shadow-md ring-1 ring-gray-100"
              >
                <div className="text-emerald-600">{s.icon}</div>
              </motion.div>

              <h3 className="text-lg font-semibold text-gray-900 text-center mt-2">
                {s.title}
              </h3>
              <p className="text-sm text-gray-500 text-center mt-3">{s.desc}</p>

              <div className="mt-6 flex justify-center">
                <motion.button
                  whileHover={{ scale: 1.2, rotate: 15 }}
                  whileTap={{ scale: 0.9 }}
                  aria-label={`Learn more about ${s.title}`}
                  className="flex items-center justify-center w-11 h-11 rounded-full bg-white shadow-sm ring-1 ring-gray-100 hover:bg-emerald-50 transition"
                >
                  <ArrowRight className="w-5 h-5 text-gray-400" />
                </motion.button>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </div>
  );
}
