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
                  <input type="text" name="First Name" />
                </label>
                <label>
                  Last Name:
                  <input type="text" name="Last Name" />
                </label>
                <label>
                Email ID:
                  <input type="text" name="Email ID" />
                </label>
                <label>
                Password:
                  <input type="text" name="Password" />
                </label>
                <label>
                Re-enter Password:
                  <input type="text" name="Re-enter Password" />
                </label>
                <input type="submit" value="Submit" />
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
