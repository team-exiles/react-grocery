import './App.css';
import { Homepage } from './components/Homepage2';
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
    ) : <Homepage/>
    
}
</div>)
}
export default App;
