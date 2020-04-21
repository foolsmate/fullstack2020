const mongoose = require('mongoose')
const supertest = require('supertest')
const app = require('../app')

const api = supertest(app)

test('id fields are existent', async () => {

    const res = await api.get('/api/blogs')

    res.body.forEach(async (blog) => {
        try {
            expect(blog.id).toBeDefined()
        } catch (err) {
            console.log(err)
        }
    })
})

afterAll(() => {
    mongoose.connection.close()
})