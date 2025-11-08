import React from "react";
import { useParams, Link } from "react-router-dom";
import { useAppContext } from "../context/AppContext";
import { ArrowLeft } from "lucide-react";

const BlogDetails = () => {
  const { id } = useParams();
  const { blogs } = useAppContext();

  // Find the blog by id
  const blog = (blogs || []).find((item) => item._id === id);

  if (!blog) {
    return (
      <div className="flex items-center justify-center h-screen text-gray-500 text-lg">
        Blog not found 😔
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 px-4 sm:px-8 py-25">
      {/* Back Link */}
      <Link
        to="/blog"
        className="inline-flex items-center gap-2 text-blue-600 hover:underline mb-6 font-medium"
      >
        <ArrowLeft size={18} /> Back to Blogs
      </Link>

      <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-xl overflow-hidden">
        {/* Blog Image */}
        {blog.image && (
          <img
            src={blog.image}
            alt={blog.title}
            className="w-full h-64 sm:h-80 object-cover"
          />
        )}

        <div className="p-6 sm:p-8">
          {/* Category Badge */}
          {blog.category && (
            <span className="inline-block text-xs font-medium text-blue-600 bg-blue-100 px-3 py-1 rounded-full">
              {typeof blog.category === "string"
                ? blog.category
                : blog.category?.name || "Uncategorized"}
            </span>
          )}

          {/* Title */}
          <h1 className="text-2xl sm:text-3xl font-bold mt-4 text-gray-900">
            {blog.title}
          </h1>

          {/* Subtitle */}
          {blog.subTitle && (
            <p className="text-gray-600 mt-2 text-sm sm:text-base">
              {blog.subTitle}
            </p>
          )}

          <hr className="my-5 border-gray-200" />

          {/* Description */}
          <div
            className="rich-text prose prose-sm sm:prose lg:prose-lg max-w-none text-gray-700 leading-relaxed"
            dangerouslySetInnerHTML={{ __html: blog.description }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetails;
