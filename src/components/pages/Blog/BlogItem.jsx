import React from "react";
import { Link } from "react-router-dom";

const BlogItem = ({ blog }) => {
  const {
    image,
    title,
    description,
    slug,
    category,
    date,
    readTime,
  } = blog;

  return (
    <div className="w-full lg:w-1/2">
      <div className="my-4 md:mx-4 bg-white rounded-xl shadow hover:shadow-lg transition duration-300 overflow-hidden group">

        <div className="relative h-56 overflow-hidden">

          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition duration-500 group-hover:scale-110"
          />

          <span className="absolute top-4 left-4 bg-purple-600 text-white text-xs px-3 py-1 rounded-full">
            {category}
          </span>

        </div>

        <div className="p-6">

          <div className="flex items-center text-sm text-gray-400 mb-3">

            <span>{date}</span>

            <span className="mx-2">•</span>

            <span>{readTime} read</span>

          </div>

          <h3 className="text-xl font-semibold text-gray-800 mb-3 leading-8">

            {title}

          </h3>

          <p className="text-gray-500 leading-7 mb-6">

            {description}

          </p>

          <Link
            to={`/blogs/${slug}`}
            className="inline-flex items-center font-medium text-purple-600 hover:text-purple-800 transition"
          >
            Read Article →
          </Link>

        </div>

      </div>
    </div>
  );
};

export default BlogItem;