import React from "react";
import { Mail, Send, Github, Linkedin } from "lucide-react"; // Added icons

export default function ContactSection() {
  return (
    <div
      id="contact"
      className="pt-40 rounded-2xl relative overflow-hidden py-20 px-6 md:px-12 bg-gradient-to-br from-slate-50 via-white to-slate-100"
    >
      {/* Decorative background shapes */}
      <div className="absolute -top-32 -right-32 w-80 h-80 bg-slate-200/50 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-slate-300/40 rounded-full blur-3xl"></div>

      <div className="relative z-10 max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Left content */}
        <div className="space-y-6 text-center md:text-left">
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900">
            Let’s Connect & Create Something Great
          </h2>
          <p className="text-gray-600 text-base md:text-lg max-w-md mx-auto md:mx-0 leading-relaxed">
            Have a project in mind or want to collaborate? Fill out the form,
            and we’ll get back to you within a few hours.
          </p>

          {/* Contact Info */}
          <div className="flex flex-col gap-3 justify-center md:justify-start mt-6">
            <div className="flex items-center gap-2 text-slate-700 justify-center md:justify-start">
              <Mail size={18} />
              <span className="text-sm">
                jannatulferdouspapry115@gmail.com
              </span>
            </div>

            {/* Social Links */}
            <div className="flex justify-center md:justify-start gap-4 mt-2">
              <a
                href="https://github.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-slate-100 hover:bg-slate-200 transition-all shadow-sm hover:shadow-md"
              >
                <Github size={25} className="text-slate-800" />
              </a>

              <a
                href="https://linkedin.com/in/yourprofile"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-slate-100 hover:bg-slate-200 transition-all shadow-sm hover:shadow-md"
              >
                <Linkedin size={25} className="text-slate-800" />
              </a>

              <a
                href="mailto:jannatulferdouspapry115@gmail.com"
                className="p-2 rounded-full bg-slate-100 hover:bg-slate-200 transition-all shadow-sm hover:shadow-md"
              >
                <Mail size={25} className="text-slate-800" />
              </a>
            </div>
          </div>
        </div>

        {/* Right form card */}
        <div className="bg-white/70 backdrop-blur-xl rounded-3xl shadow-2xl border border-slate-100 p-8 md:p-10 relative overflow-hidden w-full md:w-[82%] mx-auto">
          {/* Accent line */}
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-slate-900 via-slate-700 to-slate-900"></div>

          <form className="space-y-2 w-full">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Full Name
              </label>
              <input
                type="text"
                id="name"
                placeholder="Enter your name"
                className="w-full px-4 py-3 text-sm rounded-lg border border-slate-200 focus:ring-2 focus:ring-slate-400 focus:outline-none transition duration-200 text-gray-400"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                placeholder="Enter your email"
                className="w-full px-4 py-3 text-sm rounded-lg border border-slate-200 text-gray-400 focus:ring-2 focus:ring-slate-400 focus:outline-none transition duration-200"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Message
              </label>
              <textarea
                id="message"
                rows="4"
                placeholder="Write your message..."
                className="w-full px-4 py-3 text-sm rounded-lg border border-slate-200 text-gray-400 focus:ring-2 focus:ring-slate-400 focus:outline-none resize-none transition duration-200"
              ></textarea>
            </div>

            {/* Button */}
            <button
              type="submit"
              className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 mt-4 text-white font-semibold rounded-xl text-sm md:text-base bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 hover:from-slate-800 hover:to-slate-700 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] shadow-lg"
            >
              <Send size={16} />
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
