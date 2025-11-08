import React from "react";
import BlogList from "../components/BlogList";

const Blog = () => {
  return (
    <div className="min-h-screen pt-8">
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold text-gray-800 pt-15">My Latest Blogs</h1>
        <p className="text-gray-500 mt-2">Read insights, tips, and guides from our latest articles</p>
      </div>
      <BlogList />
    </div>
  );
};

export default Blog;
