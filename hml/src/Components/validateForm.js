import {useState, useEffect} from 'react'

/*
Description:    This function saves the user entered values in the signup form.
*/
function validateForm(values, emailAlreadyInUse){
    // dictionary containing all the erros
    let errors = {};

    if(!values.emailID.trim()){
        errors.emailID = "Email address cannot be empty";
    }
    else if(emailAlreadyInUse){
        errors.emailID = "Email address already in use";
    }
    if(!values.firstName.trim()){
        errors.firstName = "First Name cannot be empty";
    }
    if(!values.lastName.trim()){
        errors.lastName = "Last Name cannot be empty";
    }
    if(!values.password){
        errors.password = "Password cannot be empty";
    }
    else if(values.password.length < 8){
        errors.password = "Password must be have at least 8 characters";
    }
    if(!values.password2){
        errors.password = "Password cannot be empty";
    }
    else if(values.password2.length < 8){
        errors.password2 = "Password must be have at least 8 characters";
    }
    else if(values.password != values.password2){
        errors.password2 = "Passwords didn't match. Try Again"
    }

    return errors
}

export default validateForm;