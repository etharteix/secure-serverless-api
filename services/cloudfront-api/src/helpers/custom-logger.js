const buildLogInfo = (req, message) => {
  const requestContext = req.requestContext
  const method = requestContext.http.method
  const path = requestContext.http.path
  const requestId = requestContext.requestId

  return {
    method,
    path,
    requestId,
    message
  }
}

const info = (req, message) => {
  const logInfo = buildLogInfo(req, message)
  console.info(logInfo)
}

const error = (req, message) => {
  const logInfo = buildLogInfo(req, message)
  console.error(logInfo)
}

module.exports = { info, error }