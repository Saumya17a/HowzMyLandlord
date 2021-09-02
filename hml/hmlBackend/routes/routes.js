const { response } = require('express')
var express = require('express')
var router = express.Router()
const signupTemplate = require('models/signUpModels')

// POST method route
router.post('/SignUp', function (request, response) {
    const signedUpUSer = new signupTemplate({
        firstName: requrest.body.firstNmae,
        lastName:  requrest.body.lastName,
        emailID:  requrest.body.emailID,
        password: requrest.body.password

    })
})

// save succesfull 
signedUpUSer.save().then(data=> {response.json(data)})
// in case of erros return errors
.catch(error => {response.json(error)})

module.exports = router