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

  const divRef = React.useRef(null);

  const [visible, setVisible] = React.useState(false);
  const [mousePos, setMousePos] = React.useState({ x: 0, y: 0 });
  const [gradPos, setGradPos] = React.useState({ x: 0, y: 0 });

  // Track mouse position
  const handleMouseMove = (e) => {
    if (divRef.current) {
      const bounds = divRef.current.getBoundingClientRect();
      setMousePos({ x: e.clientX - bounds.left, y: e.clientY - bounds.top });
    }
  };

  // Smoothly move gradient toward mouse using requestAnimationFrame
  React.useEffect(() => {
    let animationFrame;
    const speed = 0.1; // smaller = smoother/slower

    const animate = () => {
      setGradPos((prev) => ({
        x: prev.x + (mousePos.x - prev.x) * speed,
        y: prev.y + (mousePos.y - prev.y) * speed,
      }));
      animationFrame = requestAnimationFrame(animate);
    };

    animate();
    return () => cancelAnimationFrame(animationFrame);
  }, [mousePos]);

  return (
    <div
      className="mx-4 sm:mx-[8%] relative overflow-hidden"
      ref={divRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
    >
      {/* Smooth Gradient Circle */}
      {visible && (
        <div
          style={{
            position: 'absolute',
            top: gradPos.y - 75,
            left: gradPos.x - 75,
            width: 150,
            height: 150,
            borderRadius: '50%',
            pointerEvents: 'none',
            background: 'radial-gradient(circle, rgba(255,0,150,0.5), transparent 50%)',
          }}
        />
      )}

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
      {!isAdminRoute && <Footer  />}
    </div>
  );
};

export default App;
