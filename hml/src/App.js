import React, { Component, useState } from "react";
import "./App.css";
import Header from "./Components/Header";
import SignIn from "./Components/SignIn";
import SignUp from "./Components/SignUp";


const App = () =>{

  // this flag tracks whehter user is signed in or not
  const [signInFlag, setSignInFlag] = useState(false);

  // this flag tracks whehter user is signed in or not
  const [signUpFlag, setSignUpFlag] = useState(false);
  
  if(signInFlag === true || signUpFlag === true){
    return (
      <div>
       <Header name = {'Howz My Landlord'} description = {'Have an address? Type it in'}/>
       </div>
          
    )
  }
  else{
    return (
      <div>
       <Header name = {'Howz My Landlord'} description = {'Have an address? Type it in'}/>
       <SignUp/>
       <SignIn signinFlag= {signInFlag}  setFlag={setSignInFlag}/>
       </div>
          
    )
  }
}


export default App;
