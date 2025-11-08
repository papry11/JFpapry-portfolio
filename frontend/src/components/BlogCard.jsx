import React from "react";
import { useNavigate } from "react-router-dom";

const BlogCard = ({ blog }) => {
  const { title, description, category, image, _id } = blog;
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/blog/${_id}`)}
      className="w-full rounded-lg overflow-hidden shadow-md hover:shadow-primary/30 hover:scale-[1.02] transition-transform duration-300 cursor-pointer bg-white"
    >
      {image && (
        <img
          src={image}
          alt={title}
          className="aspect-video w-full object-cover"
          loading="lazy"
        />
      )}

      <span className="ml-5 mt-4 px-3 py-1 inline-block bg-primary/20 rounded-full text-primary text-xs font-medium">
        {category?.name || "Uncategorized"} {/* fixed */}
      </span>

      <div className="p-5">
        <h5 className="mb-2 font-semibold text-gray-900 line-clamp-2">{title}</h5>
        <p
          className="text-xs text-gray-600 line-clamp-3"
          dangerouslySetInnerHTML={{ __html: description?.slice(0, 200) || "" }}
        ></p>
      </div>
    </div>
  );
};

export default BlogCard;
