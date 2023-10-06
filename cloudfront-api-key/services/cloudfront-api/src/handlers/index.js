const serverless = require('serverless-http')
const express = require('express')

const validator = require('../helpers/validator')
const customLogger = require('../helpers/custom-logger')
const constants = require('../helpers/constants')

const path2 = require('../routes/path2')

const app = express()

app.get('/path1', (req, res) => {
  const queryParams = req.query

  customLogger.info(req, queryParams)
  res.status(200).send(constants.successMessage)
})

app.post('/path1', (req, res) => {
  if (!validator.validateRoute(req)) {
    customLogger.error(req, constants.invalidApiKeyMessage)
    res.status(403).send(constants.forbiddenMessage)
  }

  const body = JSON.parse(req.apiGateway.event.body)

  customLogger.info(req, body)
  res.status(200).send(constants.successMessage)
})

app.get('/path2', path2.get)

module.exports.handler = serverless(app)