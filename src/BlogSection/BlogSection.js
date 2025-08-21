import React from "react";
import "./BlogSection.css";

import blog1 from "../assets/f1.jpg";
import blog2 from "../assets/f2.jpg";
import blog3 from "../assets/f3.jpg";

const blogs = [
  {
    img: blog1,
    title: "The pan pacific lounge buffet menu price and address",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis.",
    link: "#",
  },
  {
    img: blog2,
    title: "Buffet stories Canada menu price items and contact",
    desc: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    link: "#",
  },
  {
    img: blog3,
    title: "White hall buffet menu price address and good review",
    desc: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    link: "#",
  },
];

const BlogSection = () => {
  return (
    <section className="blog-section">
      <div className="blog-header">
        <h2>
          LATEST <span>NEWS & BLOGS</span>
        </h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>

      <div className="blog-grid">
        {blogs.map((blog, index) => (
          <div className="blog-card" key={index}>
            <img src={blog.img} alt={blog.title} />
            <div className="blog-content">
              <h3>{blog.title}</h3>
              <p>{blog.desc}</p>
              <a href={blog.link} className="read-more">
                Read More &gt;
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BlogSection;
