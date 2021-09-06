const { response } = require('express')
const express = require('express')
const { data } = require('jquery')
const router = express.Router()
const signupTemplate = require('./models/signUpModel')
    

 // POST method route for sign-up
router.post('/signup', function (request, response) {

    const signedUpUser = new signupTemplate({
    firstName: request.body.firstName,
    lastName:  request.body.lastName,
    emailID:  request.body.emailID,
    password: request.body.password
    })

    // check to see emailID already exists
    signupTemplate.exists({'emailID' : signedUpUser.emailID})
    .then(userAlreadyExists => {
        // if response is false, then save the new user.
        if(userAlreadyExists===false){
            //save successfully
            signedUpUser.save()
            .then(data=> {response.json(data)})
            // in case of erros return errors
            .catch(error => {response.json(error)})
        }
    })
    .catch(error => {response.json(error)})
    
})

// Get Method Route for sign in
router.get('/signin', function (request,response) {
    // Retreive the emai and password from the request query 
    emailID = request.query.emailID
    password = request.query.password
    // Search Criteria 
    const tryUser = new signupTemplate()
    signupTemplate.find({'emailID' : emailID, 'password' : password})
    .then(data => {console.log("Response form database => " + data === '' )})
    .catch(error => {response.json(error)})

})


module.exports = router