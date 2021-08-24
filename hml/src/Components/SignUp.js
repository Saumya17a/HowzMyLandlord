import React, { Component } from "react";
import Fade from "react-reveal";

class signup extends Component {
  render() {
    if (!this.props.data) return null;

    return (
      <section id="signup">
        <Fade duration={1000}>
          <div className="row">

            <div className="ten columns main-col">
              <h2>Sign Up</h2>
              <div className="row">

              {/*
                Section - Sign Up Form
                Description - This form asks for name, email id and password
              */}
              <form>
                <label>
                  First Name:
                </label>
                <input type="text" name="First Name" placeholder="Enter first name." />
                <label>
                  Last Name:
                </label>
                <input type="text" name="Last Name" placeholder="Enter last name."/>
                <label>
                Email ID:
                </label>
                <input type="text" name="Email ID" placeholder="Enter email address."/>
                <label>
                Password:
                </label>
                <input type="password" name="Password" placeholder="Enter Password." />
                <label>
                Confirm Password:
                </label>
                <input type="password" name="Confirm Password" placeholder="Confirm Password." />
                <button className="form-input-btn" type="submit" value="Submit" >
                Sign Up
                </button>
                <span className="form-input-login">
                  Already have an account? <a href="#">Login </a> 
                </span>
              </form>
              </div>
            </div>
          </div>
        </Fade>
      </section>
    );
  }
}

export default signup;
