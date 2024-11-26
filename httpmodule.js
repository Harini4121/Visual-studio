//1.Creates a server that listens on port 3000 and responds with "Hello, World!".

/*const http = require('http');
const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello, World!');
});
server.listen(8080, () => console.log('Server running on port 8080'));*/

//2.Sends a JSON response in json format

/*const http = require('http');
const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ message: 'Hello, JSON!' }));
});
server.listen(3000);*/

//3.Redirects the client to another URL.

/*const http = require('http');
const server = http.createServer((req, res) => {
    res.writeHead(200, { Location: 'https://example.com' });
    res.end();
});
server.listen(3000);*/

//4.Sends an HTML response.

/*const http = require('http');
const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end('<h1>Welcome</h1>');
});
server.listen(3030);*/

//5.Simulates a delayed response.

/*const http = require('http');
const server = http.createServer((req, res) => {
    setTimeout(() => {
        res.end('Delayed response');
    }, 5000);
});
server.listen(3030);*/









