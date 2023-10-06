const validator = require('../helpers/validator')
const customLogger = require('../helpers/custom-logger')
const constants = require('../helpers/constants')

const get = (req, res) => {
  if (!validator.validateRoute(req)) {
    customLogger.error(req, constants.invalidApiKeyMessage)
    res.status(403).send(constants.forbiddenMessage)
  }

  const queryParams = req.query

  customLogger.info(req, queryParams)
  res.status(200).send(constants.successMessage)
}

module.exports = { get }