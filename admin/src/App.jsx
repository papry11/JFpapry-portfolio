import React from "react";
import Login from "./pages/Login";
import { ToastContainer } from "react-toastify";
import {Route , Routes} from 'react-router-dom'
import { useContext } from "react";
import { AdminContext } from "./context/AdminContext";
import Navbar from "./components/Navabar";
import Sidebar from "./components/Sidebar";
import Dashboard from "./pages/Dashboard";
import AddProject from "./pages/AddProject";
import AllProjects from "./pages/AllProjects";

const App = () => {
  const { aToken } = useContext(AdminContext);

  return aToken ? (
    <div className="bg-[#F8F9FD]">
      <ToastContainer />
      <Navbar />
      <div className="flex items-start">
        <Sidebar />
        <Routes>
          <Route path='/' element={<></>} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/add-project' element={<AddProject />} />
          <Route path='/All-projects' element={<AllProjects/>} />
        </Routes>
      </div>
    </div>
  ) : (
    <>
      <Login />
      <ToastContainer />
    </>
  );
};

export default App;
