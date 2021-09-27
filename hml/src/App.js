import "./App.css";
import Header from "./Components/Header";
import SignIn from "./Components/SignIn";
import SignUp from "./Components/SignUp";
import { useCookies } from "react-cookie";

const App = () =>{

  // cookies to store user credentials
  const [credentials, setCredentials, removeCredentials] = useCookies([
    'flag',
    'firstName',
    'lastName',
    'emailID'
  ]);

  return (
    <div>
      <Header name = {'Howz My Landlord'} description = {'Have an address? Type it in'} credentials={credentials}/>
      {  credentials['flag'] !== 'true' &&
        <SignUp credentials={credentials} setCredentials={setCredentials}/> 
      }
      {  credentials['flag'] !== 'true' &&
        <SignIn credentials={credentials} setCredentials={setCredentials}/>
      } 
      </div>   
  )
}


export default App;
