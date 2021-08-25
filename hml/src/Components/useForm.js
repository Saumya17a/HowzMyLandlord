import {useState, useEffect} from 'react'



const useForm = () => {
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


    /*
    Description:    This function saves the user entered values in the signup form.
    */
    const update= e =>{
        const [name, value] = e.target
        setValues({
            ...values,
            [name]: value
        })
    }
    return{update, values};
}
export default useForm;