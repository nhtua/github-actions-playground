const LISTENING_PORT = 8000
const http = require("node:http")
const server = http.createServer((req, res) => {
  let msg = ""
  if (req.url == '/ping') {
    msg = "pong!"
  }
  res.end(msg);
});
server.on('clientError', (err, socket) => {
  socket.end('HTTP/1.1 400 Bad Request\r\n\r\n');
});
console.log(`Server start ${LISTENING_PORT}`)
server.listen(LISTENING_PORT);
