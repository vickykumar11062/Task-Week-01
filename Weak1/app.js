// server.js
const http = require('http');
const port = 8000;

const server = http.createServer((req, res) => {
  res.writeHead(200);
  res.write('Hello, World!');
  res.end();
});

server.listen(port, (error) => {
  if (error) {
    console.error('Something went wrong:', error);
  } else {
    console.log(`Server is running on port: ${port}`);
  }
})
