const express = require('express')
const app = express()
const cors = require('cors')
const mongoose = require('mongoose')

const blogSchema = mongoose.Schema({
    title: String,
    author: String,
    url: String,
    likes: Number
  })
  
  const Blog =  mongoose.model('Blog', blogSchema)
  
  const mongoUrl = 'mongodb+srv://fullstack:poopoo123@cluster0-icpr3.mongodb.net/bloglist?retryWrites=true&w=majority'
  
  mongoose.connect(mongoUrl, { useNewUrlParser: true, useUnifiedTopology: true})
  
  app.use(cors())
  app.use(express.json())
  
  app.get('/api/blogs', (request, response) => {
    Blog
      .find({})
      .then(blogs => {
        response.json(blogs)
      })
  })
  
  app.post('/api/blogs', (request, response) => {
    const blog = new Blog(request.body)
  
    blog
      .save()
      .then(result => {
        response.status(201).json(result)
      })
  })
  
  module.exports = app