const http = require('http');

const server = http.createServer((req, res) => {
    console.log('run request.......');
    res.setHeader('Content-Type', 'text/html');
    res.write('<h2>First testing with NodeJS </h2>');
    res.end();
})

server.listen(3000, 'localhost', () => {
    console.log('Running with port localhost: 3000');
})