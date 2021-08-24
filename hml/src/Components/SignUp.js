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
                <input type="text" name="First Name" placeholder="Elon" />
                <label>
                  Last Name:
                </label>
                <input type="text" name="Last Name" placeholder="Musk"/>
                <label>
                Email ID:
                </label>
                <input type="email" name="Email ID" placeholder="xyz@gmail.com"/>
                <label>
                Password:
                </label>
                <input type="password" name="Password" placeholder="Do Not reveal" />
                <label>
                Confirm Password:
                </label>
                <input type="password" name="Confirm Password" placeholder="Do Not Reveal Again" />
                <button className="form-input-btn" type="submit" value="Submit" >
                Sign Up
                </button>
                <span className="form-input-login">
                  Already have an account? <a href="#signin">Login </a> 
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
