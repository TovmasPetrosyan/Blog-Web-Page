import React, { useState } from 'react'
import { CardPosts } from '../data/Data'
import PostItems from './PostItems'
import "./Posts.css"

const Posts = () => {
    const[posts,setPosts] = useState(CardPosts)
  return (
    
    <section className="posts">
       {
        posts.length > 0 ? <div className="container posts_container">
        {
            posts.map(({id, img,category,title,desc,authorId})=> <PostItems key={id} postId={id} img={img} title={title} desc={desc} category={category} authorId={authorId}/>)
        }
        </div> : <h2 className="center">No posts founds</h2>
       } 
        
    </section>
    
  )
}

export default Posts