import React from "react";
import blogpageData from "../../data/blogpageData";
import { Link } from "react-router-dom";
const Blog = (props) => {
  const blogs = blogpageData.map((blog) => {
    return (
      <div className="col-lg-4 col-12">
        <div className="blog" key={blog.id}>
          <div className="blog-img">
            <img src={blog.img} alt="" />
          </div>
          <div className="blog-text">
            <h2>{blog.title}</h2>
            <p>{blog.descshort}</p>
            <button>
              <Link className="buttonlink" to={`/blog/${blog.id}`}>
                Read More
              </Link>
            </button>
          </div>
        </div>
      </div>
    );
  });
  return (
    <section className="blogpage">
      <div className="container">
        <div className="blogpage-text">
          <div className="circle"></div>
          <h2>Blog</h2>
        </div>
        <div className="blogpage-main">
          <div className="container">
            <div className="row">{blogs}</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
