const htpp = require('http');

const hostname = '127.0.0.1';
const port = 3000;


const server = htpp.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader =('Content-Type', 'text/plain');vvvvvvvvvv
    res.end('{ "mensaje": "Hola mundo desde un server Node.js" }');
});

server.listen(port, hostname, () => {
    console.log(`Servidor en ejecucion en http://${hostname}:${port}/`);
});