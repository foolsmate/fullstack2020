const User = require('../models/user')
const mongoose = require('mongoose')

const supertest = require('supertest')

const app = require('../app')
const bcrypt = require('bcrypt')

const api = supertest(app)

describe('when there is initially one user at db', () => {
  beforeEach(async () => {

    await User.deleteMany({})

  })

  test('creation succeeds with a fresh username', async () => {

    const response = await api.get('/api/users')

    const initialLength = response.body.length

    const newUser = {
      name: 'Test user',
      username: 'Test',
      password: 'salainen',
    }

    await api
      .post('/api/users')
      .send(newUser)
      .expect(200)
      .expect('Content-Type', /application\/json/)

    const res = await api.get('/api/users')
    console.log(res.body)
    expect(res.body).toHaveLength(initialLength + 1)
  })

  test('creation fails without username', async () => {
  
    const newUser = {
      name: 'Test user',
      password: 'salainen',
    }

    await api
      .post('/api/users')
      .send(newUser)
      .expect(400)
      .expect('Content-Type', /application\/json/)  
  })

  test('creation fails without password', async () => {
  
    const newUser = {
      username: 'Test'
    }

    await api
      .post('/api/users')
      .send(newUser)
      .expect(400)
      .expect('Content-Type', /application\/json/)
  })

})

afterAll(() => {
  mongoose.connection.close()
})