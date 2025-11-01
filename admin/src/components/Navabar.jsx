import React, { useContext } from "react";
import { AdminContext } from "../context/AdminContext";
import { useNavigate } from "react-router-dom";


const Navbar = () => {
  const { aToken, setAToken } = useContext(AdminContext);


  const navigate = useNavigate();

  const logout = () => {
    navigate("/");
    aToken && setAToken("");
    aToken && localStorage.removeItem("aToken");
  };

  return (
    <div className="flex justify-between items-center px-3 sm:px-6 md:px-10 py-3 sm:py-4 border-b border-gray-300 bg-white">
      {/* Logo + Role */}
      <div className="flex items-center gap-2 text-xs sm:text-sm">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl text-black font-semibold">
          JF 
        </h1>
        <p className="border px-2 sm:px-2.5 py-0.5 rounded-full border-gray-400 text-xs sm:text-sm">
          Admin
        </p>
      </div>

      {/* Logout Button */}
      <button
        onClick={logout}
        className="bg-gray-800 text-white px-4 sm:px-6 lg:px-10 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm lg:text-base"
      >
        Logout
      </button>
    </div>
  );
};

export default Navbar;