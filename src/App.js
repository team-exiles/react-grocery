import './App.css';
import React from 'react'; 
import { Login } from './Components/Login'; 
import twitter from './twitter.png'; 
import facebook from './facebook.png';
import google from './google.png';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h2>NutBagz</h2>
      </header>
      <div>
        <h3 className="login-header">Login</h3>
      </div>
      <Login />

      <div className="social-login">
        <div className="Twitter">
        <button className="social-button"><img src={twitter} className="robin" alt="Twitter" /></button> 
        </div>
        <br/>

        <div className="Facebook">
        <button className="social-button"><img src={facebook} className="zuckie" alt="Facebook" /></button>
        </div>
        <br/>


        <div className="Google">
        <button className="social-button"><img src={google} className="goog" alt="Google" /></button> 
        </div>
      </div>

    </div>
  );
}

export default App;
