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
} from "react-router-dom";



function App(){

    return (
      <Router>
        <div>
          <Switch>
            <Route exact path="/">
              <Header />
              <About/>
              <SignIn/>
              <Footer/>
            </Route>
            <Route exact path="/Dashboard">
              <Dashboard/>
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }

export default App;
