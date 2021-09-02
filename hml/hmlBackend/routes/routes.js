var express = require('express')
var router = express.Router()

// POST method route
router.post('/', function (request, response) {
    response.send('POST request to the homepage')
})

module.exports = router