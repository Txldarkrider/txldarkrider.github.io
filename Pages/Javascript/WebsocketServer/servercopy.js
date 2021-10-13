const ws = require('ws');

const wss = new ws.WebSocketServer({host:'192.168.0.18', port: 3000 });

console.log("Server Started");

wss.on('connection', function connection(ws) {
  ws.on('message', function incoming(message) {
    console.log('received: %s', message);
  });

  ws.send('something');
});