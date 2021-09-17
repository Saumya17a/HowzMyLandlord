import React, { Component } from "react";
import ReactGA from "react-ga";
import $ from "jquery";
import "./App.css";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import About from "./Components/SignUp";
import SignIn from "./Components/SignIn";
import Dashboard from "Components/Dashboard";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      foo: "bar",
      resumeData: {}
    };
    ReactGA.initialize("UA-110570651-1");
    ReactGA.pageview(window.location.pathname);
  }

  getResumeData() {
    $.ajax({
      url: "./resumeData.json",
      dataType: "json",
      cache: false,
      success: function(data) {
        this.setState({ resumeData: data });
      }.bind(this),
      error: function(xhr, status, err) {
        console.log(err);
        alert(err);
      }
    });
  }

  componentDidMount() {
    this.getResumeData();
  }

  render() {
    return (
      <Router>
        <div className="App">
          <Switch>
            <Route exact path="/">
              <Header data={this.state.resumeData.main} />
              <About data={this.state.resumeData.main} />
              <SignIn data={this.state.resumeData.resume} />
              <Footer data={this.state.resumeData.main} />
            </Route>
            <Route exact path="/Dashboard">
              <Dashboard/>
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;