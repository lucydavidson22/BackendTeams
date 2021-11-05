const fs = require('fs');

const users = ['Dummy User 1', 'Dummy User 2', 'Dummy User 3', 'Bilbo', 'Frodo', 'Sam'];
const requestHandler = (req, res) => {
    const url = req.url;
    const method = req.method;
    if (url === '/'){
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<head><title>Greetings Traveler!</title></head>');
        res.write('<body>');
        // res.write('<h1>Greetings Weary Traveler!</h1>');
        res.write('<h1>You Shall Not Pass!</h1>');
        res.write('<h3>Unless you give me your name.</h3>');
        res.write('<p>Then I guess it would be okay.</p>');
        res.write('<form action="/create-user" method="post"><input type="text" name="username" placeholder="Travelers Name"><button type="submit">Send</button></form>');
        return res.end();
    }
    if (url === '/users'){
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<head><title>Greetings Traveler!</title></head>');
        
        res.write('<body>');
        res.write(`<h1 id="id1">Welcome Traveler ${users.slice(-1)}!!</h1>`);
        res.write('<h2>A list of other travelers that have passed through these parts.</h2>');
        res.write('<ul>');
        for (const names of users) {
            res.write(`<li>${names}</li>`);
        }
        res.write('</ul>');
        res.write(`<button type="button", onclick="document.getElementById('id1').style.color = 'red'">Click Me!</button>`);
        res.write('</body>');

        res.write('</html>');
        return res.end();
    }
    if(url === '/create-user') {
        const body = [];
            req.on('data', chunk => {
            body.push(chunk);
        });
        req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            console.log(parsedBody.split('=')[1]); // username=whatever-the-user-entered
        });
        res.statusCode = 302;
        res.setHeader('Location', '/');
        res.end();
  }
}
module.exports = requestHandler;