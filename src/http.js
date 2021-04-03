const app = require('express')()
const cors = require('cors')()
const http = require('http').createServer(app)
const io = require('socket.io')(http, {
    cors: {
        origin: "*",
        methods: ["GET", "POST"]
    }
})

app.use(cors)

io.on('connection', (socket) => {
    socket.on('user disconnected', (userInfo) => {
        io.emit('user disconnected', userInfo)
        console.log(userInfo)
    })
})

io.on('connection', (socket) => {
    socket.on('chat message', (msg) => {
        io.emit('chat message', msg)
    })
})

module.exports = http