const server = require('./server')

server.listen(process.env.PORT || 3000, err => {
    if(err) throw err
    console.log('Server running.')
})
