
import './CreatePosts.css'
import React, { useState } from 'react'



const CreatePosts = () => {
    const[title,setTitle] = useState("")
    const[category,setCategory] =useState("Uncategorized")
    const[description, setDescription] = useState("");
    const[img,setImg] = useState("")
    const categories = ["Art", "Musical Instruments", "Architecture","Other", "Weather", "Space", "Education"];
const formats= ["header", "bold", "italic", "underline", "strike", "list", "bullet", "indent", "link", "image"]
const modules = {
    toolBar: [
        [{"header" : [1,2,3,4,5,6,false]}],
        ["bold", "italic", "underline", "strike", ],
        [{'list': "ordered"}, {"list": "bullet"}, {"indent": '-1'}, {"indent": "+1"} ],
        ["link", "image"]
        ["clean"]
    ]
}
  return (
    <section className="create-post">
        <div className="container">
            <h2>Create Post</h2>
        </div>
        <form className="form create-post__form">
            <input type="text" placeholder="Title" value={title} onChange={e =>setTitle(e.target.value)}/>
            <select name="category" value={category} onChange={e => setCategory(e.target.value)}>
                {
                  categories.map((cat) => <option>{cat}</option>)
                }
            </select>
            <textarea></textarea>
            <input type="file" onChange={e => setImg(e.target.files[0])} />
            <button type="submit" className="btn primary">
                Create
            </button>

        </form>

    </section>
  )
}

export default CreatePosts