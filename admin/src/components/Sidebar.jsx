import React, { useContext } from "react";
import { AdminContext } from "../context/AdminContext";
import { NavLink } from "react-router-dom";
import { assets } from "../assets/assets";
import {Github , Files}  from 'lucide-react'


const Sidebar = () => {
  const { aToken } = useContext(AdminContext);


  return (
    <div className="min-h-screen bg-white border-r border-gray-400/40 w-60 sm:w-64 md:w-72">
      {aToken && (
        <ul className="text-blue-950 mt-5">
          <NavLink
            className={({ isActive }) =>
              `flex items-center gap-3 py-3.5 px-3 sm:px-6 md:px-9 cursor-pointer ${
                isActive
                  ? "bg-[#F8F9FD] border-r-4 border-gray-800 font-medium"
                  : ""
              }`
            }
            to={"/dashboard"}
          >
            <img src={assets.home_icon} alt="" className="w-5 h-5" />
            <p className="text-sm sm:text-base">Dashboard</p>
          </NavLink>

    
          <NavLink
            className={({ isActive }) =>
              `flex items-center gap-3 py-3.5 px-3 sm:px-6 md:px-9 cursor-pointer ${
                isActive
                  ? "bg-[#F8F9FD] border-r-4 border-gray-800 font-medium"
                  : ""
              }`
            }
            to={"/add-project"}
          >
            <img src={assets.add_icon} alt="" className="w-5 h-5" />
            <p className="text-sm sm:text-base">Add Projects</p>
          </NavLink>

          <NavLink
            className={({ isActive }) =>
              `flex items-center gap-3 py-3.5 px-3 sm:px-6 md:px-9 cursor-pointer ${
                isActive
                  ? "bg-[#F8F9FD] border-r-4 border-gray-800 font-medium"
                  : ""
              }`
            }
            to={"/All-projects"}
          >
            <Files size={23} />
            <p className="text-sm sm:text-base">All-projects</p>
          </NavLink>
        </ul>
      )}
    </div>
  );
};

export default Sidebar;