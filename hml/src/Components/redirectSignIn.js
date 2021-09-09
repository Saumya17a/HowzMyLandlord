import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function RedirectSignIn(){
    return (
    <Router>
        <Route path="\signin">
        </Route >
    </Router>
    )
}
export default RedirectSignIn