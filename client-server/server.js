const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json');
  if (req.method === "GET") {
    if (req.url === "/users/1") {
      res.end(JSON.stringify({id: '1', email: 'user1@example.com', profile: { nickname: 'User 1', pictureURL: 'https://picsum.photos/200' }}));
    } else {
      res.end(JSON.stringify({id: '2', email: 'user1@example.com'}));
    }
  }
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});