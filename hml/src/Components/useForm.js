import {useState, useEffect} from 'react'
import axios from 'axios'

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
        // if any errors, save them
        setError(validateForm(values));
        // send post request to hmlBackend server
        axios.post('http://localhost:4000/app/signup', values)
        .then(response => console.log(response.data))
    }
    return{update, values, submitForm, errors};
}
export default useForm;