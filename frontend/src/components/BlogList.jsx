import React, { useState } from "react";
import { motion } from "framer-motion";
import BlogCard from "./BlogCard";
import { useAppContext } from "../context/AppContext";

const BlogList = () => {
  const [menu, setMenu] = useState("All");
  const { blogs, categories, input, loading, error } = useAppContext();

  if (loading) return <p className="text-center mt-10">Loading blogs...</p>;
  if (error) return <p className="text-center mt-10 text-red-500">{error}</p>;

  const filteredBlogs = () => {
    return (blogs || []).filter((blog) => {
      const title = blog.title || "";
      const categoryName = blog.category?.name || blog.category || ""; // fixed
      const matchesSearch =
        input?.trim() === "" ||
        title.toLowerCase().includes(input.toLowerCase()) ||
        categoryName.toLowerCase().includes(input.toLowerCase());
      const matchesMenu = menu === "All" || categoryName === menu;
      return matchesSearch && matchesMenu;
    });
  };

  return (
    <div>
      {/* Category Menu */}
      <div className="flex justify-center gap-4 sm:gap-2 my-10 relative text-gray-500">
        {categories.map((item) => (
          <div key={item} className="relative">
            <button
              onClick={() => setMenu(item)}
              className={`relative cursor-pointer text-gray-500 font-medium transition-colors ${
                menu === item ? "text-white" : "hover:text-gray-700"
              }`}
            >
              {menu === item && (
                <motion.div
                  layoutId="underline"
                  transition={{ type: "spring", stiffness: 500, damping: 30 }}
                  className="absolute inset-0 h-7 -z-10 bg-primary rounded-full"
                />
              )}
              <span className="relative z-10 px-4 py-1">{item}</span>
            </button>
          </div>
        ))}
      </div>

      {/* Blog Cards Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 mb-24 sm:mx-16">
        {filteredBlogs().map((blog) => (
          <BlogCard key={blog._id} blog={blog} />
        ))}
      </div>
    </div>
  );
};

export default BlogList;
