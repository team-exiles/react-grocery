import './App.css';
import { useState } from 'react'; 
import twitter from './twitter.png'; 
import facebook from './facebook.png';
import google from './google.png';

function App() {

  const [user, setUser] = useState(false)

  return (
    <div className="App">

      {!user ? (
              <div> 
              <h3>Login</h3>
      
              <div className="social-login">
      
              <div className="Twitter">
              <button onClick={setUser} className="social-button"><img src={twitter} className="robin" alt="Twitter" /></button> 
              </div>
      
              <div className="Facebook">
              <button onClick={setUser} className="social-button"><img src={facebook} className="zuckie" alt="Facebook" /></button>
              </div>
      
              <div className="Google">
              <button onClick={setUser} className="social-button"><img src={google} className="goog" alt="Google" /></button> 
              </div>   
                
              </div> 
      
            </div>
    ) : (

        <section className="homepage"> 
        <div className="logged-in-user">
          <h2> Username </h2>
          <h3> Email </h3>
        </div>

        <div className="active-lists">
          <h2>Here are my active lists</h2>
          <p>List 1</p>
          <p>List 2</p>
          <p>List 3</p>
        </div>

          <div className="action-buttons">
            <button className="Make-New-Folder"></button>
            <button className="Make-New-List"></button>
            <button className="Start-Shopping"></button>
          </div>

          <div className="folders">
            <button className="recipes-folder">Recipes</button>
            <button className="archived-folder">Archived</button>
          </div>
        </section>)}
    </div>
  );
}




export default App;
