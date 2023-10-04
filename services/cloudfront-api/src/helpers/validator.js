const API_KEY = process.env.API_KEY

const validateRoute = (req) => {
    const requestApiKey = req.apiGateway.event.headers[`x-api-key`]

    return requestApiKey === API_KEY
}

module.exports = { validateRoute }