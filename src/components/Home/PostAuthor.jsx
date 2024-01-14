import React from 'react'
import { Link } from 'react-router-dom'
import user1 from "../images/user1.avif"
import './PostAuthor.css'
const PostAuthor = () => {
  return (
    <Link to={`posts/users/sdfsdf`} className="post_author">
      <div className="post_author-avatar">
            <img src={user1} alt=""/>
        </div>
        <div className="post_author-details">
            <h5>By: Lus Asl</h5>
            
        </div>
    </Link>
    
     
    
  )
}

export default PostAuthor