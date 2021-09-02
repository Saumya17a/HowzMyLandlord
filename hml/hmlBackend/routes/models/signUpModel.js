const mongoose = require('mongoose')

// schema of signup database
const signUpTemplate = new mongoose.Schema({
    emailID: {
        type:String,
        required:true
    },
    password: {
        type:String,
        required:true
    },
    firstName: {
        type:String,
        required:true
    },
    lastName: {
        type:String,
        required:true
    },
    date: {
        type:Date,
        // defaults to today
        default:Date.name
    }
})

/*
    Table Name:     Users
    Description:    This DB stores information of users who complete signup process.
    Schema:         signUpTemplate
*/
module.exports = mongoose.model("Users", signUpTemplate)