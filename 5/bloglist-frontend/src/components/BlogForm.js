import React, { useState } from 'react'
import blogService from '../services/blogs'


const BlogForm = () => {

  const [title, setTitle] = useState('')
  const [author, setAuthor] = useState('')
  const [url, setUrl] = useState('')

  const handleCreateBlog = async () => {
    const loggedUserJSON = window.localStorage.getItem('loggedNoteappUser')
    const user = JSON.parse(loggedUserJSON)
    await blogService.create({
      title, author, url, likes: 0, token: user.token
    })
  }

  return (
    <form onSubmit={handleCreateBlog}>
      <div>
          title:
        <input
          type="text"
          value={title}
          name="Title"
          onChange={({ target }) => setTitle(target.value)}
        />
      </div>
      <div>
          author:
        <input
          type="text"
          id="author"
          value={author}
          name="Author"
          onChange={({ target }) => setAuthor(target.value)}
        />
      </div>
      <div>
          url:
        <input
          type="text"
          value={url}
          name="Url"
          onChange={({ target }) => setUrl(target.value)}
        />
      </div>
      <button id="submit-button" type="submit">create</button>
    </form>
  )
}

export default BlogForm