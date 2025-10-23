import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { MenuIcon, XIcon } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="fixed top-0 left-0 z-50 w-full flex items-center justify-between px-6 md:px-16 lg:px-36 py-5">
      <Link to="/" className="max-md:flex-1">
        <h1 className="text-[22px]">
          <span className="text-primary font-semibold text-5xl">JF</span>PAPRY
        </h1>
      </Link>

      <div
        className={`max-md:absolute max-md:top-0 max-md:left-0 max-md:font-medium max-md:text-lg z-50 flex flex-col md:flex-row items-center max-md:justify-center gap-8 min-md:px-8 py-3 max-md:h-screen min-md:rounded-full backdrop-blur bg-black/50 md:bg-white/10 md:border border-gray-300/20 overflow-hidden transition-[width] duration-300 ${
          isOpen ? "max-md:w-full" : "max-md:w-0"
        }`}
      >
        <XIcon
          className="md:hidden absolute top-6 right-6 w-6 h-6 cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        />

        <Link onClick={() => { scrollTo(0, 0); setIsOpen(false); }} to="/">Home</Link>
        <Link onClick={() => { scrollTo(0, 0); setIsOpen(false); }} to="/project">Project</Link>
        <Link onClick={() => { scrollTo(0, 0); setIsOpen(false); }} to="/service">Services</Link>
        <Link onClick={() => { scrollTo(0, 0); setIsOpen(false); }} to="/about">About me</Link>
        <Link onClick={() => { scrollTo(0, 0); setIsOpen(false); }} to="/contact">Contact</Link>
      </div>

      {/* 🌈 Gradient Hire Me Button */}
      <div className="flex items-center gap-8">
        <button
          onClick={() => navigate("/contact")}
          className="px-8 py-2.5 rounded-full text-white font-medium bg-gradient-to-r  from-[#9e1467] to-[#4b0e5d] hover:opacity-80 transition-all duration-300 shadow-lg"
        >
          Hire me
        </button>
      </div>

      <MenuIcon
        onClick={() => setIsOpen(!isOpen)}
        className="max-md:ml-4 md:hidden w-8 h-8 cursor-pointer"
      />
    </div>
  );
};

export default Navbar;
