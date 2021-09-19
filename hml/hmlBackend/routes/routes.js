const { json } = require('express')
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

    // check to see emailID already exists
    signupTemplate.exists({'emailID' : signedUpUser.emailID})
    .then(userAlreadyExists => {
        // if response is false, then save the new user.
        if(userAlreadyExists===false){
            response.json({'successfullSignUp':true})
            //save successfully
            signedUpUser.save()
            .then(data=> {response.json(data)})
            // in case of erros return errors
            .catch(error => {response.json(error)})
            console.log("successfullSignUp set to true")
        }
        else{
            response.json({'userAlreadyExists':true, 'successfullSignUp':false})
            console.log("successfullSignUp set to false")
        }
    })
    .catch(error => {response.json(error)})
    
})

// Get Method Route for sign in
router.post('/signin', function (request,response) {
    // Retreive the emai and password from the request body
    emailID = request.body.emailID
    password = request.body.password
    // Search Criteria 
    const tryUser = new signupTemplate()
    // Find the user => query , projection
    signupTemplate.find({'emailID' : emailID, 'password' : password}, { 'password' : 0, '_id' : 0} )
    .then(data => 
    {
        if (data.length === 0) {
            const codeResponse = {'code' : '400'}
            response.json(codeResponse)
            
        } else {
            // Build Response 
            console.log('Data Response Type => ' + typeof(data) + ", Data Response Length => " + data.length, "Data => " + data )
            const codeResponse = {'code' : '200', 'body' : data }
            // Send Response
            response.json(codeResponse)
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