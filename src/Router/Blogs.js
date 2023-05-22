import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { BlogsData } from '../data'
import './Blogs.css';


const Blogs = () => {
  const[blogs,setBlogs]= useState(BlogsData);


  const truncateString = (str, num ) => {
      if(str.length > num)
      {
        return str.slice(0,num) + "...";
      }
      else{
        return str;
      }
  }

 
  return (
    <div>
      <h1>Blogs</h1>
      <section className='SECTION'>
          {
            blogs.map((blog)=> {
                const {id , title, body} = blog

              return <article key={id} className='ARTICLE'>

                <h3>{title}</h3>
                <p className='paragraph'>{truncateString(body, 300)}</p>
                <Link to={title} state={{id, title, body}}>Learn More</Link>

              </article>
            })
          }
      </section>
    </div>
  )
}

export default Blogs
