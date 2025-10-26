import React from 'react';
import Navbar from './components/Navbar';
import { Route, Routes, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import Projects from './pages/Projects';
import ProjectDetails from './pages/ProjectDetails';
import About from './pages/About';
import Contact from './pages/Contact';
import Footer from './components/Footer';
import { Toaster } from 'react-hot-toast';
import Service from './pages/Service';

const App = () => {
  const isAdminRoute = useLocation().pathname.startsWith('/admin');

  return (
    <div>
      <div
      className="px-4 sm:mx-[8%] relative overflow-hidden"
    >

      <Toaster />
      {!isAdminRoute && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project" element={<Projects />} />
        <Route path="/project/:id" element={<ProjectDetails />} />
        <Route path="/service" element={<Service />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      </div>
      {!isAdminRoute && <Footer  />}
    </div>
  );
};

export default App;
