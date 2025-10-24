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
        className={`max-md:absolute max-md:top-0 max-md:left-0 max-md:font-medium max-md:text-lg z-50 flex flex-col md:flex-row items-center max-md:justify-center gap-8 min-md:px-8 py-3 max-md:h-screen min-md:rounded-full backdrop-blur bg-black/10 md:bg-white/10 md:border border-gray-300/60 overflow-hidden transition-[width] duration-300 ${
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
        <div className="button-bg rounded-full p-0.5 hover:scale-105 transition duration-300 active:scale-100">
                <button className="px-10 text-sm py-2.5 border border-white/20 text-white rounded-full font-medium bg-gray-800">
                    HIRE ME
                </button>
            </div>
      </div>

      <MenuIcon
        onClick={() => setIsOpen(!isOpen)}
        className="max-md:ml-4 md:hidden w-8 h-8 cursor-pointer"
      />
    </div>
  );
};

export default Navbar;
