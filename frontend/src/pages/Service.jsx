// ServicesSection.jsx
import React from "react";

const services = [
  { title: "Modeling", icon: "👠", description: "Lorem ipsum dolor sit amet." },
  { title: "Photoshoot", icon: "📸", description: "Lorem ipsum dolor sit amet.", featured: true },
  { title: "Branding Class", icon: "🎨", description: "Lorem ipsum dolor sit amet." },
  { title: "Acting", icon: "🎬", description: "Lorem ipsum dolor sit amet." },
  { title: "Make Up", icon: "💄", description: "Lorem ipsum dolor sit amet." },
  { title: "Networking", icon: "🤝", description: "Lorem ipsum dolor sit amet." },
];

const testimonials = [
  {
    name: "Sara Ryan",
    role: "Marketing",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    name: "Jack Austin",
    role: "Market Manager",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
];

const Service = () => {
  return (
    <section className="bg-gray-50 py-25">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-semibold mb-4">Services</h2>
        <p className="text-gray-500 mb-12">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>

        {/* Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {services.map((service, index) => (
            <div
              key={index}
              className={`p-6 rounded-lg shadow hover:shadow-lg transition-all duration-300 ${
                service.featured ? "" : "bg-white text-gray-800"
              }`}
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="font-semibold text-xl mb-2">{service.title}</h3>
              <p className="mb-4">{service.description}</p>
              <button
                className={`text-sm font-medium ${
                  service.featured ? "underline" : ""
                }`}
              >
                Learn More
              </button>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Service;
