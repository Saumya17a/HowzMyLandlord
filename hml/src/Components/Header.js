import React, { Component } from "react";
import ParticlesBg from "particles-bg";
import Fade from "react-reveal";

class Header extends Component {
  render() {
    if (!this.props.data) return null;

    const project = this.props.data.project;
    const github = this.props.data.github;
    const name = this.props.data.name;
    const description = this.props.data.description;

    return (
      <header id="home">
        <ParticlesBg type="circle" bg={true} />

        <nav id="nav-wrap">
          <a className="mobile-btn" href="#nav-wrap" title="Show navigation">
            Show navigation
          </a>
          <a className="mobile-btn" href="#home" title="Hide navigation">
            Hide navigation
          </a>

          <ul id="nav" className="nav">
            <li className="current">
              <a className="smoothscroll" href="#home">
                Home
              </a>
            </li>

            <li>
              <a className="smoothscroll" href="#signup">
                Sign Up
              </a>
            </li>
            
            <li>
              <a className="smoothscroll" href="#signin">
                Sign In
              </a>
            </li>
          </ul>
        </nav>
          
          <div className="row banner">
            <div className="banner-text">
              <Fade bottom>
                <h1 className="responsive-headline">{name}</h1>
              </Fade>
              <Fade bottom duration={1200}>
                <h3>{description}.</h3>
              </Fade>
              <div className = "box">
              <input type="text"  class="searchTerm" placeholder="Ex: 3954 Dallas Road" />
              </div>
              <div className = "buttonSearch">
                <button type="submit" class="searchButton" className = "buttonSearch">
                <i class="fa fa-search"></i>
              </button>
              </div>
          </div>
        </div>
        <p className="scrolldown">
          <a className="smoothscroll" href="#signup">
            <i className="icon-down-circle"></i>
          </a>
        </p>
      </header>
    );
  }
}

export default Header;
