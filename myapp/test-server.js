// https://nodejs.org/en/docs/guides/anatomy-of-an-http-transaction/
// all streams are instances of EventEmitter
const http = require('http');
const port = 3000;

// const server = http.createServer(requestHandler).listen(port);

// called once for every request

// request - readable stream
// response - writable stream
// function requestHandler(request, response) {
//     const { method, url } = request;
//     const userAgent = headers['user-agent'];

//     let body = [];
//     request
//         .on('data', chunk => body.push())
//         .on('end', () => (body = Buffer.concat(body).toString()));
// }

// const server = http.createServer();
// server.on('request', (request, response) => {});

// with streams
// http.createServer((request, response) => {
//     request.on('error', err => {
//         console.error(err);
//         response.statusCode = 400;
//         response.end();
//     });
//     response.on('error', err => {
//         console.error(err);
//     });
//     request.pipe(response);
// }).listen(port);

// using data
http.createServer((request, response) => {
    let body = [];
    request
        .on('data', chunk => {
            body.push(chunk);
        })
        .on('end', () => {
            body = Buffer.concat(body).toString();
            console.log(body);
            response.end(body);
        });
}).listen(port);
