import React from 'react'
import { useParams } from 'react-router-dom'
import blogpageData from '../../data/blogpageData'

const BlogDetail = () => {
    const {blogId} = useParams()
    const thisBlog = blogpageData.find(blog=>blog.id == blogId)
  return (
      <section className="blogdetail">
      <div className="container">
        <div className="blogdetail-main">
        <div className="col-12">
                <h1>{thisBlog.title}</h1>
            <div className="blogdetail-img">
                <img src={thisBlog.img} alt="" />
            </div>
            <p>{thisBlog.desc}</p>
            <p>{thisBlog.desc}</p>
        </div>
        </div>
   
      </div>
      </section>
  )
}

export default BlogDetail