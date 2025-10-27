import React from "react";
import { Link } from "react-router-dom";
import { Mail, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="px-6 mt-12 md:px-16 lg:px-24 xl:px-32 pt-8 w-full bg-gray-900 text-gray-300">
      <div className="flex flex-col md:flex-row justify-between w-full gap-10 border-b border-gray-500/30 pb-6">
        <div className="md:max-w-96">
          <Link to="/" className="max-md:flex-1">
            <h1 className="text-[22px] font-semibold text-white">
              <span className="font-bold text-5xl">JF</span>PAPRY
            </h1>
          </Link>
          <p className="mt-6 text-sm">
            Full Stack Developer. Delivering scalable, efficient, and
            user-centric web solutions with modern technologies.
          </p>
        </div>

        <div className="flex-1 flex items-start md:justify-end gap-20">
          <div>
            <h2 className="font-semibold mb-5 text-gray-300">Company</h2>
            <ul className="text-sm space-y-2">
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/about">About us</a>
              </li>
              <li>
                <a href="/contact">Contact us</a>
              </li>
              <li>
                <a href="/">Privacy policy</a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="font-semibold mb-5 text-gray-200">Get in touch</h2>
            <div className="text-sm space-y-2">
              <div className="flex items-center gap-4 mt-4">
            <a target="_blank"
              href="https://mail.google.com/mail/?view=cm&fs=1&to=jannatulferdouspapry115@gmail.com"
              className="text-gray-300 hover:text-red-500 transition-all duration-300 hover:scale-110"
            >
              <Mail size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/jannatulferdouspapry/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-blue-500 transition-all duration-300 hover:scale-110"
            >
              <Linkedin size={24} />
            </a>
          </div>
            </div>
          </div>
        </div>
      </div>
      <p className="py-4 text-gray-400 text-center">
        © {new Date().getFullYear()} Jannatul Ferdous Papry
      </p>
    </footer>
  );
};

export default Footer;
