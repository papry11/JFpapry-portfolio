import React from 'react';

const About = () => {
  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center gap-12">
        
        {/* Image */}
        <div className="flex-shrink-0">
          <img 
            src="your-photo.jpg" 
            alt="Your Name" 
            className="w-64 h-64 md:w-80 md:h-80 object-cover rounded-xl shadow-lg hover:scale-105 transition-transform duration-300"
          />
        </div>

        {/* Text Content */}
        <div className="flex-1">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Hi, I'm <span className="text-indigo-600">Your Name</span>
          </h2>
          <p className="text-gray-600 mb-6">
            I'm a passionate <span className="font-semibold">Web Developer</span> specializing in creating modern, responsive, and interactive web experiences. I love turning ideas into reality using clean code and creative solutions.
          </p>

          {/* Skills/Stats */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
            <div className="text-center">
              <p className="text-2xl font-bold text-indigo-600">5+</p>
              <p className="text-gray-500 text-sm">Years Experience</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-indigo-600">50+</p>
              <p className="text-gray-500 text-sm">Projects</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-indigo-600">10+</p>
              <p className="text-gray-500 text-sm">Technologies</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-indigo-600">100%</p>
              <p className="text-gray-500 text-sm">Client Satisfaction</p>
            </div>
          </div>

          {/* Call-to-Action Button */}
          <a href="#contact" className="mt-8 inline-block bg-indigo-600 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-indigo-500 transition-colors duration-300">
            Let's Collaborate
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
