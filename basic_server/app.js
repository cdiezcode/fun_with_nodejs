const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    const {url, method} = req;
    if (url === '/') {
        res.write('<html>');
        res.write('<head><title>Enter message</title></head>');
        res.write('<body>' +
            '<form action="/message" method="post">' +
            '<input type="text" name="message">' +
            '<button type="submit>">Send</button>' +
            '</form>' +
            '</body>');
        res.write('</html>');
        return res.end();
    }

    if (url === '/message' && method === 'POST') {
        const body = [];
        req.on('data', chunk => {
            console.log(chunk);
            body.push(chunk);
        });
        return req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            const message = parsedBody.split('=')[1];
            fs.appendFile('message.txt', message + '\n', error => {
                res.statusCode = 302;
                res.setHeader('Location', '/');
                return res.end();
            });
        });

    }
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>First NodeJS Page</title></head>');
    res.write('<body><h1>First NodeJS Header in Body</h1></body>');
    res.write('</html>');
    res.end();
});


server.listen(3000, () => {
    console.log("Server started on localhost:3000")
})