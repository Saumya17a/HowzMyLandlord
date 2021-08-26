import {useState, useEffect} from 'react'

/*
Description:    This function saves the user entered values in the signup form.
*/
const validateForm=(values)=>{
    // dictionary containing all the erros
    let errors = {};

    if(!values.emailID){
        errors.userName = "Email address cannot be empty";
    }
    if(!values.firstName){
        errors.firstName = "First Name cannot be empty";
    }
    if(!values.lastName){
        errors.lastName = "Last Name cannot be empty";
    }
    if(!values.password){
        errors.password = "Password cannot be empty";
    }
    else if(values.password.length < 8){
        errors.userName = "Password must be have at least 8 characters";
    }
    if(!values.password2){
        errors.password = "Password cannot be empty";
    }
    else if(values.password2.length < 8){
        errors.userName = "Password must be have at least 8 characters";
    }
    if(values.password != values.password2){
        errors.password = "Passwords didn't match. Try Again"
    }

}

export default validateForm;