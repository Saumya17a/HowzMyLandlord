import Fade from "react-reveal";
import useForm from "./useForm";
import validateSignIn from './validateSignIn.js';
import { unmountComponentAtNode, render } from "react-dom";
import {useState, useEffect} from 'react';

function SignIn() {
  const {update, values, logInForm, errors, getSigninFlag} = useForm(validateSignIn);
  
  const[signinFlag, setFlag] = useState(false)

  useEffect(()=>{
    setFlag(getSigninFlag())
    console.log("useEffect hit, flag set to " + signinFlag)
  })


  if(signinFlag === true){
    return(<div></div>)
  }
  else{
    return (
      <section id="signin">
        <Fade duration={1000}>
          <div className="row">
  
            <div className="ten columns main-col">
              <h2 class = "backspace1" >Sign In</h2>
              <div className="row">
  
              {/*
                Section - Sign In Form
                Description - This form asks for name, email id and password
              */}
              <form value="Submit" onSubmit={logInForm} className='form' noValidate>
                  <label>
                Email ID:
                <input type="email" name="emailID" placeholder="abc@yahoo.com" value={values.emailID} onChange={update} />
                {<p style={{ color: 'red' }}>{errors.emailID}</p>}
                </label>
                <label>
                Password:
                  <input type="password" name="password" placeholder="Do Not Reveal"value={values.password} onChange={update}/>
                  {<p style={{ color: 'red' }}>{errors.password}</p>}
                </label>
                <input type="submit" value="Go" />
                <span className="form-input-login">
                  &ensp;New to this website?. <a href="#signup">Sign Up </a> 
                </span>
              </form>
  
              </div>
            </div>
          </div>
        </Fade>
      </section>
    );
  }
    
};

export default SignIn;
