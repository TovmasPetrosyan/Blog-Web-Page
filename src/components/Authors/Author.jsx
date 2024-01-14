import React, { useState } from 'react'
import {authorsData} from "../data/Data"
import { Link } from 'react-router-dom'
import "./Author.css"

const Authors = () => {
  const[authors,setAuthors] = useState(authorsData)
  return (
   <section className="authors">
    {
      authors.length > 0 ? <div className="container authors__container">
        {
          authors.map(({id,img,name, posts})=>{
            return <Link key={id} to={`/posts/users/ ${id}`} className="author">
              <div className="author__img">
                <img src={img} alt={`Pic of ${name}`}/>
              </div>
              <div className="author__info">
                <h4>{name}</h4>
                <p>{posts}</p>
              </div>
            </Link>  
          })
        }
      </div>: <h2 className="center"> Users don't found</h2>
    }
   </section>
  )
}

export default Authors