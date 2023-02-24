import { requestLogin } from "./Requests";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import facebook from "../img/facebook.png";
import google from "../img/google.png";
import twitter from "../img/twitter.png";

export const Login = ({ setUser }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate("");  

  const handleLogin = (event) => {
    event.preventDefault();
    requestLogin(username, password).then((res) => {
      const token = res.data.auth_token;
      console.log(token);
      setUser(token, username)
      navigate("/Homepage"); 
    });
  };

  return (
    <>
      <div className="login-field">
        <h1>Log In</h1>
        <div className="username">
          <input
            className="login-input"
            type="login-input"
            placeholder=" Username:"
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>

        <div className="password">
          <input
            className="input"
            type="password"
            placeholder="  Password:"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button onClick={handleLogin} className="login-button"><strong>Log In</strong></button>
        <br/>
        <button><Link to="/Register">New User? Register Here:</Link></button>
      </div>

      {/* <div className="social-login">
        <h4>Or...</h4>
        <h3>Login With Your Social Medias</h3>
        <div className="twitter-wrapper">
          <button onClick={setUser} className="social-button">
            <img src={twitter} className="twitter-image" alt="Twitter" />
          </button>
        </div>

        <div className="Facebook">
          <button onClick={setUser} className="social-button">
            <img src={facebook} className="facebook-image" alt="Facebook" />
          </button>
        </div>

        <div className="Google">
          <button onClick={setUser} className="social-button">
            <img src={google} className="google-image" alt="Google" />
          </button>
        </div>
      </div> */}
    </>
  );
};
