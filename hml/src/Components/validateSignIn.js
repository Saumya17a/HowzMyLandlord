import {useState, useEffect} from 'react'

/*
Description:    This function saves the user entered values in the signup form.
*/
function validateSignIn(values){
    // dictionary containing all the erros
    let errors = {};

    if(!values.emailID.trim()){
        errors.emailID = "Email address cannot be empty";
    }
    if(!values.emailID.includes("@")){
        errors.emailID = "Email should have an @";
    }
    if(!values.password.trim()){
        errors.password = "Password field cannot be empty";
    }
    return errors
}

export default validateSignIn;