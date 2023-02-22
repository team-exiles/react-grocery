import facebook from "../img/facebook.png";
import google from "../img/google.png";
import twitter from "../img/twitter.png";

export function Login({ setUser }) {


  return (
    <>
      <div className="login-field">
      <h3>Login</h3>
      <div className="username">
        <input className="input" type="text" placeholder="username" 
        /* onChange={(e) => setUsername(e.target.value)} */ />
      </div>

      <div className="password">
        <input className="input" type="password" placeholder="password" />
      </div>
      <button onClick={setUser}>Login</button>
      </div>

      <div className="social-login">
        <h4>Or...</h4>
        <h3>Login With Your Social Medias</h3>
        <div className="Twitter">
          <button onClick={setUser} className="social-button">
            <img src={twitter} className="robin" alt="Twitter" />
          </button>
        </div>

        <div className="Facebook">
          <button onClick={setUser} className="social-button">
            <img src={facebook} className="zuckie" alt="Facebook" />
          </button>
        </div>

        <div className="Google">
          <button onClick={setUser} className="social-button">
            <img src={google} className="goog" alt="Google" />
          </button>
        </div>
      </div>
    </>
  );
}
