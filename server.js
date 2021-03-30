const http = require('./src/http')

http.listen(3001, () => {
    console.log('Server running on port 3001')
})