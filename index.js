const http = require('http')
const server = http.createServer((req, res) => {
  res.statusCode = 200
  res.setHeader('Content-Type', 'text/plain')
  
  if(req.url === '/') {
    res.write('Root page url')
  } else {
    res.write('Hello world')
  }
  res.end()
})

server.listen(3000, () => {
  console.log('Server running at http://localhost:3000/')
})
