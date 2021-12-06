const PORT = 8000;
const webSocketServer = require('websocket').server;
const http = require('http');

const server = http.createServer();
server.listen(PORT);
console.log('server listening on port 8000');

const wsServer = new webSocketServer({
    httpServer : server
})

const clients = {};

const getUniqueUserID = () =>{
    const m4 = () => Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
    return m4() + m4() + '-' + m4();
}

wsServer.on('request',  function (request) {
    var userID= getUniqueUserID();
    console.log((new Date())+ ' received a new connection from origin ' + request.origin + '.');

    const connection = request.accept(null, request.origin);
    clients[userID] = connection;
    console.log('connnected: '+ userID + ' in '+ Object.getOwnPropertyNames(clients));

    connection.on('message'), function (message) {
        if(message.type === 'utf8') {
            console.log('received message: ', message.utf8Data);
        }

        for(key in clients) {  
            clients[key].sendUTF(message.utf8Data);
            console.log('sent message to: ', clients[key])}
    }

});