import React from "react";
import BlogItem from "./BlogItem";
import blogsData from "./blogsData";

const Blog = () => {
  return (
    <section className="pb-10">
      <div className="flex flex-wrap md:px-4">
        {blogsData.map((blog) => (
          <BlogItem key={blog.id} blog={blog} />
        ))}
      </div>
    </section>
  );
};

export default Blog;