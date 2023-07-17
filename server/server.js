const path = require('path')
const express = require('express')

const flavours = require('./routes/flavours')
const cakeTypes = require('./routes/cakeTypes')

const server = express()

server.use(express.json())
server.use(express.static(path.join(__dirname, 'public')))

server.use('/api/v1/menu/flavours', flavours)
server.use('/api/v1/menu/cakeTypes', cakeTypes)

server.get('*', (req, res) => {
  res.sendFile(path.resolve('server/public/index.html'))
})

module.exports = server
