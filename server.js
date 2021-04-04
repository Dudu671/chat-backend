const WebSocketServer = require('websocket').server
const http = require('http')

const server = http.createServer()
server.listen(process.env.PORT || 1350)

const wsServer = new WebSocketServer({ httpServer: server })

wsServer.on('request', function (request) {
    const connection = request.accept(null, request.origin)

    connection.on('message', (message) => {
        let buf = new Buffer.from(message.utf8Data)
        wsServer.broadcast(new Array(buf))
    })
})

module.exports = http