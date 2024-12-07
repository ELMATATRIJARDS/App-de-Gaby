const WebSocket = require('ws');

// Cambia el puerto a 8080
const wss = new WebSocket.Server({ port: 8080 });

wss.on('connection', (ws) => {
  console.log('Nuevo cliente conectado');

  ws.send('¡Bienvenido al servidor WebSocket!');

  ws.on('message', (message) => {
    console.log(`Mensaje recibido: ${message}`);
  });

  ws.on('close', () => {
    console.log('Cliente desconectado');
  });
});

console.log('Servidor WebSocket escuchando en ws://127.0.0.1:8080');
