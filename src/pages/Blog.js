import React from "react";
import Blog1 from "../components/Blog1";
import Blog2 from "../components/Blog2";
import BlogHero from "../components/BlogHero";
import CategoryBar from "../components/CategoryBar";
import Footer from "../components/Footer";

const Blog = () => {
  return (
    <div className="">
      <BlogHero />
      <CategoryBar />
      <Blog1 />
      <Blog2 />
      <Footer />
    </div>
  );
};

export default Blog;
