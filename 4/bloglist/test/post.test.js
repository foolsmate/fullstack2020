const mongoose = require('mongoose')
const supertest = require('supertest')
const app = require('../app')

const api = supertest(app)

test('Adding notes works', async () => {
    
    const res = await api.get('/api/blogs')

    const initialLength = res.body.length

    const newBlog = {
        title: 'A test blog',
        author: 'Alan Turing',
        url: 'test.blog.io',
        likes: 2
    }
  
    await api
      .post('/api/blogs')
      .send(newBlog)
      .expect(201)
      .expect('Content-Type', /application\/json/)
  
    const response = await api.get('/api/blogs')
  
    const contents = response.body.map(r => r.title)
  
    expect(response.body).toHaveLength(initialLength + 1)
    expect(contents).toContain(
      'A test blog'
    )
  })