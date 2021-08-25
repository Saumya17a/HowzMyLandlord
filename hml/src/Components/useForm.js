import {useState, useEffect} from 'react'

const useForm = () => {
    /*
    this state object will store the sign-up information
    entered by the user. 
    1)  email:      email address of the user
    2)  password:   password user wants to set for the account
    2)  password2:  confirm password
    4)  fname:      first name
    5)  lname:      last name
    */
    const [values, setValues] = useState({
    emailID: '',
    password: '',
    password2: '',
    firstName: '',
    lastName: ''
    });

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