const mongoose = require('mongoose')
const supertest = require('supertest')
const app = require('../app')

const api = supertest(app)

test('0 likes if field likes is empty', async () => {

    const newBlog = {
        title: 'A test blog 5',
        author: 'Alan Turing',
        url: 'test.blog.io',
    }

    await api
        .post('/api/blogs')
        .send(newBlog)
        .expect(201)
        .expect('Content-Type', /application\/json/)

    const res = await api.get('/api/blogs')
    
    const contents = res.body

    expect(contents.find(blog => blog.title === newBlog.title).likes).toBeDefined()

    expect(contents.find(blog => blog.title === newBlog.title).likes === 0)
})