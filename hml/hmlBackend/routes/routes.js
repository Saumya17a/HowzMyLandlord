const { response } = require('express')
const express = require('express')
const router = express.Router()
const signupTemplate = require('./models/signUpModel')

// POST method route
router.post('/signup', function (request, response) {
        const signedUpUser = new signupTemplate({
        firstName: request.body.firstName,
        lastName:  request.body.lastName,
        emailID:  request.body.emailID,
        password: request.body.password

    })
    //save successfully
    signedUpUser.save()
    .then(data=> {response.json(data)})
    // in case of erros return errors
    .catch(error => {response.json(error)})
})


module.exports = router