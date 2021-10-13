let socket = new WebSocket('ws://localhost:8080/');
// let socket = new WebSocket('wss://');

socket.addEventListener('open',(e)=>{
  socket.send('Hello Server!');
});

socket.addEventListener('message',(e)=>{
  console.log('Message from server', e.data);
});
