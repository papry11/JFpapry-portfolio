import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AdminContext } from "../context/AdminContext";
import {
  Home,
  FolderPlus,
  FolderOpen,
  PenSquare,
  FileText,
} from "lucide-react";

const Sidebar = () => {
  const { aToken } = useContext(AdminContext);

  const menuItems = [
    {
      name: "Dashboard",
      icon: <Home size={21} />,
      path: "/dashboard",
    },
    {
      name: "Add Project",
      icon: <FolderPlus size={21} />,
      path: "/add-project",
    },
    {
      name: "All Projects",
      icon: <FolderOpen size={21} />,
      path: "/All-projects",
    },
    {
      name: "Add Blog",
      icon: <PenSquare size={21} />,
      path: "/add-blog",
    },
    {
      name: "All Blogs",
      icon: <FileText size={21} />,
      path: "/all-blog",
    },
  ];

  return (
    <div className="min-h-screen bg-white border-r border-gray-200 w-16 sm:w-60 sm:min-w-[240px] md:w-72 shadow-sm">
      {aToken && (
        <ul className="text-gray-800 mt-6 flex flex-col gap-1">
          {menuItems.map((item, index) => (
            <NavLink
              key={index}
              to={item.path}
              className={({ isActive }) =>
                `flex items-center gap-3 py-3.5 px-3 sm:px-6 md:px-9 rounded-lg cursor-pointer transition-all duration-200 ${
                  isActive
                    ? "bg-gray-100 border-r-4 border-gray-800 text-gray-900 font-medium shadow-inner"
                    : "hover:bg-gray-50 text-gray-600"
                }`
              }
            >
              <span className="text-gray-700">{item.icon}</span>
              <p className="text-sm sm:text-base hidden sm:block">{item.name}</p>
            </NavLink>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Sidebar;
