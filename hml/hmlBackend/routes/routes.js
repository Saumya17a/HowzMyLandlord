const { response } = require('express')
const express = require('express')
const { data } = require('jquery')
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

router.get('/signin', function (request,response) {
    // Retreive the emai and password from the request query 
    emailID = request.query.emailID
    password = request.query.password
    // Search Criteria 
    const tryUser = new signupTemplate()
    signupTemplate.find({'emailID' : emailID, 'password' : password})
    .then(data => 
    {
        if (data.length === 0) {
            response.json("Not a user")
            
        } else {
            response.json("Redirecting to dashboard")
        }
    })
    .catch(error => {response.json(error)})

})

router.get('/cleanup', function(request,response){
    signupTemplate.deleteMany({})
    .then(data => {
        console.log("Response for cleanup => " + data)
    })
})


module.exports = router