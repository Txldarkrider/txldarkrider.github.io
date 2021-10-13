let socket = new WebSocket('ws://192.168.0.18:3000/');
// let socket = new WebSocket('wss://');

// Connection opened
socket.addEventListener('open', function (event) {
    socket.send('Hello Server!');
});

// Listen for messages
socket.addEventListener('message', function (event) {
    console.log('Message from server ', event.data);
});