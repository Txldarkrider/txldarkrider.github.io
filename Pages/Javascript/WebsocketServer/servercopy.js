const ws = require('ws');

const wss = new ws.WebSocketServer({ port: 3000 });

console.log("Server Started");

wss.on('connection', function connection(ws) {
  ws.on('message', function incoming(message) {
    console.log('received: %s', message);
  });

  ws.send('something');
});