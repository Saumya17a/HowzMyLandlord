import React from 'react';
import Fade from "react-reveal";
import useForm from "./useForm";

function SignUp() {
  const {update, values, submitForm} = useForm();
  {/*
    Section - Sign Up Form
    Description - This form asks for name, email id and password
  */}
  return (
    <section id="signup">
      <Fade duration={1000}>
        <div className="row">
          <div className="ten columns main-col">
            <hr />
            <h2 class = "backpspace">Sign Up</h2>
          <div className="row">
            <form>
              <label>
                First Name:
              </label>
              <input type="text" name="firstName" placeholder="Elon" />
              value={values.firstName}
              onChange={update}
              <label>
                Last Name:
              </label>
              <input type="text" name="lastName" placeholder="Musk"value={values.lastName} onChange={update}/>
              <label>
              Email ID:
              </label>
              <input type="email" name="emailID" placeholder="xyz@gmail.com" value={values.emailID} onChange={update}/>
              <label>
              Password:
              </label>
              <input type="password" name="password" placeholder="Do Not reveal" value={values.password} onChange={update}/>
              <label>
              Confirm Password:
              </label>
              <input type="password" name="password2" placeholder="Do Not Reveal Again" value={values.password2} onChange={update}/>
              <button className="form-input-btn" type="submit" value="Submit" onSubmit={submitForm}>
              Sign Up
              </button>
              <span className="form-input-login">
                &ensp;Already have an account? <a href="#signin">Login </a> 
              </span>
            </form>
            </div>
          </div>
        </div>
      </Fade>
    </section>
  );
};
export default SignUp;
