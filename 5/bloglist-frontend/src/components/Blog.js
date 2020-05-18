import React, { useState, useEffect } from 'react'
import blogService from '../services/blogs'


const Blog = ({ blog, sortBlogs, setBlogs, onClick }) => {

  const [state, setState] = useState(null)
  const [buttonText, setText] = useState('view')

  useEffect(() => {
    setState(blog.title + ' ' + blog.author)
  }, [blog.title, blog.author])

  const blogStyle = {
    paddingTop: 10,
    paddingLeft: 2,
    border: 'solid',
    borderWidth: 1,
    marginBottom: 5
  }

  const handleLike = async () => {

    const newBlog = {
      id: blog.id,
      likes: blog.likes + 1,
      author: blog.author,
      title: blog.title,
      url: blog.url
    }

    blogService.update(blog.id, newBlog)
    
  }

  const handleClick = () => {
    if (buttonText === 'view') {
      const text = (
        <div>
          {blog.title} {blog.author}
          <br />
          {blog.url}
          <br />
        likes {blog.likes} <button onClick={handleLike}>like</button>
          <br />
        </div>
      )
      setState(text)
      setText('cancel')
    } else {
      setState(blog.title + ' ' + blog.author)
      setText('view')
    }
  }

  return (
    <div className="blog" style={blogStyle}>
      {state} <button onClick={handleClick}>{buttonText}</button>
    </div>
  )
}
export default Blog
