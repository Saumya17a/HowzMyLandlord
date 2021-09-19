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
import SignUp from "./Components/SignUp";

const App = () =>{
  return (
    <div>
     <Header name = {'Howz My Landlord'} description = {'Have an address? Type it in'}/>
     <SignUp/>
     <SignIn />
     </div>
        
  )
}


export default App;
