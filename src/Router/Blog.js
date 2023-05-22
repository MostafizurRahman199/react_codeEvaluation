import React, { useEffect, useState } from 'react'
import { useLocation, useParams } from 'react-router-dom'
import { BlogsData } from '../data';

const Blog = () => {

const {title} = useParams();
const location = useLocation();


// console.log(location);

// const [bodyData, setBodyData] = useState("");

// useEffect(() => {
  
// const blogData = BlogsData.filter((blog) => blog.title === title)
//   return () => { 
//     setBodyData(blogData[0].body); 
// } 

// },[])



  return ( 
    <div>
      <h1>{title}</h1>
      <p>{location.state.body.slice(0,500)}</p>
      <p>{location.state.body.slice(501,800)}</p>
      <p>{location.state.body.slice(801,1300)}</p>
    </div>
  )
}

export default Blog
