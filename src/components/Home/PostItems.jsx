import React from 'react'
import PostAuthor from './PostAuthor'
import { Link } from 'react-router-dom'
import './PostItems.css'

const PostItems = ({postId, img, category,title,desc,authorId}) => {
    let shortDesc = desc.length > 100 ? desc.substr(0,100) + "..." : desc;
    let shortTitle = title.length > 10? title.substr(0,100) + "..." : title;
  return (
    <article className="post">
        <div className="post_img">
            <img src={img} alt={title}/>
        </div>
        <div className="post__content">
            <Link to={`/posts/${postId}`}>
                <h3>{shortTitle}</h3>
            </Link>

            <p>{shortDesc}</p>

            <div className="post_footer">
                <PostAuthor/>
                <Link to={`posts/categories/${category}`} className="btn category">{category}</Link>
            </div>
        </div>

    </article>
  )
}

export default PostItems