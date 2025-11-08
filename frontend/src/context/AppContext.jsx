import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

export const AppContext = createContext();
export const useAppContext = () => useContext(AppContext);

const AppContextProvider = ({ children }) => {
  const [projectsData, setProjectsData] = useState([]);
  const [blogs, setBlogs] = useState([]);
  const [categories, setCategories] = useState(["All"]); // dynamic categories
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [input, setInput] = useState(""); // Search input

  const backendUrl = import.meta.env.VITE_BACKEND_URL; // example: http://localhost:4000

  useEffect(() => {
     const fetchProjects = async () => {
      try {
        const response = await axios.get(`${backendUrl}/projects`); // public route
        setProjectsData(response.data.projects || []);
      } catch (err) {
        console.error("Failed to fetch projects:", err);
        setError("Failed to load projects.");
      } finally {
        setLoading(false);
      }
    };


    const fetchBlogs = async () => {
      try {
        const res = await axios.get(`${backendUrl}/api/blogs`);
        setBlogs(res.data.data || res.data || []);
      } catch (err) {
        console.error("Failed to fetch blogs:", err);
        setError("Failed to load blogs.");
      }
    };

    const fetchCategories = async () => {
      try {
        const res = await axios.get(`${backendUrl}/api/categories`);
        setCategories(["All", ...res.data.map((cat) => cat.name)]);
      } catch (err) {
        console.error("Failed to fetch categories:", err);
      }
    };

    fetchProjects();
    fetchBlogs();
    fetchCategories();
  }, [backendUrl]);

  const value = {
    projectsData,
    blogs,
    categories,
    loading,
    error,
    input,
    setInput,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export default AppContextProvider;
