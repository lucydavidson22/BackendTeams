const http = require('http');

const routes = require('./routes/pr01');

const server = http.createServer(routes);

server.listen(3000);        //3000 sometimes shows a message that it is already in use, 
                            //but it seems to be doing okay so far with this project. 
