import React from "react";
import { Link, useParams } from "react-router-dom";
import blogsData from "./blogsData";
import { FaLinkedin } from "react-icons/fa";

const BlogDetail = () => {
  const { slug } = useParams();

  const blog = blogsData.find((item) => item.slug === slug);

  if (!blog) {
    return (
      <section className="p-10">
        <div className="bg-white rounded-xl shadow p-10 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Article Not Found
          </h2>

          <p className="text-gray-500 mb-6">
            The article you're looking for doesn't exist.
          </p>

          <Link
            to="/blogs"
            className="inline-block bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition"
          >
            Back to Blogs
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section className="pb-10">

      <div className="md:px-4">

        <div className="bg-white rounded-xl shadow overflow-hidden">

          <img
            src={blog.image}
            alt={blog.title}
            className="w-full h-80 object-cover"
          />

          <div className="p-8">

            <span className="inline-block bg-purple-100 text-purple-600 text-sm px-3 py-1 rounded-full mb-5">
              {blog.category}
            </span>

            <h1 className="text-4xl font-bold text-gray-800 mb-5">
              {blog.title}
            </h1>

            <div className="flex items-center text-gray-500 text-sm mb-8">

              <span>{blog.date}</span>

              <span className="mx-2">•</span>

              <span>{blog.readTime} read</span>

            </div>

            <div className="prose max-w-none text-gray-700 leading-8 whitespace-pre-line">

              {blog.content}

            </div>

            <div className="border-t mt-10 pt-8 flex flex-wrap gap-4">

              <Link
                to="/blogs"
                className="px-6 py-3 border border-purple-600 text-purple-600 rounded-lg hover:bg-purple-600 hover:text-white transition"
              >
                ← Back to Blogs
              </Link>

              {blog.linkedin !== "#" && (
                <a
                  href={blog.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-[#0A66C2] text-white rounded-lg hover:opacity-90 transition flex items-center gap-3"
                >
                  <FaLinkedin />

                  Read Full Article on LinkedIn
                </a>
              )}

            </div>

          </div>

        </div>

      </div>

    </section>
  );
};

export default BlogDetail;