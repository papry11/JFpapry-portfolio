import React from "react";
import { useParams, Link } from "react-router-dom";
import { useAppContext } from "../context/AppContext";
import { ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";

const BlogDetails = () => {
  const { id } = useParams();
  const { blogs } = useAppContext();

  const blog = (blogs || []).find((item) => item._id === id);

  if (!blog) {
    return (
      <div className="flex items-center justify-center h-screen text-gray-500 text-lg">
        Blog not found 😔
      </div>
    );
  }

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white px-5 sm:px-10 py-20">
      {/* Back Button */}
      <div className="max-w-5xl mx-auto mb-8">
        <Link
          to="/blog"
          className="inline-flex items-center gap-2 text-indigo-600 hover:text-indigo-700 font-medium transition-all"
        >
          <ArrowLeft size={18} />
          <span>Back to Blogs</span>
        </Link>
      </div>

      {/* Blog Card */}
      <motion.div
        initial="hidden"
        animate="show"
        variants={fadeUp}
        className="max-w-5xl mx-auto bg-white rounded-3xl shadow-lg overflow-hidden border border-gray-100"
      >
        {/* Blog Image */}
        {blog.image && (
          <div className="relative w-full bg-gray-100 flex items-center justify-center p-4 sm:p-6">
            <img
              src={blog.image}
              alt={blog.title}
              className="max-h-[550px] w-auto object-contain transition-transform duration-700 hover:scale-105 rounded-xl"
            />
          </div>
        )}

        {/* Blog Content */}
        <div className="p-6 sm:p-10">
          {/* Category */}
          {blog.category && (
            <span className="inline-block mb-3 text-xs font-semibold text-indigo-700 bg-indigo-100 px-3 py-1 rounded-full">
              {typeof blog.category === "string"
                ? blog.category
                : blog.category?.name || "Uncategorized"}
            </span>
          )}

          {/* Title */}
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 leading-tight mb-3">
            {blog.title}
          </h1>

          {/* Subtitle */}
          {blog.subTitle && (
            <p className="text-gray-600 text-base sm:text-lg mb-5">
              {blog.subTitle}
            </p>
          )}

          {/* Divider */}
          <hr className="my-6 border-gray-200" />

          {/* Description */}
          <motion.div
            variants={fadeUp}
            className="prose prose-gray prose-lg max-w-none leading-relaxed text-gray-700"
            dangerouslySetInnerHTML={{ __html: blog.description }}
          ></motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default BlogDetails;
