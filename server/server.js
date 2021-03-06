const path = require('path')
const express = require('express')
const bodyParser = require('body-parser')

// const routeName = require('./route-path')

const server = express()

server.use(express.static(path.join(__dirname, 'public')))
server.use(bodyParser.json())

// these are the routes we have created
//server.use('/api/v1/apiname', routeName)

// Default route for non-API requests
// server.get('*', (req, res) => {
//   res.sendFile(path.join(__dirname, 'public/index.html'))
// })
