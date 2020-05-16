const http = require('http');
const LogResponse = require('../decorators/log-response.decorator');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  const requestHandler = new RequestHandler(req, res);
  if (req.url === '/users/1') {
    requestHandler.send({id: '1', email: 'user1@example.com', profile: { nickname: 'User 1', pictureURL: 'https://picsum.photos/200' }})
  } else {
    requestHandler.send({id: 'x', email: 'user1@example.com'})
  }
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

class RequestHandler {  
  constructor(req, res) {
    this.req = req;
    this.res = res;
  }
  
  @LogResponse
  send(payload) {
    this.res.statusCode = 200;
    this.res.setHeader('Content-Type', 'application/json');
    this.res.end(JSON.stringify(payload));
  }
}