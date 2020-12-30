import axios from "axios";
import { useEffect, useState } from "react";
import "./Blog.css";

const Blog=()=>{
  const [blogs,setBlog]=useState([])
  useEffect(()=>{
    axios.get("js/data.json").then((res)=>{
      setBlog(res.data.blog)
    })
  },[])
  const listBlog =blogs.map((itemBlog)=>{
    return(
      <div className="col-md-4" key={itemBlog.id}>
        <div className="blog-box">
          <div className="img">
            <img src={itemBlog.image} alt="Images Post Blog"/>
          </div>
          <h3 className="title">{itemBlog.title}</h3>
          <p className="desc">{itemBlog.desc}</p>
          <button className="btn">READ MORE</button>
        </div>
      </div>
    )
  })
  return(
    <div className="blog text-center">
      <div className="container">
        <h2 className="title">Blog Entries</h2>
        <p className="desc">Integer molestie aliquam gravida. Nullam nec arcu finibus, imperdiet nulla vitae, placerat nibh. Cras maximus venenatis molestie.</p>
        <div className="row">
          {listBlog}
        </div>
      </div>
    </div>
  )
}
export default Blog;