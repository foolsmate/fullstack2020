const app = require('./app') // varsinainen Express-sovellus
const http = require('http')

const server = http.createServer(app)

const PORT = 3003

server.listen(3003, () => {
  console.log(`Server running on port ${PORT}`)
})
