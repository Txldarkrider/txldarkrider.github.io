// let socket = new WebSocket('wss://76.190.183.136:3000');
let socket = new WebSocket('wss://txldarkrider.github.io/Pages/Javascript/WebsocketTest/index.html:3000');

socket.addEventListener('open',(e)=>{
  socket.send('Hello Server!');
});

socket.addEventListener('message',(e)=>{
  console.log('Message from server', e.data);
});
