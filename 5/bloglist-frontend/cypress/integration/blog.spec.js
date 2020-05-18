describe('Blog app', function () {
  beforeEach(function () {
    cy.request('POST', 'http://localhost:3001/api/testing/reset')
    const user = {
      name: 'Test user',
      username: 'test',
      password: 'secret'
    }
    cy.request('POST', 'http://localhost:3001/api/users/', user)
    cy.visit('http://localhost:3000')
  })

  it('Login from is shown', function () {
    cy.contains('username')
    cy.contains('password')
    cy.contains('login').click()
  })

  describe('Login', function () {
    it('succeeds with correct credentials', function () {
      cy.contains('login').click()
      cy.get('#username').type('test')
      cy.get('#password').type('secret')
      cy.get('#login-button').click()

      cy.contains('Test user logged in')
    })

    it('fails with wrong credentials', function () {
      cy.contains('login').click()
      cy.get('#username').type('test')
      cy.get('#password').type('wrong')
      cy.get('#login-button').click()
    })
  })

  describe('when logged in', function () {
    beforeEach(function () {
      cy.contains('login').click()
      cy.get('#username').type('test')
      cy.get('#password').type('secret')
      cy.get('#login-button').click()
    })

    it('a new blog can be created', function () {
      cy.contains('new blog').click()
      cy.get('input:first').type('A new blog')
      cy.get('#author').type('Test man')
      cy.get('input:last').type('http://blog.io')
      cy.get('#submit-button').click()

      cy.contains('A new blog Test man')
      cy.contains('view').click()
      cy.contains('A new blog Test man')
      cy.contains('http://blog.io')
      cy.contains('likes 0')
    })

    it('Liking a blog works', function () {
      cy.contains('new blog').click()
      cy.get('input:first').type('A new blog')
      cy.get('#author').type('Test man')
      cy.get('input:last').type('http://blog.io')
      cy.get('#submit-button').click()

      cy.contains('A new blog Test man')
      cy.contains('view').click()
      cy.contains('like').click()
      cy.visit('http://localhost:3000')
      cy.contains('view').click()
      cy.contains('likes 1')
    })

    it.only('Blogs are correctly ordered', function () {
      cy.contains('new blog').click()

      cy.get('input:first').type('A new blog')
      cy.get('#author').type('Test man')
      cy.get('input:last').type('http://blog.io')
      cy.get('#submit-button').click()

      cy.visit('http://localhost:3000')

      cy.contains('new blog').click()
      cy.get('input:first').type('A new blog 2')
      cy.get('#author').type('Test man 2 ')
      cy.get('input:last').type('http://blog.ws')

      cy.get('#submit-button').click()

      cy.visit('http://localhost:3000')

      cy.contains('view').click()
      cy.contains('like').click()

      cy.visit('http://localhost:3000')

      cy.contains('view').click()
      cy.contains('view').click()

      cy.get('.blog').then(b => {
        cy.wrap(b[0]).contains('likes 1')
        cy.wrap(b[1]).contains('likes 0')
      })

    })
  })



})