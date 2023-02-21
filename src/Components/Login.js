return (
    <div className="App">
      <header className="App-header">
        <h2>NutBagz</h2>
      </header>

      {!user ? (
              <div> 
              <h3>Login</h3>
      
              <div className="social-login">
      
              <div className="Twitter">
              <button className="social-button"><img src={twitter} className="robin" alt="Twitter" /></button> 
              </div>
      
              <div className="Facebook">
              <button onClick={!user} className="social-button"><img src={facebook} className="zuckie" alt="Facebook" /></button>
              </div>
      
              <div className="Google">
              <button onClick={!user} className="social-button"><img src={google} className="goog" alt="Google" /></button> 
              </div>   
                
              </div> 
      
            </div>
    ) : (
        <div className="homepage"> 
        <h2>My List</h2>
        <form>
          <ul>
            <li>I am a list, hear me roar.</li>
            <li>Rawr Rawr.</li>
          </ul>
        </form>
        <button onClick={setUser}>Logout</button>
        </div>)}

    </div>
  );
