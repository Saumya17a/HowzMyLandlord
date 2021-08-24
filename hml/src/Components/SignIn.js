import React, { Component } from "react";
import Fade from "react-reveal";

class signin extends Component {
  render() {
    if (!this.props.data) return null;

    return (
      <section id="signin">
        <Fade duration={1000}>
          <div className="row">

            <div className="ten columns main-col">
              <h2>Sign In</h2>
              <div className="row">

              {/*
                Section - Sign In Form
                Description - This form asks for name, email id and password
              */}
              <form>
                  <label>
                Email ID:
                  <input type="text" name="Email ID" />
                </label>
                <label>
                Password:
                  <input type="text" name="Password" />
                </label>
                <input type="submit" value="Go" />
              </form>

              </div>
            </div>
          </div>
        </Fade>
      </section>
    );
  }
}

export default signin;
