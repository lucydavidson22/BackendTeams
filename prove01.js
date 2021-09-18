const http = require('http');

const routes = require('./prove01-routes');

const server = http.createServer(routes);

server.listen(3000);        //3000 sometimes shows a message that it is already in use, 
                            //but it seems to be doing okay so far with this project. 
