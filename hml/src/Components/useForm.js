import {useState} from 'react';
import axios from 'axios';
import { useHistory } from "react-router-dom";

const useForm = (validateForm) => {
    /*
    Description:    this state object will store the sign-up information
                    entered by the user. 
    Parameters:                
    1)  email:      email address of the user
    2)  password:   password user wants to set for the account
    2)  password2:  confirm password
    4)  firstName:  first name
    5)  lastName:   last name
    */
    const [values, setValues] = useState({
    emailID: '',
    password: '',
    password2: '',
    firstName: '',
    lastName: ''
    });

    // this history hook will be used to redirect to Dashboard after successfull signin
    let history = useHistory();

    // get errors and its setter function
    // these will be used to display errors 
    // related to user input
    const [errors, setError] = useState({});

    /*
    Description:    This function saves the user entered values in the signup form.
    */
    const update= e =>{
        const {name, value} = e.target
        setValues({
            ...values,
            [name] : value
        });
    }

    /*
    Description:    This function saves the user entered values in the signup form.
    */
    const submitForm= e =>{
        e.preventDefault()

        // flag that checks whether emailID exists
        var emailAlreadyInUse = false;
        // send post request to hmlBackend server
        axios.post('http://localhost:4000/app/signup', values)
        .then(response => {
            // check response to see if emailID flag is returned
            emailAlreadyInUse = response.data['userAlreadyExists']
            // if any errors, save them
            setError(validateForm(values,emailAlreadyInUse));
        })
        console.log(emailAlreadyInUse)
    }
    const logInForm = e => {

        var authSuccess = true;
        e.preventDefault()

        //Send the email and password as query
        const queryURl = 'http://localhost:4000/app/signin'
        var signInCredentials = {'emailID' : values.emailID, 'password': values.password}
        
        // This will send the post request
        axios.post(queryURl, signInCredentials)
        .then(response => {
            console.log(response.data)
            if (response.data.code === '400') {
                console.log("Not a user => Redirect to Sign In")
                authSuccess = false;
                //If any errors, save them
                setError(validateForm(values,authSuccess));
            } 
            else if (response.data.code === '200'){
                const responseBody = response.data.body[0];
                //If any erros, save them
                setError(validateForm(values,authSuccess));
                // successfull signin now redirect to SignIn
                history.push("/Dashboard");
            }
        })
    }

    return{update, values, submitForm, logInForm, errors};
}
export default useForm;