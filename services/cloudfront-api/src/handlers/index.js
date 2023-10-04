const serverless = require('serverless-http')
const express = require('express')
const validator = require('../helpers/validator')
const customLogger = require('../helpers/custom-logger')

const app = express()

app.get('/path1', (req, res) => {
    if (!validator.validateRoute(req)) {
        customLogger.error(req, 'Invalid Api Key')
        res.status(400).send('Invalid Routing')
    }

    customLogger.log(req, 'GET PATH 1')
    res.status(200).send('GET PATH 1')
})

app.post('/path1', (req, res) => {
    res.send('POST PATH 1')
})

app.get('/path2', (req, res) => {
    res.send('GET PATH 2')
})

module.exports.handler = serverless(app)