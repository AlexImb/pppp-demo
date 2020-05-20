const {DebugLogger, LoggerV1} = require('../oo-logger/logger');

const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  const requestHandler = new RequestHandler(req, res);
  if (req.url === '/users/1') {
    requestHandler.loggedSend({id: '1', email: 'user1@example.com', profile: { nickname: 'User 1', pictureURL: 'https://picsum.photos/200' }})
  } else {
    requestHandler.loggedSend({id: 'x', email: 'user1@example.com'})
  }
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

class RequestHandler {  
  constructor(req, res) {
    this.req = req;
    this.res = res;
    this.logger = new LoggerV1(new DebugLogger())
  }
  

  loggedSend(payload) {
    this.logger.callLogResponse(this.send, [payload], this);
  }

  send(payload) {
    this.res.statusCode = 200;
    this.res.setHeader('Content-Type', 'application/json');
    this.res.end(JSON.stringify(payload));
  }
}