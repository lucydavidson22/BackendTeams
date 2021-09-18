const fs = require('fs');

const requestHandler = (req, res) => {
    const url = req.url;
    const method = req.method;
    if (url === '/'){
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<head><title>Greetings Traveler!</title></head>');
        res.write('<body><p>You must give me a name if you are to proceed.</p><form action="/create-user" method="post" ><input type="text" name="username"><button type="submit">Send</button></form></body>');
        res.write('</html>');
        return res.end();
    }
    if (url === '/users'){
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<head><title>Greetings Traveler!</title></head>');
        res.write('<body><ul><li>Dummy User 1</li><li>Dummy User 2</li><li>Dummy User 3</li><li>Bilbo</li><li>Frodo</li><li>Sam</li></ul></body>');
        res.write('');
        res.write('</html>');
        return res.end();
    }
    if(url === '/create-user') {
        const body = [];
        req.on('data', chunk => {
            body.push(chunk);
        });
        req.on('end', () =>{
            const parsedBody = Buffer.concat(body).toString();
            console.log(parsedBody.split('=')[1]);
        });
        res.statusCode = 302;
        res.setHeader('Location' , '/users');
        res.end();
    }
}

module.exports = requestHandler;