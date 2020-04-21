const mongoose = require('mongoose')
const supertest = require('supertest')
const app = require('../app')

const api = supertest(app)

test('Return 400 bad request when title & url are missing', async () => {
    
    const res = await api.get('/api/blogs')

    const initialLength = res.body.length

    const newBlog = {
        author: 'Alan Turing',
        likes: 2
    }
  
    await api
      .post('/api/blogs')
      .send(newBlog)
      .expect(400)
    
  })