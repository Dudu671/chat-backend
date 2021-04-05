const WebSocketServer = require('websocket').server
const http = require('http')

const server = http.createServer()
server.listen(process.env.PORT || 1350)

const wsServer = new WebSocketServer({ httpServer: server })

wsServer.on('request', function (request) {
    const connection = request.accept(null, request.origin)

    connection.on('message', (message) => {
        wsServer.broadcast(message.utf8Data)
    })
})

module.exports = http