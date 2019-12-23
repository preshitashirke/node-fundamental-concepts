var logger = require('./logger');
const http = require('http');


const server = http.createServer((req, res)=>{
    if(req.url === '/'){
        res.write('hello world')
        res.end();
    }
});

server.on('connection',( socket )=> {
    console.log("listening on 3000...")
})
server.listen(3000);


function sayHello( name ){
    console.log('Hello '+ name);
}

sayHello('Preshita');

logger.log('hi logger')
