const express = require('express')
const app = express()
const cors = require('cors')
const mongoose = require('mongoose')
const blogsRouter = require('./controllers/blogs')
  
  const mongoUrl = 'mongodb+srv://fullstack:poopoo123@cluster0-icpr3.mongodb.net/bloglist?retryWrites=true&w=majority'
  
  mongoose.connect(mongoUrl, { useNewUrlParser: true, useUnifiedTopology: true})
  
  app.use(cors())
  app.use(express.json())

  app.use('/api/blogs', blogsRouter)  

  module.exports = app