import React from "react";

import logo from "../images/m (2).jpg";

const BlogHero = () => {
  return (
    <section className="container mt-2 mb-4">
      <div className=" mx-auto ">
        <div className="col-md text-center" id="#company">
          <h1>Blog Post</h1>
        </div>

        <img
          src={logo}
          alt={BlogHero.png}
          className="col-md "
          height="350px"
          style={{ objectFit: "cover" }}
        />
      </div>
    </section>
  );
};
export default BlogHero;
