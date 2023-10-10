const serverless = require('serverless-http')
const express = require('express')

const app = express()

app.get('/path1', (req, res) => {
  res.send('GET PATH 1')
})

app.post('/path1', (req, res) => {
  res.send('POST PATH 1')
})

app.get('/path2', (req, res) => {
  res.send('GET PATH 2')
})

module.exports.handler = serverless(app)