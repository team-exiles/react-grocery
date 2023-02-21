import facebook from "../img/facebook.png";
import google from "../img/google.png";
import twitter from "../img/twitter.png";

export function Login({ setUser }) {
  return (
    <>
      <h3>Login</h3>

      <div className="social-login">
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
