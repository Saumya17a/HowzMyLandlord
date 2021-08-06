import React, { Component } from "react";
import Fade from "react-reveal";

class signup extends Component {
  render() {
    if (!this.props.data) return null;

    const name = this.props.data.name;
    const bio = this.props.data.bio;
    const street = this.props.data.address.street;
    const city = this.props.data.address.city;
    const state = this.props.data.address.state;
    const zip = this.props.data.address.zip;
    const phone = this.props.data.phone;
    const email = this.props.data.email;
    const resumeDownload = this.props.data.resumedownload;

    return (
      <section id="signup">
        <Fade duration={1000}>
          <div className="row">

            <div className="ten columns main-col">
              <h2>Sign Up</h2>
              <p>{bio}</p>
              <div className="row">

                <div className="columns download">
                  <p>
                    <a href={resumeDownload} className="button">
                      Sign Up
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Fade>
      </section>
    );
  }
}

export default signup;
