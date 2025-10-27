import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { MenuIcon, XIcon } from "lucide-react";
import {
  Code,
  Server,
  Database,
  Cloud,
  Layers,
  ArrowRight,
} from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <div
      className="fixed top-0 left-0 z-50 w-full flex items-center justify-between px-6 md:px-16 lg:px-36 py-4
      bg-white/10 backdrop-blur-md"
    >
      {/* Logo */}
      <Link to="/" className="max-md:flex-1">
        <h1 className="text-[22px] font-semibold text-primary">
          <span className="text-primary font-bold text-5xl">JF</span>PAPRY
        </h1>
      </Link>

      {/* Nav Links */}
      <div
        className={`max-md:absolute max-md:top-0 max-md:left-0 max-md:font-medium max-md:text-lg z-50 flex flex-col md:flex-row items-center 
          max-md:justify-center gap-8 py-3 max-md:h-screen md:rounded-full 
          backdrop-blur-md bg-black/70 md:bg-white/10 border border-white/20 
          overflow-hidden transition-[width] duration-300 ${
            isOpen ? "max-md:w-full" : "max-md:w-0"
          }`}
      >
        <XIcon
          className="md:hidden absolute top-6 right-6 w-7 h-7 text-white cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        />

        <Link
          onClick={() => {
            scrollTo(0, 0);
            setIsOpen(false);
          }}
          to="/"
          className="text-white md:text-primary hover:text-blue-600 transition"
        >
          Home
        </Link>
        <Link
          onClick={() => {
            scrollTo(0, 0);
            setIsOpen(false);
          }}
          to="/project"
          className="text-white md:text-primary hover:text-blue-600 transition"
        >
          Project
        </Link>
        <Link
          onClick={() => {
            scrollTo(0, 0);
            setIsOpen(false);
          }}
          to="/service"
          className="text-white md:text-primary hover:text-blue-600 transition"
        >
          Services
        </Link>
        <Link
          onClick={() => {
            scrollTo(0, 0);
            setIsOpen(false);
          }}
          to="/about"
          className="text-white md:text-primary hover:text-blue-600 transition"
        >
          About Me
        </Link>
        <Link
          onClick={() => {
            scrollTo(0, 0);
            setIsOpen(false);
          }}
          to="/contact"
          className="text-white md:text-primary hover:text-blue-600 transition"
        >
          Contact
        </Link>
      </div>

      <div className="button-bg rounded-full p-0.5 hover:scale-105 transition duration-300 active:scale-100">
        <button
          onClick={() => {
            navigate("/contact");
            scrollTo(0, 0);
          }}
          className="px-8 text-sm py-2.5 text-white rounded-full font-medium bg-gray-800"
        >
          Hire Me
        </button>
      </div>
      {/* Mobile Menu Icon */}
      <MenuIcon
        onClick={() => setIsOpen(!isOpen)}
        className="max-md:ml-4 md:hidden w-8 h-8 text-primary cursor-pointer"
      />
    </div>
  );
};

export default Navbar;
